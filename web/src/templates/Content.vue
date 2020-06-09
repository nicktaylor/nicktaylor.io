<template>
  <Layout :splash="false">
    <main :class="[$style.article]" :data-ctheme="getClass">
      <div v-for="block in $context.contentBlocks" :key="block._key">
        <component
            :is="$getComponentByType(block)"
            v-bind="getBlockData(block)"/>
      </div>
      <PageNavigation
          v-if="$context.nextPage || $context.previousPage"
          :class="$style.pageNav"
          :next-page="$context.nextPage"
          :previous-page="$context.previousPage"
          :prev-next-label="true"/>
    </main>
  </Layout>
</template>

<script>
  import {getClassByColor} from '~/utils/colorList'
  import PageNavigation from '~/components/PageNavigation'
  import CodeBlock from "~/components/CodeBlock";

  export default {
    components: { CodeBlock, PageNavigation},
    metaInfo: function () {
      return {
        title: this.$context.title,
        meta: [
          {
            key: 'description',
            name: 'description',
            content: this.$context.plainTextExcerpt.length > 0 ? this.$context.plainTextExcerpt : this.$context.settings.description
          }
        ]
      }
    },
    props: {
      datetime: String,
      title: String,
    },
    methods: {
      getBlockData: function (block) {
        return block._type === 'contentList'
            ? {
              ...block,
              listData: this.$context.listData,
              pagingInfo: this.$context.listOptions,
            }
            : block
      },
    },
    computed: {
      getClass: function () {
        if (!this.$context.mainCategory) {
          return
        }
        return getClassByColor(this.$context.mainCategory.color)
      },
    },
  }
</script>

<style lang="postcss" module>
  .article {
    h1, h2, h3, h4, h5 {
      color: var(--content-color-main);
    }

    & > * {
      margin-top: var(--padding-small);
      box-sizing: border-box;

      &:first-child {
        margin-top: 0;
      }
    }

    .pageNav {
      padding: var(--padding-small);
      max-width: var(--max-container-width);
      margin-left: auto;
      margin-right: auto;
      a {
        clear: both;
      }
      & > *:last-child {
        margin-top: var(--padding-medium);
      }
    }
  }

  @media screen and (min-width: 575px) {
    .article {
      .pageNav {
        a {
          clear: none;
        }
        & > *:last-child {
          margin-top: 0;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .article > * {
      margin-top: var(--padding-medium);
    }
  }
</style>