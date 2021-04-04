<template>
  <div class="game-page">
    <GamePlusSingle @change-mode="onChangeMode" @ready="onReady" />
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
