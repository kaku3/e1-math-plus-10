<template>
  <v-card>
    <v-card-text class="digit-keyboard cyan darken-4" dark>
      <v-row justify="start">
        <v-col cols="2"></v-col>
        <v-col cols="2"><v-btn outlined @pointerdown="onClick(2)" :class="{ selected : isSelected(2) }"><v-icon>mdi-arrow-up-drop-circle</v-icon></v-btn></v-col>
        <v-col cols="2"></v-col>
      </v-row>
      <v-row justify="start">
        <v-col cols="2"><v-btn outlined @pointerdown="onClick(4)" :class="{ selected : isSelected(4) }"><v-icon>mdi-arrow-left-drop-circle</v-icon></v-btn></v-col>
        <v-col cols="2"></v-col>
        <v-col cols="2"><v-btn outlined @pointerdown="onClick(6)" :class="{ selected : isSelected(6) }"><v-icon>mdi-arrow-right-drop-circle</v-icon></v-btn></v-col>
      </v-row>
      <v-row justify="start">
        <v-col cols="2"></v-col>
        <v-col cols="2"><v-btn outlined @pointerdown="onClick(8)" :class="{ selected : isSelected(8) }"><v-icon>mdi-arrow-down-drop-circle</v-icon></v-btn></v-col>
        <v-col cols="3"></v-col>
        <v-col cols="2"><v-btn outlined icon @pointerdown="onClick(1)" :class="{ selected : isSelected(1) }"><div class="item plus-portion"></div></v-btn></v-col>
        <v-col cols="2"><v-btn outlined icon @pointerdown="onClick(3)" :class="{ selected : isSelected(3) }"><div class="item key1"></div></v-btn></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.digit-keyboard > .row > .col {
  padding: .25rem;
  text-align: center;

  > button {
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
      this.selected = Array(10).fill(false)
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
