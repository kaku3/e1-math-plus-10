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
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

import HistoryChart from '~/components/charts/HistoryChart.vue'


type HistoryDate = {
  month: number,
  date: number,
  time: number,
  time1: number
}

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
      const dates: HistoryDate[] = []
      const d = new Date()

      d.setHours(0, 0, 0)
      d.setMilliseconds(0)
      d.setDate(d.getDate() - 30)
      for(let i = 0; i < 32; i++) {
        dates.push({
          month: d.getMonth() + 1,
          date: d.getDate(),
          time: d.getTime(),
          time1: d.getTime() + 24 * 60 * 60 * 1000
        })
        d.setDate(d.getDate() + 1)
      }
      this.historyDates = dates
    },

    startGame() {
      this.$router.replace({
        path: '/game-plus-single/modeSingle',
      })
    },

    termFilteredScoreEntities(mode: string): ScoreEntity[] {
      if(this.historyDates.length == 0) {
        return []
      }
      const timeMin = this.historyDates[0].time
      const timeMax = this.historyDates[this.historyDates.length - 1].time1

      return this.scores
        .filter((o:ScoreEntity) => o.mode === mode)
        .filter((o:ScoreEntity) => o.createdAt >= timeMin)
        .filter((o:ScoreEntity) => o.createdAt < timeMax)
    },
    singleHistory() {
      const scores = this.singleScores
      const _counts = []
      const _scores = []

      for(const d of this.historyDates) {
        const ss = scores.filter((o:ScoreEntity) => d.time <= o.createdAt && o.createdAt < d.time1)
        _counts.push(ss.length)
        if(ss.length > 0) {
          _scores.push(
            ss.map((o:ScoreEntity) => o.score)
              .reduce((a:number, c:number) => Math.max(a, c))
          )
        } else {
          _scores.push(0)
        }
      }
      if( _counts.reduce((a:number, c:number) => a + c) > 0) {
        this.showChart = true
      }

      return {
        labels: this.chartDates,
        datasets: [
          {
            label: 'とくてん',
            data: _scores,
            borderColor: "#FFC107",
            backgroundColor: "transparent",
            yAxisID: "y-axis-1"
          },
          {
            label: 'かいすう',
            data: _counts,
            borderColor: "#009688",
            backgroundColor: "transparent",
            yAxisID: "y-axis-2"
          }
        ]
      }
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
      return this.termFilteredScoreEntities('modeSingle')
    },

    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              position: 'right'
            }
          ]
        }
      }
    }
  }
})
</script>
