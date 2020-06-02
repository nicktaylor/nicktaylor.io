<template>
  <section :class="$style.block">
    <BlockContent :blocks="_rawContent" :serializers="serializers" />
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import urlResolver from '~/utils/urlResolver.js'
import CodeBlock from "~/components/CodeBlock";
import ContentImage from "~/components/ContentImage";
import ContentQuote from "~/components/ContentQuote";
import CodePen from "~/components/CodePen";

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
          },
          contentImage: ({node}) => {
            return <ContentImage image={node.image} layout={node.layout} maxHeight={node.maxHeight} />
          },
          quote: ({node}) => {
            return <ContentQuote text={node.text} name={node.name} date={node.date} />
          },
          codePen: ({node}) => {
            return <CodePen name={node.name} title={node.title} user={node.user} penId={node.penId} theme={node.themeId} height={node.height} />
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

  & > div > p {
    margin-top: var(--padding-small);
    margin-bottom: 0;
  }

  & > div {
    & > div, & > blockquote {
      margin-top: var(--padding-medium);
      margin-bottom: 0;

      & + p {
        margin-top: var(--padding-medium);
        margin-bottom: var(--padding-small);
      }
    }
  }

  & > div {
    & > h1, & > h2, & > h3, & > h4, & > h5 {
      margin-top: var(--padding-medium);
    }
  }

  & > div > *:last-child {
    margin-bottom: 0;
  }
  & > div > *:first-child {
    margin-top: 0;
  }
}
</style>