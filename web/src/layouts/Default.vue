<template>
  <div :class="classes">
    <Header :links="links" :title="$static.info.name" :subText="$static.info.subText" />
    <div :class="$style.content" v-if="!splash">
      <slot />
    </div>
    <Footer :socialLinks="$static.info.socialLinks" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import { getClassByColor } from '~/utils/colorList'

document.addEventListener('DOMContentLoaded', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  console.log(`DOM LOADED ${vh}`)
})

export default {
  components: {
    Header,
    Footer,
  },
  props: {
    splash: Boolean,
  },
  mounted: function() {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      console.log(`Setting property to ${vh}`)
    })
  },
  computed: {
    classes() {
      if (this.splash) {
        return [this.$style.container, this.$style.splash]
      }

      return this.$style.container
    },
    links() {
      const convertToLink = link => ({
        url: link.slug.current,
        title: (link.linkTitle ? link.linkTitle : link.title).toLowerCase(),
        class: getClassByColor(
          link.mainCategory ? link.mainCategory.color : link.color
        ),
      })
      return this.$static.info.mainLinks.map(l =>
        convertToLink(l.content ? l.content : l)
      )
    },
  },
}
</script>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  info: sanitySiteSettings(id: "siteSettings") {
    title
    mainLinks {
      ... on SanityCategory {
        title
        slug {
          current
        }
        color
      }
      ... on SanityContent {
        content {
          title
          slug {
            current
          }
          linkTitle
          mainCategory {
            color
          }
        }
      }
    }
    image {
      asset {
        _id
        url
      }
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
    name
    subText
    socialLinks {
      text
      type
      logo {
        asset {
          _id
          url
        }
      }
      externalUrl
    }
  }
}
</static-query>

<style lang="postcss" module>
.content {
  line-height: 1.5em;
  background: rgba(255, 255, 255, 0.3);
  border-radius: var(--padding-small);
  font-family: wotfard;

  h1 {
    line-height: 1;
    font-family: Righteous;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
