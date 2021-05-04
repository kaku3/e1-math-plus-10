<template>
  <v-card>
    <v-card-text class="digit-keyboard cyan lighten-4">
      <v-row justify="center">
        <v-col cols="4"><v-btn @pointerdown="onClick(1)" :class="{ selected : isSelected(1) }">1</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(2)" :class="{ selected : isSelected(2) }">2</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(3)" :class="{ selected : isSelected(3) }">3</v-btn></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4"><v-btn @pointerdown="onClick(4)" :class="{ selected : isSelected(4) }">4</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(5)" :class="{ selected : isSelected(5) }">5</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(6)" :class="{ selected : isSelected(6) }">6</v-btn></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4"><v-btn @pointerdown="onClick(7)" :class="{ selected : isSelected(7) }">7</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(8)" :class="{ selected : isSelected(8) }">8</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(9)" :class="{ selected : isSelected(9) }">9</v-btn></v-col>
      </v-row>
      <v-row justify="center" v-if="showFunctions">
        <v-col cols="4"><v-btn @pointerdown="onClick(10)">C</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(0)" :class="{ selected : isSelected(0) }">0</v-btn></v-col>
        <v-col cols="4"><v-btn @pointerdown="onClick(11)">=</v-btn></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.digit-keyboard > .row > .col {
  padding: .25rem;
  text-align: center;

  > button {
    font-size: 4rem;
    font-family: 'Fredoka One';
    width: 80%;
    height: 5rem;
    color: #0097A7;

    &.selected {
      background-color: #FFECB3;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    mode: {
      type: String,
      default: 'tap'
    },
    showFunctions: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: [] as boolean[]
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    reset() {
      this.selected = Array(12).fill(false)
    },
    onClick(v: number) {
      if(this.mode === 'select') {
        this.$set(this.selected, v, !this.selected[v])
      }
      // console.log(v, this.selected[v])
      this.$emit('tap', v, this.selected[v])
    },
    isSelected(v: number): boolean {
      return this.selected[v]
    }
  }
})
</script>
