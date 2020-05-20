<template>
  <div :class="$style.title">
    <g-link :to="url" :class="$style.main">{{title.toLowerCase()}}</g-link>
    <span :class="$style.subText" v-if="subText && subText.length > 0">{{subText.toLowerCase()}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subText: String,
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

  .subText {
    font-size: 14px;
    filter: saturate(50%);
  }
}
</style>