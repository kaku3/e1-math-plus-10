<template>
  <div>
    <v-row>
      <v-col cols="mr-auto" class="text-h5">
        かけざん９９
      </v-col>
      <v-col cols="auto">
        <v-btn outlined to="/">
          <v-icon>mdi-home-circle</v-icon>ほーむ
        </v-btn>
      </v-col>
    </v-row>
    <GameMul99History class="mt-2" :gameMode="gameMode" :questionCount="questionCount" />
    <Chat room="all" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GameMul99History from '~/components/e2/GameMul99History.vue'

export default Vue.extend({
  components: {
    GameMul99History
  },
  head() {
    return {
      title: 'かけざん９９'
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
