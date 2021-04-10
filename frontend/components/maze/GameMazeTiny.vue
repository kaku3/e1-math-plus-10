<template>
  <div class="text-center">
    <MazeScene :save="save" />
    <v-row no-gutters>
      <v-col cols="6">
        <v-list class="info-container blue-grey lighten-4" dense>
          <v-list-item>
            <div class="console item mattock"></div>
            <div class="pl-4">Break Wall</div>
          </v-list-item>
          <v-list-item>
            <div class="console item plus-portion"></div>
            <div class="pl-4">Recover HP</div>
          </v-list-item>
          <v-list-item>
            <div class="console item key1"></div>
            <div class="pl-4">Open Chest</div>
          </v-list-item>
          <v-list-item>
            <div class="console item key2"></div>
            <div class="pl-4">Open Door</div>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="6">
        <v-list class="info-container blue-grey lighten-4" dense>
          <v-list-item>
            <div class="console bgo peak"></div>
            <div class="pl-4">Damage</div>
          </v-list-item>
          <v-list-item>
            <div class="console bgo coin"></div>
            <div class="pl-4">Money</div>
          </v-list-item>
          <v-list-item>
            <div class="console bgo chest1"></div><div class="console bgo chest2"></div>
            <div class="pl-4">Chest</div>
          </v-list-item>
          <v-list-item>
            <div class="console bgo door"></div>
            <div class="pl-4">Door</div>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.info-container {
  font-size: .6rem;
  font-family: 'Press Start 2P', cursive;

  .console.bgo {
    position: relative;
  }
}

</style>
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
    } else {
      q.set(this.save)
    }
    console.log(this.save)
  },

  computed: {
  }
})
</script>
