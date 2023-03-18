<template>
  <div class="home">
    <h1>Home Menu</h1>
    <div>
      <PostList :posts="posts" />
    </div>
    <div class="state">
      <h1>Count : {{ store.count }}</h1>
    </div>
    <button v-on:click="store.count++">Add count</button>
    <button @click="toggleTheme">Change theme</button>
  </div>
</template>

<script>
import PostList from "../components/PostsList.vue";
import getPosts from "../composables/getPosts";
import { store } from "../state/store.js";
export default {
  components: {
    PostList,
  },
  data() {
    return {
      store,
      isDark: false,
    };
  },

  methods: {
    toggleTheme() {
      this.store.isDark = !this.store.isDark;
      this.isDark = this.store.isDark;
    },
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>
