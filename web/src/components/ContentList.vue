<template>
  <div :class="$style.list">
    <Paging v-bind="pagingInfo"/>
    <template v-for="item in listData">
      <ContentItemPreview v-bind="item" :key="item.title" :class="$style.item"/>
    </template>
    <Paging v-bind="pagingInfo"/>
  </div>
</template>

<script>
  import ContentItemPreview from '~/components/ContentItemPreview.vue'
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

      &:after {
        content: '';
        display: block;
        position: relative;
        height: 1px;
        width: 100%;
        opacity: 0.5;
        background-size: cover;
        bottom: calc(var(--list-spacing) * -0.5);
        background: linear-gradient(90deg, var(--content-color-main), transparent) no-repeat;
      }

      &:nth-child(2n):after {
        transform: rotateZ(180deg);
      }

      &:nth-child(4n):after {
        transform: rotateZ(180deg);
      }

      &:nth-child(4n + 1):after {
        background: linear-gradient(90deg, var(--content-color-two), transparent) no-repeat;
      }

      &:nth-child(4n + 2):after {
        background: linear-gradient(90deg, var(--content-color-three), transparent) no-repeat;
      }

      &:nth-child(4n + 3):after {
        background: linear-gradient(90deg, var(--content-color-action), transparent) no-repeat;
      }
    }

    .item {
      position: relative;
      transition: transform 0.3s linear;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .list {
    @media screen and (min-width: 576px) {
      --list-spacing: var(--padding-xlarge);
    }

    @media screen and (min-width: 768px) {
      padding: var(--padding-large);
    }
  }
</style>

