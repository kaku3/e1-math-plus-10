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
  data() {
    return {
      name: ''
    }
  },
  mounted () {
    this.name = this.accountStore.account.name
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
  }
})
</script>
