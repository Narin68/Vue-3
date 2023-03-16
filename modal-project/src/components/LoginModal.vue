<template>
  <div class="backdrop" @click.self="close">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sale {
  background: red;
  color: white;
}
</style>