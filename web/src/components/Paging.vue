<template>
  <div v-if="hasPaging" :class="$style.paging">
    <g-link :to="pageUrl(previousPage)" v-if="previousPage > 0">Previous</g-link>
    <div>Page {{currentPage}} of {{numberOfPages}}</div>
    <g-link :to="pageUrl(nextPage)" v-if="nextPage > 0">Next</g-link>
  </div>
</template>

<script>
  export default {
    name: 'Paging',
    props: {
      baseUrl: String,
      resultsPerPage: Number,
      numberOfResults: Number,
      currentPage: Number,
      numberOfPages: Number,
    },
    methods: {
      pageUrl: function(pageNumber) {
        return `${this.baseUrl}${pageNumber === 1 ? '' : `/${pageNumber}`}`
      },
    },
    computed: {
      nextPage: function() {
        return this.currentPage < this.numberOfPages ? this.currentPage + 1 : 0
      },
      previousPage: function() {
        return this.currentPage > 1 ? this.currentPage - 1 : 0
      },
      hasPaging: function() {
        return this.numberOfPages > 1
      },
    },
  }
</script>

<style lang="postcss" module>
  .paging {

  }
</style>