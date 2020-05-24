<template>
  <svg
          viewBox="0 0 90 200"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
  >
    <template v-if="direction === 'left'">
      <g>
        <circle cx="1100" cy="910" r="10" transform="translate(-1030 -870)" />
        <circle cx="1100" cy="910" r="10" transform="translate(-1030 -840)" />
        <circle cx="1100" cy="910" r="10" transform="translate(-1030 -810)" />
        <circle cx="1100" cy="910" r="10" transform="translate(-1030 -780)" />
        <circle cx="1100" cy="910" r="10" transform="translate(-1030 -750)" />
      </g>
      <g>
        <circle cx="1100" cy="910" r="10" transform="translate(-1060 -840)" />
        <circle cx="1100" cy="910" r="10" transform="translate(-1060 -810)" />
        <circle cx="1100" cy="910" r="10" transform="translate(-1060 -780)" />
      </g>
      <g transform="translate(-1090 -810)">
        <circle cx="1100" cy="910" r="10" />
      </g>
    </template>
    <template v-else="direction === null || direction === 'right">
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
    </template>
  </svg>
</template>

<script>
  export default {
    name: 'ArrowSvg',
    props: {
      direction: String
    }
  }
</script>

<style scoped>

</style>