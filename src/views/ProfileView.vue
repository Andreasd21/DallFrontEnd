<script setup>
import axios from 'axios';
</script>

<template>
<div class="container">
    <div class="row d-flex">
       <div class="name d-flex">{{ info.name }}</div> 
        <div class="email d-flex">{{ info.email }}</div>
    </div>
    <div class="d-flex request">
        <p @click="request">Create painting request</p> 
    </div>
    <div>
        WinkelMandje:
    </div>
    <div>
      Bought:
    </div>
</div>

</template>

<script>
    export default {
  data() {
    return {
      info : [],
    }
    },
    mounted(){  
      this.loadData()
      console.log(this.info)
    },
    methods: {
      loadData: async function() {
        await axios.get('https://localhost:49153/api/Users/'+this.$route.params.Id).then(res =>{
            console.log(res)
            this.info = res.data
      })
    },
    request(){
        this.$router.push("/request");
    }
  }
}
</script>

<style>
.request{
    cursor: pointer;
    margin-top:5vh ;
    margin-bottom:5vh;
}
</style>