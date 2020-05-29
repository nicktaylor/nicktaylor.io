<template>
  <picture>
    <source v-for="source in sources" :key="source.minWidth"
            :srcset="$urlForImage(image, $context.metadata.sanityOptions).width(source.width).height(source.height).quality(source.quality).auto('format').url()"
            :media="`(min-width: ${source.minWidth}px)`"
    />
    <g-image
            :loading="loading"
            :alt="`${image.alt}`"
            :src="$urlForImage(image, $context.metadata.sanityOptions).width(defaultWidth).height(defaultHeight).quality(80).auto('format').url()"
    />
  </picture>
</template>

<script>
  export default {
    name: 'Picture',
    data: function() {
      return {}
    },
    props: {
      image: Object,
      media: Array,
      defaultWidth: Number,
      defaultHeight: Number,
      loading: String,
    },
    computed: {
      sources: function() {
        return this.media ? this.media.map(m => ({
          width: m.width ? m.width : null,
          height: m.height ? m.height : null,
          quality: m.quality ? m.quality : 80,
          minWidth: m.minWidth ? m.minWidth : m.width,
        })) : null
      },
    },
  }
</script>

<style scoped>

</style>