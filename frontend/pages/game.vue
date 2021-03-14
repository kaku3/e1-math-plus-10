<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <Game :gameMode="mode" :questionCount="count" />
    </v-col>
    <v-col cols="12">
      <Hiscore :gameMode="mode" :questionCount="count" />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData(context: Context) {
    const params = context.params
    return {
      mode: params.mode,
      count: params.count
    }
  }
})
</script>
