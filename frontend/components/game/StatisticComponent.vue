<template>
  <div v-if="statistic" class="mt-2 mb-2">
    <v-row class="score-container statistic">
      <v-col cols="auto" class="label">はいすこあ</v-col>
      <v-col cols="mr-auto" class="value text-right" v-if="isSprint">{{statistic.score | time2}}</v-col>
      <v-col cols="mr-auto" class="value text-right" v-else>{{statistic.score}}</v-col>
    </v-row>
    <v-row class="score-container statistic">
      <v-col cols="auto" class="label">かいすう</v-col>
      <v-col cols="mr-auto" class="value text-right">{{statistic.count}}</v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.score-container {
  > .label {
    font-weight: bold;
    font-size: 1rem;
  }
  > .value {
    font-family: 'Fredoka One';
    font-size: 1.6rem;
  }
  &.statistic {
    > * {
      padding: .5rem 1.5rem;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { StatisticEntity } from '~/models/Statistic'

function time2(v: number) {
  return v.toFixed(2)
}

export default Vue.extend({
  props: {
    statistic: {
      type: Object as PropType<StatisticEntity>
    },
    isSprint: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    time2
  }
})
</script>
