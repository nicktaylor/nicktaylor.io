<template>
  <Layout :splash="false">
    <h1>{{p.title}}</h1>
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