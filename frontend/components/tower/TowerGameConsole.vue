<template>
  <v-card class="game-console">
    <v-card-text>
      <v-row>
        <v-col cols="auto">PLAY<v-icon>mdi-play</v-icon></v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          ★ 1
        </v-col>
      </v-row>
    </v-card-text>
    <v-list>
      <v-list-item v-for="(c,i) in towerCharacters" :key="i">
        {{ c.name }}
      </v-list-item>
    </v-list>
  </v-card>
</template>
<style lang="scss" scoped>
.game-console {
  font-family: 'Press Start 2P', cursive;
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { TowerSave, TowerSaveUtil, TowerCharacter, TowerCharacters } from '~/models/TowerSave'

export default Vue.extend({
  props: {
    save: {
      type: Object as PropType<TowerSave>,
    }
  },
  mounted () {
    console.log(this.save)
  },
  methods: {

  },
  computed: {
    towerCharacters(): TowerCharacter[] {
      return TowerCharacters
    }
  }
})
</script>
