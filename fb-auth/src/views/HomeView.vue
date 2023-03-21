<template>
  <main class="home" v-if="user">
    <div>
      <div class="img-content">
        <img :src="user.photoURL" referrerpolicy="no-referrer" />
      </div>

      <div class="text">
        <!-- <span>{{ user.email }}</span -->
        <!-- > -->

        <span> {{ user.displayName }}</span>
      </div>
    </div>

    <div>
      <button @click="signOut">Log out</button>
    </div>
    <div style="margin: 15px">
      <router-link :to="{ name: 'ChangePassword' }">
        <button>Change password</button>
      </router-link>
    </div>
    <button @click="handleClick">Click me</button>
  </main>
  <main v-else>
    <router-link :to="{ name: 'login' }">
      <button>Login</button>
    </router-link>
  </main>
</template>
<script>
import { useStore } from "vuex";
import { getAuth } from "firebase/auth";
export default {
  name: "HomeView",
  components: {},
  data() {
    return { user: null };
  },
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
  methods: {
    handleClick() {
      this.$store.state.count++;
      console.log(this.$store.state.user);
    },
  },
  mounted() {
    const auth = getAuth();
    this.user = auth.currentUser;
  },
};
</script>
<style>
.img-content {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 150px;
  border-radius: 10px;
  align-content: center;
  overflow: hidden;
  /* width: 100%; */
}
.img-content img {
  width: 150px;
  object-fit: cover;
  border-radius: 10px;
}
.text {
  margin: 15px 0px;
}
</style>
