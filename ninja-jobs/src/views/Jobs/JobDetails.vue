<template>
  <h1>Job detail</h1>
  <h3>Job detail id : {{ job.id }} , title : {{ job.title }}</h3>
</template>

<script>
export default {
  props: ["id", "title"],
  data() {
    return {
      job: {},
    };
  },
  mounted() {
    fetch("http://localhost:3000/Jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((res) => console.log(res.message));
  },
};
</script>

<style>
</style>