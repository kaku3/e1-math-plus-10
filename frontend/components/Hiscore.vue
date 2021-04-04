<template>
  <v-card>
    <v-card-title class="title"><v-icon>mdi-crown</v-icon>{{displayGameMode | displayModeName}}</v-card-title>
    <v-card-text>
      <v-row v-for="(o, i) in hiscores" :key="i" class="rankings" :class="{ entry: isLastScore(o) }">
        <v-col cols="auto" class="no">{{o.no}}</v-col>
        <v-col cols="mr-auto" class="name">{{o.name}}</v-col>
        <v-col cols="auto" class="value">{{displayScore(o.score)}}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.title {
  padding: .5rem .25rem;
}
.rankings {
  > * {
    padding: .25rem;
    font-size: .8rem;
  }
  + .rankings {
    margin-top: .25rem;
    border-top: 1px solid #E0E0E0;
  }
}


.entry {
  background-color: #F0F4C3;
}
.name {
  font-weight: bold;
}
.value {
  font-family: 'Fredoka One';
  font-size: 1rem;
}
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, NullScoreEntity, GameMode } from '~/models/Score'

import { displayModeName } from '~/utils/filters'

type RankingEntry = {
  no: number
  name: string
  score: number
  createdAt: number
}

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
  methods: {
    isLastScore(o: RankingEntry): boolean {
      return (this.lastScore.name === o.name && this.lastScore.score === o.score && this.lastScore.createdAt === o.createdAt)
    },
    displayScore(score: number) {
      if(this.gameMode !== 'modeEndress'
      && this.gameMode !== 'modeSingle'
      && this.gameMode !== 'minusEndress'
      && this.gameMode !== 'mul99Endress'
      ) {
        return score.toFixed(2)
      }
      return score
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    hiscores(): RankingEntry[] {
      console.log(this.displayGameMode)
      let es = null
      switch(this.displayGameMode) {
        case 'modeSprint-10':
          es = this.scoreStore.sprint10Hiscores
          break
        case 'modeSprint-30':
          es = this.scoreStore.sprint30Hiscores
          break
        case 'modeEndress':
          es = this.scoreStore.endressHiscores
          break
        case 'modeSingle':
          es = this.scoreStore.singleHiscores
          break

        case 'minusSprint-10':
          es = this.scoreStore.minusSprint10Hiscores
          break
        case 'minusSprint-30':
          es = this.scoreStore.minusSprint30Hiscores
          break
        case 'minusEndress':
          es = this.scoreStore.minusEndressHiscores
          break

        case 'mul99Sprint-10':
          es = this.scoreStore.mul99Sprint10Hiscores
          break
        case 'mul99Sprint-30':
          es = this.scoreStore.mul99Sprint30Hiscores
          break
        case 'mul99Endress':
          es = this.scoreStore.mul99EndressHiscores
          break
      }
      if(!es) {
        return []
      }
      console.log(es, this.displayGameMode)
      const res = es.map(e => {
        const re:RankingEntry = {
          no: 0,
          name: e.name,
          score: e.score,
          createdAt: e.createdAt
        }
        return re
      })
      if(res.length > 0) {
        let score = res[0].score
        let no = 1
        let no2 = 1
        for(const r of res) {
          if(r.score != score) {
            score = r.score
            no = no2
          }
          r.no = no
          no2++
        }
      }
      return res
    },
    lastScore(): ScoreEntity {
      if(this.scoreStore.lastScore) {
        return this.scoreStore.lastScore
      }
      return NullScoreEntity(this.displayGameMode)
    },
    displayGameMode(): GameMode {
      if( this.gameMode == 'modeEndress'
      ||  this.gameMode == 'modeSingle'
      ||  this.gameMode == 'minusEndress'
      ||  this.gameMode == 'mul99Endress'
      ) {
        return this.gameMode
      } else {
        return `${this.gameMode}-${this.questionCount}` as GameMode
      }
    },
  },
  filters: {
    displayModeName
  }
})
</script>
