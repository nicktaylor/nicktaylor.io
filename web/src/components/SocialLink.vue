<template>
  <a :href="url" :class="$style.social">
    <g-image
      :alt="`${type}`"
      :src="$urlForImage(logo, $page.metadata.sanityOptions).width(25).quality(90).auto('format').url()"
    />
    <span>{{text}}</span>
  </a>
</template>

<script>
export default {
  props: {
    logo: Object,
    text: String,
    type: String,
    url: String,
  },
}
</script>

<style lang="postcss" module>
.social {
  margin-left: 1em;
  display: inline-block;
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.3em;

  img {
    height: 1.1em;
    vertical-align: middle;
  }

  span {
    margin-left: 0.3em;
  }
  @media screen and (min-width: 540px) and (min-height: 560px) {
    margin-left: 3em;
    span {
      margin-left: 1em;
    }
  }
}
</style>