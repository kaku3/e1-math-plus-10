<template>
  <v-card>
    <v-card-text>
      <v-row v-for="(o, i) in hiscores" :key="i">
        <v-col cols="auto">{{o.name}}</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">{{o.score}}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>

</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

export default Vue.extend({
  props: {
    'gameMode': {
      type: String,
      default: 'modeEndress'
    },
    'questionCount': {
      type: Number,
      default: 0
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    hiscores(): ScoreEntity[] {
      switch(this.displayGameMode) {
        case 'modeSprint-10':
          return this.scoreStore.sprint10Hiscores
        case 'modeSprint-30':
          return this.scoreStore.sprint10Hiscores
        default:
          return this.scoreStore.endressHiscores
      }
    },
    displayGameMode(): GameMode {
      if(this.gameMode == 'modeEndress') {
        return this.gameMode
      } else {
        return `${this.gameMode}-${this.questionCount}` as GameMode
      }
    }
  }
})
</script>
