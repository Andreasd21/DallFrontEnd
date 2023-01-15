<script setup>
import axios from 'axios';
import { CheckUser } from '../Js/Authenticate';
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
      Bought:
      <li v-for="painting in paintings">
        {{ painting }}
      </li>
    </div>
</div>

</template>

<script>
    export default {
  data() {
    return {
      info : [],
      paintings:[],
      user: null
    }
    },
    mounted(){  
      this.loadData()
      this.LoadBought()

      if(CheckUser){
        this.user = JSON.parse(sessionStorage.getItem('userDall'))
      }else{
        this.$router.push('/')
      }
      if (this.user.id != this.$route.params.Id){
        this.$router.push('/')
      }

    },
    methods: {
      loadData: async function() {
        await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/Users/`+this.$route.params.Id).then(res =>{
            console.log(res)
            this.info = res.data
      })
    },
    async LoadBought()
    {
      await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/UserPaintings`,+this.$route.params.Id).then((res)=>{
        console.log(res)
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          this.getPainting(element.paintingId)
          
        }
      })
    },
    async getPainting(Id){
      await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/Paintings/`+Id).then((res)=>{
        console.log(res)

        this.paintings.push(res.data.name) 
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