<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <teleport to=".modals" v-if="showModal">
    <Modal :theme="theme" :hide="hideModal" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ content }}</p>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showLoginModal">
    <Modal @close="toggleLoginModal">
      <h1>Login</h1>
      <div class="form">
        <div>
          <input type="text" placeholder="Username" ref="username" />
        </div>
        <input
          type="password"
          placeholder="Password"
          style="margin-top: 10px"
          ref="password"
        />
        <div>
          <button @click="handleForm">Save</button>
        </div>
      </div>
    </Modal>
  </teleport>

  <div>
    <button @click="toggleModal">Show modal</button>
  </div>
  <div>
    <button @click="toggleLoginModal">Show Login modal</button>
  </div>
</template>
<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      header: "Sign up",
      content: "This is modal content",
      theme: "",
      showModal: false,
      showLoginModal: false,
    };
  },
  methods: {
    onShowModal() {
      this.showModal = true;
    },
    hideModal() {
      this.showModal = false;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    handleForm() {
      console.log(this.$refs.username.value, this.$refs.password.value);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.actions {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  align-items: center;
}
</style>
