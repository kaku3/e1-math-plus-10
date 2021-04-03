<template>
  <div>
    <GamePlusSingle @change-mode="onChangeMode" @ready="onReady" />
    <ReadyScreen v-if="mode_ === 'ready'" :readyCount="readyCount_" />
    <GetStarScreen v-if="showGetStarScreen" :nextConditionCount="nextConditionCount" @dismiss="onDismissGetStarScreen" />
  </div>
</template>
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
      mode: params.game
    }
  }
})
</script>
