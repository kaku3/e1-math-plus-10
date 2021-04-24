<template>
  <div class="text-center">
    <MazeScene :save="save" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import { MazeSave, NewSave } from '~/models/MazeSave'

import firebase from '@/plugins/firebase'

export default Vue.extend({
  data () {
    const uid = sessionStorage.getItem('uid') || ''
    return {
      save: NewSave(uid) as MazeSave
    }
  },

  async mounted() {
    console.log(this.save)
    const db = firebase.firestore()
    const q = db.collection('mazeSaves').doc(this.save.uid)
    const r = await q.get()
    if(r.exists) {
      //@ts-ignore
      this.save = r.data()
      // データ形式変更対応
      if(!this.save.sword) {
        this.save.sword = 0
      }
      if(!this.save.shop_sword) {
        this.save.shop_sword = 0
      }
    } else {
      q.set(this.save)
    }
    console.log(this.save)
  },

  computed: {
  }
})
</script>
