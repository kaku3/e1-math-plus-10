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
              <v-btn @click="startGame('mul99Sprint-10')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="mul99Sprint" :questionCount="10" />
      </v-tab-item>
      <v-tab-item>
        <HistoryChart class="mt-4" :data="sprint30History()" :options="chartOptions"  :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">30問がんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('mul99Sprint-30')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="mul99Sprint" :questionCount="30" />
      </v-tab-item>
      <v-tab-item>
        <HistoryChart class="mt-4" :data="endressHistory()" :options="chartOptions" :style="chartStyle" />
        <v-card-text>
          <v-row class="mt-2 mb-2">
            <v-col cols="auto" class="text-subtitle-2">じかんぎれまでがんばる</v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="startGame('mul99Endress')" color="primary"><v-icon>mdi-play</v-icon>はじめる</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <Ranking gameMode="mul99Endress" :questionCount="-1" />
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
      case 'mul99Sprint':
        this.tabNo =  (this.questionCount === 10) ? 0 : 1
    }

    this.historyDates = GameHistoryUtil.getHistoryDates()
  },
  methods: {
    startGame(mode: string) {
      this.$router.replace({ path: `/game-mul-99/${mode}` })
    },

    sprint10History() {
      return GameHistoryUtil.sprintHistory(this.sprint10Scores, this.chartDates, this.historyDates)
    },
    sprint30History() {
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
      return GameHistoryUtil.termFilteredScoreEntities('mul99Sprint-10', this.scores, this.historyDates)
    },
    sprint30Scores(): ScoreEntity[] {
      return GameHistoryUtil.termFilteredScoreEntities('mul99Sprint-30', this.scores, this.historyDates)
    },
    endressScores(): ScoreEntity[] {
      return GameHistoryUtil.termFilteredScoreEntities('mul99Endress', this.scores, this.historyDates)
    },

    chartOptions() {
      return GameHistoryUtil.chartOptions()
    }
  }
})
</script>
