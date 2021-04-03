<template>
  <div>
    <GameMinus20 :gameMode="mode" :questionCount="count" @change-mode="onChangeMode" @ready="onReady" />
    <ReadyScreen v-if="mode_ === 'ready'" :readyCount="readyCount_" />
    <GetStarScreen v-if="showGetStarScreen" :nextConditionCount="nextConditionCount" @dismiss="onDismissGetStarScreen" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

import GamePageMixin from '~/components/page/GamePageMixin.vue'
import GameMinus20 from '~/components/e1/GameMinus20.vue'
import ReadyScreen from '~/components/game/ReadyScreen.vue'
import GetStarScreen from '~/components/effects/GetStarScreen.vue'

export default Vue.extend({
  mixins: [
    GamePageMixin
  ],
  components: {
    GameMinus20,
    ReadyScreen,
    GetStarScreen
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
