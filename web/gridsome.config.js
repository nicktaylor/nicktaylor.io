require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})
const postcss = require('postcss-nested')

const clientConfig = require('./client-config')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Nick Taylor - Web Developer',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
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
