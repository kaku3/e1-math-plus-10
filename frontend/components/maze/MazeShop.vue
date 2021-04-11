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
    },
    buyPortion() {
      this.save.coin -= this.portionPrice
      this.save.portion++
      this.save.shop_portion++
    },
    buyKey1() {
      this.save.coin -= this.key1Price
      this.save.key1++
      this.save.shop_key1++
    },
    buyKey2() {
      this.save.coin -= this.key2Price
      this.save.key2++
      this.save.shop_key2++
    },
    startFloor() {
      console.log('MazeShop:start')
      this.$emit('start-floor')
    }
  },

  computed: {
    mattockPrice() : number {
      const v = this.save.shop_mattock
      return 5 + v + Math.floor(v / 5) * 10 + Math.floor(v / 20) * 50
    },
    portionPrice() : number {
      const v = this.save.shop_portion
      return 10 + v + Math.floor(v / 5) * 10
    },
    key1Price() : number {
      const v = this.save.shop_key1
      return 8 + v + Math.floor(v / 5) * 10
    },
    key2Price() : number {
      return 50 + this.save.shop_key2
    },
  }
})
</script>
