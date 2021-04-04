<template>
  <v-fade-transition>
    <v-card v-if="show">
      <div class="monthly-star-container">
        {{ new Date().getMonth() + 1}}月の★<span class="count">{{monthlyStarCount}}</span>
      </div>
      <v-calendar class="star-calendar"
        :weekdays="[0, 1, 2, 3, 4, 5, 6]"
        type="month"
      >
        <template v-slot:day="{ date }">
          <div :class="`date-container star-${dateClass(date)}`">
            <span v-if="starsOf(date) >= 4" class="star-container"><v-icon class="shake">★</v-icon>{{ starsOf(date) }}</span>
            <span v-else v-for="(o, i) in starsOf(date)" :key="i" class="star-container"><v-icon class="shake">★</v-icon></span>
          </div>
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

  color: white;
  background-color: #00BCD4;
}
.date-container {

  &.star-0 * {
    color: #37474F;
  }
  &.star-1 * {
    color: #00838F;
  }
  &.star-2 * {
    color: #00BFA5;
  }
  &.star-3 * {
    color: #7CB342;
  }
  &.star-4 * {
    color: #FFC107;
  }
  &.star-5 * {
    color: #FBC02D;
  }
  &.star-6 * {
    color: #FFD600;
  }

  .star-container {
    font-family: 'Fredoka One';
    + .star-container {
      margin-left: -14px;
    }

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
    starsOf(d:Date):number {
      return dailyStarsOf(this.monthlyScores, new Date(d))
    },
    dateClass(d:Date):number {
      const c = this.starsOf(d)
      if(c >= 80 ) return 6
      else if(c >= 40) return 5
      else if(c >= 20) return 4
      else if(c >= 10) return 3
      else if(c >= 4) return 2
      else if(c >= 1) return 1
      return 0
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    scores(): ScoreEntity[] {
      return this.scoreStore.scores || [] as ScoreEntity[]
    },
    monthlyScores(): ScoreEntity[] {
      const dd = new Date()
      dd.setHours(0,0,0,0)
      const monthStart =   dd.setDate(1)
      const monthEnd = dd.setMonth(dd.getMonth() + 1)

      return this.scores
        .filter((o:ScoreEntity) => o.createdAt >= monthStart)
        .filter((o:ScoreEntity) => o.createdAt < monthEnd)
    },
    monthlyStarCount(): number {
      return monthlyStarsOf(this.scores, new Date())
    }
  },
})
</script>
