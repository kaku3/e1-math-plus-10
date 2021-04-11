<template>
  <v-card class="info-container blue-grey lighten-4">
    <v-card-title class="justify-center">
      <div v-if="isClear">CLEAR</div>
      <div v-else>GAME OVER</div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col cols="auto">FLOOR</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">{{ result.floor }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">COIN</v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">{{ result.coin }}</v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="cyan lighten-3" depressed small @click="exit">EXIT</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.info-container {
  font-family: 'Press Start 2P', 'DotGothic16';
}

</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

export interface MazeResult {
  floor: number
  coin: number
}

export default Vue.extend({
  props: {
    result: {
      type: Object as PropType<MazeResult>
    }
  },
  methods: {
    exit() {
      console.log('MazeShop:start')
      this.$emit('start-floor')
    }
  },
  computed: {
    isClear(): boolean {
      return this.result.floor === 20
    }
  }

})
</script>
