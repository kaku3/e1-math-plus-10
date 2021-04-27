<template>
  <v-fade-transition>
    <div class="battle-scene-container" v-if="show">
      <div class="battle-scene">
        <div class="character enemy">
          <div>
            <div :class="`bgo ${enemy}`"></div>
          </div>
        </div>
        <div class="character player">
          <MazePlayer :icon="icon" />
        </div>
      </div>
      <div v-for="i of 6" :key="i" :class="`line l${i}`"></div>
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
      a-scene-kill .1s step-end 1s forwards;

    @keyframes a-scene-start {
      0%   { height: 0; opacity: 0; }
      100% { height: 100%; opacity: 1; }
    }
    @keyframes a-scene-kill {
      100% { background-color: #FF0000; }
    }
  }
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0, .25);

    $ys: 0, 2, 4, 8, 16, 32;
    @for $i from 1 through length($ys) {
      $y: nth($ys, $i);
      &.l#{$i} {
        @if $i % 2 == 0 {
          animation:
            a-scene-line-start .5s ease-in-out 0s forwards,
            a-scene-line-start-even .8s ease-in #{$i/200}s forwards,
            a-scene-line-start-#{$i} .6s ease-in .1s forwards,
            a-scene-line-kill-even .5s ease-out #{1.3 + $i/200}s forwards;

        } @else {
          animation:
            a-scene-line-start .5s ease-in-out 0s forwards,
            a-scene-line-start-odd .8s ease-in #{$i/200}s forwards,
            a-scene-line-start-#{$i} .6s ease-in .1s forwards,
            a-scene-line-kill-odd .5s ease-out #{1.3 + $i/200}s forwards;
        }

        @keyframes a-scene-line-start-#{$i} {
          0%   { top: 80px; height: 1px; }
          100% { top: #{$y + 80} + px; height: #{$i/2} + px; }
        }
      }
    }
    @keyframes a-scene-line-start {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes a-scene-line-start-even {
      0%   { left: -100%; }
      100% { left: 0; }
    }
    @keyframes a-scene-line-start-odd {
      0%   { right: -100%; }
      100% { right: 0; }
    }
    @keyframes a-scene-line-kill-even {
      0%   { left: 0; opacity: 1; }
      100% { left: 100%; opacity: 0; transform: scale(3); }
    }
    @keyframes a-scene-line-kill-odd {
      0%   { right: 0; opacity: 1; }
      100% { right: 100%; opacity: 0; transform: scale(3); }
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
      45%  { left: 100%;  }
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

import { MazeSave } from '~/models/MazeSave'

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
      e: MAP_OBJECT.ENEMY0,
      s: 0,
      d: 0,
      c: 0
    }
  },
  mounted () {
  },
  methods: {
    init(e:MAP_OBJECT, save:MazeSave) {
      this.e = e

      this.battle(e, save)

      this.show = true
      if(this.timerId !== -1) {
        window.clearTimeout(this.timerId)
      }
      this.timerId = window.setTimeout(() => {
        this.show = false
        this.timerId = -1

        this.$emit('end', {
          e: this.e,
          s: this.s,
          d: this.d,
          c: this.c
        })
      }, 2500)

      if(this.timerSeId !== -1) {
        window.clearTimeout(this.timerSeId)
      }
      this.timerSeId = window.setTimeout(() => {
        new Audio(seSword).play()
        this.timerSeId = -1
      }, 1000)

    },
    battle(e:MAP_OBJECT, save:MazeSave) {

      const floor = save.floor
      let s = Math.ceil((e - MAP_OBJECT.ENEMY0) / 2)  + 1
      let d = 0
      let c = 0
      switch(e) {
      case MAP_OBJECT.ENEMY0:
        c = Math.floor(300 + floor * 10)
        break
      case MAP_OBJECT.ENEMY1:
        c = Math.floor(500 + floor * 20)
        break
      case MAP_OBJECT.ENEMY2:
        c = Math.floor(200 + floor * 100)
        break
      case MAP_OBJECT.ENEMY3:
        c = Math.floor(1000 + floor * 50)
        break
      case MAP_OBJECT.ENEMY4:
        c = Math.floor(500 + floor * 100)
        break
      }
      if(save.sword >= s) {
        save.sword -= s
      } else {
        d = (s - save.sword)
        if(e == MAP_OBJECT.ENEMY3) {
          d *= 10 + Math.max(0, floor - 15) * 2
        } else if(e == MAP_OBJECT.ENEMY4) {
          d *= 10 + Math.max(0, floor - 18) * 4
        } else {
          d *= 10
        }
        s = save.sword
        save.sword = 0
        save.hp -= d
      }

      save.hp = Math.max(0, save.hp)
      save.coin += c

      this.s = s
      this.d = d
      this.c = c
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
