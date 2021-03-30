<template>
  <div class="game">
    <v-card v-if="isEnd">
      <Hiscore :gameMode="gameMode" :questionCount="questionCount" />
    </v-card>
    <v-card>
      <v-card-text class="green lighten-4">
        <v-row class="score-container">
          <v-col v-if="isSprint" cols="auto" class="label">じかん</v-col>
          <v-col v-if="isSprint" cols="auto" class="value">{{getDisplayTime() | time2}}</v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="label">とくてん</v-col>
          <v-col cols="auto" class="value">{{displayScore}}</v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-if="isEnd" class="green lighten-5">
        <v-row class="ex-canvas text-center">
          <v-col cols="12" align-self="center">
            <v-btn
              large
              outlined
              @click="goGameIndex()"
            >
              <v-icon>mdi-playlist-edit</v-icon>たして１０
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
          <v-col class="blue-grey--text" align-self="center">
            {{question}}
          </v-col>
          <v-col class="blue--text" align-self="center">
            +
          </v-col>
          <v-col class="amber--text answer" align-self="center">
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
          <v-col class="light-green--text" align-self="center">
            =
          </v-col>
          <v-col class="teal--text" align-self="center">
            10
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
    <v-row v-if="isEnd">
      <v-col cols="12">
        <Share />
      </v-col>
    </v-row>

    <v-card v-if="isGame">
      <v-card-text class="digit-keyboard cyan lighten-4">
        <v-row justify="center">
          <v-col cols="4"><v-btn @click="onAnswer(1)">1</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(2)">2</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(3)">3</v-btn></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4"><v-btn @click="onAnswer(4)">4</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(5)">5</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(6)">6</v-btn></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4"><v-btn @click="onAnswer(7)">7</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(8)">8</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(9)">9</v-btn></v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-fade-transition>
      <div v-if="isReady" class="ready">
        <v-slide-y-reverse-transition>
          <div v-if="readyCount === 3">3</div>
        </v-slide-y-reverse-transition>
        <v-slide-y-reverse-transition>
          <div v-if="readyCount === 2">2</div>
        </v-slide-y-reverse-transition>
        <v-slide-y-reverse-transition>
          <div v-if="readyCount === 1">1</div>
        </v-slide-y-reverse-transition>
        <v-slide-y-reverse-transition>
          <div v-if="readyCount === 0">すたーと</div>
        </v-slide-y-reverse-transition>
      </div>
    </v-fade-transition>
  </div>
</template>
<style lang="scss" scoped>

.game {
  position: relative;

  > .ready {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: 'Fredoka One';
    background-color: rgba(0, 0, 0, .5);

    > * {
      position: absolute;
      width: 100%;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      color: white;
      font-size: 4rem;
    }
  }
}

.ex-canvas {
  height: 16vh;
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
  font-size: 2rem;
}

.digit-keyboard > .row > .col {
  padding: .25rem;
  text-align: center;

  > button {
    font-size: 4rem;
    font-family: 'Fredoka One';
    width: 80%;
    height: 5rem;
    color: #0097A7;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

import { entryHiscore } from '~/utils/score'

import seAnswerOk from '~/assets/se/answer-ok.mp3'
import seAnswerNg from '~/assets/se/answer-ng.mp3'
import seFinish from '~/assets/se/finish.mp3'
import seEnd from '~/assets/se/end.mp3'

const ANSWER_TIME_DEFAULT = 10000  // endress : 1問あたりの回答時間
const ANSWER_TIME_LEVELUP_COUNT = 5 // レベルアップ間隔
const ANSWER_TIME_LEVELUP_TIME = 3000
const ANSWER_TIME_MIN = 1200

function time2(v: number) {
  return v.toFixed(2)
}

function answered(v: number) {
  return v !== 0 ? v : ''
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
  data() {
    return {
      mode: "",
      readyCount: 0,
      score: 0,
      score2: 0,
      question: 0,
      answer: 0,
      startTime: 0, // endress : 1問あたりの時間
      answerTime: 0,  // endress : 1問あたりの時間
      gameStartTime: 0,
      gameTime: 0,
      penaltyTime: 0,
      gameTimerId: -1,
      progress: 0,
      effects: {
        answer: '',
        answerTimerId: -1
      }
    }
  },
  mounted() {
    this.startGame();
  },
  destroyed() {
    console.log("destroyed")
    this.endGame()
  },
  methods: {
    goGameIndex() {
      console.log(this.gameMode, this.questionCount)
      this.$router.replace({
        name: 'game-plus-10',
        params: {
          mode: this.gameMode,
          count: `${this.questionCount}`
        }
      })
    },
    startGame() {
      const self = this
      this.score = 0
      this.score2 = 0
      this.gameTime = 0
      this.penaltyTime = 0
      this.question = 0
      this.answer = 0
      this.mode = 'ready'

      this.readyCount = 3
      this.gameTimerId = window.setInterval(function() {
        if(self.readyCount-- === 0) {
          window.clearInterval(self.gameTimerId)
          self.start()
        }
      }, 1000)
    },
    start() {
      const self = this
      this.gameStartTime = (new Date()).getTime()
      this.mode = 'game'
      this.next()
      this.gameTimerId = window.setInterval(function() {
        self.updateGameTime()
        if(self.updateProgress()) {
          self.endGame()
          self.addEndressScore()
          const seEnd_ = new Audio(seEnd)
          seEnd_.play()
        }
      }, 200)
    },

    endGame() {
      this.updateGameTime()
      this.mode = 'end'
      window.clearInterval(this.gameTimerId)
      this.gameTimerId = -1
    },
    next() {
      this.question = (this.question * 3 + Math.floor(Math.random() * 100)) % 9 + 1
      this.answer = 0
      this.startTime = (new Date()).getTime()
      this.answerTime = ANSWER_TIME_DEFAULT - Math.floor(this.score / ANSWER_TIME_LEVELUP_COUNT) * ANSWER_TIME_LEVELUP_TIME
      this.answerTime = Math.max(this.answerTime, ANSWER_TIME_MIN)
    },
    onAnswer(v: number) {
      if(this.mode !== 'game') {
        return
      }
      this.updateGameTime()

      if(this.question + v === 10) {
        this.score += 1
        if(this.gameMode === 'modeEndress') {
          let time = this.answerTime - ((new Date()).getTime() -this.startTime)
          time = Math.max(time, 0)
          this.score2 += Math.floor(time / 20)
        }
        this.updateProgress()
        this.answerEffect(`o ${v}`)
        const se = new Audio(seAnswerOk)
        se.play()
        if(this.gameMode === 'modeSprint') {
          if(this.score === this.questionCount) {
            this.endGame()
            this.addSprintScore()
            const seFinish_ = new Audio(seFinish)
            seFinish_.play()
            return
          }
        }
        this.next()
      } else {
        this.answer = v
        this.penaltyTime += 1000
        this.answerTime -= 1000
        this.answerEffect('x')
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
      if(this.gameMode === 'modeEndress') {
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

    addSprintScore() {
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
      entryHiscore(e)
    },
    addEndressScore() {
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
      entryHiscore(e)
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
      return this.gameMode === 'modeSprint'
    },
    isEndress(): boolean {
      return this.gameMode === 'modeEndress'
    },
    displayScore(): number {
      return this.gameMode === 'modeSprint' ? this.score : this.score2
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
