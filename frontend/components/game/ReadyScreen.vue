<template>
  <div class="ready">
    <div v-if="readyCount === 3" class="count-3">3</div>
    <div v-if="readyCount === 2" class="count-2">2</div>
    <div v-if="readyCount === 1" class="count-1">1</div>
    <div v-if="readyCount === 0" class="count-0">すたーと</div>
  </div>
</template>
<style lang="scss" scoped>
.ready {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: 'Fredoka One';
  background-color: rgba(0, 0, 0, .5);

  > * {
    position: absolute;
    width: 100%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: bold;
  }
  > .count-3 {
    animation:
      a-count-3 .5s ease-in forwards,
      a-opacity .5s ease-in forwards;
  }
  > .count-2 {
    animation:
      a-count-3 .5s ease-in forwards,
      a-opacity .5s ease-in forwards;
  }
  > .count-1 {
    animation:
      a-count-3 .5s ease-in forwards,
      a-opacity .5s ease-in forwards;
  }
  > .count-0 {
    animation:
      a-count-0 1s ease-out forwards,
      a-opacity-0 1s ease-out forwards;
    @keyframes a-count-0 {
      0%   { transform: scale(1, 1); }
      100% { transform: scale(5, 5); }
    }
    @keyframes a-opacity-0 {
      0%   { opacity: 1; }
      100% { opacity: 0; }
    }
  }
  @keyframes a-count-3 {
    0%   { transform: scale(3, 3); }
    100% { transform: scale(1, 1); }
  }
  @keyframes a-opacity {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    readyCount: {
      type: Number,
      default: 3
    }
  }
})
</script>
