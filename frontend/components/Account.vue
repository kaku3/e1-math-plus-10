<template>
  <div>
    <AccountName :name="name" @update-name="updateName" />
    <IconEditor />
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
      this.accountStore.update({ name })
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
  }
})
</script>
