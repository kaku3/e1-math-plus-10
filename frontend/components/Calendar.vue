<template>
  <v-card>
    <v-calendar
      :weekdays="[0, 1, 2, 3, 4, 5, 6]"
      :type="month"
    >
      <template v-slot:day="{ date }">
        <span v-for="(o, i) in starsOf(date)" :key="i"><v-icon class="shake">mdi-star</v-icon></span>
      </template>
    </v-calendar>
  </v-card>
</template>
<style lang="scss" scoped>
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
  mounted () {

  },
  methods: {
    starsOf(d:Date) {
      console.log(this)
      const dd = new Date(d)
      const start = dd.setHours(0, 0, 0, 0)
      const end = dd.setDate(dd.getDate() + 1)
      const scores = this.scores
        .filter((o:ScoreEntity) => o.createdAt >= start)
        .filter((o:ScoreEntity) => o.createdAt < end)
      if(scores.length >= 10) {
        return 3
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
