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

      createPage({
        path: path,
        component: './src/templates/Content.vue',
        context: {
          id: node.id,
          metadata: data.metadata,
          ...node.content,
        },
      })
    })
  })
}
