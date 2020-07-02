<template>
  <header :class="[
      $style.header,
      showImage ? $style.image : '',
      layout ? $style[layout] : '',
      fade ? $style.fade : ''
      ]">
    <div :class="$style.imageContainer">
      <Picture v-if="showImage"
               :default-height="250"
               :default-width="600"
               :image="image || $context.mainImage"
               :media="[
                     {minWidth: 1900, width: 1700, height: 450},
                     {minWidth: 1200, width: 1400, height: 450},
                     {minWidth: 768, width: 1200, height: 350},
                     {minWidth: 576, width: 768, height: 150},
                     ]"
      />
    </div>
    <div :class="$style.headoverlay">
      <h1 :title="getTitle">{{getTitle}}</h1>
      <time v-if="showDate"
            :title="$context.nicePublishedAt"
            datetime="$context.publishedAt">
        {{$context.nicePublishedAt}}
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
      fade: Boolean,
      image: Object,
      title: String,
      layout: String,
    },
    computed: {
      dateAndTime() {
        return new Date(this.datetime)
      },
      getTitle() {
        return !this.$context.title || this.$context.title.length === 0 ? this.$props.title : this.$context.title
      }
    }
  }
</script>

<style lang="postcss" module>

  .header {
    display: block;
    box-sizing: border-box;
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
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        object-fit: cover;
      }

      &.fade {
        background: none;

        img {
          opacity: 0.2;
        }
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
          padding-right: 10px;
          content: attr(title);
          display: block;
          position: absolute;
        }
      }

      &.contain {
        object-fit: contain;

        img {
          object-fit: contain;
        }
      }
    }

    .headoverlay {
      padding: var(--padding-small);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      & > * {
        max-width: 980px;
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
      height: 250px;

      .headoverlay {
        padding: var(--padding-medium);
      }

      h1, h2, h2 {
        font-size: 1.9em;
        line-height: 1.3;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .contain .imageContainer {
      max-width: 1400px;
      margin: auto;
      position: relative;
      height: 100%;
    }


    .header {
      height: 350px;

      h1, h2, h2 {
        font-size: 2.3em;
        line-height: 1.3;
      }
    }
  }

  @media screen and (min-width: 1900px) {
    .contain .imageContainer {
      max-width: 1700px;
    }

    .header {
      height: 450px;

      h1, h2, h2 {
        font-size: 2.3em;
        line-height: 1.3;
      }
    }
  }
</style>