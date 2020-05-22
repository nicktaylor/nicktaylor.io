<template>
  <article :class="$style.item">
    <g-link :class="$style.image" :to="url"></g-link>
    <div :class="$style.content">
      <header :class="$style.header">
        <g-link :to="url">
          <h1>{{title}}</h1>
        </g-link>
        <time v-if="datetime" :datetime="datetime">{{datetime | niceDateFormat}}</time>
      </header>
      <p :class="$style.text">{{text}}</p>
      <footer :class="$style.footer" v-if="url">
        <g-link :to="url">
          Let's do this
          <svg
            viewBox="0 0 110 200"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <circle cx="1100" cy="910" r="10" transform="translate(-1060 -870)" />
            <circle cx="1100" cy="910" r="10" transform="translate(-1060 -840)" />
            <circle cx="1100" cy="910" r="10" transform="translate(-1060 -810)" />
            <circle cx="1100" cy="910" r="10" transform="translate(-1060 -780)" />
            <circle cx="1100" cy="910" r="10" transform="translate(-1060 -750)" />
            <g>
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -870)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -900)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -840)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -810)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -780)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -750)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1090 -720)" />
            </g>
            <g>
              <circle cx="1100" cy="910" r="10" transform="translate(-1030 -840)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1030 -810)" />
              <circle cx="1100" cy="910" r="10" transform="translate(-1030 -780)" />
            </g>
            <g transform="translate(-1000 -810)">
              <circle cx="1100" cy="910" r="10" />
            </g>
          </svg>
        </g-link>
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

.item {
  transform: rotate(-1deg);
  position: relative;

  &:after {
    transform: rotate(1deg);
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 100vw solid transparent;
    border-right: 100vw solid var(--content-color-two);
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    bottom: calc(var(--padding-xlarge) * -0.5);
    right: -50vw;
    opacity: 0.3;
  }
}

* > .item:nth-child(2n) {
  transform: rotate(1deg);

  &:after {
    transform: rotate(-1deg);
    border-left: 100vw solid var(--content-color-three);
    border-right: 100vw solid transparent;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    bottom: calc(var(--padding-xlarge) * -0.5);
    left: -50vw;
  }
}

* > .item:nth-child(4n) {
  &:after {
    border-left-color: var(--content-color-two);
  }
}

* > .item:nth-child(4n + 1) {
  &:after {
    border-right-color: var(--content-color-three);
  }
}

* > .item:nth-child(4n + 2) {
  &:after {
    border-left-color: var(--content-color-main);
  }
}

* > .item:nth-child(4n + 3) {
  &:after {
    border-right-color: var(--content-color-action);
  }
}

.content {
  display: flex;
  font-display: column;
  flex-direction: column;

  & > p {
    flex-grow: 1;
  }

  & > footer {
    a {
      color: var(--content-color-action);
      font-family: 'wotfardlight';
      font-size: 1rem;
      display: inline-block;
      position: relative;

      svg {
        height: 1rem;
        position: absolute;
        left: calc(100% + 0.5rem);
        top: calc(50% - 0.5rem);

        circle {
          fill: var(--content-color-action);
        }
      }
    }
  }
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