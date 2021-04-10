<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item-group v-for="(oo, ii) in lists" :key="ii">
          <section v-if="oo.section" :class="`${oo.cls}`">{{ oo.section }}</section>
          <v-list-item
            v-for="(item, i) in oo.items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="light-blue" :clipped-left="clipped" fixed app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" class="text-subtitle-1" />
      <v-spacer />
    </v-app-bar>
    <v-main class="blue-grey darken-4">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped src="./layout.scss"></style>
<script>
import nav from '~/utils/nav'

export default {
  data() {
    return nav()
  }
}
</script>
