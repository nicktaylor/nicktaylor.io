<template>
  <div :class="$style.list">
    <Paging v-bind="pagingInfo"/>
    <template v-for="item in contentItems">
      <ContentItemPreview v-bind="item" :key="item.title" :class="$style.item"/>
    </template>
    <Paging v-bind="pagingInfo"/>
  </div>
</template>

<script>
  import ContentItemPreview from '~/components/ContentItemPreview.vue'
  import { getExcerptFromContent } from '~/utils/portableText'
  import urlResolver from '~/utils/urlResolver'
  import Paging from '~/components/Paging'

  export default {
    components: {
      ContentItemPreview,
      Paging,
    },
    props: {
      title: String,
      listData: Array,
      pagingInfo: Object,
    },
    computed: {
      contentItems: function() {
        return this.listData.map((i) => ({
          title: i.content.title,
          datetime: i.content.publishedAt
              ? new Date(i.content.publishedAt)
              : null,
          url: urlResolver(i, this.$context.settings),
          text: getExcerptFromContent(i, 200),
          image: i.content.mainImage,
        }))
      },
    },
  }
</script>

<style lang="postcss" module>
  .list {
    --list-spacing: var(--padding-large);
    padding: var(--padding-small);
    max-width: 800px;
    margin: auto;

    & > * {
      margin-top: var(--list-spacing);
      position: relative;

      &:first-child {
        margin-top: 0;
      }
    }

    & > * {
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 50vw solid transparent;
        border-right: 50vw solid var(--content-color-two);
        border-top: 0 solid transparent;
        border-bottom: 1px solid transparent;
        bottom: calc(var(--list-spacing) * -0.5);
        right: 0;
        opacity: 0.3;
      }
    }


    .item {
      position: relative;
      background: #fff;
    }

    & > *:nth-child(2n) {
      &:after {
        border-left: 50vw solid var(--content-color-three);
        border-right: 50vw solid transparent;
        border-top: 0px solid transparent;
        border-bottom: 1px solid transparent;
        bottom: calc(var(--list-spacing) * -0.5);
        left: 0;
      }
    }

    & > *:nth-child(4n) {
      &:after {
        border-left-color: var(--content-color-two);
      }
    }

    & > *:nth-child(4n + 1) {
      &:after {
        border-right-color: var(--content-color-three);
      }
    }

    & > *:nth-child(4n + 2) {
      &:after {
        border-left-color: var(--content-color-main);
      }
    }

    & > *:nth-child(4n + 3):after {
      border-right-color: var(--content-color-action);
    }
  }

  @media screen and (min-width: 576px) {
    .list {
      --list-spacing: var(--padding-xlarge);
    }
  }

  @media screen and (min-width: 768px) {
    .list {
      padding: var(--padding-large);
    }
  }
</style>

