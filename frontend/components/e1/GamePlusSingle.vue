<template>
  <div class="game">
    <v-card v-if="isEnd">
      <Hiscore :gameMode="gameMode" />
    </v-card>
    <v-card>
      <v-card-text class="green lighten-4">
        <v-row class="score-container">
          <v-spacer></v-spacer>
          <v-col cols="auto" class="label">とくてん</v-col>
          <v-col cols="auto" class="value">{{displayScore}}</v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-if="isEnd" class="green lighten-5">
        <StatisticComponent :statistic="statistic" :isSprint="false" />
        <v-row class="ex-canvas text-center">
          <v-col cols="12" align-self="center">
            <v-btn
              large
              outlined
              @click="home()"
            >
              <v-icon>mdi-playlist-edit</v-icon>ヒトケタス
            </v-btn>
            <v-btn
              x-large
              color="blue"
              dark
              @click="startGame()">
              もういちど
            </v-btn>
          </v-col>
          <v-col align-self="center">
            <v-btn
              to="/"
            >
              <v-icon>mdi-home-circle</v-icon>ほーむ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else-if="isGame" class="green lighten-5">
        <v-row class="ex-canvas">
          <v-col cols="mr-auto" class="answer-container" align-self="center">
            <span v-for="o in displayAnswers" :key="o">
              <span>{{o}}</span>
              <span>+</span>
            </span>
            <v-slide-y-reverse-transition>
              <div
                v-if="showAnswerEffect"
                class="effect orange--text"
              >
                {{effects.answer}}
              </div>
            </v-slide-y-reverse-transition>
          </v-col>
          <v-col cols="auto" class="question-container" align-self="center">
            <span class="light-green--text">
              =
            </span>
            <span class="teal--text" align-self="center">
              {{question}}
            </span>
          </v-col>
        </v-row>
        <v-progress-linear
          v-model="progress"
          color="blue darken-2"
          height="8"
        >
        </v-progress-linear>
      </v-card-text>
    </v-card>

    <NumPad ref="numPad" v-if="isGame" mode="select" @tap="onSelect"></NumPad>

    <JumpCollectionCard v-if="isEnd" ref="jumpCollectionCard" />
  </div>
</template>
<style lang="scss" scoped>

.game {
  position: relative;
}

.ex-canvas {
  min-height: 16vh;
}
.ex-canvas > * {
  padding: .25rem;
  font-size: 3rem;
  font-family: 'Fredoka One';
  line-height: 1;
  height: 4rem;
  text-align: center;
}

