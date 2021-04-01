<template>
  <v-fade-transition>
    <v-card v-if="show">
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
import { ScoreEntity, GameMode } from '~/models/Score'

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
      const dd = new Date(d)
      const start = dd.setHours(0, 0, 0, 0)
      const end = dd.setDate(dd.getDate() + 1)
      const scores = this.scores
        .filter((o:ScoreEntity) => o.createdAt >= start)
        .filter((o:ScoreEntity) => o.createdAt < end)
      if(scores.length >= 10) {
        return Math.min(Math.floor(scores.length / 20) + 3, 6)
      } else if(scores.length >= 4) {
        return 2
      } else if(scores.length >= 1) {
        return 1
      }
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
  },
})
</script>
