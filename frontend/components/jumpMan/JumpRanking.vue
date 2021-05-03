<template>
  <v-card class="jump-ranking-container">
    <v-simple-table dense class="blue-grey lighten-3">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center"></th>
            <th class="text-left">NAME</th>
            <th class="text-center">
              <div class="blue-grey--text text--darken-4">score</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(o, i) in rankings" :key="i" :class="{me: isMe(o)}">
            <td class="ranking-item rank">
              {{o.rank}}
            </td>
            <td class="ranking-item name">
              <span :class="`c c${o.character}`"></span>
              <span class="n">{{o.name}}</span>
            </td>
            <td class="ranking-item score text-right">
              <div class="blue-grey--text text--darken-2">{{o.score}}</div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<style lang="scss" scoped src="./characters.scss" />
<style lang="scss" scoped>
.jump-ranking-container {
  font-family: 'Press Start 2P', 'DotGothic16';
  .me > * {
    background-color: #90A4AE;
  }
  .ranking-item {
    font-size: .6rem;
  }
  .rank {
    padding: .25rem;
    width: 1.5rem;
  }
  .name {
    text-align: left;
    .n {
      display: inline-block;
    }
  }
}

</style>
<script lang="ts">
import Vue from 'vue'

import firebase from '~/plugins/firebase'

export default Vue.extend({
  props: {
    stage: {
      type: Number,
      default: 0
    }
  },

  data() {
    const uid = sessionStorage.getItem('uid') || ''
    return {
      timerId: -1,
      uid: uid,
      rankings: [] as Object[]
    }
  },
  mounted () {
    this.getRankings()
  },

  methods: {
    async getRankings() {
      const startTime = (new Date()).setHours(0, 0, 0, 0)
      const db = firebase.firestore()
      const q = db.collection('jumpScores')
        .where('stage', '==', this.stage)
        .orderBy('score', 'desc')
        .limit(100)

      let rank = 1
      const r = await q.get()
      this.rankings = r.docs.map(d => {
        const r = d.data()
        return { ...r, rank: rank++ }
      })
      // 同率処理
      for(let i = 1; i < this.rankings.length; i++) {
        const o0 = this.rankings[i - 1]
        const o = this.rankings[i]
        //@ts-ignore
        if(o.score === o0.score) {
          //@ts-ignore
          o.rank = o0.rank
        }
      }

      console.log(this.rankings)
    },
    isClear(o:any) {
      return o.floor === 21
    },
    isMe(o:any): boolean {
      return o.uid === this.uid
    },
    size(o:any): number {
      return o.rank <= 10 ? 48 : 32
    }

  },
  watch: {
    stage: function(v: number) {
      this.rankings = []
      if(this.timerId != -1) {
        window.clearTimeout(this.timerId)
      }
      this.timerId = window.setTimeout(() => {
        this.timerId = -1
        this.getRankings()
      }, 3000)
    }
  }
})
</script>
