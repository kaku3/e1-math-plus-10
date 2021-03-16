<template>
  <Game :gameMode="mode" :questionCount="count" />
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData(context: Context) {
    const params = context.params
    return {
      mode: params.mode,
      count: params.count
    }
  }
})
</script>
