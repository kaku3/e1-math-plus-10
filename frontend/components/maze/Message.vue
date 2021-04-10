<template>
  <div class="main-container">
    <v-slide-y-reverse-transition>
      <div v-if="show" class="message-container">
        {{ message }}
      </div>
    </v-slide-y-reverse-transition>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.main-container {
  position: absolute;
  bottom: 2.5rem;
  left: 0;
  width: 100%;
  font-family: 'Press Start 2P', 'DotGothic16';

  .message-container {
    padding: .25rem .5rem;
    text-align: left;
    width: 100%;
    font-size: .8rem;
    color: black;
    background-color: white;
    border-radius: 4px;

    animation: pop .5s ease-in 0;

    @keyframes pop {
      0% { transform: translateY(.5rem); }
      100% { transform: translateY(0); }
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

import { MAP_OBJECT } from '~/components/maze/Maze'

export default Vue.extend({
  data () {
    return {
      timerId: -1,
      show: false,
      message: ''
    }
  },
  methods: {
    showMessage(m:string, v:number) {
      console.log(m)
      switch(m) {
        case 'get-coin':
          this.message = `コインを ${v} てにいれた`
          break
        case 'get-plus0-portion':
        case 'use-plus-portion':
          this.message = `HP が ${v} かいふくした`
          break
        case 'get-random0-portion':
          if(v > 0) {
            this.message = `HP が ${v} かいふくした`
          } else {
            this.message = `HP が ${v} へってしまった`
          }
          break
        case 'get-mattock':
          this.message = `つるはしを ${v} てにいれた`
          break
        case 'get-plus-portion':
          this.message = `くすり青（大）を ${v} てにいれた`
          break
        case 'damage':
          this.message = `${v} のダメージ!`
          break
      }
      this.show = true
      window.setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
})
</script>
