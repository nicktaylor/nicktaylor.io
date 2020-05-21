<template>
  <div :class="$style.list">
    <template v-for="item in contentItems">
      <ContentItemPreview v-bind="item" :key="item.id" />
    </template>
  </div>
</template>

<script>
import ContentItemPreview from '~/components/ContentItemPreview.vue'
import { toPlainText, cutAtEndOfLine } from '~/utils/portableText'
export default {
  components: {
    ContentItemPreview,
  },
  props: {},
  computed: {
    contentItems: function() {
      const retVal = this.$static.items.edges.map(({ node: i }) => ({
        title: i.content.title,
        datetime: i.content.publishedAt ? i.content.publishedAt : null,
        text:
          i.content._rawExcerpt && i.content._rawExcerpt.length > 0
            ? toPlainText(i.content._rawExcerpt)
            : cutAtEndOfLine(
                toPlainText(
                  i.content.contentBlocks.reduce(
                    (c, b) => c.concat(b._rawContent),
                    []
                  )
                ),
                200
              ),
      }))
      return retVal
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  padding: var(--padding-medium);
  max-width: 800px;
  margin: auto;

  & > * {
    margin-top: var(--padding-large);
  }

  & > *:first-child {
    margin-top: 0;
  }
}
</style>

<static-query>
query ContentQuery($limit: Int = 10, $offset: Int = 0) {
  items: allSanityContent(limit: $limit, skip: $offset) {
    edges {
      node {
        content {
          title
          slug {
            current
          }
          categories {
            title
          }
          _rawExcerpt 
          contentBlocks {
            ... on SanityFullPortableTextObject {
              _rawContent
            }
          }
          mainCategory {
            title
          }
          mainImage {
            asset {
              _id
              url
            }
            hotspot {
              x
              y
              width
              height
            }
            crop {
              top
              left
              right
              bottom
            }
          }
          publishedAt
        }
      }
    }
  }
}
</static-query>
