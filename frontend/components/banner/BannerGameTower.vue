<template>
  <div class="banner-game-tower">
    <TowerGameScene />
  </div>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import Vue from 'vue'

import TowerGameScene from '~/components/tower/TowerGameScene.vue'

export default Vue.extend({
  components: {
    TowerGameScene
  }
})
</script>
