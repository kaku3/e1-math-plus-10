<template>
  <div class="effect-item" v-if="show">
    <div v-for="i of count" :key="i" :class="`item ${item} n${i}`"></div>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.effect-item {
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;

  .item {
    position: absolute;

    &.mattock {
      &.n1 { animation: a-mattock .75s ease-in 0s forwards; }
      &.n2 { animation: a-mattock .75s ease-in .1s forwards; }
      &.n3 { animation: a-mattock .75s ease-in .2s forwards; }
      &.n4 { animation: a-mattock .75s ease-in .3s forwards; }
      &.n5 { animation: a-mattock .75s ease-in .4s forwards; }
      &.n6 { animation: a-mattock .75s ease-in .5s forwards; }
      &.n7 { animation: a-mattock .75s ease-in .6s forwards; }
      &.n8 { animation: a-mattock .75s ease-in .7s forwards; }
      &.n9 { animation: a-mattock .75s ease-in .8s forwards; }

      @keyframes a-mattock {
        0%   { transform: translate(0, 48px) scale(1); opacity: 0; }
        20%  { transform: translate(0, 0) scale(5); opacity: 1; }
        95%  { transform: translate(calc(50vw - 96px), 120px) scale(1); opacity: 1 }
        100% { opacity: 0; }
      }
    }

    &.sword {
      &.n1 { animation: a-sword .75s ease-in 0s forwards; }
      &.n2 { animation: a-sword .75s ease-in .1s forwards; }
      &.n3 { animation: a-sword .75s ease-in .2s forwards; }
      &.n4 { animation: a-sword .75s ease-in .3s forwards; }
      &.n5 { animation: a-sword .75s ease-in .4s forwards; }
      &.n6 { animation: a-sword .75s ease-in .5s forwards; }
      &.n7 { animation: a-sword .75s ease-in .6s forwards; }
      &.n8 { animation: a-sword .75s ease-in .7s forwards; }
      &.n9 { animation: a-sword .75s ease-in .8s forwards; }

      @keyframes a-sword {
        0%   { transform: translate(0, 48px) scale(1); opacity: 0; }
        20%  { transform: translate(0, 0) scale(5); opacity: 1; }
        95%  { transform: translate(calc(50vw - 48px), 120px) scale(1); opacity: 1; }
        100% { opacity: 0; }
      }
    }

    &.plus-portion {
      &.n1 { animation: a-plus-portion .8s ease-in 0s forwards; }
      &.n2 { animation: a-plus-portion .8s ease-in .1s forwards; }
      &.n3 { animation: a-plus-portion .8s ease-in .2s forwards; }
      &.n4 { animation: a-plus-portion .8s ease-in .3s forwards; }
      &.n5 { animation: a-plus-portion .8s ease-in .4s forwards; }
      &.n6 { animation: a-plus-portion .8s ease-in .5s forwards; }
      &.n7 { animation: a-plus-portion .8s ease-in .6s forwards; }
      &.n8 { animation: a-plus-portion .8s ease-in .7s forwards; }
      &.n9 { animation: a-plus-portion .8s ease-in .8s forwards; }

      @keyframes a-plus-portion {
        0%   { transform: translate(0, 48px) scale(1); opacity: 0; }
        20%  { transform: translate(0, 0) scale(5); opacity: 1; }
        95%  { transform: translate(calc(-50vw + 80px), 208px) scale(1); opacity: 1; }
        100% { opacity: 0; }
      }
    }

    &.key1 {
      &.n1 { animation: a-key1 .8s ease-in 0s forwards; }

      @keyframes a-key1 {
        0%   { transform: translate(0, 48px) scale(1); opacity: 0; }
        20%  { transform: translate(0, 0) scale(5); opacity: 1; }
        95%  { transform: translate(calc(-50vw + 80px), 256px) scale(1); opacity: 1; }
        100% { opacity: 0; }
      }
    }

    &.key2 {
      &.n1 { animation: a-key2 .8s ease-in 0s forwards; }

      @keyframes a-key2 {
        0%   { transform: translate(0, 48px) scale(1); opacity: 0; }
        20%  { transform: translate(0, 0) scale(5); opacity: 1; }
        95%  { transform: translate(calc(-50vw + 80px), 304px) scale(1); opacity: 1; }
        100% { opacity: 0; }
      }
    }

    &.coin {
      &.n1 { animation: a-coin .4s ease-in 0s forwards; }
      &.n2 { animation: a-coin .4s ease-in .1s forwards; }
      &.n3 { animation: a-coin .4s ease-in .2s forwards; }
      &.n4 { animation: a-coin .4s ease-in .3s forwards; }
      &.n5 { animation: a-coin .4s ease-in .4s forwards; }
      &.n6 { animation: a-coin .4s ease-in .5s forwards; }
      &.n7 { animation: a-coin .4s ease-in .6s forwards; }
      &.n8 { animation: a-coin .4s ease-in .7s forwards; }
      &.n9 { animation: a-coin .4s ease-in .8s forwards; }

      @keyframes a-coin {
        0%   { transform: translate(0, 0) scale(5); opacity: 0; }
        1%   { transform: translate(0, 0) scale(5); opacity: 1; }
        95%  { transform: translate(calc(50vw - 80px), -140px) scale(1); opacity: 1; }
        100% { opacity: 0; }
      }
    }

  }
}
</style>
<script lang="ts">
import Vue from 'vue'

import { Maze, MAP_OBJECT } from '~/components/maze/Maze'

export default Vue.extend({
  data () {
    return {
      timerId: -1,
      show: false,
      item: '',
      count: 0
    }
  },
  mounted () {
  },
  methods: {
    init(o:MAP_OBJECT, count: number) {
      const duration = 800 + count * 100
      this.item = Maze.getObjectClass(o) || ''
      this.count = count
      this.show = true

      if(this.timerId != -1) {
        window.clearTimeout(this.timerId)
      }
      this.timerId = window.setTimeout(() => {
        this.show = false
        this.timerId = -1
      }, duration)
    }
  }
})
</script>
