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
  justify-content: center;

  .main {
    font-family: 'Oleo Script';
    font-size: 5em;
    position: relative;
    display: inline-block;
    z-index: 10;
    align-self: center;

    &:before {
      content: ' ';
      background-color: var(--color-one);
      height: 0.13em;
      width: 100%;
      position: absolute;
      bottom: 5px;
      z-index: -5;
    }
  }
  .subText {
    text-align: center;
    font-size: 1.9em;
    line-height: 1.3em;
  }
}
</style>