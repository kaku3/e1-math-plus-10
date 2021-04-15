<template>
  <v-card>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          v-model="name"
          label="にっくねーむ"
        >
        </v-text-field>
      </v-form>
      * 個人を特定できる名前を登録しないでください
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
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: 'ゲスト'
    }
  },
  data() {
    return {
      valid: false,
      showUpdateMessage: false
    }
  },
  methods: {
    updateName() {
      this.$emit('update-name', this.name)
      this.showUpdateMessage = true
    }
  }
})
</script>
