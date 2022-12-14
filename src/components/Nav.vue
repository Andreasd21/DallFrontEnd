<script setup>
  import {Logout} from '../Js/Authenticate'
  import { CheckUser } from '../Js/Authenticate';
</script>
<template>
<div class="navigation"> 
    <div class="lowLogo" @click="Home"></div>
    <!-- <div class="searchbar">
        <input type="text" placeholder="Search..." >
    </div> -->
    <div class="info">
      <div class="profile" v-if="user">
          <div @click="User">{{ user.userName }}</div>
      </div>
      <div class="loginDiv" v-if="user">
        <Button class="loginButton" @click="LogoutNav()">Logout</Button>
      </div>
      <div class="loginDiv" v-else>
        <Button class="loginButton" @click="Login">Login</Button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user:false,
    };
  },
  mounted(){
    window.addEventListener('user',(()=>{
      this.UserCheck()
    }))
    this.UserCheck()
  },
  methods: {
    UserCheck(){
      if(CheckUser()){
        this.user = JSON.parse(sessionStorage.getItem('userDall'))
      }else{
        this.user = false
      }
    },
    Home() {
      //Navigeer naar home view;
      this.$router.push("/");
    },
    Login() {
      //Navigeer naar Login view;
      this.$router.push("/login");
    },
    LogoutNav(){
      if(Logout()){
        this.$router.push("/")
      }
    },      
    User() {
      //Navigeer naar painting info view;
      this.$router.push({
        name:"user",
        params: {Id : this.user.id }
      });
    },
  }
}
</script>