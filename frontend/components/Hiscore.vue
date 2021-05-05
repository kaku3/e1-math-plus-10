<template>
  <v-card>
    <img class="poster" :src="bg" />
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
.poster {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(.15);
}
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

import { displayModeName, displayModeScore, toGameMode } from '~/utils/filters'

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
  data () {
    return {
      bg: ''
    }
  },
  mounted () {
    const no = Math.floor(new Date().getTime() / (24 * 60 * 60 * 1000)) % 13
    this.bg = require(`~/assets/bg/bg-${no}.jpg`)
  },
  methods: {
    isLastScore(o: RankingEntry): boolean {
      return (this.lastScore.name === o.name && this.lastScore.score === o.score && this.lastScore.createdAt === o.createdAt)
    },
    displayScore(score: number) {
      return displayModeScore(this.gameMode, score)
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

        case 'mul1xSprint-10':
          es = this.scoreStore.mul1xSprint10Hiscores
          break
        case 'mul1xSprint-30':
          es = this.scoreStore.mul1xSprint30Hiscores
          break
        case 'mul1xEndress':
          es = this.scoreStore.mul1xEndressHiscores
          break

        case 'mul9xSprint-10':
          es = this.scoreStore.mul9xSprint10Hiscores
          break
        case 'mul9xSprint-30':
          es = this.scoreStore.mul9xSprint30Hiscores
          break
        case 'mul9xEndress':
          es = this.scoreStore.mul9xEndressHiscores
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
      return toGameMode(this.gameMode, this.questionCount)
    },
  },
  filters: {
    displayModeName
  }
})
</script>
