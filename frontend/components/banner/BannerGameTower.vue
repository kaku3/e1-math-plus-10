<template>
  <div class="banner-game-tower">
    <div class="game-scene" @click="onTap">
      <TowerGameScene />
      <div class="console floor">FLOOR {{ floor }}</div>
      <div class="console star">★ {{ star }}</div>
      <div class="start" v-if="isBanner">Tap to Play</div>
    </div>
    <v-slide-y-reverse-transition>
      <TowerGameConsole v-if="isGame" :save="save" />
    </v-slide-y-reverse-transition>
  </div>
</template>
<style lang="scss" scoped>
.game-scene {
  position: relative;

  .start {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
    text-align: center;
    text-shadow: 0 2px black;

    font-size: 1rem;
    color: white;
    font-family: 'Press Start 2P', cursive;

    animation: a-start 1s ease-in-out 0s infinite;

    @keyframes a-start {
      0%   { opacity: 1; }
      50%  { opacity: 0; }
      100% { opacity: 1; }
    }
  }
  .console {
    position: absolute;
    top: 0;
    padding: .25rem;

    font-size: .6rem;
    color: white;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 0 2px black;

    &.floor {
      left: 0;
    }
    &.star {
      right: 0;
      text-align: right;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

import TowerGameScene from '~/components/tower/TowerGameScene.vue'
import TowerGameConsole from '~/components/tower/TowerGameConsole.vue'

import { TowerSaveUtil } from '~/models/TowerSave'


export default Vue.extend({
  components: {
    TowerGameScene,
    TowerGameConsole
  },
  data() {
    return {
      mode: 'banner',
      save: null
    }
  },
  async mounted () {
    const u = new TowerSaveUtil()
    await u.loadData()

    //@ts-ignore
    this.save = await u.save
  },
  methods: {
    onTap() {
      this.mode = this.mode === 'banner' ? 'game' : 'banner'
    }
  },
  computed: {
    isBanner(): boolean {
      return this.mode === 'banner'
    },
    isGame(): boolean {
      return this.mode === 'game'
    },
    floor(): number {
      //@ts-ignore
      return this.save?.floor | 0
    },
    star(): number {
      //@ts-ignore
      return this.save?.star | 0
    }
  }
})
</script>
