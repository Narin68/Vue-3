<template>
  <div class="form">
    <form @submit.prevent="onChange">
      <h3>Change password</h3>
      <div class="inp">
        <input type="password" required v-model="newPassword" />
        <span class="label">New password</span>
        <span class="focus-bg"></span>
      </div>
      <div class="inp">
        <input type="password" required v-model="confirmPassword" />
        <span class="label">Confirm password</span>
        <span class="focus-bg"></span>
      </div>
      <button class="ripple my-btn" type="submit" value="change">Change</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const newPassword = ref("");
    const oldPassword = ref("");
    const confirmPassword = ref("");
    const store = useStore();
    const onChange = () => {
      let newPass = newPassword.value;
      let confirmPass = confirmPassword.value;
      if (newPass != confirmPass) {
        alert("Confirm password not match!");
        return;
      }
      store.dispatch("changePassword", { newPass, confirmPass });
    };

    return { newPassword, confirmPassword, oldPassword, onChange };
  },
};
</script>

<style>
</style>