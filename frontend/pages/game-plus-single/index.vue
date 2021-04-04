<template>
  <div>
    <v-row>
      <v-col cols="mr-auto" class="text-h5">
        ヒトケタス
      </v-col>
      <v-col cols="auto">
        <v-btn outlined to="/">
          <v-icon>mdi-home-circle</v-icon>ほーむ
        </v-btn>
      </v-col>
    </v-row>
    <v-card>
      <HistoryChart v-if="showChart" class="mt-4" :data="singleHistory()" :options="chartOptions" :style="chartStyle" />
      <v-card-text>
        <v-row class="mt-2 mb-2">
          <v-col cols="mr-auto" class="text-subtitle-2">ひとけたのすうじをたして、こたえにする</v-col>
          <v-col cols="auto">
            <v-btn @click="startGame('modeSingle')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <Ranking gameMode="modeSingle" :questionCount="-1" />
    </v-card>
    <Chat room="all" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import { GameHistoryUtil, HistoryDate } from '~/utils/GameHistoryUtil'

import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

import HistoryChart from '~/components/charts/HistoryChart.vue'

type DataType = {
  showChart: boolean,
  chartStyle: Object,
  historyDates: HistoryDate[]
}

export default Vue.extend({
  components: {
    HistoryChart
  },
  head() {
    return {
      title: 'ヒトケタス'
    }
  },

  data (): DataType {
    return {
      showChart: false,
      chartStyle: {
        width: '100%',
        height: '30vh'
      },
      historyDates: []
    }
  },
  mounted() {
    const self = this
    window.setTimeout(function() {
      self.initHistoryDates()
      self.singleHistory()
    }, 0)
  },
  methods: {
    initHistoryDates() {
      this.historyDates = GameHistoryUtil.getHistoryDates()
    },

    startGame() {
      this.$router.replace({
        path: '/game-plus-single/modeSingle',
      })
    },

    singleHistory():any {
      const { _counts, _scores } = GameHistoryUtil.getEndressHistory(this.singleScores, this.historyDates)

      if( _counts.reduce((a:number, c:number) => a + c) > 0) {
        this.showChart = true
      }
      return GameHistoryUtil.chartObject(this.chartDates, _scores, _counts)
    },

  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    scores(): ScoreEntity[] {
      return this.scoreStore.scores || [] as ScoreEntity[]
    },
    chartDates(): string[] {
      return this.historyDates.map((o:any) => `${o.month}/${o.date}`)
    },
    singleScores(): ScoreEntity[] {
      return GameHistoryUtil.termFilteredScoreEntities('modeSingle', this.scores, this.historyDates)
    },

    chartOptions() {
      return GameHistoryUtil.chartOptions()
    }
  }
})
</script>
