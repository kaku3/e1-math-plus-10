<template>
  <div>
    <v-row>
      <v-col>
        ようこそ {{name}} さん
      </v-col>
    </v-row>

    <v-subheader>１ねんせい</v-subheader>
    <v-row>
      <v-col cols="12" md="6">
        <BannerPlus10 />
        <DailySummary game="plus-10" />
      </v-col>
      <v-col cols="12" md="6">
        <BannerSingle />
        <DailySummary game="plus-single" />
      </v-col>
      <v-col cols="12" md="6">
        <BannerMinus20 />
        <DailySummary game="minus-20" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <DailyEntry />
      </v-col>
    </v-row>
    <Chat room="all" />
  </div>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

export default Vue.extend({
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
