<template>
  <v-card>
    <v-tabs v-model="tabNo">
      <v-tab>10問モード</v-tab>
      <v-tab>30問モード</v-tab>
      <v-tab>たいきゅうモード</v-tab>
      <v-tab-item>
        <HistoryChart class="mt-4" :data="sprint10History()" :options="chartOptions" :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">10問がんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('modeSprint', 10)" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="modeSprint" :questionCount="10" />
      </v-tab-item>
      <v-tab-item>
        <HistoryChart class="mt-4" :data="sprint30History()" :options="chartOptions"  :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">30問がんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('modeSprint', 30)" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="modeSprint" :questionCount="30" />
      </v-tab-item>
      <v-tab-item>
        <HistoryChart class="mt-4" :data="endressHistory()" :options="chartOptions" :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">じかんぎれまでがんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('modeEndress', -1)" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="modeEndress" :questionCount="-1" />
      </v-tab-item>
    </v-tabs>
  </v-card>
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
  tabNo: number,
  chartStyle: Object,
  historyDates: HistoryDate[]
}

export default Vue.extend({
  components: {
    HistoryChart
  },
  props: {
    'gameMode': {
      type: String,
      default: 'modeSprint'
    },
    'questionCount': {
      type: Number,
      default: 10
    }
  },
  data (): DataType {
    return {
      tabNo: -1,
      chartStyle: {
        width: '100%',
        height: '30vh'
      },
      historyDates: []
    }
  },
  mounted () {
    this.tabNo = 2
    switch(this.gameMode) {
      case 'modeSprint':
        this.tabNo =  (this.questionCount === 10) ? 0 : 1
    }

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
  methods: {
    startGame(mode: string, count: string) {
      this.$router.push({ name: 'game', params: { mode: mode, count: count }})
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
    sprintHistory(scores: ScoreEntity[]) {
      const _counts = []
      const _scores = []

      for(const d of this.historyDates) {
        const ss = scores.filter((o:ScoreEntity) => d.time <= o.createdAt && o.createdAt < d.time1)
        _counts.push(ss.length)
        if(ss.length > 0) {
          _scores.push(
            ss.map((o:ScoreEntity) => o.score)
              .reduce((a:number, c:number) => Math.min(a, c))
          )
        } else {
          _scores.push(0)
        }
      }

      return {
        labels: this.chartDates,
        datasets: [
          {
            label: 'じかん',
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

    sprint10History() {
      return this.sprintHistory(this.sprint10Scores)
    },
    sprint30History() {
      console.log(this.sprint30Scores)
      return this.sprintHistory(this.sprint30Scores)
    },

    endressHistory() {
      const scores = this.endressScores
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
    sprint10Scores(): ScoreEntity[] {
      return this.termFilteredScoreEntities('modeSprint-10')
    },
    sprint30Scores(): ScoreEntity[] {
      return this.termFilteredScoreEntities('modeSprint-30')
    },
    endressScores(): ScoreEntity[] {
      return this.termFilteredScoreEntities('modeEndress')
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
