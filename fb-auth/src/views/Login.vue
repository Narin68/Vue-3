<template>
  <main>
    <section class="register form">
      <form class="register-form" @submit.prevent="register">
        <h3>Register</h3>
        <div class="inp">
          <input type="email" required v-model="registerEmail" />
          <span class="label">Email</span>
          <span class="focus-bg"></span>
        </div>
        <div class="inp">
          <input type="password" required v-model="registerPassword" />
          <span class="label">Password</span>
          <span class="focus-bg"></span>
        </div>
        <button class="ripple my-btn" type="submit" value="register">
          Submit
        </button>
      </form>
    </section>
    <section class="form" style="margin-top: 25px">
      <form class="login-form" style="margin-top: 20px" @submit.prevent="login">
        <h3>Login</h3>
        <div class="inp">
          <input type="email" required v-model="loginEmail" />
          <span class="label">Email</span>
          <span class="focus-bg"></span>
        </div>
        <div class="inp">
          <input type="password" required v-model="loginPassword" />
          <span class="label">Password</span>
          <span class="focus-bg"></span>
        </div>
        <button class="ripple my-btn" value="login" type="submit">
          Submit
        </button>
      </form>
    </section>
  </main>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // var registerForm = ref({});
    const loginPassword = ref("");
    const loginEmail = ref("");
    const registerPassword = ref("");
    const registerEmail = ref("");
    // var loginForm = ref({});
    const store = useStore();

    const login = () => {
      let email = loginEmail.value;
      let password = loginPassword.value;
      store.dispatch("login", { email, password });
    };

    const register = () => {
      let email = registerEmail.value;
      let password = registerPassword.value;
      store.dispatch("register", { email, password });
    };

    return {
      register,
      login,
      loginEmail,
      loginPassword,
      registerEmail,
      registerPassword,
    };
  },
};
</script>

<style>
</style>