<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <h3>Forgot password</h3>
      <div class="inp">
        <input type="email" required v-model="email" />
        <span class="label">Email</span>
        <span class="focus-bg"></span>
      </div>
      <button class="ripple my-btn" type="submit" value="change">
        Send code
      </button>
    </form>
  </div>
</template>
  
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const email = ref("");
    const form = ref({});
    const store = useStore();
    const onSubmit = () => {
      let emailVal = email.value;
      store.dispatch("sendEmailResetPassword", { emailVal });
    };

    return { onSubmit, email, form };
  },
};
</script>
  
  <style>
</style>