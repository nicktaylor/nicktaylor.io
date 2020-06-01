<template>
  <div>
    <div :class="$style.imageContainer" :style="`--image-max-height: ${getMaxHeight}`">
      <Picture :default-width="defaultWidth" :image="image" :media="getMedia" />
      <span v-if="image.caption && image.caption.length > 0">{{image.caption}}</span>
    </div>
  </div>
</template>

<script>
  import Picture from "~/components/Picture";
  export default {
    name: "ContentImage",
    components: {Picture},
    props: {
      image: Object,
      maxHeight: String,
      layout: String
    },
    computed: {
      getMedia: function() {
        let widthAdjust = this.layout === 'inset' ? 0.75 : 1;
        return [
          {minWidth: 768, width: Math.floor(950 * widthAdjust)},
          {minWidth: 0, width: Math.floor(750 * widthAdjust)},
        ]
      },
      getMaxHeight: function() {
        return this.maxHeight && this.maxHeight.length > 0 ? this.maxHeight : 'auto'
      },
      defaultWidth: function() {
        return 500;
      }
    }
  }
</script>

<style lang="postcss" module>
.imageContainer {
  --image-max-height: auto;
  margin: auto;
  display: grid;
  justify-content: center;

  &.inset {
    max-width: 75%;
  }

  img {
    max-width: 100%;
    max-height: var(--image-max-height);
    margin: auto;
  }

  span {
    font-size: 0.8em;
    line-height: 1.1;
  }
}
</style>