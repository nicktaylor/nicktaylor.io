<template>
  <video autoplay muted="true">
    <source v-for="s in src" :src="s.url" :type="s.type"/>
  </video>
</template>

<script>
  export default {
    name: 'Video',
    props: {
      src: Array,
    }
  }
</script>

<style scoped>

</style>