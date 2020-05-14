<template>
  <div :class="[$style.profile, $style.image]">
    <div>
      <g-image
        :alt="name"
        :src="$urlForImage(image, $page.metadata.sanityOptions).width(250).url()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: Object,
  },
}
</script>

<style lang="postcss" module>
.image {
  --ppic-width: 0.6em;
  --ppic-bgcolor: #f7e7d7;
  height: 12em;
  width: 12em;
  border: var(--ppic-width) solid black;
  border-radius: 50%;

  div {
    border: var(--ppic-width) solid var(--ppic-bgcolor);
    border-radius: 50%;
    overflow: hidden;
    height: calc(100% - (var(--ppic-width) * 2));
    background-color: var(--ppic-bgcolor);

    img {
      width: 100%;
      position: relative;
    }
  }
}
</style>