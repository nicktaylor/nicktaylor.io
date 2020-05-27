<template>
  <a :href="url" :class="$style.social">
    <g-image
      :alt="`${type}`"
      :src="$urlForImage(logo, $context.metadata.sanityOptions).width(25).quality(90).auto('format').url()"
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
  display: grid;
  grid-template-columns: 1.2em auto;
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.3em;

  img {
    height: 1.2em;
    vertical-align: middle;
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 0.3em;
  }

  @media screen and (min-width: 370px) {
    span {
      margin-left: 1em;
    }
  }

  @media screen and (min-width: 576px) and (min-height: 560px) {
    font-size: 1.5em;
  }
}
</style>