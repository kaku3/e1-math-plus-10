<template>
  <GamePlusSingle />
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData(context: Context) {
    const params = context.params
    console.log(context)
    return {
      mode: params.game
    }
  }
})
</script>
