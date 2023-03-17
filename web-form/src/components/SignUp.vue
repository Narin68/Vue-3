<template>
  <form @submit.prevent="onSubmit" class="form">
    <h3>Sign up</h3>
    <div class="inp">
      <input type="email" ref="email"  required v-model="email"/>
      <span class="label">Email</span>
      <span class="focus-bg"></span>
    </div>
    <div class="inp">
      <input type="password" ref="password" required v-model="password"/>
      <span class="label">Password</span>
      <span class="focus-bg"></span>
    </div>
    <button class="ripple my-btn" type="submit" >Submit</button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        onSubmit(){
            console.log(this.email, this.password);
        }
    }
};
</script>

<style>
.my-btn{
    margin-top: 15px;
}
</style>