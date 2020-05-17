<template>
  <Layout :splash="true"></Layout>
</template>

<script>
export default {
  mounted: function(props) {
    // Handling for odd iOS height issue
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
}
</script>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</page-query>

<style>
</style>
