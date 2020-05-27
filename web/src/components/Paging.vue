<template>
  <div v-if="hasPaging" :class="$style.paging">
    <PageNavigation
                    :next-page="nextPage"
                    :previous-page="previousPage"
                    :prev-next-label="true"/>
  </div>
</template>

<script>
  import PageNavigation from '~/components/PageNavigation'
  export default {
    name: 'Paging',
    components: {
      PageNavigation
    },
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
        const nextPage = this.currentPage < this.numberOfPages ? this.currentPage + 1 : 0
        return nextPage === 0 ? null : {
          title: `# ${nextPage}`,
          url: this.pageUrl(nextPage)
        }
      },
      previousPage: function() {
        const previousPage = this.currentPage - 1 > 0 ? this.currentPage - 1 : 0
        return previousPage === 0 ? null : {
          title: `# ${previousPage}`,
          url: this.pageUrl(previousPage)
        }
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