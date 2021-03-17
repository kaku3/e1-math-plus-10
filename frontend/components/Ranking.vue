<template>
  <v-card>
    <v-card-title><v-icon>mdi-crown</v-icon>らんきんぐ</v-card-title>
    <v-card-text>
      <v-row v-for="(o, i) in rankings" :key="i" class="rankings" :class="{ entry: isMe(o), 'rank-1': o.no == 1, 'rank-2': o.no == 2, 'rank-3': o.no == 3, 'top10': o.no <= 10 }">
        <v-col cols="auto" class="no">{{o.no}}</v-col>
        <v-col cols="auto" class="name">{{o.name}}</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="value">{{displayScore(o.score)}}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.rankings {
  > * {
    padding: .5rem;
    font-size: .8rem;
  }
  + .rankings {
    margin-top: .25rem;
    border-top: 1px solid #E0E0E0;
  }
  &.rank-1 {
    .no, .name {
      font-size: 1.8rem;
    }
  }
  &.rank-2 {
    .no, .name {
      font-size: 1.3rem;
    }
  }
  &.rank-3 {
    .no, .name {
      font-size: 1rem;
    }
  }
  &.top10 {
    font-weight: bold;
  }
  &.entry {
    background-color: #F0F4C3;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

import { GameMode } from '~/models/Score'

type RankingEntry = {
  no: number
  name: string
  score: number
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
  data () {
    return {
      rankings: [] as RankingEntry[]
    }
  },
  async mounted() {
    try {
      const db = firebase.firestore()
      const q = db.collection('scores')
        .where('mode', '==', this.displayGameMode)
        .orderBy('score', this.gameMode === 'modeEndress' ? 'desc' : 'asc')
        .limit(100)
      const r = await q.get()
      this.rankings = r.docs.map(d => {
        const r = d.data()
        r.no = 0
        return r
      }) as RankingEntry[]
      if(this.rankings.length > 0) {
        let score = this.rankings[0].score
        let no = 1
        let no2 = 1
        for(const r of this.rankings) {
          if(r.score != score) {
            score = r.score
            no = no2
          }
          r.no = no
          no2++
        }
      }
    } catch(ex) {
      console.error(ex)
    }
  },
  methods: {
    isMe(o: RankingEntry): boolean {
      return o.name == this.accountStore.account.name
    },
    displayScore(score: number) {
      if(this.gameMode !== 'modeEndress') {
        return score.toFixed(2)
      }
      return score
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
    displayGameMode(): GameMode {
      if(this.gameMode == 'modeEndress') {
        return this.gameMode
      } else {
        return `${this.gameMode}-${this.questionCount}` as GameMode
      }
    }
  }
})
</script>
