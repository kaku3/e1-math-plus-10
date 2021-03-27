<template>
  <GameMinus20 :gameMode="mode" :questionCount="count" />
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GameMinus20 from '~/components/e1/GameMinus20.vue'

export default Vue.extend({
  components: {
    GameMinus20
  },
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
