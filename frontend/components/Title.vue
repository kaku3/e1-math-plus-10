<template>
  <v-card>
    <v-list
      v-model="menu"
    >
      <v-list-item @click="startGame('modeSprint', 10)">
        <v-list-item-content>
          <v-list-item-title>10問モード</v-list-item-title>
          <v-list-item-subtitle>10問れんしゅうします</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="startGame('modeSprint', 30)">
        <v-list-item-content>
          <v-list-item-title>30問モード</v-list-item-title>
          <v-list-item-subtitle>30問れんしゅうします</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="startGame('modeEndress', -1)">
        <v-list-item-content>
          <v-list-item-title>たいきゅうモード</v-list-item-title>
          <v-list-item-subtitle>まちがえるまでれんしゅうします</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      menu: -1
    }
  },
  methods: {
    startGame(mode, count) {
      this.$router.push({ name: 'game', params: { mode: mode, count: count }})
    }
  }
}
</script>
