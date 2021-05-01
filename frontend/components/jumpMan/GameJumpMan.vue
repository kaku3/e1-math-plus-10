<template>
  <div class="game-container">
    <v-row v-if="isTitle" justify="center">
      <div class="game-title orange--text">JUMP MAN</div>
    </v-row>
    <v-row v-if="isTitle" justify="center">
      <v-col cols="3" v-for="(o, i) in characters" :key="i" class="character text-center">
        <div v-if="hasCharacters[i]">
          <div class="frame" @click="onStart(i)">
            <div :class="`c c${i}`"></div>
          </div>
          <div class="name white--text">{{o.name}}</div>
        </div>
        <div v-else>
          <div class="frame" @click="onCondition(i)">
            <div class="unknown yellow--text">?</div>
          </div>
          <div class="name white--text">unknown</div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" v-if="isGame">
      <JumpScene ref="jump-scene" class="game-scene mt-4" @over="onOver" />
    </v-row>
    <v-snackbar v-model="showCondition">
      {{ condition }}
    </v-snackbar>
  </div>
</template>
<style lang="scss" scoped src="./characters.scss" />
<style lang="scss" scoped>
.game-container {

  .game-title {
    padding: 1rem;
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
      border: 4px solid #03A9F4;

      > .unknown {
        margin-top: 8px;
        font-family: 'Press Start 2P', cursive;
      }
    }
    > .name {
      font-size: .7rem;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

import JumpScene from '~/components/jumpMan/JumpScene.vue'

import { JumpSaveUtil, JumpCharacters, JUMP_CHARACTERS  } from '~/models/JumpSave'
import { StatisticUtil  } from '~/models/Statistic'

const jumpSaveUtil = new JumpSaveUtil()

export default Vue.extend({
  components: {
    JumpScene
  },
  data () {
    return {
      mode: 'title',
      showCondition: false,
      condition: '',
      values: Array(JumpCharacters.length).fill(0),
      hasCharacters: Array(JumpCharacters.length).fill(false)
    }
  },
  async mounted () {
    await this.update()
  },
  methods: {
    // ゲーム開始
    onStart(n:number) {
      this.mode = 'game'
      this.$nextTick(() => {
        //@ts-ignore
        this.$refs['jump-scene'].init(n)
      })
    },
    // 取得条件を表示
    onCondition(n:number) {
      this.condition = `${JumpCharacters[n].condition} (${this.values[n]})`
      this.showCondition = true
    },
    onOver(score:number) {
      this.mode = 'title'

      if(jumpSaveUtil.save.score < score) {
        jumpSaveUtil.save.score = score
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
          if(jumpSaveUtil.hasCharacter(n) && this.values[n] == -1) {
            continue
          }

          const { cond, value } = JumpCharacters[n]
          if((cond == 'GE' && this.values[n] >= value)
          || (cond == 'LE' && Math.floor(this.values[n]) <= value)
          ){
            console.log(n)
            jumpSaveUtil.getCharacter(n)
          }
        }
        jumpSaveUtil.saveData()

        for(let n = 0; n < JumpCharacters.length; n++) {
          this.$set(this.hasCharacters, n, jumpSaveUtil.hasCharacter(n))
        }
      }
    }
  },
  computed: {
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
