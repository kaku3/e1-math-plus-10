<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import ScoreStore from '~/store/ScoreStore'
import { ScoreEntity } from '~/models/Score'

const CONDITIONS = [ 1, 4, 10, 20, 40, 60 ]

export default Vue.extend({
  data() {
    return {
      showGetStarScreen: false,
      nextConditionCount: 0,
      _playCount: 0
    }
  },
  mounted () {
  },
  methods: {
    onChangeMode(mode: string) {
      console.log(mode)
      this.showGetStarScreen = false
      if(mode === 'end') {
        console.log(this._playCount, this.playCount)
        if(this._playCount !== this.playCount) {
          this.showGetStarScreen = this.isGetStar()
          this.nextConditionCount = this.nextCondition()
        }
      } else if(mode === 'game') {
        this._playCount = this.playCount
      }
    },

    isGetStar(): boolean {
      const c = CONDITIONS.some(c => c === this.playCount)
      return c
    },
    nextCondition(): number {
      const c = CONDITIONS.findIndex(c => c === this.playCount)
      if(c >= 0 && c < CONDITIONS.length - 1) {
        return CONDITIONS[c + 1] - this.playCount
      }
      return 1
    },
    onDismissGetStarScreen() {
      this.showGetStarScreen = false
    }
  },
  computed: {
    scoreStore(): ScoreStore {
      return getModule(ScoreStore, this.$store) as ScoreStore
    },
    scores(): ScoreEntity[] {
      return this.scoreStore.scores || [] as ScoreEntity[]
    },
    playCount(): number {
      const dd = new Date()
      const start = dd.setHours(0, 0, 0, 0)
      const end = dd.setDate(dd.getDate() + 1)
      const scores = this.scores
        .filter((o:ScoreEntity) => o.createdAt >= start)
        .filter((o:ScoreEntity) => o.createdAt < end)
      return scores.length
    },
  }
})
</script>
