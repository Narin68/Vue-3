<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.title">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }"
      ><h3>{{ job.title }}</h3>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((res) => console.log(res.message));
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}
</style>