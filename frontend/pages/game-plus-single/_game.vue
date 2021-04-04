<template>
  <div class="game-page">
    <GamePlusSingle @change-mode="onChangeMode" @ready="onReady" />
    <ReadyScreen v-if="isReady" :readyCount="readyCount_" />
    <v-col cols="12" v-if="isEnd">
      <Share />
    </v-col>

    <GetStarScreen v-if="showGetStarScreen" :nextConditionCount="nextConditionCount" @dismiss="onDismissGetStarScreen" />
  </div>
</template>
<style lang="scss" scoped>
.game-page {
  min-height: calc(100vh - 80px);
}
</style>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GamePageMixin from '~/components/page/GamePageMixin.vue'
import GamePlusSingle from '~/components/e1/GamePlusSingle.vue'
import ReadyScreen from '~/components/game/ReadyScreen.vue'
import GetStarScreen from '~/components/effects/GetStarScreen.vue'

export default Vue.extend({
  mixins: [
    GamePageMixin
  ],
  components: {
    GamePlusSingle,
    ReadyScreen,
    GetStarScreen
  },
  async asyncData(context: Context) {
    const params = context.params
    console.log(context)
    return {
      gameMode_: params.game,
      mode: params.game
    }
  }
})
</script>
