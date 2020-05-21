<template>
  <section :class="$style.block">
    <BlockContent :blocks="_rawContent" :serializers="serializers" />
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import { contentSerializers } from '~/utils/contentTypes.js'
import urlResolver from '~/utils/urlResolver.js'

export default {
  data() {
    return {
      serializers: {
        marks: {
          internalLink: content => {
            const node = content.mark.reference.content
            const url = urlResolver(node, this.$context.settings)
            return <g-link to={url}>{content.children.join('')}</g-link>
          },
        },
      },
    }
  },
  components: {
    BlockContent,
  },
  props: { _rawContent: Array },
}
</script>

<style lang="postcss" module>
a {
  color: var(--content-color-main);
}

.block {
  & > div > *:first-child {
    margin-top: 0;
  }
}
</style>