<template>
  <div>
    <v-row>
      <v-col cols="mr-auto" class="text-h5">
        かけざん９ｘ
      </v-col>
      <v-col cols="auto">
        <v-btn icon @click="showTextBook = true">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
        <v-btn outlined to="/">
          <v-icon>mdi-home-circle</v-icon>ほーむ
        </v-btn>
      </v-col>
    </v-row>
    <GameMul9xHistory class="mt-2" :gameMode="gameMode" :questionCount="questionCount" />
    <Chat room="all" />

    <v-dialog v-model="showTextBook" fullscreen>
      <v-card>
        <v-card-text>
          <nuxt-content :document="textBook" />
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn @click="showTextBook = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>
<style lang="scss" scoped src="~/scss/text-book.scss" />
<style lang="scss">
.v-dialog {
  .v-card {
    .v-card__text {
      padding: 1rem .5rem;
    }
  }
}

</style>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GameMul9xHistory from '~/components/e3/GameMul9xHistory.vue'

export default Vue.extend({
  components: {
    GameMul9xHistory
  },
  head() {
    return {
      title: 'かけざん９ｘ'
    }
  },
  async asyncData({ $content, params}) {
    console.log(params)
    const textBook = await $content('e3/mul9x').fetch()

    return {
      textBook,
      gameMode: params.mode,
      questionCount: parseInt(params.count) || -1
    }
  },
  data () {
    return {
      showTextBook: false
    }
  }
})
</script>
