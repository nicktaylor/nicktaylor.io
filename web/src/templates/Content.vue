<template>
  <Layout :splash="false">
    <main :class="[$style.article]" :data-ctheme="getClass">
      <header :class="$style.header">
        <div :class="$style.headoverlay">
          <h1>{{$context.title.toLowerCase()}}</h1>
          <time v-if="datetime" datetime="2020-05-19 11:10">Tuesday, 19th May 2020</time>
        </div>
      </header>
      <div v-for="block in $context.contentBlocks" :key="block._key">
        <component :is="$getComponentByType(block)" v-bind="getBlockData(block)"/>
      </div>
    </main>
  </Layout>
</template>


<script>
  import { getClassByColor } from '~/utils/colorList'

  export default {
    props: {
      datetime: String,
      title: String,
    },
    methods: {
      getBlockData: function(block) {
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
      getClass: function() {
        if (!this.$context.mainCategory) {
          return
        }
        return getClassByColor(this.$context.mainCategory.color)
      },
    },
  }
</script>

<style lang="postcss" module>
  .header {
    display: block;
    padding: var(--padding-small);
    padding-top: 160px;

    background-color: var(--content-color-faded);
    background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.5) 35px,
            rgba(255, 255, 255, 0.5) 70px
    ),
    repeating-linear-gradient(
            45deg,
            transparent,
            transparent 70px,
            rgba(255, 255, 255, 0.5) 70px,
            rgba(255, 255, 255, 0.5) 105px
    );

    & > * {
      max-width: 980px;
      margin: auto;
      display: block;
    }

    time {
      color: var(--content-color-main);
      filter: brightness(75%);
    }

    h1,
    h2 {
      color: var(--content-color-main);
      font-weight: 500;
      font-family: var(--font-title);
    }
  }

  section {
    padding: var(--padding-small);
    margin: auto;
    max-width: 980px;

    & > *:first-child {
      margin-top: 0;
    }
  }

  main.two {
    header {
      border-bottom-color: var(--color-two);
      background-color: var(--color-two-faded-20);

      time {
        color: var(--color-two);
      }

      h1,
      h2 {
        color: var(--color-two);
      }
    }
  }

  main.three {
    & > header {
      border-bottom-color: var(--color-three);
      background-color: var(--color-three-faded-20);

      time {
        color: var(--color-three);
      }

      h1,
      h2 {
        color: var(--color-three);
      }
    }
  }

  main.four {
    & > header {
      border-bottom-color: var(--color-four);
      background-color: var(--color-four-faded-20);

      time {
        color: var(--color-four);
      }

      h1,
      h2 {
        color: var(--color-four);
      }
    }
  }
</style>