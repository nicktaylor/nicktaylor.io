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
import urlResolver from '~/utils/urlResolver'
export default {
  components: {
    ContentItemPreview,
  },
  props: {},
  computed: {
    contentItems: function() {
      return this.$static.items.edges.map(({ node: i }) => ({
        title: i.content.title,
        datetime: i.content.publishedAt
          ? new Date(i.content.publishedAt)
          : null,
        url: urlResolver(i, this.$context.settings),
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
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  padding: var(--padding-small);
  max-width: 900px;
  margin: auto;

  & > * {
    margin-top: var(--padding-xlarge);
  }

  & > *:first-child {
    margin-top: 0;
  }
}

@media screen and (min-width: 768px) {
  .list {
    padding: var(--padding-large);
  }
}
</style>

<static-query>
query ContentQuery($limit: Int = 10, $offset: Int = 0) {
  items: allSanityContent(limit: $limit, skip: $offset) {
    edges {
      node {
        id
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
            homepage {
              id
            }
            slug {
              current
            }
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
