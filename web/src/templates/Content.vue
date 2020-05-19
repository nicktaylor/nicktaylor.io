<template>
  <Layout :splash="false">
    <article :class="$style.article">
      <header>
        <h1>{{p.title.toLowerCase()}}</h1>
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
    </article>
  </Layout>
</template>


<script>
export default {
  computed: {
    p: function() {
      return this.$page.info.content
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
      }
    }    
  }
}
</page-query>

<style lang="postcss" module>
.article {
  & > header {
    /* background: linear-gradient(rgba(0, 182, 79, 0.3), rgba(0, 182, 79, 0.8)); */
    /* background: linear-gradient(rgba(255, 117, 0, 0.2), rgba(255, 117, 0, 0.6)); */
    background-color: rgba(255, 117, 0, 0.4);
    display: block;
    padding: var(--padding-small);
    border-bottom: 10px solid var(--color-one);
    padding-top: 160px;

    h1,
    h2 {
      color: var(--text-color);
      font-weight: 500;
    }
  }

  & > section {
    padding: var(--padding-small);

    & > *:first-child {
      margin-top: 0;
    }
  }
}
</style>