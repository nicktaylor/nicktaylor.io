<template>
  <div :class="$style.splash">
    <ProfilePicture :image="image" :alt="name" />
    <ProfileTitle :slogan="slogan" :name="name" />
  </div>
</template>

<script>
import ProfilePicture from '~/components/ProfilePicture.vue'
import ProfileTitle from '~/components/ProfileTitle.vue'

export default {
  props: {
    image: Object,
    name: String,
    slogan: String,
  },
  components: {
    ProfilePicture,
    ProfileTitle,
  },
}
</script>

<style lang="postcss" module>
.splash {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 540px) {
  .splash {
    flex-direction: row;
    & > *:last-child {
      margin-left: 2.5em;
    }
  }
}
</style>