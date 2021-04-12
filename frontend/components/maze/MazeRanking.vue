<template>
  <v-card class="maze-ranking-container">
    <v-simple-table dense class="blue-grey lighten-3">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center"></th>
            <th class="text-left">NAME</th>
            <th class="text-center"><div>FLOOR</div><div>(COIN)</div></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(o, i) in rankings" :key="i" :class="{me: isMe(o)}">
            <td class="ranking-item rank">
              {{o.rank}}
            </td>
            <td class="ranking-item name">
              <span v-if="isClear(o)" class="icon">
                <div class="p w"></div>
              </span>
              <span v-else>
                <v-icon>mdi-grave-stone</v-icon>
              </span>
              <span>{{o.name}}</span>
            </td>
            <td class="ranking-item floor-coin">
              {{o.floor}}({{o.coin}})
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.maze-ranking-container {
  font-family: 'Press Start 2P', 'DotGothic16';
  .me > * {
    background-color: #90A4AE;
  }
  .ranking-item {
    font-size: .6rem;
  }
  .name .icon {
    position: relative;

    .p {
      top: -16px;
    }
  }
}

</style>
<script lang="ts">
import Vue from 'vue'

import firebase from '~/plugins/firebase'

export default Vue.extend({
  data() {
    const uid = sessionStorage.getItem('uid') || ''
    return {
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
      const q = db.collection('mazeScores')
        .orderBy('floor', 'desc')
        .orderBy('coin', 'desc')
        .limit(100)

      let rank = 1
      const r = await q.get()
      this.rankings = r.docs.map(d => {
        const r = d.data()
        return Object.assign({ rank: rank++ }, r)
      })
      // 同率処理
      for(let i = 1; i < this.rankings.length; i++) {
        const o0 = this.rankings[i - 1]
        const o = this.rankings[i]
        //@ts-ignore
        if(o.floor === o0.floor && o.coin === o0.coin) {
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
    }

  }
})
</script>
