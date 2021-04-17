<template>
  <div>
    <v-text-field v-if="!saved"
      label="タイトル"
      v-model="title"
    >
    </v-text-field>
    <IconEditor v-if="!saved" @save="onSave" />
    <v-row class="mt-8" justify="center">
      <v-col cols="auto">
        <v-btn
          to="/"
        >
          <v-icon>mdi-home-circle</v-icon>ほーむ
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          to="/pixel16/"
        >
          <v-icon>mdi-view-module</v-icon>いちらん
        </v-btn>
      </v-col>
    </v-row>

    <v-snackbar v-model="showMessage">
      {{message}}
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'

import firebase from '@/plugins/firebase'

export default Vue.extend({
  data() {
    return {
      title: '',
      message: '',
      showMessage: false,
      saved: false
    }
  },
  methods: {
    onSave(o: any) {
      if(this.title === '') {
        this.message = 'タイトルをつけてください'
        this.showMessage = true
        return
      }
      const db = firebase.firestore()
      db.collection('pixelIcons').add(
        Object.assign({
          name: this.accountStore.account.name,
          title: this.title
        }, o))
      this.message = 'こうしんしました'
      this.showMessage = true
      this.saved = true
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
  }
})
</script>
