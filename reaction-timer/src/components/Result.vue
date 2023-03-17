<template>
  <div class="result">Reaction time : {{ score }} ms</div>
</template>

<script>
export default {
  props: ["score"],
};
</script>

<style>
.result {
  padding: 20px;
  background: green;
  color: white;
  width: 200px;
  margin: auto;
  margin-top: 10px;
  font-weight: bold;
  border-radius: 15px;
}
</style>