<template>
  <div class="game-page">
    <GameMul99 :gameMode="mode" :questionCount="count" @change-mode="onChangeMode" @ready="onReady" />
    <ReadyScreen v-if="isReady" :readyCount="readyCount_" />

    <div class="share-container" v-if="isEnd">
      <Share />
    </div>
    <Chat room="all" v-if="isEnd" />

    <GetStarScreen v-if="showGetStarScreen" :nextConditionCount="nextConditionCount" @dismiss="onDismissGetStarScreen" />
  </div>
</template>
<style lang="scss" scoped>
.game-page {
  min-height: calc(100vh - 80px);
}
.share-container {
  position: fixed;
  bottom:0;
}
</style>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GamePageMixin from '~/components/page/GamePageMixin.vue'
import GameMul99 from '~/components/e2/GameMul99.vue'
import ReadyScreen from '~/components/game/ReadyScreen.vue'
import GetStarScreen from '~/components/effects/GetStarScreen.vue'

export default Vue.extend({
  mixins: [
    GamePageMixin
  ],
  components: {
    GameMul99,
    ReadyScreen,
    GetStarScreen
  },
  async asyncData(context: Context) {
    const params = context.params
    const [ mode, count ] = params.game.split('-')
    return {
      gameMode_: params.game,
      mode: mode,
      count: parseInt(count) || -1
    }
  },
})
</script>
