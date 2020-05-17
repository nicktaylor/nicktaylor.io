<template>
  <div :class="$style[link.class]" @mouseover="mouseOver" @mouseout="mouseOut">
    <g-link :key="link.title" ref="gLink" :to="link.url">{{link.title}}</g-link>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/all'

export default {
  props: {
    link: Object,
  },
  data: function() {
    return {
      afterRule: null,
      beforeRule: null,
      tl: gsap.timeline(),
    }
  },
  methods: {
    mouseOver: function(el) {
      this.tl.to(this.beforeRule, {
        cssRule: { opacity: 1, left: '0.3em' },
        ease: 'elastic.out(1, 0.3)',
        duration: 0.25,
      })
      this.tl.to(this.afterRule, {
        cssRule: { opacity: 1, right: '0.3em' },
        ease: 'elastic.out(1, 0.3)',
        duration: 0.25,
      })
    },
    mouseOut: function(el) {
      this.tl.to(this.beforeRule, {
        cssRule: { opacity: 0, left: 0 },
        duration: 0.15,
      })
      this.tl.to(this.afterRule, {
        cssRule: { opacity: 0, right: 0 },
        duration: 0.15,
      })
    },
  },
  mounted: function(props) {
    this.beforeRule = CSSRulePlugin.getRule(
      `.${this.$style[this.$props.link.class]} a:before`
    )
    this.tl.set(this.beforeRule, {
      cssRule: { opacity: 0, left: '0px' },
    })

    this.afterRule = CSSRulePlugin.getRule(
      `.${this.$style[this.$props.link.class]} a:after`
    )
    this.tl.set(this.afterRule, {
      cssRule: { opacity: 0, right: '0px' },
    })
  },
}
</script>

<style lang="postcss" module>
.one,
.two,
.three,
.four {
  & a:before,
  & a:after {
    top: 0.13em;
    display: block;
    position: absolute;
    font-weight: bold;
    opacity: 0;
    pointer-events: none;
  }

  & a:before {
    left: 0px;
  }

  & a:after {
    right: 0px;
  }
}

.one a {
  &:before,
  &:after {
    color: var(--color-one);
  }
  &:before {
    content: '<';
  }
  &:after {
    content: '>';
  }
}

.two a {
  &:before,
  &:after {
    color: var(--color-two);
  }
  &:before {
    content: '{';
  }
  &:after {
    content: '}';
  }
}

.three a {
  &:before,
  &:after {
    color: var(--color-three);
  }
  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }
}

.four a {
  &:before,
  &:after {
    color: var(--color-four);
  }
  &:before {
    content: '[';
  }
  &:after {
    content: ']';
  }
}
</style>