<template>
  <v-fade-transition>
    <div class="battle-scene-container" v-if="show">
      <div class="battle-scene">
        <div class="character player">
          <MazePlayer :icon="icon" />
        </div>
        <div class="character enemy">
          <div>
            <div :class="`bgo ${enemy}`"></div>
          </div>
        </div>
      </div>
    </div>
  </v-fade-transition>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.battle-scene-container {
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 120px;

  .battle-scene {
    background-color: #607D8B;
    width: 100%;

    animation:
      a-scene-start .5s ease-in-out 0s forwards,
      a-scene-kill .1s step-end 1.5s forwards;

    @keyframes a-scene-start {
      0%   { height: 0; opacity: 0; }
      100% { height: 100%; opacity: 1; }
    }
    @keyframes a-scene-kill {
      100% { background-color: #FF0000; }
    }
  }
}

.character {
  position: absolute;
  bottom: 32px;
  width: 64px;
  height: 64px;

  &.player {

    animation: a-player 2.5s ease-in 0s forwards;

    @keyframes a-player {
      0%   { left: -64px; }
      20%  { left: 32px;  }
      40%  { left: 40px;  }
      42%  { left: 100%;  }
      100% { left: 100%;  }
    }

    > * {
      transform: scale(2)
    }
  }
  &.enemy {

    animation: a-enemy 2.5s ease-in 0s forwards;

    @keyframes a-enemy {
      0%   { right: -64px; }
      20%  { right: 32px;  }
      40%  { right: 40px; }
      42%  { right: 35%; transform: rotate(0); }
      50%  { transform: rotate(-4deg); }
      55%  { right: 50%; transform: rotate(-90deg); }
      100% { right: 50%; transform: rotate(-90deg); }
    }

    > * {
      transform: scale(2) translate(16px, 16px);
    }
  }
}

</style>
<script lang="ts">
import Vue from 'vue'
import { Maze, MAP_OBJECT } from './Maze'

import seSword from '~/assets/maze/se/sword.mp3'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      timerId: -1,
      timerSeId: -1,
      show: false,
      e: MAP_OBJECT.ENEMY0
    }
  },
  mounted () {
  },
  methods: {
    init(e:MAP_OBJECT) {
      this.e = e
      this.show = true
      if(this.timerId !== -1) {
        window.clearTimeout(this.timerId)
      }
      this.timerId = window.setTimeout(() => {
        this.show = false
        this.timerId = -1

        this.$emit('end', this.e)
      }, 2500)

      if(this.timerSeId !== -1) {
        window.clearTimeout(this.timerSeId)
      }
      this.timerSeId = window.setTimeout(() => {
        new Audio(seSword).play()
        this.timerSeId = -1
      }, 1000)

    }
  },
  computed: {
    enemy(): string {
      //@ts-ignore
      return Maze.getObjectClass(this.e)
    },
    isShow(): boolean {
      return this.show
    }
  }
})
</script>
