<template>
  <div :class="`game-background-container bg-${bgs[stage]}`">
    <div class="game-container" :class="{ title: isTitle }">
      <v-row v-if="isTitle" justify="center">
        <div class="game-title orange--text">JUMP MAN</div>
      </v-row>
      <v-carousel  v-if="isTitle" justify="center" :height="168" v-model="stage">
        <v-carousel-item v-for="(bg, i) in bgs" :key="i">
          <div :class="`bg bg-${bg}`"></div>
        </v-carousel-item>
      </v-carousel>
      <v-row v-if="isTitle" justify="center" class="blue-grey darken-3">
        <v-col cols="3" v-for="(o, i) in characters" :key="i" class="character text-center">
          <div v-if="hasCharacters[i]">
            <div class="frame" @click="onStart(i)">
              <div :class="`c c${i}`"></div>
            </div>
            <div class="name white--text">{{o.name}}</div>
          </div>
          <div v-else>
            <div class="frame" :class="{ select: select == i }" @click="onCondition(i)">
              <div class="unknown yellow--text">?</div>
            </div>
            <div class="name white--text">unknown</div>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" v-if="isGame">
        <JumpScene ref="jump-scene" class="game-scene" @over="onOver" />
      </v-row>

      <JumpRanking v-if="isTitle" class="mt-4" :stage="stage" />

      <v-snackbar v-model="showCondition">
        {{ condition }}
      </v-snackbar>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./characters.scss" />
<style lang="scss" scoped>
.game-container {
  &.title {
    background-color: rgba(0,0,0, .5);
  }

  .game-title {
    padding: 1.5rem 1.5rem .5rem;
    font-family: 'Press Start 2P', cursive;
    font-size: 4rem;
    letter-spacing: 1.2rem;
    line-height: 1.2;
  }
  .character > div {
    > .frame {
      display: inline-block;
      width: 48px;
      height: 48px;
      border-radius: 4px;
      background-color: rgba(0,0,0, .25);
      border: 4px solid #03A9F4;

      &.select {
        transition: border-color .5s;
        border-color: #E1F5FE;
      }

      > .unknown {
        margin-top: 8px;
        font-family: 'Press Start 2P', cursive;
      }
    }
    > .name {
      font-size: .65rem;
      line-height: 1.1;
      text-shadow: 0 1px 1px rgba(0,0,0, .5);
    }
  }
  .v-snack {
    font-family: 'Press Start 2P', 'DotGothic16';
  }

  .v-carousel {
    margin: 8px 0 16px;
    border-radius: 8px;

    .bg {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
    }
  }

}
@for $i from 0 through 12 {
  .bg-#{$i} {
    background-image: url(~assets/bg/bg-#{$i}.jpg);
  }
}

.game-background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;

  background-color: #263238;
  background-position: top center;
  background-size: cover;

}
</style>
<script lang="ts">
import Vue from 'vue'

import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

import JumpScene from '~/components/jumpMan/JumpScene.vue'

import { JumpSaveUtil, JumpCharacters, JUMP_CHARACTERS  } from '~/models/JumpSave'
import { StatisticUtil  } from '~/models/Statistic'
import { entryJumpHiscore  } from '~/utils/score'

const jumpSaveUtil = new JumpSaveUtil()

import bgmTitle from '~/assets/jump/title.ogg'
import bgmGame from '~/assets/jump/game.ogg'

