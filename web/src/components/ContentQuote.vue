<template>
  <blockquote :class="$style.quote">
    <span :class="$style.text">&quot;{{text}}&quot;</span>
    <div v-if="date || name" :class="$style.ref">
      <span>{{name}}</span>
      <time :datetime="date">{{date | niceDateFormat}}</time>
    </div>
  </blockquote>
</template>

<script>
  export default {
    name: "ContentQuote",
    props: {
      text: String,
      name: String,
      date: String,
    }
  }
</script>

<style lang="postcss" module>
  .quote {
    border-left: 0.5em solid var(--content-color-two);
    margin-left: 0.5em;
    padding-left: 1em;
    font-size: 1.2em;
    color: var(--content-color-two);
    text-align: justify;
  }

  .ref {
    margin-top: 0.5em;
    font-size: 0.6em;
    text-align: right;
    color: var(--content-color-two);

    span {
      display: inline-block;
    }

    span + time {
      &:before {
        content: ' - ';
        display: inline-block;
        padding: 0 0.5em;
      }
    }

    time {
      display: inline-block;
    }
  }

  @media screen and (min-width: 576px) {
    .quote {
      margin-left: 2em;
      font-size: 1.4em;
    }
  }
</style>