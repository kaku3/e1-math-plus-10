<template>
  <v-card color="grey lighten-3">
    <v-row v-for="(o, i) in hiscores" :key="i" class="score-item" dense>
      <v-col cols="mr-auto" class="mode blue-grey--text">{{ o.e.mode | displayModeName }}</v-col>
      <v-col cols="auto" class="score blue-grey--text text--darken-2" v-if="o.star > 0">{{ o.e.score | fixed2 }}<span>({{ o.diff | signed }})</span></v-col>
      <v-col cols="auto" :class="`star star-${o.star}`">★{{ o.star | pad3 }}</v-col>
      <v-col cols="auto" ><v-btn icon x-small @click="play(o.e.mode)" color="indigo"><v-icon>mdi-play</v-icon></v-btn></v-col>
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
  > .star {
    padding-left: .25rem;
    width: 2rem;
    font-family: 'Fredoka One';

    &.star-0 {
      color: #37474F;
    }
    &.star-1 {
      color: #00838F;
    }
    &.star-2 {
      color: #00BFA5;
    }
    &.star-3 {
      color: #7CB342;
    }
    &.star-4 {
      color: #FFC107;
    }
    &.star-5 {
      color: #FBC02D;
    }
    &.star-6 {
      color: #FFD600;
    }
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

import { dailyGameModeStarsOf } from '~/utils/star'

import { displayModeName, signed, fixed2 } from '~/utils/filters'

function asc(a:ScoreEntity, b:ScoreEntity): number {
  return a.score - b.score
}
function desc(a:ScoreEntity, b:ScoreEntity): number {
  return b.score - a.score
}

function pad3(v: number): string {
  return String(v).padStart(3, ' ')
}

type DisplayDailyHiscore = {
  e: ScoreEntity,
  diff: number,
  star: number
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

      // mode の全スコア
      const allScores = this.scoreStore.scores
        .filter(s => s.mode === mode)
        .sort(order)

      // mode の本日のスコア
      const scores = allScores
        .filter(s => (s.createdAt >= start))
        .sort(order)

      if(scores.length > 0) {
        const diff = allScores.length > 0 ? scores[0].score - allScores[0].score : 0
        return {
          e: scores[0],
          diff: diff,
          star: dailyGameModeStarsOf(scores, d, mode)
        }
      }
      return {
        e: NullScoreEntity(mode),
        diff: 0,
        star: 0
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

        case 'mul99Sprint-10':
        case 'mul99Sprint-30':
        case 'mul99Endress':
          this.$router.replace({ path: `/game-mul-99/${mode}` })
          break

        case 'mul1xSprint-10':
        case 'mul1xSprint-30':
        case 'mul1xEndress':
          this.$router.replace({ path: `/game-mul-1x/${mode}` })
          break
        case 'mul9xSprint-10':
        case 'mul9xSprint-30':
        case 'mul9xEndress':
          this.$router.replace({ path: `/game-mul-9x/${mode}` })
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

        case 'mul-99':
          hiscores.push(this.getDailyHiscore('mul99Sprint-10', asc))
          hiscores.push(this.getDailyHiscore('mul99Sprint-30', asc))
          hiscores.push(this.getDailyHiscore('mul99Endress', desc))
          break

        case 'mul-1x':
          hiscores.push(this.getDailyHiscore('mul1xSprint-10', asc))
          hiscores.push(this.getDailyHiscore('mul1xSprint-30', asc))
          hiscores.push(this.getDailyHiscore('mul1xEndress', desc))
          break

        case 'mul-9x':
          hiscores.push(this.getDailyHiscore('mul9xSprint-10', asc))
          hiscores.push(this.getDailyHiscore('mul9xSprint-30', asc))
          hiscores.push(this.getDailyHiscore('mul9xEndress', desc))
          break
      }
      return hiscores
    },
  },
  filters: {
    displayModeName,
    signed,
    fixed2,
    pad3
  }
})
</script>
