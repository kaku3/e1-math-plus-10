<template>
  <v-card color="grey lighten-3">
    <v-row v-for="(o, i) in hiscores" :key="i" class="score-item" dense>
      <v-col cols="mr-auto" class="mode">{{ o.e.mode | displayModeName }}</v-col>
      <v-col cols="auto" class="score">{{ o.e.score | fixed2 }}<span>({{ o.diff | signed }})</span></v-col>
      <v-col cols="auto" ><v-btn icon x-small @click="play(o.e.mode)"><v-icon>mdi-play</v-icon></v-btn></v-col>
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

import { displayModeName, signed, fixed2 } from '~/utils/filters'

function asc(a:ScoreEntity, b:ScoreEntity): number {
  return a.score - b.score
}
function desc(a:ScoreEntity, b:ScoreEntity): number {
  return b.score - a.score
}

type DisplayDailyHiscore = {
  e: ScoreEntity,
  diff: number
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
    getDailyHiscore(mode:GameMode, order:any): DisplayDailyHiscore {
      const d = new Date()
      const start = d.setHours(0,0,0,0)
      const yesterday = d.setDate(d.getDate() - 1)

      const _2days = this.scoreStore.scores
        .filter(s => s.mode === mode)
        .filter(s => (s.createdAt >= yesterday))
        .sort(order)

      const scores = _2days
        .filter(s => (s.createdAt >= start))
        .sort(order)
      const oldScores = _2days
        .filter(s => (s.createdAt < start))
        .sort(order)

      console.log(mode, scores)

      if(scores.length > 0) {
        const diff = oldScores.length > 0 ? scores[0].score - oldScores[0].score : 0
        return {
          e: scores[0],
          diff: diff
        }
      }
      return {
        e: NullScoreEntity(mode),
        diff: 0
      }
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
    hiscores(): DisplayDailyHiscore[] {
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
          hiscores.push(this.getDailyHiscore('minusEndress', desc))
          break
      }
      return hiscores
    },
  },
  filters: {
    displayModeName,
    signed,
    fixed2
  }
})
</script>
