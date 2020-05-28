// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const clientConfig = require('./client-config')
const urlResolver = require('./utils/urlResolver')
const { generatePagesForContentList } = require('./utils/contentBuilding')
const {getExcerptFromContent} = require("./utils/portableText")
const fs = require('fs')

require.extensions['.graphql'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

const dayjs = require('dayjs')

function sanitizeData(data) {
   const newData = {
    ...data,
    pages: data.info.edges.map(({node}) => ({
      ...node,
      content: {
        ...node.content,
        plainTextExcerpt: getExcerptFromContent(node.content, 300),
        publishedAt: node.content.publishedAt ? new Date(node.content.publishedAt) : null,
        nicePublishedAt: node.content.publishedAt ? dayjs(node.content.publishedAt).format("dddd, D MMMM 'YY") : null
      },
      _url: urlResolver(node, data.settings)
    }))
  }
  delete newData.info
  return newData
}

module.exports = function(api) {

  api.loadSource(({ addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('sanityOptions', clientConfig.sanity)
  })

  api.createPages(async ({ graphql, createPage }) => {
    const result = await graphql(require('./src/schemas/allContent.graphql'))
    const data = sanitizeData(result.data)
    const homepagesByCategory = {}
    const pagesByCategory = {}

    const localCreate = (page, pagePath, additionalContext) => createPage({
      path: pagePath,
      component: './src/templates/Content.vue',
      context: {
        settings: data.settings,
        id: page.id,
        metadata: data.metadata,
        ...page.content,
        publishedAt: page.content.publishedAt ? new Date(page.content.publishedAt) : null,
        ...additionalContext,
      },
    })


    // Organise all pages into groups for processing, create pages with no category assigned
    data.pages.forEach(node => {
      const mainCategory = node.content.mainCategory

      if (!mainCategory) {
        localCreate(node, urlResolver(node, data.settings))
      } else if (mainCategory.homepage && mainCategory.homepage.id === node.id) {
        homepagesByCategory[mainCategory.id] = node
      } else {
        if (!pagesByCategory[mainCategory.id]) {
          pagesByCategory[mainCategory.id] = []
        }
        pagesByCategory[mainCategory.id].push(node)
      }
    })

    // Create all pages flagged as homepages
    Object.entries(homepagesByCategory).forEach(([categoryId, node]) => {
      const path = urlResolver(node, data.settings)
      const contentLists = node.content.contentBlocks.filter(
          b => b._type === 'contentList',
      )

      if (contentLists.length === 0) {
        localCreate(node, path, {})
        return
      }

      homepagesByCategory[categoryId].partOfContentList = true
      generatePagesForContentList(node, contentLists[0], pagesByCategory[contentLists[0].filterCategory.id], path, localCreate)
    })

    // Create all pages assigned to a category
    Object.entries(pagesByCategory).forEach(([categoryId, pages]) => pages.forEach((page, index) => {
      const path = urlResolver(page, data.settings)
      const context = {}

      const createNavData = (navToPage) => ({
        title: navToPage.content.title,
        url: urlResolver(navToPage, data.settings),
      })

      if (homepagesByCategory[categoryId].partOfContentList) {
        context.previousPage = index > 0 ? createNavData(pages[index - 1]) : null
        context.nextPage = index + 1 !== pages.length ? createNavData(pages[index + 1]) : null
      }

      localCreate(page, path, context)
    }))
  })
}
