<template>
  <v-fade-transition>
    <v-card v-if="show">
      <div class="monthly-star-container">
        {{ new Date().getMonth() + 1}}月の★<span class="count">{{monthlyStarCount}}</span>
      </div>
      <v-calendar
        :weekdays="[0, 1, 2, 3, 4, 5, 6]"
        type="month"
      >
        <template v-slot:day="{ date }">
          <span v-if="starsOf(date) >= 4" class="star-container"><v-icon class="shake">mdi-star</v-icon>{{ starsOf(date) }}</span>
          <span v-else v-for="(o, i) in starsOf(date)" :key="i" class="star-container"><v-icon class="shake">mdi-star</v-icon></span>
        </template>
      </v-calendar>
    </v-card>
  </v-fade-transition>
</template>
<style lang="scss" scoped>
.monthly-star-container {
  padding: .25rem;
  text-align: right;
  > .count {
    font-family: 'Fredoka One';
  }
}
.star-container {
  font-family: 'Fredoka One';
  + .star-container {
    margin-left: -14px;
  }
}
.shake{
  animation: shake 1s linear infinite;
}

@keyframes shake {
  0% {
    transform: rotate(0);
  }

  40% {
    transform: rotate(-10deg);
  }

  80% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0);
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity } from '~/models/Score'

import { dailyStarsOf, monthlyStarsOf } from '~/utils/star'

export default Vue.extend({
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.show = true
    })
  },
  methods: {
    starsOf(d:Date) {
      return dailyStarsOf(this.scores, new Date(d))
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    scores(): ScoreEntity[] {
      return this.scoreStore.scores || [] as ScoreEntity[]
    },
    monthlyStarCount(): number {
      return monthlyStarsOf(this.scores, new Date())
    }
  },
})
</script>
