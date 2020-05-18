<template>
  <div :class="$style.title">
    <div :class="$style.main">{{name.toLowerCase()}}</div>
    <div :class="$style.subText">{{slogan.toLowerCase()}}</div>
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
  display: flex;
  flex-direction: column;

  .main {
    font-family: 'Barlow Condensed';
    font-weight: 700;
    font-size: 6em;
    position: relative;
    display: inline-block;
    z-index: 10;
    top: -0.15em;
    text-shadow: rgba(0, 0, 0, 0.2) 0.03em 0.03em;

    &:before {
      content: ' ';
      background-color: var(--color-one);
      height: 0.12em;
      width: 100%;
      position: absolute;
      bottom: -2px;
      z-index: -5;
      box-shadow: rgba(255, 117, 0, 0.2) 0.03em 0.03em;
    }
  }
  .subText {
    font-size: 1.6em;
    line-height: 1;
  }
}
</style>