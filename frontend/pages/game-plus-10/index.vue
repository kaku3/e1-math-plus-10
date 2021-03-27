<template>
  <div>
    <v-row>
      <v-col cols="mr-auto" class="text-h5">
        たして１０
      </v-col>
      <v-col cols="auto">
        <v-btn outlined to="/">
          <v-icon>mdi-home-circle</v-icon>ほーむ
        </v-btn>
      </v-col>
    </v-row>
    <GamePlus10History class="mt-2" :gameMode="gameMode" :questionCount="questionCount" />
    <Chat room="plus-10" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

export default Vue.extend({
  head() {
    return {
      title: 'たして１０'
    }
  },
  async asyncData(context: Context) {
    const params:any = context.params
    console.log(params)
    return {
      gameMode: params.mode,
      questionCount: parseInt(params.count) || -1
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
