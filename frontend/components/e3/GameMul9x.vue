<template>
  <div class="game">
    <v-card v-if="isEnd">
      <Hiscore :gameMode="gameMode" :questionCount="questionCount" />
    </v-card>
    <v-card>
      <v-card-text class="cyan lighten-4">
        <v-row class="score-container">
          <v-col v-if="isSprint" cols="auto" class="label">じかん</v-col>
          <v-col v-if="isSprint" cols="auto" class="value">{{getDisplayTime() | time2}}</v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="label">とくてん</v-col>
          <v-col cols="auto" class="value">{{displayScore}}</v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-if="isEnd" class="cyan lighten-5">
        <StatisticComponent :statistic="statistic" :isSprint="isSprint" />
        <v-row class="ex-canvas text-center">
          <v-col cols="12" align-self="center">
            <v-btn
              large
              outlined
              @click="goGameIndex()"
            >
              <v-icon>mdi-playlist-edit</v-icon>かけざん９ｘ
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
          <v-col cols="auto" class="blue-grey--text px-2" align-self="center">
            {{question1}}
          </v-col>
          <v-col cols="auto" class="blue--text" align-self="center">
            x
          </v-col>
          <v-col cols="auto" class="teal--text px-2" align-self="center">
            {{question2}}
          </v-col>
          <v-col cols="auto" class="light-green--text" align-self="center">
            =
          </v-col>
          <v-col class="amber--text answer mx-2" align-self="center">
            {{answer | answered}}
            <v-slide-y-reverse-transition>
              <div
                v-if="showAnswerEffect"
                class="effect orange--text"
              >
                {{effects.answer}}
              </div>
            </v-slide-y-reverse-transition>

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

    <NumPad ref="numPad" v-if="isGame" @tap="onTap" :showFunctions=true></NumPad>

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

  &.answer {
    position: relative;
    border: 2px solid #FF9800;
    border-radius: 4px;
    font-size: 2.25rem;
    line-height: 1.5;
  }
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
.effect {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Fredoka One';
  font-size: 1.5rem;
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
import seFinish from '~/assets/se/finish.mp3'
import seEnd from '~/assets/se/end.mp3'

const ANSWER_TIME_DEFAULT = 30000  // endress : 1問あたりの回答時間
const ANSWER_TIME_LEVELUP_COUNT = 5 // レベルアップ間隔
const ANSWER_TIME_LEVELUP_TIME = 3000
const ANSWER_TIME_MIN = 6200

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
  data() {
    return {
      mode: "",
      readyCount: 0,
      score: 0,
      score2: 0,
      question1: 0,
      question2: 0,
      answer: 0,
      startTime: 0, // endress : 1問あたりの時間
      answerTime: 0,  // endress : 1問あたりの時間
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
    goGameIndex() {
      console.log(this.gameMode, this.questionCount)
      this.$router.replace({
        name: 'game-mul-9x',
        params: {
          mode: this.gameMode,
          count: `${this.questionCount}`
        }
      })
    },
    startGame() {
      this.score = 0
      this.score2 = 0
      this.gameTime = 0
      this.penaltyTime = 0
      this.question1 = 0
      this.question2 = 0
      this.answer = 0

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
        this.addEndressScore()

        const seEnd_ = new Audio(seEnd)
        seEnd_.play()
      }
    },

    next() {
      //@ts-ignore
      this.$refs.numPad.reset()

      this.answer = 0
      this.question1 = Math.floor(Math.random() * 9) + 91
      this.question2 = Math.floor(Math.random() * 9) + 91

      this.startTime = (new Date()).getTime()
      this.answerTime = ANSWER_TIME_DEFAULT - Math.floor(this.score / ANSWER_TIME_LEVELUP_COUNT) * ANSWER_TIME_LEVELUP_TIME
      this.answerTime = Math.max(this.answerTime, ANSWER_TIME_MIN)
    },
    onTap(v: number, _:boolean): void {
      this.onAnswer(v)
    },
    onAnswer(v: number) {
      if(this.mode !== 'game') {
        return
      }
      this.updateGameTime()

      if(v == 10) {
        // clear
        this.answer = 0
        return
      } else if(v >= 0 && v <= 9) {
        // 0 - 9
        this.answer *= 10
        this.answer += v
        return
      }


      console.log(this.question1, this.answer, this.question2)
      if(this.question1 * this.question2 === this.answer) {
        this.score += 1
        if(this.gameMode === 'mul9xEndress') {
          let time = this.answerTime - ((new Date()).getTime() -this.startTime)
          time = Math.max(time, 0)
          this.score2 += Math.floor(time / 20)
        }
        this.updateProgress()
        this.answerEffect(`o ${this.answer}`)
        const se = new Audio(seAnswerOk)
        se.play()
        if(this.gameMode === 'mul9xSprint') {
          if(this.score === this.questionCount) {

            //@ts-ignore
            this.endGame()
            this.addSprintScore()
            const seFinish_ = new Audio(seFinish)
            seFinish_.play()
            return
          }
        }
        this.next()
      } else {
        this.penaltyTime += 1000
        this.answerTime -= 1000
        this.answerEffect(`x ${this.answer}`)
        this.answer = 0
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
      if(this.gameMode === 'mul9xEndress') {
        let time = this.answerTime - ((new Date()).getTime() -this.startTime)
        time = Math.max(time, 0)
        this.progress = (time * 100) / this.answerTime
        return time === 0
      } else {
        this.progress = (this.score * 100) / this.questionCount
      }
      return false
    },
    updateGameTime() {
      this.gameTime = (new Date()).getTime() - this.gameStartTime
    },

    async addSprintScore() {
      const name = this.accountStore.account.name
      const mode = `${this.gameMode}-${this.questionCount}` as GameMode
      const score = this.getDisplayTime()
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
    },
    async addEndressScore() {
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
    isSprint(): boolean {
      return this.gameMode === 'mul9xSprint'
    },
    isEndress(): boolean {
      return this.gameMode === 'mul9xEndress'
    },
    displayScore(): number {
      return this.gameMode === 'mul9xSprint' ? this.score : this.score2
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
