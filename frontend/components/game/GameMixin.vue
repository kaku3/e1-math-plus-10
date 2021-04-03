<script lang="ts">
import Vue from 'vue'

import seCount from '~/assets/se/count.mp3'
import seCount0 from '~/assets/se/count-0.mp3'

export default Vue.extend({
  data() {
    return {
      mode: "",
      readyCount: 0,
      gameTimerId: -1,
      gameStartTime: 0,
      gameTime: 0,
    }
  },
  methods: {
    ready(): void {
      const self = this
      this.changeMode('ready')
      this.readyCount = 3
      new Audio(seCount).play()
      this.$emit('ready', self.readyCount)
      this.gameTimerId = window.setInterval(function() {
        console.log(self.readyCount)
        if(self.readyCount-- === 0) {
          window.clearInterval(self.gameTimerId)
          self.start()
          return
        }
        if(self.readyCount > 0) {
          new Audio(seCount).play()
        } else {
          new Audio(seCount0).play()
        }
        self.$emit('ready', self.readyCount)
      }, 1000)
    },
    start() {
      const self = this
      this.gameStartTime = (new Date()).getTime()
      this.changeMode('game')

      this.onNext()

      this.gameTimerId = window.setInterval(function() {
        self.gameTime = (new Date()).getTime() - self.gameStartTime
        self.onUpdateProgress()
      }, 200)
    },
    onNext(): void {
      console.log('override this method')
    },
    onUpdateProgress() {
      console.log('override this method')
    },
    endGame(): void {
      // play 記録の更新後通知したい
      this.$nextTick(() => {
        this.changeMode('end')
      })

      window.clearInterval(this.gameTimerId)
      this.gameTimerId = -1
    },

    changeMode(mode:string):void {
      this.mode = mode
      this.$emit('change-mode', mode)
    },
 }
})
</script>
