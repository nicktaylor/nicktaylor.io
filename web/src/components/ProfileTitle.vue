<template>
  <div :class="$style.title">
    <div :class="$style.main">{{name.toLowerCase()}}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    slogan: String,
  },
}
</script>

<style lang="postcss" module>
.title {
  .main {
    font-family: Righteous;
    font-size: 26px;
  }
}
</style>