<template>
  <v-card class="info-container blue-grey lighten-4">
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="cyan lighten-3" depressed small @click="exit">EXIT</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { MazeSave, NewSave, resetSave } from '~/models/MazeSave'

export default Vue.extend({
  props: {
    save: {
      type: Object as PropType<MazeSave>,
      default: NewSave('')
    }
  },
  methods: {
    exit() {
      console.log('MazeShop:start')
      this.$emit('start-floor')
    }
  }

})
</script>
