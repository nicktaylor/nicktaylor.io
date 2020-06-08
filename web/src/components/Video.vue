<template>
  <video autoplay muted="true" :poster="posterUrl">
    <source v-for="s in src" :src="s.url" :type="s.type"/>
  </video>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      src: Array,
      posterUrl: String
    }
  }
</script>

<style scoped>

</style>