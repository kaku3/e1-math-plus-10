<template>
  <v-card class="game-console">
    <v-card-text>
      <v-row>
        <v-col cols="mr-auto">
          <v-btn
            @click="startGame"
            :disabled="save.star < 1"
          >
            PLAY<v-icon>mdi-play</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          ★1
        </v-col>
      </v-row>
    </v-card-text>
    <v-list class="character-list" dense>
      <v-list-item v-for="(c,i) in towerCharacters().slice().reverse()" :key="i"
        two-line
        :class="{ unknown: unknown(c) }"
      >
        <v-list-item-avatar size="32">
          <div :class="`c c${c.id} ${unknown(c)}`"></div>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-if="c.status.lv == 0">
            {{ c.name }}
          </v-list-item-title>
          <v-list-item-title v-else>
            <v-progress-linear
              v-model="c.creationTime"
              color="blue-grey"
              height="16"
            >
              <template>
                {{ c.name }}
              </template>
            </v-progress-linear>
          </v-list-item-title>
          <v-list-item-subtitle>
            <div class="status-row">
              <div class="status-item">HP {{ c.status.hp }}</div>
              <div class="status-item">AG {{ c.status.spd }}</div>
            </div>
            <div class="status-row">
              <div class="status-item">AT {{ c.status.atk }}</div>
              <div class="status-item">DF {{ c.status.def }}</div>
            </div>
          </v-list-item-subtitle>
          <v-divider></v-divider>
        </v-list-item-content>
        <v-list-item-action class="text-right">
          <div v-if="c.status.lv > 0">LV {{ c.status.lv }}</div>
          <div v-if="c.status.lv == 0">
            <div>★{{c.characterPrice}}</div>
            <v-btn x-small color="blue lighten-3" width="56"
              @click="buy(c)"
              :disabled="c.characterPrice > save.star"
            >
              buy
            </v-btn>
          </div>
          <div v-else-if="c.status.lv < 99">
            <div>★{{c.levelPrice}}</div>
            <v-btn x-small color="orange lighten-2" width="56"
              @click="up(c)"
              :disabled="c.levelPrice > save.star"
            >
              UP
            </v-btn>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<style lang="scss" scoped src="./characters.scss" />
<style lang="scss" scoped>
.game-console {
  font-family: 'Press Start 2P', cursive;
}
.character-list {
  font-size: .6rem;
  max-height: 320px;
  overflow-y: scroll;

  .v-list-item {
    padding: 0 .25rem;

    .v-list-item__avatar:first-child {
      margin-right: 4px;
    }

    .v-list-item__title {
      font-size: .6rem;

      ::v-deep .v-progress-linear__content {
        justify-content: start;
      }
    }
    .v-list-item__subtitle {
      font-size: .6rem;
      .status-row {
        display: block;

        .status-item {
          display: inline-block;
          width: 96px;
        }
      }
    }
    .v-list-item__action {
      .v-btn {
        font-size: .6rem;
      }
    }

    &.unknown {
      background-color: #CFD8DC;
      .c {
        filter: brightness(0);
      }
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue'

import { TowerSave, TowerUtil, TowerCharacter, TowerCharacters } from '~/models/TowerSave'
import { CharacterController } from '~/components/tower/TowerCharacter'

export default Vue.extend({
  data () {
    return {
      save: new TowerUtil().save,
      characterControllers: [] as CharacterController[]
    }
  },
  mounted () {
  },
  methods: {
    update(save:TowerSave, characterControllers:CharacterController[]) {
      this.save = save
      this.characterControllers = characterControllers
    },
    towerCharacters(): TowerCharacter[] {
      const characters = TowerUtil.getCharacters(this.save)
      return characters
    },
    unknown(c:TowerCharacter):string {
      return c.status.lv === 0 ? 'unknown' : ''
    },
    startGame() {
      this.$emit('start')
    },

    buy(c:TowerCharacter) {
      this.$emit('buy', c)
    },
    up(c:TowerCharacter) {
      this.$emit('up', c)
    }
  },
})
</script>
