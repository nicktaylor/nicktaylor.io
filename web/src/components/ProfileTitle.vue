<template>
  <div :class="$style.title">
    <g-link :to="url" :class="$style.main">{{name.toLowerCase()}}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    slogan: String,
    url: String,
  },
}
</script>

<style lang="postcss" module>
.title {
  .main {
    font-family: Righteous;
    font-size: 26px;
    color: var(--color-one);
  }
}
</style>