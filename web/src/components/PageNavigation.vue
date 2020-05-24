<template>
  <div :class="$style.pageNav">
    <g-link v-if="previousPage" :to="previousPage.url" :class="$style.previous">
      <ArrowSvg direction="left"/>
      <span v-if="prevNextLabel">Previous Page:<br/></span>
      {{previousPage.title}}
    </g-link>
    <g-link v-if="nextPage" :title="nextPage.title" :to="nextPage.url" :class="$style.next">
      <span v-if="prevNextLabel">Next page:<br/></span>{{nextPage.title}}
      <ArrowSvg/>
    </g-link>
  </div>
</template>

<script>
  import ArrowSvg from '~/components/ArrowSvg'

  export default {
    name: 'PageNavigation',
    components: {
      ArrowSvg,
    },
    props: {
      previousPage: Object,
      nextPage: Object,
      prevNextLabel: Boolean,
    },
  }
</script>

<style lang="postcss" module>
  .pageNav {
    max-width: var(--max-container-width);
    box-sizing: border-box;
    margin: auto;

    a {
      font-family: var(--font-normal);
      font-weight: bold;
      font-size: 1.2rem;
      position: relative;
      color: var(--content-color-action);
      display: block;
      clear: both;

      span {
        font-family: var(--font-normal);
        font-size: 0.7em;
        font-weight: normal;
        line-height: 1;
      }

      svg {
        position: absolute;
        height: 40px;
        top: calc(50% - 18px);
        fill: var(--content-color-action);
      }
    }

    a.previous {
      padding-left: 50px;
      float: left;

      svg {
        left: var(--padding-small);
      }
    }

    .previous + .next {
      margin-top: var(--padding-medium);
    }

    a.next {
      text-align: right;
      padding-right: 50px;
      float: right;

      svg {
        right: var(--padding-small);
      }
    }
  }

  @media screen and (min-width: 575px) {
    .pageNav {
      a {
        font-size: 1.4rem;
        max-width: 40%;
        clear: none;
      }

      .previous + .next {
        margin-top: 0;
      }
    }
  }
</style>