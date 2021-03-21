<template>
  <GamePlus10 :gameMode="mode" :questionCount="count" />
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData(context: Context) {
    const params = context.params
    const [ mode, count ] = params.game.split('-')
    return {
      mode: mode,
      count: parseInt(count) || -1
    }
  }
})
</script>
