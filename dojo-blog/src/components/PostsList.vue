<template>
  <div v-if="posts.length > 0">
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'Detail', params: { id: post.id } }">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
 
<script>
export default {
  components: {},
  setup(props) {},
  props: ["posts"],
};
</script>

<style>
</style>