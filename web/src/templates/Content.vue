<template>
  <Layout :splash="false">
    <h1>{{p.title}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus nec scelerisque posuere. Vivamus eu magna nibh. Sed ac lacinia justo. Proin pellentesque quam commodo est tempus venenatis. Cras quis diam efficitur, facilisis enim eu, gravida orci. Sed a risus ac orci malesuada vestibulum quis sed turpis.</p>
    <p>Curabitur semper ut dolor et porta. Nam tempus in lacus consequat tempus. Curabitur dignissim magna ut nisi aliquam, in pellentesque est congue. Curabitur velit nibh, convallis et mollis vitae, suscipit eget dui. Donec non sagittis odio.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec mi neque. Nunc consequat magna dapibus purus efficitur, eget pellentesque tortor placerat. Quisque commodo libero et nunc scelerisque efficitur. Integer in sem molestie, cursus ex quis, finibus diam.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus nec scelerisque posuere. Vivamus eu magna nibh. Sed ac lacinia justo. Proin pellentesque quam commodo est tempus venenatis. Cras quis diam efficitur, facilisis enim eu, gravida orci. Sed a risus ac orci malesuada vestibulum quis sed turpis.</p>
    <p>Curabitur semper ut dolor et porta. Nam tempus in lacus consequat tempus. Curabitur dignissim magna ut nisi aliquam, in pellentesque est congue. Curabitur velit nibh, convallis et mollis vitae, suscipit eget dui. Donec non sagittis odio.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec mi neque. Nunc consequat magna dapibus purus efficitur, eget pellentesque tortor placerat. Quisque commodo libero et nunc scelerisque efficitur. Integer in sem molestie, cursus ex quis, finibus diam.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus nec scelerisque posuere. Vivamus eu magna nibh. Sed ac lacinia justo. Proin pellentesque quam commodo est tempus venenatis. Cras quis diam efficitur, facilisis enim eu, gravida orci. Sed a risus ac orci malesuada vestibulum quis sed turpis.</p>
    <p>Curabitur semper ut dolor et porta. Nam tempus in lacus consequat tempus. Curabitur dignissim magna ut nisi aliquam, in pellentesque est congue. Curabitur velit nibh, convallis et mollis vitae, suscipit eget dui. Donec non sagittis odio.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec mi neque. Nunc consequat magna dapibus purus efficitur, eget pellentesque tortor placerat. Quisque commodo libero et nunc scelerisque efficitur. Integer in sem molestie, cursus ex quis, finibus diam.</p>
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
</style>