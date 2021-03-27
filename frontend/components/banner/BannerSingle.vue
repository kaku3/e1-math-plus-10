<template>
  <v-card class="menu-item" @click="goPlusSingle('/game-plus-single')">
    <v-card-text class="green lighten-5">
      <v-row class="ex-canvas">
        <v-col cols="mr-auto" class="answer-container" align-self="center">
          <span>5</span>
          <span>+</span>
          <span>2</span>
          <span>+</span>
          <span>8</span>
          <span>+</span>
        </v-col>
        <v-col cols="auto" class="question-container" align-self="center">
          <span class="light-green--text">
            =
          </span>
          <span class="teal--text" align-self="center">
            25
          </span>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="title">
      ヒトケタス
    </div>
  </v-card>
</template>
<style lang="scss" scoped>
.menu-item {
  position: relative;

  > .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: .25rem .5rem;
    color: white;
    font-weight: bold;
    background-color: rgba(27, 94, 32, .4)
  }

  .answer-container {
    text-align: left;
    font-size: 2rem;
  }
}

.ex-canvas {
  height: 10vh;
}
.ex-canvas > * {
  padding: .25rem;
  font-size: 3rem;
  font-family: 'Fredoka One';
  line-height: 1;
  height: 4rem;
  text-align: center;

  &.answer {
    position: relative;
    border: 2px solid #FF9800;
    border-radius: 4px;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    goPlusSingle() {
      this.$router.replace({ name: 'game-plus-single' })
    }
  }
})
</script>
