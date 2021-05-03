<template>
  <v-card>
    <v-card-text>
      <nuxt-content :document="doc" />
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
::v-deep h2 {
  margin-top: 1.5rem;
  margin-bottom: .5rem;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const doc = await $content('credits').fetch()
    return { doc }
  }
})
</script>
