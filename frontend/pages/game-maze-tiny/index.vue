<template>
  <div>
    <GameMazeTiny />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GameMazeTiny from '~/components/maze/GameMazeTiny.vue'

export default Vue.extend({
  layout: 'game',
  components: {
    GameMazeTiny
  },
  head() {
    return {
      title: 'タイニーめいろ'
    }
  },
  async asyncData(context: Context) {
    const params:any = context.params
    console.log(params)
    return {
      gameMode: params.mode
    }
  }
})
</script>
