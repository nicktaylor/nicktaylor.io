// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')

module.exports = function(api) {
  api.loadSource(({ addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata('sanityOptions', clientConfig.sanity)
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`
      query AllContentQuery {
        info: allSanityContent {
          edges {
            node {
              id
              content {
                title
                slug {
                  current
                }
                mainCategory {
                  homepage {
                    id
                  }
                  slug {
                    current
                  }
                }
              }
            }
          }
        }
      }
    `)

    data.info.edges.forEach(({ node }) => {
      let path = `/${node.content.slug.current}`

      if (
        node.content.mainCategory &&
        node.content.mainCategory.homepage &&
        node.content.mainCategory.homepage.id == node.id
      ) {
        path = `/${node.content.mainCategory.slug.current}`
      } else if (node.content.mainCategory) {
        path = `/${node.content.mainCategory.slug.current}/${
          node.content.slug.current
        }`
      }

      createPage({
        path: path,
        component: './src/templates/Content.vue',
        context: {
          id: node.id,
        },
      })
    })
  })
}
