<template>
  <div class="banner-game-tower">
    <div class="game-scene" @click="onTap">
      <TowerGameScene ref="towerGameScene"
      />
      <div class="console floor">FLOOR {{ floor }}</div>
      <div class="console star">★ {{ star }}</div>
      <div class="start" v-if="isBanner">Tap to Play</div>
    </div>
    <v-slide-y-reverse-transition>
      <TowerGameConsole v-if="isGame" ref="towerGameConsole"
        @start="startGame"
        @buy="buy"
        @up="up"
      />
    </v-slide-y-reverse-transition>
  </div>
</template>
<style lang="scss" scoped>
.banner-game-tower {
  width: 320px;
}

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
import { CharacterController } from '~/components/tower/TowerCharacter'

import { TowerUtil, TowerSave, TowerCharacter } from '~/models/TowerSave'


export default Vue.extend({
  components: {
    TowerGameScene,
    TowerGameConsole
  },
  data() {
    return {
      mode: 'banner',
      util: new TowerUtil(),
      characterControllers: [] as CharacterController[]
    }
  },
  async mounted () {
    await this.util.loadData()
  },
  methods: {
    onTap() {
      this.mode = this.mode === 'banner' ? 'game' : 'banner'
      if(this.mode === 'game') {
        this.$nextTick(() => {
          this.updateConsole()
        })
      }
    },
    async startGame() {
      this.setupCharacterController()

      // ★-1
      //@ts-ignore
      this.$refs['towerGameScene'].start(this.util.save, this.characterControllers)
    },

    async buy(c:TowerCharacter) {
      await this.util.updateCharacter(c, c.characterPrice)
      this.setupCharacterController()
      this.updateConsole()
    },
    async up(c:TowerCharacter) {
      await this.util.updateCharacter(c, c.levelPrice)
      this.updateConsole()
    },
    updateConsole() {
      //@ts-ignore
      this.$refs['towerGameConsole'].update(this.util.save, this.characterControllers)
    },

    setupCharacterController() {
      const characters = TowerUtil.getCharacters(this.util.save).filter(c => c.status.lv > 0)

      this.characterControllers = characters.map(c => {
        const controller = this.characterControllers.find(cc => cc.character.id == c.id)
        return {
          character: c,
          creationTime: controller?.creationTime || 0,
          displayCreationTime: controller?.displayCreationTime || 0
        }
      })
    }
  },
  computed: {
    save(): TowerSave {
      return this.util?.save
    },

    floor(): number {
      //@ts-ignore
      return this.save?.floor | 0
    },
    star(): number {
      //@ts-ignore
      return this.save?.star | 0
    },

    isBanner(): boolean {
      return this.mode === 'banner'
    },
    isGame(): boolean {
      return this.mode === 'game'
    },
  }
})
</script>
