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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;

  & > *:first-child {
    margin-left: 0;
  }

  & img {
    filter: grayscale(100%) invert(100%);
  }

  @media screen and (min-width: 576px) {
    max-width: 576px;
    margin: auto;
  }
}
</style>