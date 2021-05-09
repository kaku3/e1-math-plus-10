<template>
  <div id="game-canvas"></div>
</template>
<style lang="scss" scoped>
#game-canvas {
  margin: 24px 0;
  width: 320px;
  height: calc(100vh - 88px);
  background-color: rgba(0,0,0, .1);
}
</style>
<script lang="ts">
import Vue from 'vue'

import Konva from 'konva'
import Random from '~/utils/Random'

import { JumpCharacter, JumpCharacters } from '~/models/JumpSave'

import seJump from '~/assets/jump/se-jump.mp3'
import seLanding from '~/assets/jump/se-landing.mp3'
import seDead from '~/assets/jump/se-dead.mp3'

const XMAX = 320-8
const XMIN = 8

const GROUND_HEIGHT = 64

enum PLAYER_STATUS {
  NULL,
  WALK,
  JUMP0, // 溜め
  JUMP1,
  JUMP2,
  JUMP3,
  JUMP4,
}

enum DIRECTION {
  RIGHT,
  LEFT
}

type DataType = {
  stg: number
  random: Random
  mode: string
  px: number
  py: number
  sx: number  // 移動速度(x)
  sy: number  // スクロール速度(y)
  scrollY: number // スクロール量
  sceneY: number  // 画面換算
  mapY: number  // 床を出した座標
  dir: DIRECTION,
  status: PLAYER_STATUS
  statusNext: PLAYER_STATUS
  jp: number  // jump power
  time: number,
  score: number,
  life: number,
  character: JumpCharacter
}

let stage: Konva.Stage
let layer: Konva.Layer

let consoleGroup:Konva.Group
let scoreText:Konva.Text
let lifeText:Konva.Text

let mapGroup:Konva.Group

let player:Konva.Group
let playerSprite:Konva.Sprite
let loop:Konva.Animation