.score-container {
  > .label {
    font-weight: bold;
  }
  > .value {
    font-family: 'Fredoka One';
    font-size: 1.6rem;
  }
}
.answer-container {
  position: relative;
  font-size: 2rem;
  text-align: left;

  .effect {
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Fredoka One';
    font-size: 2rem;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

import GameMixin from '~/components/game/GameMixin.vue'

import NumPad from '~/components/game/NumPad.vue'

import StatisticComponent from '~/components/game/StatisticComponent.vue'

import JumpCollectionCard from '~/components/jumpMan/JumpCollectionCard.vue'

import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

import { entryHiscore } from '~/utils/score'

import seAnswerOk from '~/assets/se/answer-ok.mp3'
import seAnswerNg from '~/assets/se/answer-ng.mp3'
import seAnswer1 from '~/assets/se/answer-1.mp3'
import seAnswer2 from '~/assets/se/answer-2.mp3'
import seAnswer3 from '~/assets/se/answer-3.mp3'
import seEnd from '~/assets/se/end.mp3'

const ANSWER_TIME_DEFAULT = 10000  // 1問あたりの回答時間
// const ANSWER_TIME_DEFAULT = 10000000  // 1問あたりの回答時間
const ANSWER_TIME_LEVELUP_COUNT = 5 // レベルアップ間隔
const ANSWER_TIME_LEVELUP_TIME = 200
const ANSWER_TIME_MIN = 2000

function time2(v: number) {
  return v.toFixed(2)
}

function answered(v: number) {
  return v !== 0 ? v : ''
}

export default Vue.extend({
  mixins: [
    GameMixin
  ],
  components: {
    NumPad,
    StatisticComponent,
    JumpCollectionCard
  },

  data() {
    return {
      gameMode: 'modeSingle',
      mode: "",
      readyCount: 0,
      score: 0,
      score2: 0,
      question: 0,
      answers: [] as number[],
      displayAnswers: [] as number[],
      startTime: 0, // 1問あたりの時間
      answerTime: 0,  // 1問あたりの時間
      gameStartTime: 0,
      gameTime: 0,
      penaltyTime: 0,
      progress: 0,
      effects: {
        answer: '',
        answerTimerId: -1
      },
      statistic: null
    }
  },
  mounted() {
    this.startGame();
  },
  destroyed() {
    console.log("destroyed")
    //@ts-ignore
    this.endGame()
  },
  methods: {
    home() {
      this.$router.replace({
        path: '/game-plus-single/'
      })
    },
    startGame() {
      const self = this
      this.score = 0
      this.score2 = 0
      this.gameTime = 0
      this.penaltyTime = 0
      this.question = 0
      this.answers = Array(10).fill(0)
      this.displayAnswers = []

      //@ts-ignore
      this.ready()
    },
    onNext(): void {
      this.next()
    },
    onUpdateProgress(): void {
      if(this.updateProgress()) {
        //@ts-ignore
        this.endGame()

        this.addSingleScore()
        const seEnd_ = new Audio(seEnd)
        seEnd_.play()
      }
    },

    next() {
      //@ts-ignore
      this.$refs.numPad.reset()

      let qMax = Math.floor(this.score / 3) * 3 + Math.floor(this.score / 10) * 12 + 6
      let qMin = Math.floor(this.score / 5) + 3
      qMin = Math.min(qMin, 20)
      qMax = Math.min(qMax, 45)
      this.question = Math.floor(Math.random() * (qMax - qMin + 1) + qMin)
      this.answers.fill(0)
      this.displayAnswers = []
      this.startTime = (new Date()).getTime()
      this.answerTime = ANSWER_TIME_DEFAULT - Math.floor(this.score / ANSWER_TIME_LEVELUP_COUNT) * ANSWER_TIME_LEVELUP_TIME
      this.answerTime = Math.max(this.answerTime, ANSWER_TIME_MIN)
    },
    isSelected(v: number): boolean {
      return this.answers[v] !== 0
    },
    onSelect(v: number, _: boolean): void {
      this.onAnswer(v)
    },
    onAnswer(v: number) {
      if(this.mode !== 'game') {
        return
      }
      const se = new Audio(seAnswerOk)
      se.play()

      if(this.answers[v] === 0) {
        this.answers[v] = v
        this.displayAnswers.push(v)
      } else {
        this.answers[v] = 0
        this.displayAnswers = this.displayAnswers.filter(vv => vv !== v)
      }

      const answer = this.answers.reduce((v, c) => v + c)

      if(answer === this.question) {
        const count = this.answers.filter(v => v !== 0).length
        this.score++

        let se_ = null
        if(count > 6) {
          se_ = new Audio(seAnswer2)
        } else if(count > 4) {
          se_ = new Audio(seAnswer2)
        }
        else if(count >= 2) {
          se_ = new Audio(seAnswer1)
        }
        if(se_) {
          se_.play()
        }

        let time = this.answerTime - ((new Date()).getTime() -this.startTime)
        time = Math.max(time, 0)
        this.score2 += Math.floor(this.score + (time / 50)) * (1 << count)
        this.updateProgress()
        this.answerEffect(`o ${this.displayAnswers.join('+')}`)

        this.next()

      } else if(answer > this.question) {
        // 正解を超えたらリセット
        //@ts-ignore
        this.$refs.numPad.reset()

        this.answers.fill(0)
        this.displayAnswers = []
        this.answerEffect('x')

        this.penaltyTime += 1000
        this.answerTime -= 1000

        const se = new Audio(seAnswerNg)
        se.play()
      }
    },
    answerEffect(answer: string) {
      this.effects.answer = answer
      if(this.effects.answerTimerId != -1) {
        window.clearTimeout(this.effects.answerTimerId)
      }
      this.effects.answerTimerId = window.setTimeout(() => {
        this.effects.answerTimerId = -1
      }, 1000)
    },
    getDisplayTime(): number {
      return (this.gameTime  + this.penaltyTime) / 1000
    },
    updateProgress(): boolean {
      let time = this.answerTime - ((new Date()).getTime() -this.startTime)
      time = Math.max(time, 0)
      this.progress = (time * 100) / this.answerTime
      return time === 0
    },

    async addSingleScore() {
      if(this.score2 === 0) {
        return
      }
      const name = this.accountStore.account.name
      const mode = `${this.gameMode}` as GameMode
      const score: number = this.score2
      const e:ScoreEntity = {
        mode,
        name,
        score,
        createdAt: this.gameStartTime
      }
      this.scoreStore.addScore(e)
      //@ts-ignore
      this.statistic = await entryHiscore(e)
      //@ts-ignore
      this.$refs['jumpCollectionCard'].init(mode, this.statistic)
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
    scoreStore() : ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },

    isEnd(): boolean {
      return this.mode === 'end'
    },
    isReady(): boolean {
      return this.mode === 'ready'
    },
    isGame(): boolean {
      return this.mode === 'game' || this.mode === 'ready'
    },
    displayScore(): number {
      return this.score2
    },

    showAnswerEffect(): boolean {
      return this.effects.answerTimerId != -1
    }
  },
  filters: {
    answered,
    time2
  }
})
</script>
