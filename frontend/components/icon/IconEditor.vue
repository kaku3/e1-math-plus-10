<template>
  <v-card>
    <v-card-actions>
      <v-btn icon><v-icon large @click="onSave">mdi-content-save</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="tool">
        <v-btn icon><v-icon large>mdi-square-rounded</v-icon></v-btn>
        <v-btn icon><v-icon large>mdi-square-medium</v-icon></v-btn>
        <v-btn icon><v-icon large>mdi-border-horizontal</v-icon></v-btn>
        <v-btn icon><v-icon large>mdi-border-vertical</v-icon></v-btn>
        <v-btn icon><v-icon large>mdi-pencil</v-icon></v-btn>
      </v-btn-toggle>
    </v-card-actions>
    <div class="pixel-container">
      <table>
        <tr v-for="(row, y) in ps" :key="y">
          <td v-for="(col, x) in row" :key="x"
            :class="`pixel c${ps[y][x]}`"
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
    border-collapse: collapse;

    @media screen and (min-width: 768px) {
      width: 640px;
    }
    td {
      border: 1px solid rgba(255,255,255, .5);
    }
  }
  .pixel {
    height: 18px;

    &.c0:before {
      display: block;
      float: left;
      width: 100%;
      height: 16px;
      line-height: 1;
      color: white;
      text-align: center;
      content: '-';
    }

    @media screen and (min-width: 768px) {
      height: 32px;

      &.c0:before {
        height: 30px;
      }
    }
  }
}

.palette-container {
  font-size: 0;

  .palette {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 12.5%;
    height: 32px;
    border: 1px solid rgba(255,255,255, 0.5);

    &.active {
      border: 2px solid rgba(255,255,255, 0.8);
    }

    &:nth-child(1):before {
      position: absolute;
      width: 100%;
      font-size: 1rem;
      color: white;
      text-align: center;
      content: '-';
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
  props: {
    icon: {
      type: String,
      default: JSON.stringify({
        ps: [
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
          [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, ],
          [ 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, ],
          [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
          [ 0, 3, 3, 3, 8, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 0, ],
          [ 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, ],
          [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, ],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
        ],
        cs: [
          '#000000',
          '#FFFFFF',
          '#FF0000',
          '#FFFF00',
          '#00FF00',
          '#00FFFF',
          '#0000FF',
          '#FF00FF',
          '#222222',
          '#880000',
          '#888800',
          '#008800',
          '#008888',
          '#000088',
          '#880088',
          '#FFE1CD',
        ]
      })
    }
  },
  data() {
    return {
      ps: [] as Object[][],
      cs: [] as Object[],
      ca: 0,
      colorEdit: false,
      tool: 4,
      saved: false
    }
  },
  mounted () {
    const icon = JSON.parse(this.icon)
    this.ps = icon.ps
    this.cs = icon.cs
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
      if(c == this.ca && c !== 0) {
        this.colorEdit = !this.colorEdit
        return
      }

      this.ca = c
    },
    tapPixel(x:number, y:number) {
      switch(this.tool) {
      case 0:
        for(let yy = y - 4; yy < y + 4; yy++) {
          let _y = Math.max(0, yy)
          _y = Math.min(_y, 15)
          for(let xx = x - 4; xx < x + 4; xx++) {
            let _x = Math.max(0, xx)
            _x = Math.min(_x, 15)
            this.setPixel(_x, _y)
          }
        }
        break
      case 1:
        for(let yy = y - 2; yy < y + 2; yy++) {
          let _y = Math.max(0, yy)
          _y = Math.min(_y, 15)
          for(let xx = x - 2; xx < x + 2; xx++) {
            let _x = Math.max(0, xx)
            _x = Math.min(_x, 15)
            this.setPixel(_x, _y)
          }
        }
        break
      case 2:
        for(let xx = x - 2; xx < x + 2; xx++) {
          let _x = Math.max(0, xx)
          _x = Math.min(_x, 15)
          this.setPixel(_x, y)
        }
        break
      case 3:
        for(let yy = y - 2; yy < y + 2; yy++) {
          let _y = Math.max(0, yy)
          _y = Math.min(_y, 15)
          this.setPixel(x, _y)
        }
        break
      case 4:
        this.setPixel(x, y)
        break
      }

      this.cs.splice(this.ca, 1, this.cs[this.ca])
    },
    setPixel(x:number, y:number) {
      this.ps[y].splice(x, 1, this.ca)
    },

    onSave() {
      const uid = sessionStorage.getItem('uid') || ''
      const d = new Date()
      this.$emit('save', {
        uid: uid,
        icon: JSON.stringify({
          ps: this.ps,
          cs: this.cs,
        }),
        timestamp: d.getTime(),
        createdAt: d.setHours(0,0,0,0)
      })
    }
  }
})
</script>
