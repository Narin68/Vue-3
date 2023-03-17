<template>
  <h1>Reaction timer</h1>
  <button @click="start" :disabled="isPlay">Play</button>
  <Block v-if="isPlay" :delay="delay" @end="endGame" />
  <Result :score="score" v-if="showResult" />
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";
export default {
  name: "App",
  components: {
    Block,
    Result,
  },
  data() {
    return {
      isPlay: false,
      delay: null,
      score: 0,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.isPlay = true;
      this.delay = 2000 + Math.random() * 5000;
      this.showResult = false;
    },
    endGame(reacionTime) {
      this.isPlay = false;
      this.showResult = true;
      this.score = reacionTime;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
