<template>
  <v-card>
    <v-card-text class="game-pad cyan darken-2" dark>
      <v-row dense>
        <v-col cols="3" class="white--text lighten-4">
          <div class="item mattock"></div>
          <div class="item-count">{{ save.mattock }}</div>
        </v-col>
        <v-col cols="3">
          <v-btn outlined @pointerdown="onClick(1)" color="cyan lighten-4" :disabled="save.portion == 0">
            <div class="item plus-portion"></div>
            <div class="item-count">{{ save.portion }}</div>
          </v-btn>
        </v-col>
        <v-col cols="ml-auto">
          <v-btn
            large
            depressed
            @pointerdown="onClick(2)"
            color="cyan lighten-4">
            <v-icon>mdi-arrow-up-drop-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2"></v-col>
        <v-col cols="3">
          <v-btn outlined @pointerdown="onClick(3)" color="cyan lighten-4" :disabled="save.key1 == 0">
            <div class="item key1"></div>
            <div class="item-count">{{ save.key1 }}</div>
          </v-btn>
        </v-col>
        <v-col cols="ml-auto">
          <v-btn
            large
            depressed
            @pointerdown="onClick(4)"
            color="cyan lighten-4">
            <v-icon>mdi-arrow-left-drop-circle</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="ml-auto">
          <v-btn
            large
            depressed
            @pointerdown="onClick(6)"
            color="cyan lighten-4">
            <v-icon>mdi-arrow-right-drop-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="3"></v-col>
        <v-col cols="3">
          <v-btn outlined @pointerdown="onClick(7)" color="cyan lighten-4" :disabled="save.key2 == 0">
            <div class="item key2"></div>
            <div class="item-count">{{ save.key2 }}</div>
          </v-btn>
        </v-col>
        <v-col cols="ml-auto">
          <v-btn
            large
            depressed
            @pointerdown="onClick(8)"
            color="cyan lighten-4">
            <v-icon>mdi-arrow-down-drop-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.game-pad > .row > .col {
  padding: .25rem;
  text-align: center;

  font-size: .8rem;
  font-family: 'Press Start 2P', cursive;

  .item {
    position: relative;
    margin-right: .25rem;
  }
  .item-count {
    display: inline-block;
    color: white;
    font-size: .6rem;
  }
}


</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { MazeSave, NewSave } from '~/models/MazeSave'

export default Vue.extend({
  props: {
    save: {
      type: Object as PropType<MazeSave>,
      default: NewSave('')
    }
  },
  mounted () {
    window.addEventListener('keydown', this.onKeyDown)
  },
  destroyed () {
    window.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    onClick(v: number) {
      this.$emit('tap', v)
    },
    onKeyDown(e: any) {
      let v = 0
      switch(e.code) {
        case 'KeyZ':
          v = 1
          break
        case 'KeyX':
          v = 3
          break
        case 'KeyC':
          v = 7
          break
        case 'ArrowRight':
          v = 6
          break
        case 'ArrowLeft':
          v = 4
          break
        case 'ArrowUp':
          v = 2
          break
        case 'ArrowDown':
          v = 8
          break
      }
      console.log(e.code)
      if(v !== 0) {
        this.onClick(v)
        e.preventDefault()
      }
    }
  }
})
</script>
