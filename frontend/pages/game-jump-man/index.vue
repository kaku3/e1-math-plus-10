<template>
  <div>
    <GameJumpMan />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GameJumpMan from '~/components/jumpMan/GameJumpMan.vue'

export default Vue.extend({
  layout: 'game',
  components: {
    GameJumpMan
  },
  head() {
    return {
      title: 'JUMP MAN'
    }
  },
  // async asyncData(context: Context) {
  //   const params:any = context.params
  //   console.log(params)
  //   return {
  //   }
  // }
})
</script>
