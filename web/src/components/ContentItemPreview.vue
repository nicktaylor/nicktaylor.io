<template>
  <article :class="$style.item">
    <div :class="$style.image"></div>
    <div :class="$style.content">
      <header :class="$style.header">
        <h1>{{title}}</h1>
        <time v-if="datetime" :datetime="datetime">{{datetime | niceDateFormat}}</time>
      </header>
      <p :class="$style.text">{{text}}</p>
      <footer :class="$style.footer" v-if="url">
        <g-link :to="url">read</g-link>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    datetime: Date,
    text: String,
    url: String,
  },
}
</script>

<style lang="postcss" module>
.item {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  gap: 1.5rem;
}

.text {
  margin: 0.5rem 0 0 0;
}

.header {
  h1 {
    font-family: 'wotfardmedium';
    font-weight: normal;
    color: var(--content-color-main);
    font-size: 1.4rem;
  }

  time {
    color: var(--content-color-main);
    filter: opacity(80%);
    font-size: 0.8rem;
  }
}

.image {
  height: 100%;
  min-height: 150px;
  width: 100%;
  background-color: var(--content-color-faded);
}

@media screen and (min-width: 576px) {
  .item {
    grid-gap: 2.5rem;
    gap: 2.5rem;
    grid-template-columns: 30% 1fr;
  }

  .header {
    h1 {
      font-size: 1.6rem;
    }

    time {
      font-size: 0.9rem;
    }
  }
}
</style>