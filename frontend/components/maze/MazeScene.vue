<template>
  <div>
    <v-row class="game-console" justify="center">
      <v-col cols="auto"><div class="key">HP</div><div class="ml-2">1000</div></v-col>
      <v-col cols="auto"><div class="console item coin"></div><div class="ml-2">33</div></v-col>
    </v-row>

    <div class="maze-scene" :style="sceneStyle">
      <div class="maze-bg">
        <div v-for="(cols, r) in maze" :key="r">
          <div v-for="(col, c) in cols" :key="c" :class="col.cls">
            {{ col }}
            <div v-if="col.obj" :class="col.obj"></div>
          </div>
        </div>
      </div>
      <div class="p i" :style="playerStyle"></div>
    </div>

    <v-row class="game-console" justify="center">
      <v-col cols="auto"><div class="console item mattock"></div><div class="ml-2">33</div></v-col>
      <v-col cols="auto"><div class="console item plus-portion"></div><div class="ml-2">0</div></v-col>
      <v-col cols="auto"><div class="console item key1"></div><div class="ml-2">0</div></v-col>
    </v-row>

    <v-row>
      <v-col>
        <GamePad @tap="onTap" />
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.game-console {
  padding: .25rem;
  color: white;
  font-size: .8rem;
  font-family: 'Press Start 2P', cursive;

  div {
    display: inline-block;
  }
}

</style>
<script lang="ts">
import Vue from 'vue'

import { Maze, MAP_OBJECT } from '~/components/maze/Maze'
import GamePad from '~/components/maze/GamePad.vue'

export default Vue.extend({
  components: {
    GamePad
  },
  props: {
    floor: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      maze: [] as Object[][],
      sceneStyle: {
        width: '0',
        height: '0'
      },
      px: 1,
      py: 1
    }
  },
  mounted () {
    this.init()

    console.log(this.maze)
  },
  methods: {
    init() {
      const maze_ = new Maze().generateFloor(this.floor)

      const sx = maze_[0].length
      const sy = maze_.length

      this.sceneStyle.width = `${sx * 16}px`
      this.sceneStyle.height = `${sy * 16}px`

      this.maze = new Array(sy)
      for(let r = 0; r < maze_.length; r++) {
        this.maze[r] = new Array(sx)
        for(let c = 0; c < maze_[r].length; c++) {
          this.maze[r][c] = {
            v: maze_[r][c],
            cls: {
              bg: true,
            }
          }
          if(maze_[r][c] !== 1) {
            // 通路
            //@ts-ignore
            this.maze[r][c].cls.floor = true

            const obj = this.getFloorObject(maze_[r][c])
            if(obj) {
              //@ts-ignore
              this.maze[r][c].obj = obj
            }

          } else {
            // 壁
            if(c === 0) {
              // 左端
              //@ts-ignore
              if(r === 0) {
                //@ts-ignore
                this.maze[r][c].cls['lu'] = true
              } else if(r === (sy - 1)) {
                //@ts-ignore
                this.maze[r][c].cls['ld'] = true
              } else {
                //@ts-ignore
                this.maze[r][c].cls[`l${c % 3}`] = true
              }
            } else if(c === (sx -1)) {
              // 右端
              //@ts-ignore
              if(r === 0) {
                //@ts-ignore
                this.maze[r][c].cls['ru'] = true
              } else if(r === (sy - 1)) {
                //@ts-ignore
                this.maze[r][c].cls['rd'] = true
              } else {
                //@ts-ignore
                this.maze[r][c].cls[`r${c % 3}`] = true
              }
            } else {
              if(r === (sy - 1)) {
                //@ts-ignore
                this.maze[r][c].cls[`d${c % 4}`] = true
              } else {
                //@ts-ignore
                this.maze[r][c].cls[`u${c % 4}`] = true
              }
            }
          }
        }
      }

    },
    getFloorObject(v: MAP_OBJECT) {
      const obj = {
        bgo: true
      }
      let cls = ''
      switch(v) {
        case MAP_OBJECT.COIN:
          cls = 'coin'
          break
        case MAP_OBJECT.KEY1:
          cls = 'key1'
          break
        case MAP_OBJECT.KEY2:
          cls = 'key2'
          break
        case MAP_OBJECT.PLUS0_PORTION:
          cls = 'plus0-portion'
          break
        case MAP_OBJECT.RANDOM0_PORTION:
          cls = 'random0-portion'
          break
        case MAP_OBJECT.MATTOCK:
          cls = 'mattock'
          break
        case MAP_OBJECT.PLUS_PORTION:
          cls = 'plus-portion'
          break
        case MAP_OBJECT.CHEST:
          cls = 'chest'
          break
        case MAP_OBJECT.PEAK:
          cls = 'peak'
          break
        case MAP_OBJECT.DOOR:
          cls = 'door'
          break
        default:
          return null
      }
      //@ts-ignore
      obj[cls] = true
      return obj
    },

    onTap(v:number, _:boolean): void {
      if(v === 4) this.moveTo(this.px - 1, this.py)
      if(v === 6) this.moveTo(this.px + 1, this.py)
      if(v === 2) this.moveTo(this.px, this.py - 1)
      if(v === 8) this.moveTo(this.px, this.py + 1)
    },
    moveTo(x:number, y:number) {
      //@ts-ignore
      if(this.maze[y][x].v !== 1) {
        this.px = x
        this.py = y
      }
    }
  },

  computed: {
    playerStyle(): object {
      return {
        top: `${this.py * 16 - 16}px`,
        left: `${this.px * 16 - 8}px`,
      }
    }
  }
})
</script>
