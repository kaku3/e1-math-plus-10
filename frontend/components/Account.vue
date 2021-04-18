<template>
  <div>
    <AccountName :name="name" @update-name="updateName" />
    <IconEditor @save="updateIcon" />
    <v-snackbar v-model="showMessage">
      {{message}}
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'

import AccountStore from '~/store/AccountStore'


export default Vue.extend({
  data() {
    return {
      name: '',
      message: '',
      showMessage: false,
    }
  },
  mounted () {
    this.name = this.accountStore.account.name
  },
  methods: {
    updateName(name: string) {
      if(name === '') {
        return
      }
      this.name = name
      this.accountStore.updateName(name)
    },
    updateIcon(o: any) {
      this.accountStore.updateIcon(o.icon)
      this.message = 'アバターをこうしんしました'
      this.showMessage = true
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
  }
})
</script>
