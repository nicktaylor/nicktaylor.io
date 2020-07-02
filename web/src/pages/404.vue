<template>
  <Layout :splash="false">
    <main :class="$style.page404">
      <ContentHeader title="Page Not Found" />
      <p>Sorry, but the page you were looking for could not be found.</p>
      <p>Why not start again at my <g-link to="/">homepage</g-link>.</p>
    </main>
  </Layout>
</template>

<page-query>
  query {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
  }
</page-query>

<script>
  import PageNavigation from '~/components/PageNavigation'
  import CodeBlock from "~/components/CodeBlock";
  import ContentHeader from '~/components/ContentHeader'

  export default {
    components: { ContentHeader, CodeBlock, PageNavigation},
    props: {
      datetime: String,
      title: String,
    },
  }
</script>

<style lang="postcss" module>
  .page404 {
    p {
      max-width: 980px;
      margin-left: auto;
      margin-right: auto;
      padding-right: var(--padding-small);
      padding-left: var(--padding-small);
    }

    @media screen and (min-width: 768px) {
      p {
        padding-right: var(--padding-medium);
        padding-left: var(--padding-medium);
      }
    }
  }
</style>