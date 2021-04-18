<template>
  <div class="page-container">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="auto">
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
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6" v-for="(o, i) in icons" :key="i">
        <v-card>
          <IconView :icon="o.icon" class="icon" />
          <v-card-title>{{o.title}}</v-card-title>
          <v-card-text>{{o.name}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <Chat room="all" />
  </div>
</template>
<style lang="scss" scoped>
.v-card {

  .v-card__title {
    padding: .1rem .25rem!important;
    line-height: 1;
    font-size: .9rem;
  }
  .v-card__text {
    padding: .25rem!important;
    font-size: .7rem;
    color: #9E9E9E;
    text-overflow: ellipsis;
    height: 1.75rem;
  }
}

.icon {
  width: 100%;
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
      .limit(50)

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
