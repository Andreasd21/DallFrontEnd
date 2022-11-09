<script setup>
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterFrom.vue';
</script>

<template>
<div class="container fix-padding">

    <div v-if="login">
         <LoginForm/>
    </div>
    <div v-else> 
        <RegisterForm />
    </div>
</div>

<div>
    <div>
        <button @click="GetRegisterform">
            <p v-if="login">Click here to register</p>
            <p v-else>Click here to login</p>
            </button>
     </div>
</div>
</template>

<script>
export default {
  data() {
    return {
        login:true
    };
  },
  methods:{
    GetRegisterform(){
        this.login = !this.login
        console.log(this.login)
    }
  }
}
</script>