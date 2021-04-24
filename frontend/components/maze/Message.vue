<template>
  <div class="message-main-container">
    <v-slide-y-reverse-transition>
      <div v-if="show" class="message-container">
        <div v-for="(m, i) in battleMessages" :key="i">{{m}}</div>
        {{ message }}
      </div>
    </v-slide-y-reverse-transition>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.message-main-container {
  width: 100%;
  min-height: 2rem;
  font-family: 'Press Start 2P', 'DotGothic16';

  .message-container {
    padding: .25rem .5rem;
    text-align: left;
    width: 100%;
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid white;

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
      message: '',
      battleMessages: [] as String[]
    }
  },
  methods: {
    showMessage(m:string, v:number) {
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
            this.message = `HP が ${-v} へってしまった!`
          }
          break
        case 'get-mattock':
          if(v === 1) {
            this.message = `つるはしを てにいれた`
          } else {
            this.message = `つるはしを ${v} てにいれた`
          }
          break
        case 'get-sword':
          if(v === 1) {
            this.message = `つるぎを てにいれた`
          } else {
            this.message = `つるぎを ${v} てにいれた`
          }
          break
        case 'get-plus-portion':
          if(v === 1) {
            this.message = `くすり青（大）を　てにいれた`
          } else {
            this.message = `くすり青（大）を ${v} てにいれた`
          }
          break

        case 'get-key1':
          this.message = `ぎんのカギを　てにいれた!`
          break

        case 'get-key2':
          this.message = `きんのカギを　てにいれた!`
          break

        case 'empty-chest':
          this.message = `たからばこは　からだった!`
          break

        case 'damage':
          this.message = `${v} のダメージ!`
          break
      }
      this.battleMessages = []
      this.setShow()
    },
    showBattleMessage(e: number, d:number, c:number) {
      const names = [
        'ザコ',
        'ザコマスク',
        'ナイト',
        'マスクドナイト',
        'ナイトメア',
      ]
      this.message = ''
      this.battleMessages = [
        `${names[e]}をたおした!`,
        `コイン${c}を　てにいれた`
      ]
      if(d > 0) {
        this.message = `${d} のダメージ!`
      }
      this.setShow()
    },
    setShow() {
      this.show = true
      if(this.timerId !== -1) {
        window.clearTimeout(this.timerId)
      }
      this.timerId = window.setTimeout(() => {
        this.show = false
        this.timerId = -1
      }, 2000)
    }
  }
})
</script>
