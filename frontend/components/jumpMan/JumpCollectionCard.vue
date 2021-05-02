<template>
  <v-card class="jump-collection-card mt-4" v-if="characters.length > 0">
    <v-card-title class="head orange orange--text text--lighten-5">JUMP MAN COLLECTION</v-card-title>
    <v-list dense>
      <template v-for="(c, i) in characters">
        <v-list-item :key="i">
          <v-list-item-avatar>
            <div :class="`c c${c.id} mb-4`" v-if="hasCharacters[i]"></div>
            <div class="icon unknown" v-else>?</div>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-if="hasCharacters[i]" class="name">
              {{ c.name }}
            </v-list-item-title>
            <v-list-item-title v-else class="name">
              ????
            </v-list-item-title>
            <v-list-item-subtitle class="condition">
              {{ c.condition }}
            </v-list-item-subtitle>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<style lang="scss" scoped src="./characters.scss" />
<style lang="scss" scoped>
.jump-collection-card {
  font-family: 'Press Start 2P', 'DotGothic16';
  > .head {
    padding: .25rem .75rem;
    font-size: .8rem;
  }
  .name {
    font-size: .8rem;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { JumpCharacter, JumpCharacters, JumpSaveUtil } from '~/models/JumpSave'
import { StatisticEntity } from '~/models/Statistic'

export default Vue.extend({
  data () {
    return {
      characters: [] as JumpCharacter[],
      hasCharacters: [] as Boolean[]
    }
  },
  mounted () {
  },
  methods: {
    init(mode:string, statistic:StatisticEntity) {

      const characters = JumpCharacters.filter(c => c.mode == mode)
      const hasCharacters = JumpSaveUtil.hasCharacters(characters, statistic)
      this.characters = new Array(characters.length)
      characters.forEach((c, i) => this.$set(this.characters, i, c))
      this.hasCharacters = new Array(hasCharacters.length)
      hasCharacters.forEach((c, i) => this.$set(this.hasCharacters, i, c))
    }
  }
})
</script>
