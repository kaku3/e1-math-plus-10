<template>
  <div>
    <v-row class="game-console">
      <v-col cols="auto"><div class="key">HP</div><div class="ml-2">{{ save.hp }}</div></v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto"><div class="console item coin"></div><div class="ml-2">{{ save.coin }}</div></v-col>
    </v-row>

    <div class="maze-scene" :style="sceneStyle">
      <div class="maze-container">
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
      <Tutorial :px="px" :py="py" />
    </div>

    <v-row>
      <v-col>
        <GamePad :save="save" @tap="onTap" />
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
.maze-scene {
  display: flex;
  align-items: center;
  min-height: 256px;

  .maze-container {
    position: relative;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { Maze, MAP_OBJECT } from '~/components/maze/Maze'

import { MazeSave, NewSave, resetSave } from '~/models/MazeSave'

import GamePad from '~/components/maze/GamePad.vue'

import Tutorial from '~/components/maze/Tutorial.vue'

export default Vue.extend({
  components: {
    GamePad,
    Tutorial
  },
  props: {
    save: {
      type: Object as PropType<MazeSave>,
      default: NewSave('')
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
      const maze_ = new Maze().generateFloor(this.save.floor)

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
      this.px = 1
      this.py = 1
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
    removeFloorObject(x:number, y:number) {
      //@ts-ignore
      this.maze[y][x].v = 0
      //@ts-ignore
      this.maze[y][x].obj = null
    },

    onTap(v:number): void {
      if(v === 4) {
        this.moveTo(this.px - 1, this.py)
        return
      }
      if(v === 6) {
        this.moveTo(this.px + 1, this.py)
        return
      }
      if(v === 2) {
        this.moveTo(this.px, this.py - 1)
        return
      }
      if(v === 8) {
        this.moveTo(this.px, this.py + 1)
        return
      }

      // portion
      if(v === 1) {
        if(this.save.portion > 0) {
          this.save.portion--
          this.save.hp = Math.min (Math.floor(this.save.hp + Math.random() * (this.save.hpMax / 2) + (this.save.hpMax / 3)), this.save.hpMax)
        }
      }
      // key1
      if(v === 3) {
        if(this.save.key1 > 0) {
          this.save.key1--
          //@ts-ignore
          const o = this.maze[this.py][this.px].v as MAP_OBJECT
          if(o === MAP_OBJECT.CHEST) {
            const rr = Math.random()
            if(rr < 0.4) {
              this.save.mattock += Math.floor(3 + Math.random() * 4)
            } else if(rr < 0.6) {
              this.save.portion += Math.floor(1 + Math.random() * 3)
            } else {
              this.save.coin += Math.floor(Math.random() * 101 + 100)
            }
            this.removeFloorObject(this.px, this.py)
          }
        }
      }
      // key2
      if(v === 7) {
        if(this.save.key2 > 0) {
          this.save.key2--
          //@ts-ignore
          const o = this.maze[this.py][this.px].v as MAP_OBJECT
          if(o === MAP_OBJECT.DOOR) {
          }
        }
      }
    },
    moveTo(x:number, y:number) {
      //@ts-ignore
      const o = this.maze[y][x].v as MAP_OBJECT
      if(o == MAP_OBJECT.WALL) {
        if(this.save.mattock > 0) {
          this.save.mattock--

          //@ts-ignore
          this.maze[y][x].v = 0
          //@ts-ignore
          this.maze[y][x].cls = {
            bg: true,
            floor: true
          }

        } else {
          return
        }
      }
      this.save.hp--

      let getItem = true
      switch(o) {
      case MAP_OBJECT.COIN:
        this.save.coin++
        break
      case MAP_OBJECT.KEY1:
        this.save.key1++
        break
      case MAP_OBJECT.KEY2:
        this.save.key2++
        break
      case MAP_OBJECT.PLUS0_PORTION:
        this.save.hp = Math.min (Math.floor(this.save.hp + Math.random() * this.save.hpMax / 10), this.save.hpMax)
        break
      case MAP_OBJECT.RANDOM0_PORTION:
        // 若干回復しやすい
        if(Math.random() < 0.6) {
          this.save.hp = Math.min (Math.floor(this.save.hp + Math.random() * this.save.hpMax / 3), this.save.hpMax)
        } else {
          this.save.hp = Math.max (Math.floor(this.save.hp - Math.random() * this.save.hpMax / 4), 1)
        }
        break
      case MAP_OBJECT.MATTOCK:
        this.save.mattock++
        break
      case MAP_OBJECT.PLUS_PORTION:
        this.save.portion++
        break
      case MAP_OBJECT.CHEST:
        getItem = false
        break
      case MAP_OBJECT.PEAK:
        this.save.hp = Math.max(this.save.hp - 10, 1)
        getItem = false
        break
      case MAP_OBJECT.DOOR:
        getItem = false
        break
      default:
        getItem = false
      }
      if(getItem) {
        this.removeFloorObject(x, y)
      }

      this.px = x
      this.py = y

      if(this.save.hp === 0) {
        if(this.save.floor === 0) {
          resetSave(this.save)
          this.init()
        }
      }
    }

  },

  computed: {
    playerStyle(): object {
      return {
        top: `${this.py * 16 - 16}px`,
        left: `${this.px * 16 - 8}px`,
      }
    },
    isTutorial(): boolean {
      return this.save.floor === 0
    }
  }
})
</script>
