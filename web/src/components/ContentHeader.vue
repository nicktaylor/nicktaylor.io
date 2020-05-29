<template>
  <header :class="[$style.header, showImage ? $style.image : '']">
    <Picture v-if="showImage"
             :default-height="200"
             :default-width="500"
             :image="image || $context.mainImage"
             :media="[
                   {minWidth: 576, width: 980, height: 250},
                   {minWidth: 980, width: 1200, height: 250},
                   {minWidth: 1200, width: 1800, height: 250},
                   ]"
    />
    <div :class="$style.headoverlay">
      <h1 :title="$context.title.toLowerCase()">{{$context.title.toLowerCase()}}</h1>
      <time v-if="showDate"
            :title="datetime | niceDateFormat"
            datetime="$context.publishedAt">
        {{datetime | niceDateFormat}}
      </time>
    </div>
  </header>
</template>

<script>
  import Picture from "~/components/Picture";

  export default {
    name: "ContentHeader",
    components: {Picture},
    props: {
      showDate: Boolean,
      showImage: Boolean,
      image: Object,
      title: String
    },
    computed: {
      dateAndTime() {
        return new Date(this.datetime)
      }
    }
  }
</script>

<style lang="postcss" module>
  .header {
    display: block;
    box-sizing: border-box;
    padding: var(--padding-small);
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
    position: relative;
    height: 150px;

    time {
      color: var(--content-color-main);
    }

    h1,
    h2 {
      color: var(--content-color-main);
      font-weight: 500;
      font-family: var(--font-title);
      font-size: 1.6em;
    }

    &.image {
      object-fit: cover;
      background: none;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        object-fit: cover;
        opacity: 0.2;
      }

      h1, h2, h3 {
        position: relative;
        -webkit-text-stroke: 5px white;

        &:before {
          -webkit-text-stroke: 0px transparent;
          content: attr(title);
          display: block;
          position: absolute;
        }
      }

      time {
        position: relative;
        -webkit-text-stroke: 4px white;

        &:before {
          -webkit-text-stroke: 0px transparent;
          content: attr(title);
          display: block;
          position: absolute;
        }
      }
    }

    .headoverlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: var(--padding-small) 0;

      & > * {
        max-width: 980px;
        padding: 0 var(--padding-small);
        box-sizing: border-box;
        margin: auto;
        display: block;
      }
    }

    .title {
      bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      height: 220px;

      h1, h2, h2 {
        font-size: 1.9em;
        line-height: 1.3;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .header {
      height: 250px;
    }
  }
</style>