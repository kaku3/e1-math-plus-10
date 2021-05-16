<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity, GameMode } from '~/models/Score'

import { dailyStarsOf, nextCondition } from '~/utils/star'

import seGetStar from '~/assets/se/get-star.mp3'

import { TowerUtil } from '~/models/TowerSave'


export default Vue.extend({
  data() {
    return {
      showGetStarScreen: false,
      nextConditionCount: 0,
      _starCount: 0,
      gameMode_: '',
      mode_: '',
      readyCount_: 0
    }
  },
  mounted () {
  },
  methods: {
    onChangeMode(mode: string) {
      this.mode_ = mode
      console.log(this.gameMode_, mode)
      this.showGetStarScreen = false
      if(mode === 'end') {
        console.log(this._starCount, this.dailyStarCount)
        if(this._starCount !== this.dailyStarCount) {
          this.showGetStarScreen = true
          this.nextConditionCount = nextCondition(this.monthlyScores, new Date(), this.gameMode_ as GameMode)

          if(this.showGetStarScreen) {
            const se = new Audio(seGetStar)
            se.play()
          }

          // TowerUtil.addStar()
        } else {
          //@ts-ignore
          this.$refs['jumpCollectionGetScreen'].init(this.gameMode_)
        }
      } else if(mode === 'game') {
        this._starCount = this.dailyStarCount
      }
    },
    onReady(readyCount: number) {
      this.readyCount_ = readyCount
    },

    onDismissGetStarScreen() {
      this.showGetStarScreen = false

      //@ts-ignore
      this.$refs['jumpCollectionGetScreen'].init(this.gameMode_)
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    scores(): ScoreEntity[] {
      return this.scoreStore.scores || [] as ScoreEntity[]
    },
    monthlyScores(): ScoreEntity[] {
      const dd = new Date()
      dd.setHours(0,0,0,0)
      const monthStart =   dd.setDate(1)
      const monthEnd = dd.setMonth(dd.getMonth() + 1)

      return this.scores
        .filter((o:ScoreEntity) => o.createdAt >= monthStart)
        .filter((o:ScoreEntity) => o.createdAt < monthEnd)
    },

    dailyStarCount(): number {
      return dailyStarsOf(this.monthlyScores, new Date())
    },
    isReady(): boolean {
      return this.mode_ === 'ready'
    },
    isEnd(): boolean {
      return this.mode_ === 'end'
    }
  }
})
</script>
