<template>
  <div>
    <v-row>
      <v-col cols="mr-auto" class="text-h5">
        ひきざん２０
      </v-col>
      <v-col cols="auto">
        <v-btn outlined to="/">
          <v-icon>mdi-home-circle</v-icon>ほーむ
        </v-btn>
      </v-col>
    </v-row>
    <GameMinus20History class="mt-2" :gameMode="gameMode" :questionCount="questionCount" />
    <Chat room="all" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GameMinus20History from '~/components/e1/GameMinus20History.vue'

export default Vue.extend({
  components: {
    GameMinus20History
  },
  head() {
    return {
      title: 'ひきざん２０'
    }
  },
  async asyncData(context: Context) {
    const params:any = context.params
    console.log(params)
    return {
      gameMode: params.mode,
      questionCount: parseInt(params.count) || -1
    }
  }
})
</script>
