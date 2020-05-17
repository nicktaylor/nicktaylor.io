require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})
const postcss = require('postcss-nested')

const clientConfig = require('./client-config')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Nick Taylor - Web Developer',
  // templates: {
  //   SanityContent: [
  //     {
  //       //path: '/:content__slug__current',
  //       path: node => {
  //         console.log(node)
  //         return `/${node.mainCategoryTwo.slug.current}/${
  //           node.content.slug.current
  //         }`
  //       },
  //       component: '~/templates/Content.vue',
  //     },
  //     // {
  //     //   name: 'root',
  //     //   path: '/:content__slug__current',
  //     //   component: '~/templates/Content.vue',
  //     // },
  //   ],
  // },
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd,
        graphqlTag: 'default',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss()],
      },
    },
  },
}
