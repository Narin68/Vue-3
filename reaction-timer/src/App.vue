<template>
  <h1>Reaction timer</h1>
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
