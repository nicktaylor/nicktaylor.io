<template>
  <article :class="$style.item">
    <g-link :to="url" active-class=" ">
      <div :class="$style.image"></div>
      <div :class="$style.content">
        <header :class="$style.header">
          <h1>{{title}}</h1>
          <time v-if="datetime" :datetime="datetime">{{datetime | niceDateFormat}}</time>
        </header>
        <p :class="$style.text">{{text}}</p>
        <footer :class="$style.footer" v-if="url">
          <span :class="$style.action">
            Let's do this
            <svg
              viewBox="0 0 110 200"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
            >
              <g>
                <circle cx="1100" cy="910" r="10" transform="translate(-1090 -870)" />
                <circle cx="1100" cy="910" r="10" transform="translate(-1090 -840)" />
                <circle cx="1100" cy="910" r="10" transform="translate(-1090 -810)" />
                <circle cx="1100" cy="910" r="10" transform="translate(-1090 -780)" />
                <circle cx="1100" cy="910" r="10" transform="translate(-1090 -750)" />
              </g>
              <g>
                <circle cx="1100" cy="910" r="10" transform="translate(-1060 -840)" />
                <circle cx="1100" cy="910" r="10" transform="translate(-1060 -810)" />
                <circle cx="1100" cy="910" r="10" transform="translate(-1060 -780)" />
              </g>
              <g transform="translate(-1030 -810)">
                <circle cx="1100" cy="910" r="10" />
              </g>
            </svg>
          </span>
        </footer>
      </div>
    </g-link>
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
.action {
  color: var(--content-color-action);
  font-family: 'wotfardlight';
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
    width: 100%;
    height: 100%;
    min-height: 150px;
    background-color: var(--content-color-faded);
    position: relative;

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
    font-display: column;
    flex-direction: column;

    & > p {
      flex-grow: 1;
    }
  }

  &:hover .action {
    animation: color-rotate 1.5s infinite;
    svg {
      animation: arrow-move 1.5s infinite;
      & > g > circle {
        animation: color-rotate-arrow 1.5s infinite;
      }
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

@keyframes color-rotate-arrow {
  0% {
    fill: var(--content-color-action);
  }
  25% {
    fill: var(--content-color-two);
  }
  50% {
    fill: var(--content-color-three);
  }
  75% {
    fill: var(--content-color-main);
  }
}

@keyframes color-rotate {
  0% {
    color: var(--content-color-action);
    fill: var(--content-color-action);
  }
  25% {
    color: var(--content-color-two);
    fill: var(--content-color-two);
  }
  50% {
    color: var(--content-color-three);
    fill: var(--content-color-three);
  }
  75% {
    color: var(--content-color-main);
    fill: var(--content-color-main);
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