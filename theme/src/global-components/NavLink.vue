<template>
  <router-link
    v-if="!isExternal(normalizedlink)"
    :to="normalizedlink"
    :exact="exact"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="normalizedlink"
    class="external"
    :target="isMailto(normalizedlink) || isTel(normalizedlink) ? null : '_blank'"
    :rel="isMailto(normalizedlink) || isTel(normalizedlink) ? null : 'noopener noreferrer'"
  >
    <slot />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../components/util'

export default {
  props: {
    link: {
      required: true,
      type: String,
    },
  },

  computed: {
    normalizedlink () {
      return ensureExt(this.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.normalizedlink)
      }
      return this.normalizedlink === '/'
    },
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
}
</script>

<style lang="stylus">
.nav-link
  color #222

.nav-link
  &:hover, &.router-link-active
    color $accentColor
</style>
