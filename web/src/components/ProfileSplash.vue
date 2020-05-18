<template>
  <div :class="splash ? $style.splash : $style.header">
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
    splash: Boolean,
    classes: String,
  },
  components: {
    ProfilePicture,
    ProfileTitle,
  },
}
</script>

<style lang="postcss" module>
</style>