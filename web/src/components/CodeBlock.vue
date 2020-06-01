<template>
  <div :class="$style.code"><prism language="javascript">{{ code }}</prism></div>
</template>

<script>
  import 'prismjs'
  import '~/assets/css/prism-custom.css'
  import Prism from 'vue-prism-component'

  export default {
    name: "CodeBlock",
    props: {
      language: String,
      code: String,
    },
    components: {
      Prism
    },
  }
</script>

<style lang="postcss" module>
.code {
  & > * {
    font-size: 0.8em;
  }
}
</style>