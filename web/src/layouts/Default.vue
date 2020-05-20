<template>
  <div :class="classes">
    <header :class="[$style.header, openOrClosed]">
      <div :class="$style.mac">
        <MacWindow />
      </div>
      <ProfileTitle
        url="/"
        :slogan="$static.info.subText"
        :name="$static.info.name"
        :class="$style.title"
      />
      <div :class="$style.hamburger">
        <NavHamburger :onToggle="onToggleNav" :open="open" />
      </div>
      <div :class="$style.nav">
        <NavLinks :links="links" :onClick="onToggleNav" />
      </div>
    </header>
    <div :class="$style.content" v-if="!splash">
      <slot />
    </div>
    <footer>
      <SocialLinks :links="$static.info.socialLinks" />
    </footer>
  </div>
</template>

<script>
import ProfilePicture from '~/components/ProfilePicture.vue'
import ProfileTitle from '~/components/ProfileTitle.vue'
import NavLinks from '~/components/NavLinks.vue'
import NavHamburger from '~/components/NavHamburger.vue'
import SocialLinks from '~/components/SocialLinks.vue'
import { getClassByColor } from '~/utils/colorList'
import MacWindow from '~/assets/images/mac-window.svg'

export default {
  components: {
    NavLinks,
    SocialLinks,
    ProfilePicture,
    ProfileTitle,
    NavHamburger,
    MacWindow,
  },
  props: {
    splash: Boolean,
  },
  data() {
    return { open: false }
  },
  methods: {
    onToggleNav() {
      this.open = !this.open
    },
  },
  watch: {
    $route(to, from) {
      this.open = false
    },
  },
  computed: {
    openOrClosed() {
      return this.open ? this.$style.open : this.$style.closed
    },
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
:root {
  --header-height: 78.5px;
}

footer {
  font-size: 10px;
  position: fixed;
  background-color: var(--color-header-bg);
  left: 0;
  width: 100%;
  bottom: 0;
  padding: var(--padding-small);
  box-sizing: border-box;
  & * {
    color: white;
  }
}

.header {
  display: grid;
  position: fixed;
  width: 100%;
  border-bottom: 8px solid var(--color-one);
}

.header {
  grid-template-areas:
    'mac ptitle hamburger'
    'nav nav nav';
  grid-template-columns: 70px auto 70px;
  overflow: visible;
  z-index: 1000;
  background-color: var(--color-header-bg);

  & > * {
    padding: var(--padding-small);
    display: grid;
    align-items: center;
  }

  .mac {
    justify-self: start;
    svg {
      width: 45px;
    }
  }

  .nav {
    grid-area: nav;
    height: calc(100vh);
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    height: 100vh;
    padding: 0;
    pointer-events: none;
  }

  & > * {
    justify-self: center;
  }

  .nav > nav {
    background: radial-gradient(
        circle at 100% 50%,
        transparent 20%,
        rgba(255, 255, 255, 0.02) 21%,
        rgba(255, 255, 255, 0.02) 34%,
        transparent 35%,
        transparent
      ),
      radial-gradient(
          circle at 0% 50%,
          transparent 20%,
          rgba(255, 255, 255, 0.02) 21%,
          rgba(255, 255, 255, 0.02) 34%,
          transparent 35%,
          transparent
        )
        0 -50px;
    background-color: var(--color-five);
    background-size: 75px 100px;
    opacity: 0;
    min-height: 100%;
    transition: opacity 0.3s ease-in;
    overflow: scroll;
    flex-direction: column;
    pointer-events: none;

    & > * {
      padding-top: var(--padding-large);
    }
  }
}

.header.open {
  .nav > * {
    pointer-events: auto;
    opacity: 1;
  }
}

.title {
  grid-area: ptitle;
  align-self: center;
  justify-self: center;
  color: var(--color-one);
}

.hamburger {
  align-self: center;
  justify-self: end;
  filter: opacity(50%);
  z-index: 150;
}

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

@media screen and (min-width: 980px) {
  .hamburger {
    display: none;
  }

  .header {
    grid-template-areas: 'mac ptitle nav';
    grid-template-columns: 70px 200px auto;
    .nav {
      display: block;
      position: relative;
      height: auto;
      width: auto;
      top: auto;
      align-self: center;
      justify-self: end;
      pointer-events: auto;

      & > nav {
        flex-direction: row;
        background: none;
        opacity: 1;
        overflow: visible;
        font-size: 0.8em;
        pointer-events: auto;

        & > * {
          padding-top: 0;
        }
      }
    }
  }
}
</style>
