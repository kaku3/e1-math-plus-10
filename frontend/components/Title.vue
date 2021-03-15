<template>
  <div>
    <v-row>
      <v-col>
        ようこそ {{name}} さん
      </v-col>
    </v-row>
    <History class="mt-2" />
  </div>

</template>

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
