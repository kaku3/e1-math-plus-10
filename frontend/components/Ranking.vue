<template>
  <v-card>
    <v-card-title><v-icon>mdi-crown</v-icon>{{displayGameModeTitle}}</v-card-title>
    <v-card-text>
      <v-row v-for="(o, i) in rankings" :key="i" class="rankings" :class="{ entry: isMe(o) }">
        <v-col cols="auto" class="text-h6">{{o.name}}</v-col>
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
  }
  + .rankings {
    margin-top: .25rem;
    border-top: 1px solid #E0E0E0;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

import { GameMode } from '~/models/Score'

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
      rankings: [] as Object[]
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
      this.rankings = r.docs.map(d => d.data())
    } catch(ex) {
      console.error(ex)
    }
  },
  methods: {
    isMe(o: any): boolean {
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
    },
    displayGameModeTitle(): String {
      if(this.gameMode == 'modeEndress') {
        return 'たいきゅうモード'
      } else {
        return `${this.questionCount}問モード`
      }
    }
  }
})
</script>
