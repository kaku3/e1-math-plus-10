<template>
  <v-fade-transition>
    <div class="effect-screen" @click="onTap()">
      <div class="caption-text">スターをげっと</div>
      <div class="star-container">
        <v-icon color="yellow" size="50vw" class="star">mdi-star</v-icon>
      </div>
      <div class="condition-text" v-if="nextConditionCount !== -1">つぎの<v-icon color="yellow">mdi-star</v-icon>まで<br /> {{ nextConditionCount }}かいぷれい</div>
    </div>
  </v-fade-transition>
</template>
<style lang="scss" scoped>
.effect-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, .5);

  animation: a-screen .5s ease-in;
  @keyframes a-screen {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  > .star-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);

    > .star {
      animation:
       a-star0 .5s ease-out 0s forwards,
       a-star 2s linear 1s infinite;
    }

    @keyframes a-star0 {
      0%   { transform: scale(30, 30); opacity: 0; }
      100% { transform: scale(1, 1); opacity: 1; }
    }
    @keyframes a-star {
      0%   { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }

  }
  > .caption-text {
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    text-align: center;
    color: white;

    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: 1.1rem;

    animation: a-caption-text 1s ease-in-out;
    @keyframes a-caption-text {
      0%   { transform: translateY(-100%); }
      20% { transform: translateY(0); }
      40% { transform: translateY(-50%); }
      60% { transform: translateY(0); }
      80% { transform: translateY(-10%); }
      100% { transform: translateY(0); }
    }
  }
  > .condition-text {
    position: absolute;
    top: 70vh;
    left: 0;
    width: 100%;
    text-align: center;
    color: white;

    font-weight: bold;
    font-size: 1.5rem;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    nextConditionCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      shown: false
    }
  },
  mounted () {
    const self = this
    window.setTimeout(() => {
      self.shown = true
    }, 1000)
  },
  methods: {
    onTap() {
      if(this.shown) {
        this.$emit('dismiss')
      }
    }
  }
})
</script>
