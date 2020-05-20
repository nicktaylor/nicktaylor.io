<template>
  <Layout :splash="false">
    <main :class="[$style.article, getClass]">
      <header :class="$style.header">
        <div :class="$style.headoverlay">
          <h1>{{p.title.toLowerCase()}}</h1>
          <time datetime="2020-05-19 11:10">Tuesday, 19th May 2020</time>
        </div>
      </header>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus nec scelerisque posuere. Vivamus eu magna nibh. Sed ac lacinia justo. Proin pellentesque quam commodo est tempus venenatis. Cras quis diam efficitur, facilisis enim eu, gravida orci. Sed a risus ac orci malesuada vestibulum quis sed turpis.</p>
        <p>Curabitur semper ut dolor et porta. Nam tempus in lacus consequat tempus. Curabitur dignissim magna ut nisi aliquam, in pellentesque est congue. Curabitur velit nibh, convallis et mollis vitae, suscipit eget dui. Donec non sagittis odio.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec mi neque. Nunc consequat magna dapibus purus efficitur, eget pellentesque tortor placerat. Quisque commodo libero et nunc scelerisque efficitur. Integer in sem molestie, cursus ex quis, finibus diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus nec scelerisque posuere. Vivamus eu magna nibh. Sed ac lacinia justo. Proin pellentesque quam commodo est tempus venenatis. Cras quis diam efficitur, facilisis enim eu, gravida orci. Sed a risus ac orci malesuada vestibulum quis sed turpis.</p>
        <p>Curabitur semper ut dolor et porta. Nam tempus in lacus consequat tempus. Curabitur dignissim magna ut nisi aliquam, in pellentesque est congue. Curabitur velit nibh, convallis et mollis vitae, suscipit eget dui. Donec non sagittis odio.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec mi neque. Nunc consequat magna dapibus purus efficitur, eget pellentesque tortor placerat. Quisque commodo libero et nunc scelerisque efficitur. Integer in sem molestie, cursus ex quis, finibus diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus nec scelerisque posuere. Vivamus eu magna nibh. Sed ac lacinia justo. Proin pellentesque quam commodo est tempus venenatis. Cras quis diam efficitur, facilisis enim eu, gravida orci. Sed a risus ac orci malesuada vestibulum quis sed turpis.</p>
        <p>Curabitur semper ut dolor et porta. Nam tempus in lacus consequat tempus. Curabitur dignissim magna ut nisi aliquam, in pellentesque est congue. Curabitur velit nibh, convallis et mollis vitae, suscipit eget dui. Donec non sagittis odio.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec mi neque. Nunc consequat magna dapibus purus efficitur, eget pellentesque tortor placerat. Quisque commodo libero et nunc scelerisque efficitur. Integer in sem molestie, cursus ex quis, finibus diam.</p>
      </section>
    </main>
  </Layout>
</template>


<script>
import { getClassByColor } from '~/utils/colorList'
export default {
  computed: {
    p: function() {
      return this.$page.info.content
    },
    getClass: function() {
      if (!this.$page.info.content.mainCategory) {
        return
      }
      return this.$style[
        getClassByColor(this.$page.info.content.mainCategory.color)
      ]
    },
  },
}
</script>

<page-query>
query ContentQuery($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  info: sanityContent(id: $id) {
    content {
      title
      slug {
        current
      }
      mainCategory {
        slug {
          current
        }
        color
      }
    }    
  }
}
</page-query>

<style lang="postcss" module>
.header {
  display: block;
  padding: var(--padding-small);
  border-bottom: 6px solid var(--color-one);
  padding-top: 160px;
  background-color: var(--color-one-faded-20);
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
    color: var(--color-one);
    filter: brightness(75%);
  }

  h1,
  h2 {
    color: var(--color-one);
    font-weight: 500;
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

main {
  margin-bottom: 40px;
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