<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <button style="margin-right: 10px" @click="redir">Redirect</button>
  <button style="margin-right: 10px" @click="back">Back</button>
  <button @click="go">Go foward</button>

  <router-view />
</template>
<script>
export default {
  methods: {
    redir() {
      this.$router.push({ name: "JobDetails", params: { id: 1 } });
    },
    back() {
      this.$router.go(-1);
    },
    go() {
      this.$router.go(1);
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
</style>
