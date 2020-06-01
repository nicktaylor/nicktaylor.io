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
    border-left: 0.5em solid var(--content-color-main);
    margin-left: 0.5em;
    padding-left: 1em;
    font-size: 1.2em;
    color: var(--content-color-main);
    text-align: justify;
  }

  .text {

  }

  .ref {
    margin-top: 0.5em;
    font-size: 0.8em;
    text-align: right;
    color: var(--text-color);

    span {
      display: inline-block;
    }

    span + time {
      margin-left: 1em;
    }

    time {
      display: inline-block;
      font-size: 0.8em;
    }
  }
  @media screen and (min-width: 576px) {
    .quote {
      margin-left: 2em;
      font-size: 1.4em;
    }
  }
</style>