<template>
  <div :class="[$style.hamburger, $style.spin, openOrClosed]" @click="onToggle">
    <div :class="$style.lines"></div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
    onToggle: Function,
  },
  computed: {
    openOrClosed() {
      return this.open ? this.$style.open : this.$style.closed
    },
  },
}
</script>

<style lang="postcss" module>
.hamburger {
  --hamburger-stroke: 4px;
  --hamburger-gap: 6px;
  --hamburger-width: 30px;
  --hamburger-pos-adjust: 1;
  --hamburger-duration: 0.5s;
  --hamburger-colour: var(--border-color);

  width: var(--hamburger-width);
  height: calc((var(--hamburger-gap) * 2) + (var(--hamburger-stroke) * 3));
  position: relative;
  cursor: pointer;
  display: grid;
  align-items: center;
}

.lines,
.lines:before,
.lines:after {
  height: var(--hamburger-stroke);
  border-radius: var(--hamburger-stroke);
  border-color: var(--hamburger-colour);
  border-width: 0px;
  box-sizing: border-box;
  background-color: var(--hamburger-colour);
  position: absolute;
  width: var(--hamburger-width);
}

.lines:before {
  content: '';
  --hamburger-pos-adjust: -1;
  transform: translateY(
    calc((var(--hamburger-stroke) + var(--hamburger-gap)) * -1)
  );
}

.lines:after {
  content: '';
  transform: translateY(calc(var(--hamburger-stroke) + var(--hamburger-gap)));
}

.spin.closed {
  & .lines:before,
  & .lines:after {
    animation: hamburger-spin-reverse var(--hamburger-duration) forwards;
  }

  & .lines {
    animation: hamburger-spin-middle-reverse var(--hamburger-duration) forwards
      alc(var(--hamburger-duration) / 2);
  }
}

.spin.open {
  & .lines:before,
  & .lines:after {
    animation: hamburger-spin var(--hamburger-duration) forwards;
  }

  & .lines {
    animation: hamburger-spin-middle var(--hamburger-duration) forwards
      calc(var(--hamburger-duration) / 2);
  }
}

@keyframes hamburger-spin-middle-reverse {
  0% {
    transform: rotate(calc(45deg * var(--hamburger-pos-adjust)));
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes hamburger-spin-reverse {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(
      calc(
        (var(--hamburger-stroke) + var(--hamburger-gap)) *
          var(--hamburger-pos-adjust)
      )
    );
  }
}

@keyframes hamburger-spin-middle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(calc(45deg * var(--hamburger-pos-adjust)));
  }
}

@keyframes hamburger-spin {
  0% {
    transform: translateY(
      calc(
        (var(--hamburger-stroke) + var(--hamburger-gap)) *
          var(--hamburger-pos-adjust)
      )
    );
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>