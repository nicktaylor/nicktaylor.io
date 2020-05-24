<template>
  <header :class="[$style.header, openOrClosed]">
    <div :class="$style.mac">
      <MacWindow />
    </div>
    <HeaderTitle url="/" :subText="subText" :title="title" :class="$style.title" />
    <div :class="$style.hamburger">
      <NavHamburger :onToggle="onToggleNav" :open="open" />
    </div>
    <div :class="$style.nav">
      <NavLinks :links="links" :onClick="onToggleNav" />
    </div>
  </header>
</template>
  
<script>
import HeaderTitle from '~/components/HeaderTitle.vue'
import NavLinks from '~/components/NavLinks.vue'
import NavHamburger from '~/components/NavHamburger.vue'
import MacWindow from '~/assets/images/mac-window.svg'

export default {
  components: {
    NavLinks,
    HeaderTitle,
    NavHamburger,
    MacWindow,
  },
  props: {
    title: String,
    subText: String,
    links: Array,
  },
  data() {
    return { open: false }
  },
  methods: {
    onToggleNav() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
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
  },
}
</script>

<style lang="postcss" module>
:root {
  --header-height: 78.5px;
}

.header {
  display: grid;
  position: fixed;
  width: 100%;
  border-bottom: 8px solid var(--color-one-darkbg);
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
    height: calc(var(--vh, 1vh) * 100);
    padding: 0;
    pointer-events: none;
    font-size: 1.5rem;
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
    height: 100%;
    transition: opacity 0.3s ease-in;
    overflow: scroll;
    flex-direction: column;
    pointer-events: none;

    & > * {
      padding-top: var(--padding-large);
    }
    & > *:first-child {
      padding-top: 0;
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
  color: var(--color-one);
  text-align: center;
}

.hamburger {
  align-self: center;
  justify-self: end;
  filter: opacity(50%);
  z-index: 150;
}

@media screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }

  .title {
    text-align: left;
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
        min-height: auto;
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