<template>
  <v-card>
    <div class="pixel-container">
      <table>
        <tr v-for="(row, y) in ps" :key="y">
          <td v-for="(col, x) in row" :key="x"
            class="pixel"
            :style="pixelStyle(x,y)"
            @pointerdown="tapPixel(x,y)">
          </td>
        </tr>
      </table>
      <v-color-picker v-if="colorEdit" v-model="cs[ca]" elevation="8">
      </v-color-picker>
    </div>
    <div class="palette-container">
      <div v-for="(c, i) in cs" :key="i"
        class="palette"
        :class="{ active: i == ca }"
        :style="paletteStyle(i)"
        @pointerdown="selectPalette(i)">
      </div>
    </div>
  </v-card>
</template>
<style lang="scss" scoped>
.pixel-container {
  position: relative;
  padding: 8px 0;
  table {
    margin: auto;
    width: 320px;
    border-spacing: 1;
  }
  .pixel {
    width: 18px;
    height: 18px;
  }
}

.palette-container {
  font-size: 0;

  .palette {
    display: inline-block;
    cursor: pointer;
    width: 12.5%;
    height: 32px;
    border: 1px solid rgba(255,255,255, 0.5);

    &.active {
      border: 2px solid rgba(255,255,255, 0.8);
    }
  }
}
.v-color-picker {
  position: absolute;
  left: 8px;
  bottom: 8px;
}

</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      ps: [] as Object[][],
      cs: [] as Object[],
      ca: 0,
      colorEdit: false
    }
  },
  mounted () {
    this.ps = Array(16)
    for(let y = 0; y < this.ps.length; y++) {
      this.ps[y] = Array(16).fill(0)
    }
    this.cs = [
      '#000000',
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFEB3B',
      '#FFC107',
      '#FF9800',
      '#FF5722',
    ]
  },
  methods: {
    paletteStyle(no:number) {
      return {
        //@ts-ignore
        backgroundColor: this.cs[no]
      }
    },
    pixelStyle(x:number, y:number) {
      return {
        //@ts-ignore
        backgroundColor: this.cs[this.ps[y][x]]
      }
    },
    selectPalette(c: number) {
      if(c == this.ca) {
        this.colorEdit = !this.colorEdit
        return
      }

      this.ca = c
    },
    tapPixel(x:number, y:number) {
      this.ps[y].splice(x, 1, this.ca)
      this.cs.splice(this.ca, 1, this.cs[this.ca])
    }
  }
})
</script>
