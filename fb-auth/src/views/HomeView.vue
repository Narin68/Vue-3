<template>
  <main class="home">
    <h1>Home</h1>

    <div>
      <button @click="signOut">Log out</button>
    </div>
    <button @click="onClick">Click me</button>
  </main>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const store = useStore();

    const signOut = () => {
      store.dispatch("logout");
    };

    const onClick = () => {};

    return {
      signOut,
      onClick,
    };
  },
};
</script>
