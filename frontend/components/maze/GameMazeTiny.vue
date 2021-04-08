<template>
  <div class="text-center">
    <MazeScene :floor="floor" />
    <v-list class="how-to blue-grey lighten-4" dense>
      <v-list-item>
        <div class="console item mattock"></div>
        <div class="pl-4">Break Wall</div>
      </v-list-item>
      <v-list-item>
        <div class="console item plus-portion"></div>
        <div class="pl-4">Recover HP</div>
      </v-list-item>
      <v-list-item>
        <div class="console item key1"></div>
        <div class="pl-4">Open Chest</div>
      </v-list-item>
      <v-list-item>
        <div class="console item key2"></div>
        <div class="pl-4">Open Door</div>
      </v-list-item>
    </v-list>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.how-to {
  font-size: .8rem;
  font-family: 'Press Start 2P', cursive;
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      floor: 0,
    }
  },
})
</script>
