<template>
  <v-card color="grey lighten-3">
    <v-row v-for="(o, i) in hiscores" :key="i" class="score-item" dense>
      <v-col cols="mr-auto" class="mode">{{ o.mode | displayModeName }}</v-col>
      <v-col cols="auto" class="score">{{o.score}}</v-col>
      <v-col cols="auto" ><v-btn icon x-small @click="play(o.mode)"><v-icon>mdi-play</v-icon></v-btn></v-col>
    </v-row>
  </v-card>
</template>
<style lang="scss" scoped>
.score-item {
  padding-left: 1.5rem;
  padding-right: .5rem;
  font-size: .8rem;
  > .score {
    font-family: 'Fredoka One';
  }
  + .score-item {
    border-top: 1px solid #BDBDBD;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, NullScoreEntity, GameMode } from '~/models/Score'

function asc(a:number, b:number): number {
  return a - b
}
function desc(a:number, b:number): number {
  return b - a
}

function displayModeName(mode:GameMode): string {
  switch(mode) {
    case 'modeSprint-10':
    case 'minusSprint-10':
      return '10問モード'
    case 'modeSprint-30':
    case 'minusSprint-30':
      return '30問モード'
    case 'modeEndress':
    case 'minusEndress':
      return 'たいきゅうモード'
    case 'modeSingle':
      return 'ヒトケタス'
  }
}

export default Vue.extend({
  props: {
    'game': {
      type: String,
      default: 'plus-10'
    },
  },
  mounted () {

  },
  methods: {
    getDailyHiscore(mode:GameMode, order:any): ScoreEntity {
      const d = new Date()
      const start = d.setHours(0,0,0,0)
      const scores = this.scoreStore.scores
        .filter(s => s.mode === mode)
        .filter(s => (s.createdAt >= start))
        .sort(order)

      console.log(scores)

      if(scores.length > 0) {
        return scores[0]
      }
      return NullScoreEntity(mode)
    },
    play(mode:GameMode) {
      switch(mode) {
        case 'modeSprint-10':
        case 'modeSprint-30':
        case 'modeEndress':
          this.$router.replace({ path: `/game-plus-10/${mode}` })
          break

        case 'modeSingle':
          this.$router.replace({ path: `/game-plus-single/${mode}` })
          break

        case 'minusSprint-10':
        case 'minusSprint-30':
        case 'minusEndress':
          this.$router.replace({ path: `/game-minus-20/${mode}` })
          break
      }
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    hiscores(): ScoreEntity[] {
      const hiscores = []
      switch(this.game) {
        case 'plus-10':
          hiscores.push(this.getDailyHiscore('modeSprint-10', asc))
          hiscores.push(this.getDailyHiscore('modeSprint-30', asc))
          hiscores.push(this.getDailyHiscore('modeEndress', desc))
          break
        case 'plus-single':
          hiscores.push(this.getDailyHiscore('modeSingle', desc))
          break
        case 'minus-20':
          hiscores.push(this.getDailyHiscore('minusSprint-10', asc))
          hiscores.push(this.getDailyHiscore('minusSprint-30', asc))
          hiscores.push(this.getDailyHiscore('minusEndress', asc))
          break
      }
      return hiscores
    },
  },
  filters: {
    displayModeName
  }
})
</script>
