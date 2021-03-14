<template>
  <v-card>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          v-model="name"
          label="なまえ"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="updateName" color="primary">こうしん</v-btn>
    </v-card-actions>
    <v-snackbar v-model="showUpdateMessage">
      こうしんしました
    </v-snackbar>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'

import AccountStore from '~/store/AccountStore'


export default Vue.extend({
  data() {
    return {
      valid: false,
      name: '',
      showUpdateMessage: false
    }
  },
  mounted () {
    this.name = this.accountStore.account.name
  },
  methods: {
    updateName() {
      const name = this.name
      this.accountStore.update({ name })
      this.showUpdateMessage = true
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
  }
})
</script>
