<template>
  <v-card>
    <v-card-actions>
      <v-btn icon><v-icon large @click="onSave">mdi-content-save</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="tool" mandatory>
        <v-menu
          offset-y
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon large>mdi-cursor-move</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="moveY(-1)"><v-icon>mdi-arrow-up</v-icon></v-list-item>
            <v-list-item @click="moveY(1)"><v-icon>mdi-arrow-down</v-icon></v-list-item>
            <v-list-item @click="moveX(-1)"><v-icon>mdi-arrow-left</v-icon></v-list-item>
            <v-list-item @click="moveX(1)"><v-icon>mdi-arrow-right</v-icon></v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon><v-icon large>mdi-bucket</v-icon></v-btn>
        <v-menu
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon large>mdi-pencil-plus</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="setPenSize(1)">1</v-list-item>
            <v-list-item @click="setPenSize(2)">2</v-list-item>
            <v-list-item @click="setPenSize(3)">3</v-list-item>
            <v-list-item @click="setPenSize(4)">4</v-list-item>
          </v-list>
        </v-menu>
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
      width: 0;
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
      tool: 3,
      penSize: 1,
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
      console.log({ x, y })
      switch(this.tool) {
      case 1:
        //@ts-ignore
        this.fill(this.ps[y][x], x,y)
        break
      case 3:
        if(this.penSize === 1) {
          this.setPixel(x, y)
        } else {
          this.setPixels(x, y)
        }
        break
      }

      this.cs.splice(this.ca, 1, this.cs[this.ca])
    },
    setPixels(x:number, y:number) {
      // const h = Math.floor(this.penSize / 2)
      // const h2 = this.penSize - h
      const h = 0
      const h2 = this.penSize

      for(let yy = Math.max(0, y - h); yy < Math.min(y + h2, 16); yy++) {
        for(let xx = Math.max(0, x - h); xx < Math.min(x + h2, 16); xx++) {
          this.setPixel(xx, yy)
        }
      }
    },

    setPixel(x:number, y:number) {
      this.ps[y].splice(x, 1, this.ca)
    },
    fill(op: number, x: number, y:number) {
      if(this.ps[y][x] === op) {
        this.ps[y][x] = this.ca
        if(y > 0) this.fill(op, x, y - 1)
        if(y < 15) this.fill(op, x, y + 1)
        if(x > 0) this.fill(op, x - 1, y)
        if(x < 15) this.fill(op, x + 1, y)
      }
    },
    moveX(d:number) {
      const ps:number[][] = Array()
      if(d < 0) {
        for(let y = 0; y < 16; y++) {
          const p = this.ps[y][0]
          //@ts-ignore
          ps.push([...this.ps[y].slice(1), p])
        }
      } else {
        for(let y = 0; y < 16; y++) {
          const p = this.ps[y][15]
          //@ts-ignore
          ps.push([p, ...this.ps[y].slice(0, 15) ])
        }
      }
      this.ps = ps
      console.log(ps)
    },
    moveY(d:number) {
      const ps:number[][] = Array()
      for(let y = 0; y < 16; y++) {
        //@ts-ignore
        ps.push(this.ps[(y - d + 16) % 16])
      }
      this.ps = ps
    },
    setPenSize(size:number) {
      this.penSize = size
      this.tool = 3
      console.log({ size })
    },

    onSave() {
      console.log('save')
      if(this.isNull) {
        return
      }
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
  },
  computed: {
    isNull(): boolean {
      //@ts-ignore
      return this.ps.filter((xx:number[]) => xx.reduce((v, c) => v + c) !== 0).length == 0
    }
  }
})
</script>
