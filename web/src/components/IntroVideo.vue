<template>
  <div :class="$style.mainContainer">
    <div :class="$style.videoContainer">
      <Video :src="sources" />
    </div>
  </div>
</template>

<script>
  import Video from '~/components/Video'

  export default {
    name: 'IntroVideo',
    components: { Video },
    props: {
      sources: Array
    }
  }
</script>

<style lang="postcss" module>
  .mainContainer {
    padding: var(--padding-small) 0;
    background-color: var(--content-color-faded);
    background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 35px,
        rgba(255, 255, 255, 0.5) 35px,
        rgba(255, 255, 255, 0.5) 70px
    ),
    repeating-linear-gradient(
        45deg,
        transparent,
        transparent 70px,
        rgba(255, 255, 255, 0.5) 70px,
        rgba(255, 255, 255, 0.5) 105px
    );
  }

  .videoContainer {
    overflow: hidden;
    position: relative;
    width: 60vw;
    height: 60vw;
    max-height: 300px;
    max-width: 300px;
    margin: auto;
    border: 10px solid var(--content-color-main);
    border-radius: 50%;

    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: 4px solid white;
      box-sizing: border-box;
      opacity: 0.5;
    }

    video {
      position: absolute;
      top: calc(((60vw * 1.7776) - 90vw) / -2);
      width: 100%;
    }

  }

  @media (min-width: 768px) {
    .mainContainer {
      padding: var(--padding-medium) 0;
    }
    .videoContainer {
      border: 15px solid var(--content-color-main);

      video {
        top: -60px;
      }
    }
  }
</style>