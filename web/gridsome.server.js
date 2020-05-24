// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')
const urlResolver = require('./utils/urlResolver')
var fs = require('fs')

require.extensions['.gql'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

const getPagesByCategoryId = (nodes, categoryId) => nodes
    .filter(
        ({ node }) =>
            node.content.mainCategory &&
            node.content.mainCategory.id === categoryId &&
            node.content.mainCategory.homepage.id !== node.id,
    )
    .map(({ node }) => node)

module.exports = function(api) {
  api.loadSource(({ addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('sanityOptions', clientConfig.sanity)
  })

  const allContentQuery = require('./src/schemas/allContent.gql')

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(allContentQuery)

    data.info.edges.forEach(({ node }) => {
      let path = urlResolver(node, data.settings)
      let contentLists = node.content.contentBlocks.filter(
          b => b._type == 'contentList',
      )

      const localCreate = (pagePath, additionalContext) => createPage({
        path: pagePath,
        component: './src/templates/Content.vue',
        context: {
          settings: data.settings,
          id: node.id,
          metadata: data.metadata,
          ...node.content,
          ...additionalContext,
        },
      })

      if (contentLists.length > 0) {
        const b = contentLists[0]
        const resultsPerPage = b.resultsPerPage ? parseInt(b.resultsPerPage) : 10
        const listData = getPagesByCategoryId(data.info.edges, b.mainCategory.id)
        const numberOfPages = Math.ceil(listData.length / resultsPerPage)

        for (let i = 0; i < numberOfPages; i++) {
          const nextPage = i + 1
          const start = i * resultsPerPage
          const end = (i * resultsPerPage) + (nextPage === numberOfPages ? listData.length - start : resultsPerPage)

          localCreate(`${path}${i === 0 ? '' : `/${(i + 1)}`}`, {
            listData: listData.slice(start, end),
            listOptions: {
              title: b.title,
              resultsPerPage: b.resultsPerPage,
              hasPaging: b.hasPaging,
              numberOfResults: listData.length,
              currentPage: i + 1,
              numberOfPages,
              baseUrl: path,
            },
          })
        }
      } else {
        let context = {}
        if (node.content.mainCategory && node.content.mainCategory.homepage &&
            node.content.mainCategory.homepage.contentBlocks &&
            node.content.mainCategory.homepage.content.contentBlocks.filter(b => b._type === 'contentList').length > 0) {
          context = {
            nextPage,
          }
        }

        localCreate(path, context)
      }
    })
  })
}
