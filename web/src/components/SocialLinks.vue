<template>
  <div :class="$style.socialLinks">
    <SocialLink
      v-for="link in links"
      :key="link.type"
      :logo="link.logo"
      :text="link.text"
      :type="link.type"
      :url="link.externalUrl"
    />
  </div>
</template>

<script>
import SocialLink from '~/components/SocialLink.vue'

export default {
  props: {
    links: Array,
  },
  components: {
    SocialLink,
  },
}
</script>

<style lang="postcss" module>
.socialLinks {
  display: flex;
  justify-content: center;

  & > *:first-child {
    margin-left: 0;
  }
}
</style>