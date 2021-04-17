<template>
  <canvas ref="canvas" width="256" height="256">
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
    }
  },
  mounted () {
    //@ts-ignore
    const ps = this.p.ps
    //@ts-ignore
    const cs = this.p.cs

    const canvas = this.$refs['canvas']
    //@ts-ignore
    const context = canvas.getContext('2d')

    for(let y = 0, yy = 0; y < 16; y++, yy += 16) {
      for(let x = 0, xx = 0; x < 16; x++, xx += 16) {
        const c = ps[y][x]
        context.fillStyle = cs[c]
        context.fillRect(xx, yy, xx + 16, yy + 16)
      }
    }
    console.log({ ps, cs })
  },
  computed: {
    p(): Object {
      return JSON.parse(this.icon)
    }
  }
})
</script>
