<template>
  <div :class="[$style.container, $style.splash]">
    <header>
      <ProfileSplash
        :image="$static.info.image"
        :name="$static.info.name"
        :slogan="$static.info.subText"
      />
      <NavLinks :links="links" />
    </header>
    <slot />
  </div>
</template>

<script>
import ProfileSplash from '~/components/ProfileSplash.vue'
import NavLinks from '~/components/NavLinks.vue'
export default {
  components: {
    ProfileSplash,
    NavLinks,
  },
  props: {
    siteName: 'test',
  },
  computed: {
    links() {
      return this.$static.info.mainLinks.map(l => (l.content ? l.content : l))
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
      }
      ... on SanityContent {
        content {
          title
          slug {
            current
          }
          linkTitle
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
}

@media screen and (min-width: 540px) {
  .container {
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
</style>
