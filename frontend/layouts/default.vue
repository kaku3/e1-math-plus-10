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
    <v-main class="grey lighten-2">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped>
section {
  color: white;
  background-color: #00796B;

  &.e1 {
    background-color: #4CAF50;
  }
  &.e2 {
    background-color: #2196F3;
  }
}
</style>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      lists: [
        {
          section: '',
          cls: 'global',
          items: [
            {
            icon: 'mdi-home-circle',
            title: 'ほーむ',
            to: '/',
            }
          ]
        },
        {
          section: '１ねんせい',
          cls: 'e1',
          items: [
            {
              icon: 'mdi-playlist-edit',
              title: 'たして１０',
              to: {
                name: 'game-plus-10',
                params: {
                  mode: 'modeSprint',
                  count: 10
                }
              }
            },
            {
              icon: 'mdi-playlist-edit',
              title: 'ヒトケタス',
              to: '/game-plus-single',
            },
            {
              icon: 'mdi-playlist-edit',
              title: 'ひきざん２０',
              to: {
                name: 'game-minus-20',
                params: {
                  mode: 'minusSprint',
                  count: 10
                }
              }
            },
          ]
        },
        {
          section: '２ねんせい',
          cls: 'e2',
          items: [
            {
              section: '',
              icon: 'mdi-playlist-edit',
              title: 'かけざん９９',
              to: {
                name: 'game-mul-99',
                params: {
                  mode: 'mul99Sprint',
                  count: 10
                }
              }
            },
          ]
        },
        {
          section: 'せってい',
          cls: 'setting',
          items: [
            {
              icon: 'mdi-account-box',
              title: 'アカウント',
              to: '/account',
            },
          ]
        },
      ],
      miniVariant: false,
      title: '小１からのさんすうゲーム',
    }
  },
}
</script>
