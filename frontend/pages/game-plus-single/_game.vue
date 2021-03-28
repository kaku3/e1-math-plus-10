<template>
  <GamePlusSingle />
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GamePlusSingle from '~/components/e1/GamePlusSingle.vue'

export default Vue.extend({
  components: {
    GamePlusSingle
  },
  async asyncData(context: Context) {
    const params = context.params
    console.log(context)
    return {
      mode: params.game
    }
  }
})
</script>
