<template>
  <div v-if="isReady">
    <v-row v-if="!isEnd" class="game-console" dense>
      <v-col cols="mr-auto text-right"><div class="console item coin"></div><div class="ml-2">{{ save.coin }}</div></v-col>
      <v-col cols="auto"><div class="bgo door"></div><div class="ml-2">{{ save.floor }}</div></v-col>
    </v-row>

    <v-fade-transition>
      <div v-if="isGame">
        <div class="maze-scene-container" ref="mazeSceneContainer">
          <div class="maze-scene" :style="sceneStyle" ref="mazeScene">
            <div class="maze-container">
              <div class="maze-bg">
                <div v-for="(cols, r) in maze" :key="r">
                  <div v-for="(col, c) in cols" :key="c" :class="col.cls">
                    {{ col }}
                    <div v-if="col.obj" :class="col.obj"></div>
                  </div>
                </div>
              </div>
              <MazePlayer :style="playerStyle" :icon="accountIcon" class="player" />
            </div>
          </div>
        </div>

        <Tutorial v-if="isTutorial" :px="px" :py="py" />

        <v-row>
          <v-col>
            <Message ref="msg" />
          </v-col>
        </v-row>
        <v-row v-if="!isEnd" class="game-console" dense>
          <v-col cols="auto">HP</v-col>
          <v-col cols="4">
            <v-progress-linear :color="hpBarColor" :value="save.hp" width="60" height="18">
              <template v-slot:default="{ value }">
                <div class="value">{{ value }}</div>
              </template>
            </v-progress-linear>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="white--text lighten-4">
            <div class="item mattock"></div>
            <div class="item-count">{{ save.mattock }}</div>
          </v-col>
          <v-col cols="auto" class="white--text lighten-4">
            <div class="item sword"></div>
            <div class="item-count">{{ save.mattock }}</div>
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
        <MazeEnd :result="mazeResult" @start-floor="onStartFloor" />
      </div>
    </v-fade-transition>
    <v-fade-transition>
      <MazeInstruction v-if="!isEnd" />
    </v-fade-transition>
    <MazeRanking ref="ranking" v-if="isTutorial || isEnd" />
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
  .value {
    color: white;
  }

  .item {
    position: relative;
    margin-right: .25rem;
  }
}
.maze-scene-container {
  display: inline-block;
  width: 336px;
  height: 192px;
  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
      display:none;
  }
}

