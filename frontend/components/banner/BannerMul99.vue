<template>
  <v-card class="menu-item" @click="goGame()">
    <v-card-text class="blue lighten-5">
      <v-row class="ex-canvas">
        <v-col class="blue-grey--text" align-self="center">
          3
        </v-col>
        <v-col class="blue--text" align-self="center">
          x
        </v-col>
        <v-col class="amber--text answer" align-self="center">
        </v-col>
        <v-col class="light-blue--text" align-self="center">
          =
        </v-col>
        <v-col class="teal--text" align-self="center">
          9
        </v-col>
      </v-row>
    </v-card-text>
    <div class="title">
      かけざん９９
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
    background-color: rgba(31, 150, 243, .4)
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
    goGame() {
      this.$router.replace({
        name: 'game-mul-99',
        params: {
          mode: 'mul99Sprint',
          count: '10'
        }
      })
    }
  }
})
</script>