export default Vue.extend({
  components: {
    JumpScene
  },
  data () {
    return {
      bgs: [ 11, 12, 7, 3, 6, 2, 4, ],
      bgm: null,
      mode: 'title',
      stage: 0,
      select: -1,
      showCondition: false,
      condition: '',
      values: Array(JumpCharacters.length).fill(0),
      hasCharacters: Array(JumpCharacters.length).fill(false)
    }
  },
  async mounted () {
    await this.update()
    this.playBgm('title')
  },
  destroyed () {
    this.stopBgm()
  },
  methods: {

    // ゲーム開始
    onStart(n:number) {
      this.playBgm('game')
      this.showCondition = false
      this.mode = 'game'
      this.$nextTick(() => {
        //@ts-ignore
        this.$refs['jump-scene'].init(this.stage, n)
      })
    },
    // 取得条件を表示
    onCondition(n:number) {
      if(this.select == n) {
        this.$router.replace({ path: JumpCharacters[n].to })
        return
      }

      this.select = n

      this.condition = `${JumpCharacters[n].condition} (${this.values[n]})`
      this.showCondition = true
    },
    onOver(score:number, stg:number, character:number) {
      this.playBgm('title')
      this.mode = 'title'

      const uid = sessionStorage.getItem('uid') || ''

      entryJumpHiscore({
        uid,
        name: this.accountStore.account.name,
        stage: stg,
        character: character,
        score,
        createdAt: (new Date()).getTime()
      })

      if(jumpSaveUtil.save.scores[stg] < score) {
        jumpSaveUtil.save.scores[stg] = score
        jumpSaveUtil.save.playCount++
      }
      this.update()
    },
    async update() {
      await jumpSaveUtil.loadData()
      const s = await StatisticUtil.loadUserStatistic()
      if(s) {
        this.values[JUMP_CHARACTERS.HERALD] = s.modeSprint30.count
        this.values[JUMP_CHARACTERS.MERCHANT] = s.modeSingle.count
        this.values[JUMP_CHARACTERS.BUCTCHER] = s.minusSprint30.count
        this.values[JUMP_CHARACTERS.BLACKSMITH] = s.mul99Sprint30.count
        this.values[JUMP_CHARACTERS.ALCHEMIST] = s.modeSprint10.score
        this.values[JUMP_CHARACTERS.MAGICSHOPKEEPER] = s.modeSprint10.score
        this.values[JUMP_CHARACTERS.THIEF] = s.modeSprint10.score
        this.values[JUMP_CHARACTERS.ARCHER] = s.modeSingle.score
        this.values[JUMP_CHARACTERS.MAGE] = s.modeSingle.score
        this.values[JUMP_CHARACTERS.BISHOP] = s.modeSingle.score
        this.values[JUMP_CHARACTERS.EXECUTIONER] = s.minusSprint10.score
        this.values[JUMP_CHARACTERS.KNIGHT] = s.minusSprint10.score
        this.values[JUMP_CHARACTERS.HEAVYKNIGHT] = s.minusSprint10.score
        this.values[JUMP_CHARACTERS.LARGEKNIGHT] = s.mul99Sprint10.score
        this.values[JUMP_CHARACTERS.ELITEKNIGHT] = s.mul99Sprint10.score
        this.values[JUMP_CHARACTERS.LARGEELITEKNIGHT] = s.mul99Sprint10.score
        this.values[JUMP_CHARACTERS.SKINNYNUN] = s.maze20.score
        this.values[JUMP_CHARACTERS.NORMALNUN] = s.maze20.score
        this.values[JUMP_CHARACTERS.FATNUN] = s.maze20.score
        this.values[JUMP_CHARACTERS.PRINCESS] = s.modeSprint10.count
        this.values[JUMP_CHARACTERS.QUEEN] = s.modeSingle.count
        this.values[JUMP_CHARACTERS.KING] = s.minusSprint10.count
        this.values[JUMP_CHARACTERS.MOUNTAINKING] = s.mul99Sprint10.count

        for(let n = 1; n < JumpCharacters.length; n++) {
          if(jumpSaveUtil.hasCharacter(n) || this.values[n] == -1) {
            continue
          }

          const { cond, value } = JumpCharacters[n]
          if((cond == 'GE' && this.values[n] >= value)
          || (cond == 'LE' && Math.floor(this.values[n]) <= value)
          ){
            jumpSaveUtil.getCharacter(n)
          }
        }
        jumpSaveUtil.saveData()

        for(let n = 0; n < JumpCharacters.length; n++) {
          this.$set(this.hasCharacters, n, jumpSaveUtil.hasCharacter(n))
        }
      }
    },
    playBgm(file:string) {
      this.stopBgm()
      const bgms = {
        'title': { f: bgmTitle, v: 0.4 },
        'game': { f: bgmGame, v: 0.4 },
      }
      //@ts-ignore
      const bgm_ = bgms[file]
      const bgm = new Audio(bgm_.f)
      bgm.loop = true
      bgm.volume = bgm_.v
      bgm.play()
      //@ts-ignore
      this.bgm = bgm
    },
    stopBgm() {
      if(this.bgm) {
        //@ts-ignore
        this.bgm.pause()
        this.bgm = null
      }
    },
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },

    isTitle(): boolean {
      return this.mode == 'title'
    },
    isGame(): boolean {
      return this.mode == 'game'
    },
    characters() {
      return JumpCharacters
    }
  }
})
</script>
