<template>
  <nav :class="[$style.nav, classes]">
    <template v-for="link in links">
      <NavLink :link="link" :key="link.title" :onClick="onClick" />
    </template>
  </nav>
</template>

<script>
import NavLink from '~/components/NavLink.vue'
export default {
  components: {
    NavLink,
  },
  props: {
    links: Array,
    onClick: Function,
    classes: String,
  },
}
</script>

<style lang="postcss" module>
.nav {
  display: flex;
  justify-content: center;

  & > * {
    text-align: center;
    font-size: 1.3em;
    line-height: 1;

    a {
      cursor: pointer;
      position: relative;
      padding: 0 1em 0 1em;
    }
  }
}

@media screen and (min-width: 540px) {
  .nav > * {
    a {
      padding: 0 1.5em 0 1.5em;
    }
  }
}
</style>