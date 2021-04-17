<template>
  <div class="page-container">
    <v-row>
      <v-col cols="6" v-for="(o, i) in icons" :key="i">
        <v-card>
          <IconView :icon="o.icon" class="icon" />
          <v-card-title>{{o.title}}</v-card-title>
          <v-card-text>{{o.name}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      class="btn-new"
      fab
      dark
      color="primary"
      to="/pixel16/new"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>
<style lang="scss" scoped>
.icon {
  width: 100%;
}

.btn-new {
  position: absolute;
  right: 8px;
  bottom: 8px;
}
</style>
<script lang="ts">
import Vue from 'vue'
import firebase from '@/plugins/firebase'

export default Vue.extend({
  data() {
    return {
      icons: [] as Object[]
    }
  },

  async mounted () {
    const db = firebase.firestore()
    const q = db.collection('pixelIcons')
      .orderBy('timestamp', 'desc')
      .limit(20)

    const r = await q.get()
    this.icons = r.docs.map(d => {
      const icon = d.data()
      return icon
    })
  },
  methods: {
  }
})
</script>
