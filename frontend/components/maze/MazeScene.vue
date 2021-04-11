<template>
  <div v-if="isReady">
    <v-row class="game-console">
      <v-col cols="auto"><div class="bgo door"></div><div class="ml-2">{{ save.floor }}</div></v-col>
      <v-col cols="auto"><div class="key">HP</div><div class="ml-2">{{ save.hp }}</div></v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto"><div class="console item coin"></div><div class="ml-2">{{ save.coin }}</div></v-col>
    </v-row>

    <v-fade-transition>
      <div v-if="isGame">
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
            <v-progress-linear :value="save.hp"></v-progress-linear>
          </div>
        </div>

        <Tutorial v-if="isTutorial" :px="px" :py="py" />

        <v-row>
          <v-col>
            <Message ref="msg" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <GamePad :save="save" @tap="onTap" />
          </v-col>
        </v-row>
      </div>
      <div v-else-if="isShop">
        <MazeShop :save="save" @start-floor="onStartFloor" />
      </div>
      <div v-else-if="isEnd">
        <MazeEnd :save="save" @start-floor="onStartFloor" />
      </div>
    </v-fade-transition>
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
  .bgo {
    position: relative;
  }
}
.maze-scene {
  display: flex;
  align-items: center;
  min-height: 192px;

  .maze-container {
    position: relative;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { Maze, MAP_OBJECT } from '~/components/maze/Maze'

import GamePad from '~/components/maze/GamePad.vue'
import MazeShop from '~/components/maze/MazeShop.vue'
import MazeEnd from '~/components/maze/MazeEnd.vue'

import Message from '~/components/maze/Message.vue'

import Tutorial from '~/components/maze/Tutorial.vue'

import { MazeSave, NewSave, resetSave } from '~/models/MazeSave'

import firebase from '@/plugins/firebase'

export default Vue.extend({
  components: {
    GamePad,
    MazeShop,
    MazeEnd,
    Message,
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
      isReady: false,
      maze: [] as Object[][],
      sceneStyle: {
        width: '0',
        height: '0'
      },
      px: 1,
      py: 1,
      mode: 'game'
    }
  },
  mounted () {
    this.init()
    window.setTimeout(() => {
      this.isReady = true
    }, 1000)
  },
  methods: {
    init() {
      const maze_ = new Maze(this.save.seed).generateFloor(this.save.floor)

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
        case MAP_OBJECT.CHEST1:
          cls = 'chest1'
          break
        case MAP_OBJECT.CHEST2:
          cls = 'chest2'
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
    goalFloor(): void {
      this.save.floor++
      if(this.save.floor === 1) {
        this.save.playCount++
      }

      this.saveData()
      this.mode = 'shop'
    },
    saveData() {
      const db = firebase.firestore()
      const q = db.collection('mazeSaves').doc(this.save.uid)
      q.set(this.save)
    },
    onStartFloor() {
      console.log('+ onStartFloor', this.mode)
      this.mode = 'game'
      this.init()
      console.log('- onStartFloor', this.mode)
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

      let _v = 0

      // portion
      if(v === 1) {
        if(this.save.portion > 0) {
          this.save.portion--
          _v = Math.floor(Math.random() * (this.save.hpMax / 2) + (this.save.hpMax / 5))
          this.save.hp = Math.min (this.save.hp + _v, this.save.hpMax)
          this.showMessage('use-plus-portion', _v)
        }
      }
      // key1
      if(v === 3) {
        //@ts-ignore
        const o = this.maze[this.py][this.px].v as MAP_OBJECT
        if(o === MAP_OBJECT.CHEST1 || o === MAP_OBJECT.CHEST2) {
          if(this.save.key1 > 0) {
            this.save.key1--

            if(o === MAP_OBJECT.CHEST1) {
              const rr = Math.random()
              if(rr < 0.5) {
                _v = Math.floor(2 + Math.random() * 3)
                this.save.mattock += _v
                this.showMessage('get-mattock', _v)
              } else if(rr < 0.9) {
                _v = Math.floor(3 + Math.random() * 2)
                this.save.portion += _v
                this.showMessage('get-plus-portion', _v)
              } else {
                this.showMessage('empty-chest', 0)
              }
            }
            if(o === MAP_OBJECT.CHEST2) {
              _v = Math.floor(this.save.floor / 5) * 30 + 20
              _v = Math.floor(_v * (0.8 + Math.random()))
              this.save.coin += _v
              this.showMessage('get-coin', _v)
            }
            this.removeFloorObject(this.px, this.py)
          }
        }
      }
      // key2
      if(v === 7) {
        //@ts-ignore
        const o = this.maze[this.py][this.px].v as MAP_OBJECT
        if(o === MAP_OBJECT.DOOR) {
          if(this.save.key2 > 0) {
            this.save.key2--
            this.goalFloor()
          }
        }
      }
    },
    moveTo(x:number, y:number) {
      //@ts-ignore
      const o = this.maze[y][x].v as MAP_OBJECT
      if(o == MAP_OBJECT.WALL) {
        console.log(x, y)
        if(x > 0 && x < this.maze[y].length - 1
        && y > 0 && y < this.maze.length - 1) {
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
        } else {
          return
        }
      }
      console.log({x, y})
      console.log(this.save)

      this.save.hp -= Math.min(3, Math.floor(this.save.floor / 10) + 1)
      this.save.hp = Math.max(0, this.save.hp)

      console.log(this.save.hp)

      let getItem = true
      let v = 0
      switch(o) {
      case MAP_OBJECT.COIN:
        this.save.coin += 10
        this.showMessage('get-coin', 10)
        break
      case MAP_OBJECT.KEY1:
        this.save.key1++
        this.showMessage('get-key1', 1)
        break
      case MAP_OBJECT.KEY2:
        this.save.key2++
        this.showMessage('get-key2', 1)
        break
      case MAP_OBJECT.PLUS0_PORTION:
        v = Math.floor(Math.random() * this.save.hpMax / 5) + 5
        this.save.hp = Math.min (this.save.hp + v, this.save.hpMax)
        console.log(this.save.hp)
        this.showMessage('get-plus0-portion', v)
        break
      case MAP_OBJECT.RANDOM0_PORTION:
        // 若干回復しやすい
        if(Math.random() < 0.6) {
          v = Math.floor(Math.random() * this.save.hpMax / 4 + 2)
        } else {
          v = -Math.floor(Math.random() * this.save.hpMax / 5 + 2)
        }
        this.save.hp += v
        this.save.hp = Math.min (this.save.hp, this.save.hpMax)
        this.save.hp = Math.max (this.save.hp, 1)
        this.showMessage('get-random0-portion', v)
        break
      case MAP_OBJECT.MATTOCK:
        this.save.mattock++
        this.showMessage('get-mattock', 1)
        break
      case MAP_OBJECT.PLUS_PORTION:
        this.save.portion++
        this.showMessage('get-plus-portion', 1)
        break
      case MAP_OBJECT.PEAK:
        v = Math.min(20 + Math.floor(this.save.floor / 2), 40)
        this.save.hp = Math.max(this.save.hp - v, 0)
        this.showMessage('damage', v)
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
        console.log('game over')
        const floor = this.save.floor
        resetSave(this.save)
        if(floor === 0) {
          this.init()
        } else {
          this.saveData()
          this.mode = 'end'
        }
      }
    },
    showMessage(m:string, v:number) {
      //@ts-ignore
      this.$refs['msg'].showMessage(m, v)
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
    },
    isGame(): boolean {
      return this.mode === 'game'
    },
    isShop(): boolean {
      return this.mode === 'shop'
    },
    isEnd(): boolean {
      return this.mode === 'end'
    }
  },
  watch: {
    "save.floor": function(floor) {
      if(floor !== 0) {
        this.mode = 'shop'
      }
    }
  }
})
</script>
