<template>
  <canvas ref="canvas" :width="size" :height="size">
  </canvas>
</template>
<style lang="sass" scoped>
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: {
      type: String
    },
    size: {
      type: Number,
      default: 256
    },
    transpalent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ready: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init() {
      //@ts-ignore
      const ps = this.p.ps
      //@ts-ignore
      const cs = this.p.cs

      const canvas = this.$refs['canvas']
      //@ts-ignore
      const context = canvas.getContext('2d')

      const pixels = 16
      const ww = this.size / pixels
      const hh = this.size / pixels


      context.clearRect(0, 0, this.size, this.size)
      for(let y = 0, yy = 0; y < pixels; y++, yy += hh) {
        for(let x = 0, xx = 0; x < pixels; x++, xx += ww) {
          const c = ps[y][x]
          if(this.transpalent && c === 0) {
            continue
          }
          context.fillStyle = cs[c]
          context.fillRect(xx, yy, ww, hh)
        }
      }
    }
  },
  computed: {
    p(): Object {
      return JSON.parse(this.icon)
    }
  }
})
</script>
