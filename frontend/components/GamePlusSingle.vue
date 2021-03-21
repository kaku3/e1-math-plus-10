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
      <v-fade-transition>
        <v-card-text v-if="isEnd" class="green lighten-5">
          <v-row class="ex-canvas text-center">
            <v-col align-self="center">
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
      </v-fade-transition>
    </v-card>
    <v-card v-if="isGame">
      <v-card-text class="digit-keyboard cyan lighten-4">
        <v-row justify="center">
          <v-col cols="4"><v-btn @click="onAnswer(1)" :disabled="isUsed(1)">1</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(2)" :disabled="isUsed(2)">2</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(3)" :disabled="isUsed(3)">3</v-btn></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4"><v-btn @click="onAnswer(4)" :disabled="isUsed(4)">4</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(5)" :disabled="isUsed(5)">5</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(6)" :disabled="isUsed(6)">6</v-btn></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4"><v-btn @click="onAnswer(7)" :disabled="isUsed(7)">7</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(8)" :disabled="isUsed(8)">8</v-btn></v-col>
          <v-col cols="4"><v-btn @click="onAnswer(9)" :disabled="isUsed(9)">9</v-btn></v-col>
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

import firebase from '@/plugins/firebase'

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
const ANSWER_TIME_MIN = 5000

function time2(v: number) {
  return v.toFixed(2)
}

function answered(v: number) {
  return v !== 0 ? v : ''
}

export default Vue.extend({
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
      this.mode = 'ready'

      this.readyCount = 3
      this.gameTimerId = window.setInterval(function() {
        console.log(self.readyCount)
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
        self.gameTime = (new Date()).getTime() - self.gameStartTime
        if(self.updateProgress()) {
          self.addSingleScore()
          self.endGame()
          const seEnd_ = new Audio(seEnd)
          seEnd_.play()
        }
      }, 100)
    },

    endGame() {
      this.mode = 'end'
      window.clearInterval(this.gameTimerId)
      this.gameTimerId = -1
    },
    next() {
      let q = Math.floor(this.score / 5) + Math.floor(this.score / 10) * 4 + Math.floor(this.score / 20) * 8
      q = Math.min(q + 6, 44)
      this.question = (Math.floor(Math.random() * 100) % q) + 1
      this.answers.fill(0)
      this.displayAnswers = []
      this.startTime = (new Date()).getTime()
      this.answerTime = ANSWER_TIME_DEFAULT - Math.floor(this.score / ANSWER_TIME_LEVELUP_COUNT) * ANSWER_TIME_LEVELUP_TIME
      this.answerTime = Math.max(this.answerTime, ANSWER_TIME_MIN)
    },
    isUsed(v: number): boolean {
      return this.answers[v] !== 0
    },
    onAnswer(v: number) {
      if(this.mode !== 'game') {
        return
      }
      const se = new Audio(seAnswerOk)
      se.play()

      this.answers[v] = v
      this.displayAnswers.push(v)

      const answer = this.answers.reduce((v, c) => v + c)

      if(answer === this.question) {
        const count = this.answers.filter(v => v !== 0).length
        this.score += 1

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

    addSingleScore() {
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
      this.entryHiscore(e)
    },
    entryHiscore(e: ScoreEntity) {
      console.log(e)
      const db = firebase.firestore()
      db.collection('scores').add({
        mode: e.mode,
        name: e.name,
        score: e.score,
        createdAt: new Date(e.createdAt).setHours(0,0,0,0)
      })
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
