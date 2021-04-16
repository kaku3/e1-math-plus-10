<template>
  <div class="page-container">
    <v-card>
    </v-card>
    <v-btn
      class="btn-new"
      fab
      dark
      color="primary"
      to="/icon/new"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>
<style lang="scss" scoped>
  .btn-new {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
  }
})
</script>
