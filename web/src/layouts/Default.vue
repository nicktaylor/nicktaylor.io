<template>
  <div :class="classes">
    <header>
      <ProfileSplash
        :image="$static.info.image"
        :name="$static.info.name"
        :slogan="$static.info.subText"
      />
      <NavLinks :links="links" :classes="$style.nav" />
    </header>
    <slot />
    <footer>
      <SocialLinks :links="$static.info.socialLinks" />
    </footer>
  </div>
</template>

<script>
import ProfileSplash from '~/components/ProfileSplash.vue'
import NavLinks from '~/components/NavLinks.vue'
import SocialLinks from '~/components/SocialLinks.vue'
import { getClassByColor } from '~/utils/colorList'

export default {
  components: {
    ProfileSplash,
    NavLinks,
    SocialLinks,
  },
  props: {
    splash: Boolean,
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
.container {
  font-size: 12px;
}
.container.splash {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin: auto;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;

  footer {
    position: fixed;
    bottom: 1.5em;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .nav {
    margin-top: 1.8em;
  }
}

@media screen and (min-width: 540px) {
  body {
    font-size: 13px;
  }
}

@media screen and (min-width: 768px) and (min-height: 560px) {
  .container.splash {
    font-size: 16px;
  }
}

@media screen and (min-width: 1240px) {
  .container.splash {
    font-size: 18px;
  }
}

@media screen and (min-width: 1840px) {
  .container.splash {
    font-size: 20px;
  }
}

@media screen and (min-width: 540px) and (min-height: 560px) {
  .container.splash {
    footer {
      bottom: 2em;
    }
  }
}
</style>
