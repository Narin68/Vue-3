<template>
  <div class="block" v-if="show" @click="stopTimer">Click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      show: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("Mounted");
    setTimeout(() => {
      this.show = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      this.$emit("end", this.reactionTime);
    },
  },
  updated() {
    console.log("Updated");
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: green;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  cursor: pointer;
}
</style>