<template>
  <div>
    <v-row>
      <v-col>
        ようこそ {{name}} さん
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="menu-item" @click="goPlus10('/game-plus-10')">
          <v-card-text class="green lighten-5">
            <v-row class="ex-canvas">
              <v-col class="blue-grey--text" align-self="center">
                3
              </v-col>
              <v-col class="blue--text" align-self="center">
                +
              </v-col>
              <v-col class="amber--text answer" align-self="center">
              </v-col>
              <v-col class="light-green--text" align-self="center">
                =
              </v-col>
              <v-col class="teal--text" align-self="center">
                10
              </v-col>
          </v-card-text>
          <div class="title">
            たして１０
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
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
      </v-col>
    </v-row>
  </div>
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
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

export default Vue.extend({
  methods: {
    goPlus10() {
      this.$router.replace({
        name: 'game-plus-10',
        params: {
          mode: 'modeSprint',
          count: '10'
        }
      })
    },
    goPlusSingle() {
      this.$router.replace({ name: 'game-plus-single' })
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
    name(): string {
      return this.accountStore.account.name
    }
  }
})
</script>
