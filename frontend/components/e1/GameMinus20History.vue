<template>
  <v-card>
    <v-tabs v-model="tabNo">
      <v-tab>10問モード</v-tab>
      <v-tab>30問モード</v-tab>
      <v-tab>たいきゅうモード</v-tab>
      <v-tab-item class="green lighten-5">
        <HistoryChart class="mt-4" :data="sprint10History()" :options="chartOptions" :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">10問がんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('minusSprint-10')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="minusSprint" :questionCount="10" />
      </v-tab-item>
      <v-tab-item class="green lighten-5">
        <HistoryChart class="mt-4" :data="sprint30History()" :options="chartOptions"  :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">30問がんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('minusSprint-30')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="minusSprint" :questionCount="30" />
      </v-tab-item>
      <v-tab-item class="green lighten-5">
        <HistoryChart class="mt-4" :data="endressHistory()" :options="chartOptions" :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">じかんぎれまでがんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('minusEndress')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="minusEndress" :questionCount="-1" />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'

import { GameHistoryUtil, HistoryDate } from '~/utils/GameHistoryUtil'

import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

import HistoryChart from '~/components/charts/HistoryChart.vue'

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
      default: 'minusSprint'
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
      case 'minusSprint':
        this.tabNo =  (this.questionCount === 10) ? 0 : 1
    }

    this.historyDates = GameHistoryUtil.getHistoryDates()
  },
  methods: {
    startGame(mode: string) {
      this.$router.replace({ path: `/game-minus-20/${mode}` })
    },

    sprint10History() {
      return GameHistoryUtil.sprintHistory(this.sprint10Scores, this.chartDates, this.historyDates)
    },
    sprint30History() {
      console.log(this.sprint30Scores)
      return GameHistoryUtil.sprintHistory(this.sprint30Scores, this.chartDates, this.historyDates)
    },

    endressHistory() {
      const { _counts, _scores } = GameHistoryUtil.getEndressHistory(this.endressScores, this.historyDates)
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
    sprint10Scores(): ScoreEntity[] {
      return GameHistoryUtil.termFilteredScoreEntities('minusSprint-10', this.scores, this.historyDates)
    },
    sprint30Scores(): ScoreEntity[] {
      return GameHistoryUtil.termFilteredScoreEntities('minusSprint-30', this.scores, this.historyDates)
    },
    endressScores(): ScoreEntity[] {
      return GameHistoryUtil.termFilteredScoreEntities('minusEndress', this.scores, this.historyDates)
    },

    chartOptions() {
      return GameHistoryUtil.chartOptions()
    }
  }
})
</script>
