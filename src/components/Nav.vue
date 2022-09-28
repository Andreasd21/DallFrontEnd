<script setup>
</script>
<template>
<div class="navigation"> 
    <div class="lowLogo" @click="Home"></div>
    <div class="searchbar">
        <input type="text" placeholder="Search..." >
    </div>
    <div class="loginDiv">
      <Button class="loginButton" @click="Login">Login</Button>
    </div>
</div>
</template>

<script>
export default {
    methods: {
      Home() {
        //Navigeer naar home view;
        this.$router.push("/");
      },
      Login() {
        //Navigeer naar Login view;
        this.$router.push("/login");
      },
    }
}
</script>