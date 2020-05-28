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
    box-sizing: border-box;
    overflow: hidden;

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
      padding-left: calc(18px + var(--padding-small));
      float: left;

      svg {
        left: 0;
      }

      &:hover {
        svg {
          animation: arrow-move-back 1s infinite;
        }
      }
    }


    .previous + .next {
      margin-top: var(--padding-medium);
    }

    a.next {
      text-align: right;
      padding-right: calc(18px + var(--padding-small));
      float: right;
      overflow: visible;

      svg {
        right: 0;
      }

      &:hover {
        svg {
          animation: arrow-move-forward 1s infinite;
        }
      }
    }
  }

  @keyframes arrow-move-back {
    0% {
      transform: translate(0rem);
    }
    50% {
      transform: translate(0.3rem);
    }
  }

  @keyframes arrow-move-forward{
    0% {
      transform: translate(0rem);
    }
    50% {
      transform: translate(-0.3rem);
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