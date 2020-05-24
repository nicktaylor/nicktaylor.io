<template>
  <div :class="$style[link.class]" @mouseup="click">
    <span @mouseover="mouseOver" @mouseout="mouseOut">
      <g-link :key="link.title" ref="gLink" :to="link.url">{{link.title}}</g-link>
    </span>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/all'

export default {
  props: {
    link: Object,
    onClick: Function
  },
  data: function() {
    return {
      afterRule: null,
      beforeRule: null,
      tl: gsap.timeline(),
    }
  },
  methods: {
    removeBrackets: function() {
      this.tl.to(this.beforeRule, {
        cssRule: { opacity: 0, left: 0 },
        duration: 0.15,
      })
      this.tl.to(this.afterRule, {
        cssRule: { opacity: 0, right: 0 },
        duration: 0.15,
      })
    },
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
    mouseOut: function() {
      this.removeBrackets()
    },
    click: function(el) {
      this.removeBrackets()
      this.onClick()
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
  color: var(--color-one-darkbg);
  &:before,
  &:after {
    color: var(--color-one-darkbg);
  }
  &:before {
    content: '<';
  }
  &:after {
    content: '>';
  }
}

.two a {
  color: var(--color-two-darkbg);
  &:before,
  &:after {
    color: var(--color-two-darkbg]);
  }
  &:before {
    content: '{';
  }
  &:after {
    content: '}';
  }
}

.three a {
  color: var(--color-three-darkbg);
  &:before,
  &:after {
    color: var(--color-three-darkbg);
  }
  &:before {
    content: '(';
  }
  &:after {
    content: ')';
  }
}

.four a {
  color: var(--color-four-darkbg);

  &:before,
  &:after {
    color: var(--color-four-darkbg);
  }
  &:before {
    content: '[';
  }
  &:after {
    content: ']';
  }
}
</style>