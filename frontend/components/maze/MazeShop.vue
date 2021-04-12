<template>
  <v-card class="info-container blue-grey lighten-4">
    <div>Maze Shop</div>
    <v-list class="info-container blue-grey lighten-4" dense>
      <v-divider></v-divider>
      <v-list-item>
        <div class="console item mattock mr-2"></div>
        <v-list-item-content>{{ save.mattock }}</v-list-item-content>
        <v-list-item-icon size="120">
          <div class="item coin"></div><div class="value">{{ mattockPrice }}</div>
          <v-btn class="ml-2" color="teal lighten-3" depressed x-small :disabled="!canBuy(mattockPrice)" @click="buyMattock()">buy</v-btn>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <div class="console item plus-portion mr-2"></div>
        <v-list-item-content>{{ save.portion }}</v-list-item-content>
        <v-list-item-icon size="120">
          <div class="item coin"></div><div class="value">{{ portionPrice }}</div>
          <v-btn class="ml-2" color="teal lighten-3" depressed x-small :disabled="!canBuy(portionPrice)" @click="buyPortion()">buy</v-btn>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <div class="console item key1 mr-2"></div>
        <v-list-item-content>{{ save.key1 }}</v-list-item-content>
        <v-list-item-icon size="120">
          <div class="item coin"></div><div class="value">{{ key1Price }}</div>
          <v-btn class="ml-2" color="teal lighten-3" depressed x-small :disabled="!canBuy(key1Price)" @click="buyKey1()">buy</v-btn>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <div class="console item key2 mr-2"></div>
        <v-list-item-content>{{ save.key2 }}</v-list-item-content>
        <v-list-item-icon size="120">
          <div class="item coin"></div><div class="value">{{ key2Price }}</div>
          <v-btn class="ml-2" color="teal lighten-3" depressed x-small :disabled="!canBuy(key2Price)" @click="buyKey2()">buy</v-btn>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="cyan lighten-3" depressed small @click="startFloor">start</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.info-container {
  font-size: .6rem;
  font-family: 'Press Start 2P', cursive;

  .console.bgo {
    position: relative;
  }
  .item {
    position: relative;
  }
  .value {
    display: inline-block;
  }
}

</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { MazeSave, NewSave, resetSave } from '~/models/MazeSave'

import seCoin from '~/assets/maze/se/coin.mp3'
import seDoor from '~/assets/maze/se/door.mp3'

export default Vue.extend({
  props: {
    save: {
      type: Object as PropType<MazeSave>,
      default: NewSave('')
    }
  },
  methods: {
    canBuy(price: number): boolean {
      return this.save.coin >= price
    },
    buyMattock() {
      this.save.coin -= this.mattockPrice
      this.save.mattock++
      this.save.shop_mattock++

      new Audio(seCoin).play()
    },
    buyPortion() {
      this.save.coin -= this.portionPrice
      this.save.portion++
      this.save.shop_portion++

      new Audio(seCoin).play()
    },
    buyKey1() {
      this.save.coin -= this.key1Price
      this.save.key1++
      this.save.shop_key1++

      new Audio(seCoin).play()
    },
    buyKey2() {
      this.save.coin -= this.key2Price
      this.save.key2++
      this.save.shop_key2++

      new Audio(seCoin).play()
    },
    startFloor() {
      console.log('+ MazeShop:start')
      new Audio(seDoor).play()

      this.$emit('start-floor')
    }
  },

  computed: {
    mattockPrice() : number {
      const v = this.save.shop_mattock
      return 10 + v + Math.floor(v / 3) * 5 + Math.floor(v / 10) * 30
    },
    portionPrice() : number {
      const v = this.save.shop_portion
      return 15 + v + Math.floor(v / 5) * 20
    },
    key1Price() : number {
      const v = this.save.shop_key1
      return 10 + v + Math.floor(v / 3) * 6
    },
    key2Price() : number {
      return 50 + this.save.shop_key2 * 25
    },
  }
})
</script>
