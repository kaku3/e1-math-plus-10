<template>
  <v-fade-transition>
    <div class="effect-screen" @click="onTap" v-if="show">
      <div class="line-container"></div>
      <div class="caption-text">
        <div class="head blue-grey--text text--lighten-5">JUMP MAN COLLECTION</div>
        <div class="message mt-10 blue-grey--text text--darken-4">You Got {{ character.name }}</div>
      </div>
      <div class="object-container">
        <div :class="`c c${character.id}`"></div>
      </div>
    </div>
  </v-fade-transition>
</template>
<style lang="scss" scoped src="./characters.scss" />
<style lang="scss" scoped>
.effect-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 150, 136, .8);

  --circle-width: 150vw;
  @media (orientation: portrait) {
    --circle-width: 150vh;
  }

  animation: a-screen .5s ease-in;
  @keyframes a-screen {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

}
.line-container {
  position: absolute;

  --border-color: #80CBC4;
  --half-circle-width: calc(var(--circle-width) / 2);

  width: var(--circle-width);
  height: var(--circle-width);
  left: calc(50% - var(--half-circle-width));
  top: calc(50% - var(--half-circle-width));

  /* ランダムな太さの先を重ねる */
  background-image: repeating-conic-gradient(
      transparent 0,
      transparent 13deg,
      var(--border-color) 13deg,
      var(--border-color) 16deg
    ),
    repeating-conic-gradient(
      transparent 0,
      transparent 20deg,
      var(--border-color) 20deg,
      var(--border-color) 23deg
    ),
    repeating-conic-gradient(
      transparent 0,
      transparent 5deg,
      var(--border-color) 5deg,
      var(--border-color) 8deg
    ),
    repeating-conic-gradient(
      transparent 0,
      transparent 2deg,
      var(--border-color) 2deg,
      var(--border-color) 3deg
    );

  /* 中心をくり抜く */
  -webkit-mask-image: radial-gradient(
    transparent 0%,
    transparent 12%,
    white 30%,
    white
  );

  mask-image: radial-gradient(
    transparent 0%,
    transparent 12%,
    white 30%,
    white
  );

  animation: a-line-container 60s linear .5s infinite;

  @keyframes a-line-container {
    0%   { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
}
.object-container {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;

  animation: a-oc .5s ease-in 0s forwards;

  @keyframes a-oc {
    0%   { transform: translate(-50%, -100%) scale(8); opacity: 0; }
    100%   { transform: translate(-50%, -100%) scale(3); opacity: 1; }
  }
}
.caption-text {
  font-family: 'Press Start 2P', 'DotGothic16';

  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  text-align: center;

  animation: a-caption-text 1s ease-in-out;
  @keyframes a-caption-text {
    0%   { transform: translateY(-100%); }
    20% { transform: translateY(0); }
    40% { transform: translateY(-50%); }
    60% { transform: translateY(0); }
    80% { transform: translateY(-10%); }
    100% { transform: translateY(0); }
  }

  .head {
    font-weight: bold;
    font-size: 1rem;
    line-height: 2;
    letter-spacing: 1.1rem;
  }

  .message {
    font-size: .8rem;
    line-height: 1.2;
  }
}


</style>
<script lang="ts">
import Vue from 'vue'

import { JumpCharacter, JumpCharacters, JumpSaveUtil } from '~/models/JumpSave'
import { StatisticUtil } from '~/models/Statistic'

export default Vue.extend({
  data () {
    return {
      jumpSaveUtil: new JumpSaveUtil(),
      characters: [] as JumpCharacter[],
      no: 0,
      show: false,
      shown: false
    }
  },
  async mounted () {
    await this.jumpSaveUtil.loadData()
  },
  methods: {
    async init(mode:string) {

      const u = new StatisticUtil(mode)
      await u.loadData()

      // 持ってないキャラクターを対象にチェックする
      let characters = JumpCharacters
        .filter(c => c.mode == mode)
        .filter(c => !this.jumpSaveUtil.hasCharacter(c.id))

      // 今回取得分のキャラクターのみを抽出
      let hasCharacters = JumpSaveUtil.hasCharacters(characters, u.save)
      characters = characters.filter((_, i) => hasCharacters[i])

      this.characters = new Array(characters.length)
      characters.forEach((c, i) => this.$set(this.characters, i, c))

      if(characters.length > 0) {
        this.no = 0
        this.show = true
        window.setTimeout(() => {
          this.shown = true
        }, 1000)
      }
    },

    onTap() {
      if(this.shown) {
        this.jumpSaveUtil.getCharacter(this.character.id)

        this.show = false
        this.no++
        if(this.no < this.characters.length) {
          this.$nextTick(() => {
            this.show = true
          })
        } else {
          this.jumpSaveUtil.saveData()
        }
      }
    }
  },
  computed: {
    character():JumpCharacter {
      return this.characters[this.no]
    }
  }
})
</script>
