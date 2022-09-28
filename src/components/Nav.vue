<script setup>
</script>
<template>
<div class="navigation"> 
    <div class="lowLogo" @click="Home"></div>
    <div class="searchbar">
        <input type="text" placeholder="Search..." >
    </div>
</div>
</template>

<script>
export default {
    methods: {
      Home() {
        //Navigeer naar painting info view;
        this.$router.push("/");
      },
    }
}
</script>