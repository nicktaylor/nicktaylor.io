<template>
  <footer>
    <SocialLinks :links="socialLinks" />
  </footer>
</template>

<script>
import SocialLinks from '~/components/SocialLinks.vue'
export default {
  components: {
    SocialLinks,
  },
  props: {
    socialLinks: Array,
  },
}
</script>

<style lang="postcss" module>
footer {
  box-sizing: border-box;
  padding: var(--padding-small);
  position: fixed;
  width: 100%;
  bottom: 0;
  font-size: 10px;
  background-color: var(--color-header-bg);

  & * {
    color: white;
  }
}
</style>