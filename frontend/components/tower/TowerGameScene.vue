<template>
  <div id="game-scene" class="container">
    <div class="background">
      <div class="bg-row">
        <div class="bg w0"></div>
        <div class="bg w1"></div>
        <div class="bg w2"></div>
        <div class="bg w3"></div>
        <div class="bg w0"></div>
        <div class="bg w1"></div>
        <div class="bg w2"></div>
        <div class="bg w7"></div>
        <div class="bg w8"></div>
        <div class="bg w0"></div>
      </div>
      <div class="bg-row">
        <div class="bg w1"></div>
        <div class="bg w6"></div>
        <div class="bg w0"></div>
        <div class="bg w1"></div>
        <div class="bg w5"></div>
        <div class="bg w1"></div>
        <div class="bg w7"></div>
        <div class="bg w8"></div>
        <div class="bg w0"></div>
        <div class="bg w1"></div>
      </div>
      <div class="bg-row">
        <div class="bg f lu"></div>
        <div class="bg f u0"></div>
        <div class="bg f u1"></div>
        <div class="bg f u0"></div>
        <div class="bg f u1"></div>
        <div class="bg f u0"></div>
        <div class="bg f u1"></div>
        <div class="bg f u0"></div>
        <div class="bg f u1"></div>
        <div class="bg f ru"></div>
      </div>
      <div class="bg-row">
        <div class="bg f l"></div>
        <div class="bg f c0"></div>
        <div class="bg f c1"></div>
        <div class="bg f c0"></div>
        <div class="bg f c1"></div>
        <div class="bg f c0"></div>
        <div class="bg f c1"></div>
        <div class="bg f c0"></div>
        <div class="bg f c1"></div>
        <div class="bg f r"></div>
      </div>
      <div class="bg-row">
        <div class="bg f ld"></div>
        <div class="bg f d0"></div>
        <div class="bg f d1"></div>
        <div class="bg f d0"></div>
        <div class="bg f d1"></div>
        <div class="bg f d0"></div>
        <div class="bg f d1"></div>
        <div class="bg f d0"></div>
        <div class="bg f d1"></div>
        <div class="bg f rd"></div>
      </div>

    </div>

    <div class="characters">
      <v-row>
        <div class="e e9"></div>
        <div class="e e10"></div>
        <div class="e e11"></div>
        <div class="e e12"></div>
        <div class="e e13"></div>
        <div class="e e14"></div>
        <div class="e e15"></div>
        <div class="e e16"></div>
        <div class="e e17"></div>
      </v-row>
      <v-row>
        <div class="e b b0"></div>
        <div class="e b b1"></div>
        <div class="e b b2"></div>
      </v-row>
    </div>

  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
#game-scene {
  position: relative;
  padding: 0;
  overflow: hidden;
}
.background {
  font-size: 0;
  width: 320px;
  height: 160px;
  transform-origin: 0 0;
  transform: scale(2);

  .bg-row {
    width: 320px;
    height: 16px;
  }
}
.characters {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
