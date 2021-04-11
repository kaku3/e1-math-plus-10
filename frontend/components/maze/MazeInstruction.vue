<template>
  <v-row no-gutters>
    <v-col cols="6">
      <v-list class="info-container blue-grey lighten-4" dense>
        <v-list-item>
          <div class="console item mattock"></div>
          <div class="pl-4">Break Wall</div>
        </v-list-item>
        <v-list-item>
          <div class="console item plus-portion"></div>
          <div class="pl-4">Recover HP</div>
        </v-list-item>
        <v-list-item>
          <div class="console item key1"></div>
          <div class="pl-4">Open Chest</div>
        </v-list-item>
        <v-list-item>
          <div class="console item key2"></div>
          <div class="pl-4">Open Door</div>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="6">
      <v-list class="info-container blue-grey lighten-4" dense>
        <v-list-item>
          <div class="console bgo peak"></div>
          <div class="pl-4">Damage</div>
        </v-list-item>
        <v-list-item>
          <div class="console bgo coin"></div>
          <div class="pl-4">Money</div>
        </v-list-item>
        <v-list-item>
          <div class="console bgo chest1"></div><div class="console bgo chest2"></div>
          <div class="pl-4">Chest</div>
        </v-list-item>
        <v-list-item>
          <div class="console bgo door"></div>
          <div class="pl-4">Door</div>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped src="./main.scss" />
<style lang="scss" scoped>
.info-container {
  font-size: .6rem;
  font-family: 'Press Start 2P', cursive;

  .console.bgo {
    position: relative;
  }
}

</style>
