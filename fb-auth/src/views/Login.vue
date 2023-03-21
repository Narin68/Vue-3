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
          Register
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
        <div class="inp" style="margin-bottom: 0">
          <input type="password" required v-model="loginPassword" />
          <span class="label">Password</span>
          <span class="focus-bg"></span>
        </div>
        <router-link :to="{ name: 'ForgotPassword' }"
          ><div class="forgot-password">Forgot password</div></router-link
        >
        <div></div>
        <button class="ripple my-btn" value="login" type="submit">Login</button>
        <div style="margin-top: 10px">Or</div>
        <div
          class="forgot-password"
          style="text-align: center"
          @click="signInWithGoogle"
        >
          Sign in with Google
        </div>
        <div
          class="forgot-password"
          style="text-align: center"
          @click="signInWithFB"
        >
          Sign in with Facebook
        </div>
        <div
          class="forgot-password"
          style="text-align: center"
          @click="signInWithGithub"
        >
          Sign in with Github
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
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

    const signInWithGoogle = () => {
      store.dispatch("signInWithGoogle");
    };

    const signInWithFB = () => {
      store.dispatch("signInWithFacebook");
    };

    const signInWithGithub = () => {
      store.dispatch("signInWithGithub");
    };

    return {
      register,
      login,
      loginEmail,
      loginPassword,
      registerEmail,
      registerPassword,
      signInWithGoogle,
      signInWithFB,
      signInWithGithub,
    };
  },
};
</script>

<style>
.forgot-password {
  font-size: 14px;
  color: black;
  text-decoration: none;
  width: 100%;
  text-align: right;
  margin-bottom: 15px;
  margin-top: 5px;
  cursor: pointer;
}
.forgot-password:hover {
  color: grey;
}
</style>