export default Vue.extend({
  data(): DataType {
    return {
      stg: 0,
      random: new Random(),
      mode: 'init',
      px: 160,
      py: 0,
      sx: 56,
      sy: 0,
      scrollY: 0,
      sceneY: 0,
      mapY: 0,
      dir: DIRECTION.RIGHT,
      status: PLAYER_STATUS.NULL,
      statusNext: PLAYER_STATUS.WALK,
      jp: 0,
      time: 0,
      score: 0,
      life: 0,
      character: JumpCharacters[0]
    }
  },
  mounted () {
  },
  methods: {
    init(stg: number, character:number) {
      this.stg = stg
      this.random = new Random(stg)
      if(stage) {
        stage.destroy()
      }
      this.character = JumpCharacters[character]

      const canvas = document.querySelector('#game-canvas')
      const width = canvas?.clientWidth
      const height = canvas?.clientHeight

      stage = new Konva.Stage({
        container: 'game-canvas',
        width,
        height,
      })
      layer = new Konva.Layer()
      loop = new Konva.Animation((frame) => {
        this.exec(frame)
      })

      mapGroup = new Konva.Group({
        x: 0,
        y: this.scrollY
      })
      consoleGroup = new Konva.Group()
      this.initConsole(consoleGroup)

      player = this.initPlayer(mapGroup, character)

      layer.add(new Konva.Rect({
          x: 0,
          y: 0,
          width,
          height,
          stroke: 'rgba(0,0,0, .25)',
          strokeWidth: 2
        })
      )

      layer.add(mapGroup)
      layer.add(consoleGroup)
      stage.add(layer)

      this.initGamePad()

      this.startGame()
    },
    initGamePad() {
      stage.on('touchstart', () => {
        if(this.mode == 'game') {
          if(this.status === PLAYER_STATUS.WALK) {
            this.statusNext = PLAYER_STATUS.JUMP0
          }
        } else if(this.mode == 'over') {
          this.$emit('over', this.score, this.stg, this.character.id)
          loop.stop()
        }
      })
      stage.on('touchend', () => {
        if(this.status === PLAYER_STATUS.JUMP0) {
          this.playSe('jump')
          this.statusNext = PLAYER_STATUS.JUMP1
        }
      })
    },
    initConsole(consoleGroup:Konva.Group) {
      scoreText = new Konva.Text({
          x: 8,
          y: 8,
          text: 'SCORE 0',
          fontSize: 12,
          fontFamily: 'Press Start 2P',
          fill: '#ECEFF1',
          shadowColor: 'black',
          shadowOffset: { x: 0, y: 2 },
          shadowOpacity: 0.5
      })
      lifeText = new Konva.Text({
          x: 320 - 8 - 12 * 6,
          y: 8,
          text: 'LIFE 0',
          fontSize: 12,
          fontFamily: 'Press Start 2P',
          fill: '#ECEFF1',
          shadowColor: 'black',
          shadowOffset: { x: 0, y: 2 },
          shadowOpacity: 0.5
      })
      consoleGroup.add(scoreText)
      consoleGroup.add(lifeText)
    },

    initMap(mapGroup:Konva.Group) {
      mapGroup.destroyChildren()

      this.mapY = 56

      let x = 0
      let y = 0
      let width = stage.width()
      let height = GROUND_HEIGHT

      // 地面
      mapGroup.add(
        new Konva.Rect({
          x,
          y,
          width,
          height,
          fill: '#B0BEC5'
        })
      )
      this.setSteps(mapGroup, 0)
    },
    getStageFloors() {
      const floors = [
        {
          steps: [ 3, 3, 1, 0, 3, 3, 1, 2, 3, 0, 2 ],
          wMaxs: [ 4, 3, 6, 0, 5, 4, 12, 6, 4, 0, 6 ]
        },
        {
          steps: [ 3, 2, 1, 0, 2, 3, 1, 2, 3, 0, 2 ],
          wMaxs: [ 4, 8, 6, 0, 5, 4, 12, 6, 4, 0, 6 ]
        },
        {
          steps: [ 2, 2, 1, 0, 2, 3, 1, 3, 1, 0, 3 ],
          wMaxs: [ 4, 8, 6, 0, 5, 4, 8, 4, 4, 0, 6 ]
        },
        {
          steps: [ 3, 2, 1, 0, 2, 3, 1, 2, 3, 1, 2 ],
          wMaxs: [ 4, 8, 6, 0, 5, 4, 12, 6, 4, 2, 6 ]
        },
        {
          steps: [ 3, 2, 1, 0, 2, 3, 1, 2, 3, 0, 2 ],
          wMaxs: [ 4, 8, 6, 0, 5, 4, 12, 6, 4, 0, 6 ]
        },
        {
          steps: [ 3, 2, 1, 0, 2, 3, 1, 2, 3, 0, 2 ],
          wMaxs: [ 4, 7, 6, 0, 5, 4, 4, 6, 4, 0, 4 ]
        },
        {
          steps: [ 3, 2, 1, 0, 2, 3, 1, 2, 3, 0, 2 ],
          wMaxs: [ 4, 8, 6, 0, 5, 4, 12, 6, 4, 0, 6 ]
        },
      ]
      return floors[this.stg]
    },

    setSteps(mapGroup:Konva.Group, sceneY:number) {
      console.log(`+ setSteps(${sceneY})`)
      const random = this.random

      const { steps, wMaxs } = this.getStageFloors()

      const cw = 16
      const ch = 48
      const ww = Math.floor(stage.width() / cw)

      const xxs = [
        { step: 3, x0: 0, x1: ww, space: 1 },
        { step: 2, x0: ww/4, x1: ww*3/4, space: 3 },
        { step: 1, x0: ww/3, x1: ww*2/3, space: 0 },
      ]

      let y = 0
      for(let n = 0; y < stage.height(); y += ch + random.nextInt(0, 4) * ch / 4, n++) {
        console.log({ n, y })
        while(true) {
          const step = steps[n % steps.length]  // 足場の個数

          if(step === 0) {
            break
          }
          const wMax = wMaxs[n % steps.length]

          const xx = xxs.find(xx => xx.step === step)
          let set = 0
          let steps_ = []

          //@ts-ignore
          for(let x = xx.x0 + (n%2); x < xx.x1; x += 2) {
            const rr = random.nextFloat1()
            let w = 0
            if(rr < 0.6) {
              w = wMax > 3 ? random.nextInt(3, wMax) : wMax
            }
            if(w > 0) {
              set++
              if(step == 3 && set == step) {
                //@ts-ignore
                w = xx.x1 - x
              }
              steps_.push({
                x: x,
                w: w
              })
              //@ts-ignore
              x += w + xx.space
            }
          }
          if(set == step) {
            steps_.forEach(f => {
              const r = new Konva.Rect({
                x: f.x * cw,
                y: -y - this.mapY,
                width: cw * f.w,
                height: 18,
                fill: 'rgba(120,144,156, 0.85)',
                stroke: '#263238',
                strokeWidth: 1
              })
              mapGroup.add(r)
            })
            break
          } else {
            console.warn('failed to set', { step, wMax })
          }
        }
      }
      this.mapY += y

      player.moveToTop()

      // 画面外の床を消去
      const dy = stage.height() * 1.5
      mapGroup.getChildren(r => {
        return r.getClientRect().y > dy
      }).each(r => r.destroy())
    },

    initPlayer(mapGroup:Konva.Group, character:number): Konva.Group {
      const cy = character * 32
      const x = this.px
      const y = this.py

      const g = new Konva.Group({
        x,
        y
      })


      const idle = [0,1,2,3].flatMap(x => {
        return [ x * 32, cy, 32, 32]
      })
      const walk = [0,1,2,3].flatMap(x => {
        return [ x * 32 + 128, cy, 32, 32]
      })
      const jump0 = [ 64, cy, 32, 32, 64, cy, 32, 32 ]
      const [ jump1, jump2, jump3, jump4 ] = [0,1,2,3].map(x => {
        return [ x * 32 + 128, cy, 32, 32, x * 32 + 128, cy, 32, 32 ]
      })
      const image = new Image()
      image.onload = () => {
        playerSprite = new Konva.Sprite({
          x: 0,
          y: 0,
          scaleX: 2,
          scaleY: 2,
          offsetX: 16,
          offsetY: 32,
          image,
          animations: {
            idle,
            walk,
            jump0,
            jump1,
            jump2,
            jump3,
            jump4,
          },
          animation: 'idle',
          frameRate: 10,
          frameIndex: 0,
        })
        g.add(playerSprite)
        mapGroup.add(g)
        playerSprite.start()
      }
      image.src = require('~/assets/jump/characters.png')
      return g
    },
    execPlayer(frame:any) {
      if(!playerSprite || this.mode != 'game') {
        return
      }
      const ox = this.px

      let dx = this.sx * this.character.status.spx * frame.timeDiff / 1000

      if(this.status != this.statusNext) {
        this.status = this.statusNext
        switch(this.status) {
          case PLAYER_STATUS.WALK:
            playerSprite.animation('idle')
            break
          case PLAYER_STATUS.JUMP0:
            playerSprite.animation('jump0')
            this.jp = 0
            break
          case PLAYER_STATUS.JUMP1:
            this.jp /= 3
            this.jp = Math.min(this.jp, 400)
            playerSprite.animation('jump1')
            console.log(this.jp)
            break
          case PLAYER_STATUS.JUMP2:
            playerSprite.animation('jump2')
            break
          case PLAYER_STATUS.JUMP3:
            playerSprite.animation('jump3')
            break
          case PLAYER_STATUS.JUMP4:
            playerSprite.animation('jump4')
            this.score = Math.max(this.score, Math.floor(-this.py / 32))
            scoreText.text(`SCORE ${this.score}`)
            break
        }
      }
      switch(this.status) {
        case PLAYER_STATUS.WALK:
          if(this.dir == DIRECTION.RIGHT) {
            this.px += dx
            this.px = Math.min(this.px, XMAX)
            if(this.px === XMAX || !this.footCollision(this.px, this.py)) {
              this.px = ox
              this.dir = DIRECTION.LEFT
              playerSprite.scaleX(-2)
            }
          } else {
            this.px -= dx
            this.px = Math.max(this.px, XMIN)
            if(this.px === XMIN || !this.footCollision(this.px, this.py)) {
              this.px = ox
              this.dir = DIRECTION.RIGHT
              playerSprite.scaleX(2)
            }
          }
          player.x(this.px)
          break
        case PLAYER_STATUS.JUMP0:
          this.jp += this.character.status.jp * frame.timeDiff
          break

        case PLAYER_STATUS.JUMP1:
        case PLAYER_STATUS.JUMP3:
          this.px += (this.dir == DIRECTION.RIGHT) ? dx : -dx
          this.py -= this.jp * frame.timeDiff / 1000
          this.jp -= 400 * frame.timeDiff / 1000
          if(this.status == PLAYER_STATUS.JUMP1) {
            if(this.jp < 0) {
              this.statusNext = PLAYER_STATUS.JUMP2
            }
          }
          if(this.status == PLAYER_STATUS.JUMP3) {
            const node = this.footCollision(this.px, this.py)
            if(node) {
              const r = node.getClientRect()
              this.py = r.y - this.scrollY
              this.statusNext = PLAYER_STATUS.JUMP4

              // スクロール速度
              this.sy = Math.min(-this.py / 120, 36)
            }
          }
          if(this.dir == DIRECTION.RIGHT) {
            this.px += dx
            this.px = Math.min(this.px, XMAX)
            if(this.px === XMAX) {
              this.px = ox
              this.dir = DIRECTION.LEFT
              playerSprite.scaleX(-2)
            }
          } else {
            this.px -= dx
            this.px = Math.max(this.px, XMIN)
            if(this.px === XMIN) {
              this.px = ox
              this.dir = DIRECTION.RIGHT
              playerSprite.scaleX(2)
            }
          }

          // 地面突き抜け判定
          if(this.py >= 0) {
            this.py = 0
            this.statusNext = PLAYER_STATUS.JUMP4
          }
          player.x(this.px)
          player.y(this.py)
          break

        case PLAYER_STATUS.JUMP2:
          this.statusNext = PLAYER_STATUS.JUMP3
          break
        case PLAYER_STATUS.JUMP4:
          this.playSe('landing')
          this.statusNext = PLAYER_STATUS.WALK
          break
      }
      if(this.scrollY - (stage.height() - GROUND_HEIGHT) - 96 > -this.py) {

        if(--this.life === 0 ) {
          this.mode = 'over'

          consoleGroup.add(new Konva.Text({
            x: 25,
            y: 200,
            text: 'GAME OVER',
            fontSize: 30,
            fontFamily: 'Press Start 2P',
            fill: '#FF5722'
          }))
          layer.add(consoleGroup)
        } else {
          this.py = -(this.scrollY + 32)
        }
        lifeText.text(`LIFE ${this.life}`)
        this.playSe('dead')
      }
    },
    startGame() {
      console.log('+ startGame()')

      this.initMap(mapGroup)

      this.px = stage.width() / 4
      this.py = 0
      this.dir = DIRECTION.RIGHT
      this.status = PLAYER_STATUS.NULL
      this.statusNext = PLAYER_STATUS.WALK
      this.jp = 0
      this.time = 0
      this.score = 0
      this.life = this.character.status.life

      this.scrollY = stage.height() - GROUND_HEIGHT
      this.calcSceneY()

      lifeText.text(`LIFE ${this.life}`)

      this.mode = 'game'
      loop.start()
    },
    calcSceneY() {
      this.sceneY = Math.floor(this.scrollY / stage.height())
    },
    footCollision(x:number, y:number): Konva.Node | null {
      y += this.scrollY + 4  // 地面に埋める
      const nodes = mapGroup.getChildren(o => {
        if(o === player) {
          return false
        }
        const r = o.getClientRect()
        return  (r.x <= x && r.x + r.width >= x) &&
                (r.y <= y && r.y + r.height >= y)
      })
      return nodes.length > 0 ? nodes[0] : null
    },

    exec(frame:any) {
      this.time += frame.timeDiff

      const oldSceneY = this.sceneY
      if(this.status == PLAYER_STATUS.WALK && -this.py > this.scrollY - stage.height() / 2) {
        this.scrollY += 72 * frame.timeDiff / 1000
      } else {
        this.scrollY += this.sy * this.character.status.spy * frame.timeDiff / 1000
      }
      this.calcSceneY()
      if(oldSceneY != this.sceneY) {
        console.log(oldSceneY, this.sceneY, this.sy)
        this.setSteps(mapGroup, this.sceneY)
      }

      mapGroup.y(this.scrollY)

      this.execPlayer(frame)
    },

    playSe(file:string) {
      const ses = {
        'jump': { f: seJump, v: 0.4 },
        'landing': { f: seLanding, v: 0.4 },
        'dead': { f: seDead, v: 0.4 },
      }
      //@ts-ignore
      const se_ = ses[file]
      const se = new Audio(se_.f)
      se.volume = se_.v
      se.play()
    }
  }
})
</script>
