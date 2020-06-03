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
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: [
            "/",
            "/blog",
            "/about",
            "/contact",
            "/resume",
            /\.(html|svg|js|css|jpg|jpeg|png|json|woff|woff2)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#2b2b2b",
        icon_path: "./src/favicon.png",
        name: "Nick Taylor - Web Developer",
        short_name: "NickTaylor.io",
        theme_color: "#D47500",
        lang: "en-GB",
        statusBarStyle: "black",
        orientation: "portrait",
        cachedFileTypes: "js,json,svg,css,jpg,png,html,gif,jpeg,woff,woff2",
        serviceWorkerPath: "/assets/js/service-worker.js",
        display: "standalone"
      },
    },
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
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss()],
      },
    },
  },
}
