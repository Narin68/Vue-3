<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <div v-if="post" class="">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <div v-for="tage in post.tages" :key="tage">
        <p>{{ tage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getPostDetail from "../composables/getPostDetail";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPostDetail(props.id);
    load();
    return { post, error };
  },
};
</script>

<style>
</style>