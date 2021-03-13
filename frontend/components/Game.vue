<template>
  <div class="game">
    <v-card>
      <v-card-text v-if="isTitle" class="green lighten-5">
        <v-row class="text-center">
          <v-col align-self="center">
            <v-btn
              x-large
              color="blue"
              dark
              @click="startGame()">
              はじめる
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else-if="isGame" class="green lighten-5">
        <v-row class="score-container">
          <v-spacer></v-spacer>
          <v-scroll-x-transition>
            <v-col
              v-if="showAddScoreEffect"
              cols="auto"
              class="effect orange--text"
            >
              +{{addedScore}}
            </v-col>
          </v-scroll-x-transition>
          <v-col cols="auto" class="label">スコア</v-col>
          <v-col cols="auto" class="value">{{score}}</v-col>
        </v-row>
        <v-row class="ex-canvas">
          <v-col class="blue-grey--text" align-self="center">
            {{question}}
          </v-col>
          <v-col class="blue--text" align-self="center">
            +
          </v-col>
          <v-col class="amber--text answer" align-self="center">
            {{answer | answered}}
          </v-col>
          <v-col class="light-green--text" align-self="center">
            =
          </v-col>
          <v-col class="teal--text" align-self="center">
            10
          </v-col>
        </v-row>
        <v-progress-linear
          v-modal="time"
          color="blue darken-2"
          height="8"
        >
        </v-progress-linear>
      </v-card-text>
    </v-card>
    <v-card>
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
  </div>
</template>
<style lang="scss" scoped>

.ex-canvas {
  height: 30vh;
}
.ex-canvas > * {
  padding: .25rem;
  font-size: 3rem;
  font-family: 'Fredoka One';
  line-height: 1;
  height: 4rem;
  text-align: center;

  &.answer {
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
    font-size: 2rem;
  }
  .effect {
    font-family: 'Fredoka One';
    font-size: 2.5rem;
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

function answered(v: number) {
  return v !== 0 ? v : ''
}

export default Vue.extend({
  data() {
    return {
      mode: "title",
      score: 0,
      question: 0,
      answer: 0,
      time: 100,
      startTime: 0,
      addedScore: 0,
      addScoreEffectTimerId: -1
    }
  },
  methods: {
    startGame() {
      this.score = 0
      this.mode = 'game'
      this.next()
    },
    next() {
      this.question = Math.floor((Math.random() * 8)) + 1
      this.answer = 0
      this.startTime = Date.now().valueOf()
    },
    onAnswer(v: number) {
      if(this.question + v === 10) {
        this.addScore()
        this.next()
      } else {
        this.answer = v
      }
    },
    addScore() {
      const score = 100 - Math.floor((Date.now().valueOf() - this.startTime) / 100)
      if(score <= 0) {
        return
      }

      this.addedScore = score
      this.score += score
      if(this.addScoreEffectTimerId != -1) {
        window.clearTimeout(this.addScoreEffectTimerId)
      }
      this.addScoreEffectTimerId = window.setTimeout(() => {
        this.addScoreEffectTimerId = -1
      }, 1000)
    }
  },
  computed: {
    isTitle(): boolean {
      return this.mode === 'title'
    },
    isGame(): boolean {
      return this.mode === 'game'
    },
    showAddScoreEffect(): boolean {
      return this.addScoreEffectTimerId != -1
    }
  },
  filters: {
    answered
  }
})
</script>
