<template>
  <div class="home">
    <h1>Home Menu</h1>
    <div>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostsList.vue";
import getPosts from "../composables/getPosts";
export default {
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>
