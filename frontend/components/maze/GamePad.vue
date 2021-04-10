<template>
  <v-card>
    <v-card-text class="digit-keyboard cyan darken-4" dark>
      <v-row>
        <v-col cols="3" class="white--text lighten-4"><div class="item mattock"></div>{{ save.mattock }}</v-col>
        <v-col cols="3">
          <v-btn x-small outlined @pointerdown="onClick(1)" color="cyan lighten-4" :disabled="save.portion == 0"><div class="item plus-portion"></div>{{ save.portion }}</v-btn>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="2"><v-btn small outlined @pointerdown="onClick(2)"><v-icon>mdi-arrow-up-drop-circle</v-icon></v-btn></v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="3">
          <v-btn x-small outlined @pointerdown="onClick(3)" color="cyan lighten-4" :disabled="save.key1 == 0"><div class="item key1"></div>{{ save.key1 }}</v-btn>
        </v-col>
        <v-col cols="2"><v-btn small outlined @pointerdown="onClick(4)"><v-icon>mdi-arrow-left-drop-circle</v-icon></v-btn></v-col>
        <v-col cols="2"></v-col>
        <v-col cols="2"><v-btn small outlined @pointerdown="onClick(6)"><v-icon>mdi-arrow-right-drop-circle</v-icon></v-btn></v-col>
      </v-row>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="3">
          <v-btn x-small outlined @pointerdown="onClick(7)" color="cyan lighten-4" :disabled="save.key2 == 0"><div class="item key2"></div>{{ save.key2 }}</v-btn>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="2"><v-btn small outlined @pointerdown="onClick(8)"><v-icon>mdi-arrow-down-drop-circle</v-icon></v-btn></v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.digit-keyboard > .row > .col {
  padding: .25rem;
  text-align: center;

  font-size: .8rem;
  font-family: 'Press Start 2P', cursive;

  > button {
    color: #0097A7;

  }
  .item {
    position: relative;
    margin-right: .25rem;
  }
  .item-count {
    display: inline-block;
    color: white;
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
  },
  methods: {
    onClick(v: number) {
      this.$emit('tap', v)
    }
  }
})
</script>
