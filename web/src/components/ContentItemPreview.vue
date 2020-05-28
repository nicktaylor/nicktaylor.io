<template>
  <article :class="$style.item">
    <g-link :to="url" active-class=" ">
      <div :class="$style.image">
        <Picture v-if="image != undefined" :image="image" :default-width="550" :default-height="344"
                 :media="[{minWidth: 576, width: 240, height: 150}]"/>
      </div>
      <div :class="$style.content">
        <header :class="$style.header">
          <h1>{{title}}</h1>
          <time v-if="datetime" :datetime="datetime">{{niceDatetime}}</time>
        </header>
        <p :class="$style.text">{{text}}</p>
        <footer :class="$style.footer" v-if="url">
          <span :class="$style.action">
            Let's do this
            <ArrowSvg/>
          </span>
        </footer>
      </div>
    </g-link>
  </article>
</template>

<script>
  import ArrowSvg from '~/components/ArrowSvg'
  import Picture from '~/components/Picture'

  export default {
    components: {
      ArrowSvg,
      Picture,
    },
    props: {
      title: String,
      datetime: String,
      niceDatetime: String,
      text: String,
      url: String,
      image: Object,
    },
  }
</script>

<style lang="postcss" module>
  .action {
    color: var(--content-color-action);
    font-family: var(--font-normal);
    font-weight: lighter;
    font-size: 1rem;
    display: inline-block;
    position: relative;

    svg {
      height: 1.2rem;
      position: absolute;
      left: calc(100% + 0.5rem);
      top: calc(50% - 0.6rem);

      circle {
        fill: var(--content-color-action);
      }
    }
  }

  .item > a {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    gap: 1.5rem;
    text-decoration: none;

    .text {
      margin: 0.5rem 0 0.5rem 0;
      color: var(--text-color);
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }

    .header {
      h1, h2, h3 {
        font-family: var(--font-normal);
        font-weight: bold;
        color: var(--content-color-main);
        font-size: 1.4rem;
        margin: 0;
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
      background-color: var(--content-color-faded);
      position: relative;
      border: 2px solid var(--content-color-faded);
      object-fit: cover;


      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        height: 0.8rem;
        width: 1.6rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom: 0;
        opacity: 0.1;
      }

      &:before {
        background-color: var(--color-one);
        transform: translate(-0.8rem, -0.3rem) rotate(-45deg);
      }

      &:after {
        right: 0;
        bottom: 0;
        background-color: var(--color-four);
        transform: translate(0.8rem, 0.3rem) rotate(-225deg);
      }
    }

    .content {
      display: flex;
      flex-direction: column;

      & > p {
        flex-grow: 1;
      }
    }

    &:hover .action {
      text-decoration: underline;

      svg {
        animation: arrow-move 1s infinite;
      }
    }
  }

  @keyframes arrow-move {
    0% {
      transform: translate(0rem);
    }
    50% {
      transform: translate(0.3rem);
    }
  }

  @media screen and (min-width: 576px) {
    .item > a {
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