.maze-scene {
  display: flex;
  align-items: center;
  min-height: 104px;
  transform-origin: 0 0;
  transform: scale(1.5);

  .maze-container {
    position: relative;
    .player {
      position: absolute;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

import { Maze, MAP_OBJECT } from '~/components/maze/Maze'

import GamePad from '~/components/maze/GamePad.vue'
import MazeShop from '~/components/maze/MazeShop.vue'
import { default as MazeEnd, MazeResult } from '~/components/maze/MazeEnd.vue'

import Message from '~/components/maze/Message.vue'

import Tutorial from '~/components/maze/Tutorial.vue'

import MazeInstruction from '~/components/maze/MazeInstruction.vue'

import MazeRanking from '~/components/maze/MazeRanking.vue'


import { MazeSave, NewSave, resetSave } from '~/models/MazeSave'

import { MazeScoreEntity } from '~/models/Score'
import { entryMazeScore } from '~/utils/score'

import firebase from '@/plugins/firebase'

import seMove from '~/assets/maze/se/move.mp3'
import seMattock from '~/assets/maze/se/mattock.mp3'

import seDown from '~/assets/maze/se/down.mp3'
import seUp from '~/assets/maze/se/up.mp3'
import seCoin from '~/assets/maze/se/coin.mp3'
import sePick from '~/assets/maze/se/pick.mp3'
import seChest from '~/assets/maze/se/chest.mp3'
import seDoor from '~/assets/maze/se/door.mp3'

import bgmShop from '~/assets/maze/bgm/shop.mp3'
import bgmDungeon0 from '~/assets/maze/bgm/dungeon0.mp3'
import bgmDungeon1 from '~/assets/maze/bgm/dungeon1.mp3'

import bgmClear from '~/assets/maze/bgm/clear.mp3'
import bgmOver from '~/assets/maze/bgm/over.mp3'

export default Vue.extend({
  components: {
    GamePad,
    MazeShop,
    MazeEnd,
    Message,
    Tutorial,
    MazeInstruction,
    MazeRanking,
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
      mode: 'game',
      mazeResult: {} as MazeResult,
      bgm: null
    }
  },
  mounted () {
    this.init()
    window.setTimeout(() => {
      this.isReady = true
      if(this.isShop) {
        this.playShopBgm()
      } else {
        this.playDungeonBgm()
      }
      this.$nextTick(() => {
        this.scroll()
      })
    }, 1000)
  },
  destroyed () {
    this.stopBgm()
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

      this.scroll()
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
        case MAP_OBJECT.SWORD:
          cls = 'sword'
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
      if(this.bgm) {
        this.stopBgm()
      }
      this.save.floor++
      if(this.save.floor === 21) {
        this.setResult()
        resetSave(this.save)
        this.saveData()
        this.showResult()
        this.playClearBgm()
        return
      }

      if(this.save.floor === 1) {
        this.save.playCount++
      }
      this.saveData()
      this.mode = 'shop'
      this.playShopBgm()
    },
    setResult() {
      this.mazeResult = {
        floor: this.save.floor,
        coin: this.save.coin
      }
      const e:MazeScoreEntity = {
        name: this.accountStore.account.name,
        floor: this.save.floor,
        coin: this.save.coin,
        createdAt: new Date().getTime(),
      }
      entryMazeScore(e)
    },
    showResult() {
      this.mode = 'end'
      this.$nextTick(() => {
        //@ts-ignore
        this.$refs['ranking'].getRankings()
      })
    },
    saveData() {
      const db = firebase.firestore()
      const q = db.collection('mazeSaves').doc(this.save.uid)
      q.set(this.save)
    },
    playSe(se:string) {
      const ses = {
        'move': { f: seMove, v: 1 },
        'mattock': { f: seMattock, v: 1 },
        'down': { f: seDown, v: 0.8 },
        'up': { f: seUp, v: 1 },
        'coin': { f: seCoin, v: 0.6 },
        'pick': { f: sePick, v: 1 },
        'chest': { f: seChest, v: 1 },
        'door': { f: seDoor, v: 1 }
      }
      //@ts-ignore
      const _se = ses[se]
      const audio = new Audio(_se.f)
      audio.volume = _se.v
      audio.play()
    },
    playDungeonBgm() {
      this.stopBgm()
      const bgm = new Audio((this.save.floor < 10) ? bgmDungeon0 : bgmDungeon1)
      bgm.loop = true
      bgm.volume = 0.15
      bgm.play()
      //@ts-ignore
      this.bgm = bgm
    },
    playShopBgm() {
      this.stopBgm()
      const bgm = new Audio(bgmShop)
      bgm.loop = true
      bgm.volume = 0.1
      bgm.play()
      //@ts-ignore
      this.bgm = bgm
    },
    playOverBgm() {
      this.stopBgm()
      const bgm = new Audio(bgmOver)
      bgm.loop = true
      bgm.volume = 0.25
      bgm.play()
      //@ts-ignore
      this.bgm = bgm
    },
    playClearBgm() {
      this.stopBgm()
      const bgm = new Audio(bgmClear)
      bgm.loop = true
      bgm.volume = 0.25
      bgm.play()
      //@ts-ignore
      this.bgm = bgm
    },
    stopBgm() {
      if(this.bgm) {
        //@ts-ignore
        this.bgm.pause()
      }
    },

    onStartFloor() {
      console.log('+ onStartFloor', this.mode)
      this.mode = 'game'
      this.init()

      this.playDungeonBgm()

      console.log('- onStartFloor', this.mode)
    },

    onTap(v:number): void {
      if(v === 4) {
        this.move(-1, 0)
        return
      }
      if(v === 6) {
        this.move(1, 0)
        return
      }
      if(v === 2) {
        this.move(0, -1)
        return
      }
      if(v === 8) {
        this.move(0, 1)
        return
      }

      let _v = 0

      // portion
      if(v === 1) {
        if(this.save.portion > 0) {
          this.save.portion--
          _v = Math.floor(Math.random() * (this.save.hpMax / 2) + (this.save.hpMax / 3))
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
            this.playSe('chest')
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
            this.playSe('door')
          }
        }
      }
    },
    scroll() {
      // スクロール
      //@ts-ignore
      const container = this.$refs['mazeSceneContainer'] as HTMLElement
      //@ts-ignore
      const scene = this.$refs['mazeScene'] as HTMLElement

      if(!container || !scene) {
        return
      }

      const xx = this.px * 16 * 1.5
      const yy = this.py * 16 * 1.5

      console.log(scene.clientWidth, scene.clientHeight)
      console.log(container.scrollTop, container.scrollLeft, container.clientWidth, container.clientHeight, xx, yy)

      console.log('abcd')
      if(yy > container.scrollTop + container.clientHeight * 0.55) {
        container.scrollTop = yy - container.clientHeight * 0.55
      } else if(yy < container.scrollTop + container.clientHeight * 0.45) {
        container.scrollTop = yy - container.clientHeight * 0.45
      }

      if(xx > container.scrollLeft + container.clientWidth * 0.55) {
        container.scrollLeft = xx - container.clientWidth * 0.55
      } else if(xx < container.scrollLeft + container.clientWidth * 0.45) {
        container.scrollLeft = xx - container.clientWidth * 0.45
      }
      console.log(container.scrollLeft, container.scrollTop)
    },

    move(dx:number, dy:number) {
      const x = this.px + dx
      const y = this.py + dy

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
            this.playSe('mattock')
          } else {
            return
          }
        } else {
          return
        }
      }

      console.log({x, y})

      this.save.hp -= Math.min(2, Math.floor(this.save.floor / 10) + 1)
      this.save.hp = Math.max(0, this.save.hp)

      console.log(this.save.hp)

      let getItem = true
      let v = 0
      switch(o) {
      case MAP_OBJECT.COIN:
        this.save.coin += 10
        this.showMessage('get-coin', 10)
        this.playSe('coin')
        break
      case MAP_OBJECT.KEY1:
        this.save.key1++
        this.showMessage('get-key1', 1)
        this.playSe('pick')
        break
      case MAP_OBJECT.KEY2:
        this.save.key2++
        this.showMessage('get-key2', 1)
        this.playSe('pick')
        break
      case MAP_OBJECT.PLUS0_PORTION:
        v = Math.floor(Math.random() * this.save.hpMax / 5) + 5
        this.save.hp = Math.min (this.save.hp + v, this.save.hpMax)
        console.log(this.save.hp)
        this.showMessage('get-plus0-portion', v)
        this.playSe('up')
        break
      case MAP_OBJECT.RANDOM0_PORTION:
        // 若干回復しやすい
        if(Math.random() < 0.6) {
          v = Math.floor(Math.random() * this.save.hpMax / 4 + 2)
          this.playSe('up')
        } else {
          v = -Math.floor(Math.random() * this.save.hpMax / 5 + 2)
          this.playSe('down')
        }
        this.save.hp += v
        this.save.hp = Math.min (this.save.hp, this.save.hpMax)
        this.save.hp = Math.max (this.save.hp, 1)
        this.showMessage('get-random0-portion', v)
        break
      case MAP_OBJECT.MATTOCK:
        this.save.mattock++
        this.showMessage('get-mattock', 1)
        this.playSe('pick')
        break
      case MAP_OBJECT.SWORD:
        this.save.sword++
        this.showMessage('get-sword', 1)
        this.playSe('pick')
        break
      case MAP_OBJECT.PLUS_PORTION:
        this.save.portion++
        this.showMessage('get-plus-portion', 1)
        this.playSe('pick')
        break
      case MAP_OBJECT.PEAK:
        v = Math.min(20 + Math.floor(this.save.floor / 5) * 5, 40)
        this.save.hp = Math.max(this.save.hp - v, 0)
        this.showMessage('damage', v)
        this.playSe('down')
        getItem = false
        break
      default:
        this.playSe('move')
        getItem = false
      }
      if(getItem) {
        this.removeFloorObject(x, y)
      }

      this.px = x
      this.py = y

      this.scroll()

      if(this.save.hp === 0) {
        this.stopBgm()
        this.setResult()

        const floor = this.save.floor
        resetSave(this.save)
        if(floor === 0) {
          this.init()
        } else {
          this.saveData()
          this.showResult()
          this.playOverBgm()
        }
      }
    },
    showMessage(m:string, v:number) {
      //@ts-ignore
      this.$refs['msg'].showMessage(m, v)
    }
  },

  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
    accountIcon(): string {
      return this.accountStore.account.icon
    },

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
    },
    hpBarColor(): string {
      if(this.save.hpMax === 0) {
        return 'red'
      }
      const r = this.save.hp / this.save.hpMax
      if(r < 0.3) {
        return 'red'
      } else if(r< 0.6) {
        return 'yellow darken-3'
      } else {
        return 'blue darken-2'
      }
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
