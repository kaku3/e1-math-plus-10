<template>
  <Title :gameMode="mode" :questionCount="count" />
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData(context: Context) {
    const params:any = context.from.params
    console.log(params)
    return {
      mode: params.mode,
      count: params.count
    }
  }
})
</script>
