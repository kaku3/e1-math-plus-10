<template>
  <v-card>
    <v-card-title class="title"><v-icon>mdi-crown</v-icon>{{displayGameModeTitle}}</v-card-title>
    <v-card-text>
      <v-row v-for="(o, i) in hiscores" :key="i" class="rankings" :class="{ entry: isLastScore(o) }">
        <v-col cols="auto" class="no">{{o.no}}</v-col>
        <v-col cols="mr-auto" class="text-h6">{{o.name}}</v-col>
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
  }
  + .rankings {
    margin-top: .25rem;
    border-top: 1px solid #E0E0E0;
  }
}


.entry {
  background-color: #F0F4C3;
}
.value {
  font-family: 'Fredoka One';
  font-size: 1.5rem;
}
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, NullScoreEntity, GameMode } from '~/models/Score'

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
      if(this.gameMode !== 'modeEndress' && this.gameMode !== 'modeSingle') {
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
      if(this.gameMode == 'modeEndress' || this.gameMode == 'modeSingle') {
        return this.gameMode
      } else {
        return `${this.gameMode}-${this.questionCount}` as GameMode
      }
    },
    displayGameModeTitle(): String {
      if(this.gameMode == 'modeEndress') {
        return 'たいきゅうモード'
      } else if(this.gameMode == 'modeSingle') {
        return 'ヒトケタス'
      } else {
        return `${this.questionCount}問モード`
      }
    }
  }
})
</script>
