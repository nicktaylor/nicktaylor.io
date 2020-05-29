<template>
  <section :class="$style.block">
    <BlockContent :blocks="_rawContent" :serializers="serializers" />
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import urlResolver from '~/utils/urlResolver.js'
import CodeBlock from "~/components/CodeBlock";

export default {
  data() {
    return {
      serializers: {
        marks: {
          internalLink: content => {
            const node = content.mark.reference
            const url = urlResolver(node, this.$context.settings)
            return <g-link to={url}>{content.children.join('')}</g-link>
          },
        },
        types: {
          codeBlock: ({node}) => {
            return <CodeBlock code={node.code.code} language={node.code.language} />
          }
        }
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
  margin: auto;
  box-sizing: border-box;
  max-width: var(--max-container-width);
  padding: var(--padding-small);

  & > div > *:last-child {
    margin-bottom: 0;
  }
  & > div > *:first-child {
    margin-top: 0;
  }
}
</style>