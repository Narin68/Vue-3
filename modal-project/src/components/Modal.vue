<template>
  <div class="backdrop" @click.self="close">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["theme", "hide"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
</style>