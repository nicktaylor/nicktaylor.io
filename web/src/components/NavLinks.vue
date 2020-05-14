<template>
  <nav :class="$style.nav">
    <g-link
      v-for="item in links"
      :key="item.title"
      :to="item.slug.current"
      :class="convertToClass(item)"
    >
      <template v-if="item.linkTitle">{{ item.linkTitle.toLowerCase() }}</template>
      <template v-else>{{item.title.toLowerCase()}}</template>
    </g-link>
  </nav>
</template>

<script>
export default {
  props: {
    links: Array,
  },
  methods: {
    convertToClass(item) {
      return this.$style.one
    },
  },
}
</script>

<style lang="postcss" module>
.nav {
  display: flex;
  justify-content: center;
  margin-top: 2.5em;

  & > * {
    text-align: center;
    font-size: 1.6em;
    line-height: 1;
    cursor: pointer;
    position: relative;
    padding: 0 1em 0 1em;
  }
}

.nav {
  .one,
  .two,
  .three,
  .four {
    &:before,
    &:after {
      top: 0.13em;
      display: block;
      position: absolute;
      font-weight: bold;
      opacity: 0;
    }

    &:before {
      left: 0px;
    }

    &:after {
      right: 0px;
    }
  }

  & .one {
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
}
</style>