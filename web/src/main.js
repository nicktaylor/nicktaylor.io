// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import urlForImage from './utils/urlForImage'
import NormalizeCss from 'normalize.css'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/all'

import 'vue-awesome/icons/angle-double-right'
import Icon from 'vue-awesome/components/Icon'

import '~/assets/css/global.css'
import '~/assets/images/mac-window.svg'
import { getComponent } from './utils/contentTypes'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('v-icon', Icon)
  Vue.use(NormalizeCss)
  dayjs.extend(advancedFormat)
  Vue.filter('niceDateFormat', value => dayjs(value).format("dddd, Do MMMM YYYY"))
  Vue.prototype.$getComponentByType = getComponent
  Vue.prototype.$urlForImage = urlForImage
  gsap.registerPlugin(CSSRulePlugin)
}
