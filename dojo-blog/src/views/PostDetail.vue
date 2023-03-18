<template>
  <div class="post-detail">
    <div class="state">
      <h1>{{ store.count }}</h1>
      <button @click="addCount">Click add count</button>
    </div>

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
import { store } from "../state/store.js";
export default {
  props: ["id"],
  data() {
    return {
      store,
    };
  },
  setup(props) {
    const { post, error, load } = getPostDetail(props.id);
    load();
    return { post, error };
  },
  methods: {
    addCount() {
      this.store.count++;
    },
  },
};
</script>

<style>
</style>