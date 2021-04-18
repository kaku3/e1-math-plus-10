<template>
  <div>
    <div v-if="!accountIconExists" class="p i"></div>
    <div v-else class="icon-player">
      <IconView :icon="icon" :size="iconSize" :transpalent=true class="icon" />
    </div>
  </div>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.icon-player {
  transform: translate(8px, 16px);
  .icon {

    animation: idle .5s ease-in-out 0s infinite;
    @keyframes idle {
      0% { transform: translateY(0) }
      50% { transform: translateY(-2px); }
      100% { transform: translateY(0); }
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  mounted () {

  },
  computed: {
    accountIconExists(): boolean {
      return this.icon !== ''
    },
    iconSize(): number {
      return 16
    }
  }
})
</script>
