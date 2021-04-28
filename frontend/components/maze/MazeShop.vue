<template>
  <v-card class="info-container blue-grey lighten-4">
    <div class="shop-title blue-grey lighten-1">Maze Shop</div>
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
        <div class="console item sword mr-2"></div>
        <v-list-item-content>{{ save.sword }}</v-list-item-content>
        <v-list-item-icon size="120">
          <div class="item coin"></div><div class="value">{{ swordPrice }}</div>
          <v-btn class="ml-2" color="teal lighten-3" depressed x-small :disabled="!canBuy(swordPrice)" @click="buySword()">buy</v-btn>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    <v-card-actions>
      <v-btn color="cyan lighten-3" depressed small to="/">HOME</v-btn>
      <v-spacer></v-spacer>
      <MazePlayer :icon="accountIcon" class="player" />
      <v-btn color="cyan lighten-3" depressed small @click="startFloor">start</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.info-container {
  font-size: .6rem;
  font-family: 'Press Start 2P', cursive;

  .shop-title {
    padding: .5rem 0;
  }
  .v-list {
    padding: 0;
  }

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
.player {
  position: relative;
  width: 32px;
  height: 32px;
  transform: translate(-16px, -16px) scale(2);
}

</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

import { MazeSave, NewSave, resetSave } from '~/models/MazeSave'

import seBuy from '~/assets/maze/se/buy.mp3'
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

      new Audio(seBuy).play()
    },
    buyPortion() {
      this.save.coin -= this.portionPrice
      this.save.portion++
      this.save.shop_portion++

      new Audio(seBuy).play()
    },
    buyKey1() {
      this.save.coin -= this.key1Price
      this.save.key1++
      this.save.shop_key1++

      new Audio(seBuy).play()
    },
    buySword() {
      this.save.coin -= this.swordPrice
      this.save.sword++
      this.save.shop_sword++

      new Audio(seBuy).play()
    },
    startFloor() {
      console.log('+ MazeShop:start')
      new Audio(seDoor).play()

      this.$emit('start-floor')
    }
  },

  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
    accountIcon(): string {
      return this.accountStore.account.icon
    },

    mattockPrice() : number {
      const v = this.save.shop_mattock
      return 10 + v + Math.floor(v / 3) * 10 + Math.floor(v / 10) * 100
    },
    portionPrice() : number {
      const v = this.save.shop_portion
      return 15 + v + Math.floor(v / 5) * 50 + Math.floor(v / 10) * 100 + Math.floor(v / 20) * 500
    },
    key1Price() : number {
      const v = this.save.shop_key1
      return 10 + Math.floor(v / 4) * 20 + Math.floor(v / 20) * 50
    },
    swordPrice() : number {
      const v = this.save.shop_sword
      return 50 + Math.floor(v / 3) * 10 + Math.floor(v / 10) * 60
    },
  }
})
</script>
