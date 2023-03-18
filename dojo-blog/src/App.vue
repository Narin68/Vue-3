<template>
  <div class="body" :class="{ dark: store.isDark }">
    <router-view />
  </div>
</template>

<script>
import { store } from "./state/store.js";
export default {
  data() {
    return {
      store,
      isDark: false,
    };
  },
  mounted() {
    this.isDark = this.store.isDark;
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dark {
  background: #393939;
  color: #fff;
}
.dark a {
  color: white;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
