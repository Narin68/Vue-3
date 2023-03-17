<template>
  <div class="home">
    <h1>Home Menu</h1>
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->

    <div v-if="searchName.length > 0">
      <div v-for="name in searchName" :key="name">
        <h3>{{ name }}</h3>
      </div>
    </div>
    <h3 v-else>Not found</h3>

    <input type="text" v-model="search" />
    <button v-on:click="age++">Add age</button>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
// @ is an alias to /src

export default {
  name: "",
  setup() {
    const search = ref("");
    const names = ref(["Heng", "Hong", "Un", "King", "Math", "Jing"]);
    const age = ref(24);
    const p = ref(null);

    const handleClick = () => {};
    const searchName = computed(() => {
      return names.value.filter((v) => v.toLowerCase().includes(search.value));
    });

    return { age, names, handleClick, p, searchName, search };
  },
};
</script>
