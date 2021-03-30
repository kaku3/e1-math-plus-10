<template>
  <v-card>
    <v-card-title class="teal white--text text-h6">きょうのスコア</v-card-title>
    <v-list v-if="rankings.length > 0" dense>
      <v-list-item v-for="(o, i) in rankings" :key="i" class="score-item">
        <v-list-item-content>
          <v-list-item-title >{{ o.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ o.mode | fullDisplayModeName }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="score">{{o.score}}</v-list-item-action>
      </v-list-item>
    </v-list>
    <v-card-text v-else>
      プレイしてきょうのさいしょのスコアを登録しよう
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.v-card__title {
  padding: .5rem;
}
.score-item {
  .score {
    font-family: 'Fredoka One';
  }
  + .score-item {
    border-top: 1px solid #BDBDBD;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

import { fullDisplayModeName } from '~/utils/filters'

import firebase from '~/plugins/firebase'

export default Vue.extend({
  data() {
    return {
      rankings: [] as Object
    }
  },
  mounted () {
    this.getRankings()
  },
  methods: {
    async getRankings() {
      const startTime = (new Date()).setHours(0, 0, 0, 0)
      const db = firebase.firestore()
      const q = db.collection('scores')
        .where('createdAt', '==', startTime)
        .orderBy('timestamp', 'desc')
        .limit(10)

      const r = await q.get()
      this.rankings = r.docs.map(d => {
        const r = d.data()
        return r
      })
    }
  },
  filters: {
    fullDisplayModeName
  }
})
</script>
