<template>
  <div :class="classes">
    <header :class="[$style.header, openOrClosed]">
      <ProfilePicture
        :image="$static.info.image"
        :alt="$static.info.name"
        :class="$style.profilePicture"
      />
      <ProfileTitle
        :slogan="$static.info.subText"
        :name="$static.info.name"
        :class="$style.profileTitle"
      />
      <NavHamburger :class="$style.hamburger" :onToggle="onToggleNav" :open="open" />
      <div :class="$style.nav">
        <NavLinks :links="links" />
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

export default {
  components: {
    NavLinks,
    SocialLinks,
    ProfilePicture,
    ProfileTitle,
    NavHamburger,
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
  --header-height: 79px;
}

footer {
  padding: var(--padding-small);
}

.container {
  padding-top: var(--header-height);
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
    font-size: 0.8em;
  }
}

.header {
  margin: auto;
  display: grid;
  position: fixed;
  width: 100%;
  top: 0;
}

.header {
  grid-template-areas:
    'ptitle ptitle hamburger'
    'nav nav nav';
  grid-template-columns: 1fr auto 80px;
  overflow: visible;
  z-index: 1000;
  height: 80px;

  .nav {
    grid-area: nav;
    height: calc(100vh);
    position: relative;
    z-index: 100;
    top: calc(var(--header-height) * -1);
  }

  .profilePicture,
  .profileTitle {
  }

  & > * {
    justify-content: center;
  }

  .nav > nav {
    background: radial-gradient(
        circle at 100% 50%,
        transparent 20%,
        rgba(255, 255, 255, 0.05) 21%,
        rgba(255, 255, 255, 0.05) 34%,
        transparent 35%,
        transparent
      ),
      radial-gradient(
          circle at 0% 50%,
          transparent 20%,
          rgba(255, 255, 255, 0.05) 21%,
          rgba(255, 255, 255, 0.05) 34%,
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

.profilePicture {
  display: none;
  margin-top: 1.8em;
  justify-self: center;
  grid-area: ppic;
}

.profileTitle {
  font-size: 8px;
  align-items: start;
  grid-area: ptitle;
  margin-left: 1.8em;
  padding: var(--padding-tiny) 0;
}

.hamburger {
  align-self: center;
  justify-self: center;
  filter: opacity(50%);
  z-index: 150;
}

.splash {
  font-size: 13px;

  &.container {
    padding: 0;
  }

  .header {
    height: auto;
    grid-template-areas:
      'ppic ppic ppic'
      'ptitle ptitle ptitle'
      'nav nav nav';
    position: relative;
    width: auto;
    top: auto;

    .profilePicture {
      display: block;
      margin-top: 0;
    }

    .nav {
      top: auto;
      display: flex;
      height: auto;

      & > nav {
        pointer-events: auto;
        overflow: visible;
        opacity: 1;
        background-color: transparent;
        flex-direction: row;
      }
    }

    .profileTitle {
      font-size: 12px;
      margin-left: 0;
      padding: 0;
      align-items: center;
    }

    .hamburger {
      display: none;
    }
  }
}

.content {
  line-height: 1.5em;
  margin: var(--padding-small);
  padding: var(--padding-small);
  background: rgba(255, 255, 255, 0.3);
  border-radius: var(--padding-small);
  font-family: wotfard;

  h1 {
    line-height: 1;
    font-family: 'Barlow Condensed';
    margin: 0;
  }
}

@media screen and (min-width: 540px) {
  .splash .profileTitle {
    font-size: 13px;
  }

  .splash .header {
    grid-template-areas:
      'ppic ptitle ptitle'
      'nav nav nav';

    .profileTitle {
      grid-area: ptitle;
      margin-left: 1.8em;
    }
  }
}

@media screen and (min-width: 768px) and (min-height: 560px) {
  .container.splash,
  .splash .header .profileTitle {
    font-size: 16px;
  }
}

@media screen and (min-width: 1240px) {
  .container.splash,
  .splash .header .profileTitle {
    font-size: 18px;
  }
}

@media screen and (min-width: 1840px) {
  .container.splash,
  .splash .header .profileTitle {
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

.profile {
  flex-direction: row;
}

.profile > *:first-child {
  font-size: 5px;
}

.profile > *:last-child {
  font-size: 8px;
}
</style>
