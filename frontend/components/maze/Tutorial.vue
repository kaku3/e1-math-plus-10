<template>
  <div class="tutorial-container">
    <v-slide-y-reverse-transition>
      <div v-if="m0" class="message-container">
        <v-icon small>mdi-arrow-up-drop-circle</v-icon>
        <v-icon small>mdi-arrow-down-drop-circle</v-icon>
        <v-icon small>mdi-arrow-left-drop-circle</v-icon>
        <v-icon small>mdi-arrow-right-drop-circle</v-icon>
        <span>でいどう</span>
      </div>
      <div v-else-if="m1" class="message-container">
        あるくと　HP　が　へる
      </div>
      <div v-else-if="m2" class="message-container">
        コインで　かいものが　できる
      </div>
      <div v-else-if="m3" class="message-container">
        トゲは　いたい
      </div>
      <div v-else-if="m4" class="message-container">
        くすり青（小）は　かいふく
      </div>
      <div v-else-if="m5" class="message-container">
        くすり青（大）は　もちあるける
      </div>
      <div v-else-if="m6" class="message-container">
        くすり黄（小）のこうかは　ランダム
      </div>
      <div v-else-if="m7" class="message-container">
        ぎんのカギで　たからばこを　あけられる
      </div>
      <div v-else-if="m8" class="message-container">
        たからばこには　いいものが　はいっている
      </div>
      <div v-else-if="m9" class="message-container">
        つるはしで　かべを　こわせる
      </div>
      <div v-else-if="m10" class="message-container">
        きんのカギで　ドアを　あけられる
      </div>
      <div v-else-if="m11" class="message-container">
        ドアを　あければ　クリア
      </div>
    </v-slide-y-reverse-transition>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.tutorial-container {
  position: absolute;
  top: 2.5rem;
  left: 0;
  width: 100%;
  font-family: 'Press Start 2P', 'DotGothic16';

  .message-container {
    margin: .5rem;
    padding: .25rem .5rem;
    text-align: left;
    width: calc(100% - 1rem);
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
export default Vue.extend({
  props: {
    px: {
      type: Number,
      default: 0
    },
    py: {
      type: Number,
      default: 0
    },
  },
  computed: {
    m0(): boolean {
      return this.px == 1 && this.py == 1
    },
    m1(): boolean {
      return this.px == 2 && this.py == 1
    },
    m2(): boolean {
      return this.px == 3 && this.py == 1
    },
    m3(): boolean {
      return this.px == 4 && this.py == 1
    },
    m4(): boolean {
      return this.px == 5 && this.py == 1
    },
    m5(): boolean {
      return this.px == 6 && this.py == 1
    },
    m6(): boolean {
      return this.px == 7 && this.py == 1
    },
    m7(): boolean {
      return this.px == 10 && this.py == 1
    },
    m8(): boolean {
      return this.px == 11 && this.py == 1
    },
    m9(): boolean {
      return this.px == 13 && this.py == 1
    },
    m10(): boolean {
      return this.px == 15 && this.py == 2
    },
    m11(): boolean {
      return this.px == 13 && this.py == 2
    },
  }
})
</script>
