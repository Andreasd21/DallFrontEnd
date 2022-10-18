<script setup>
import Painting from "./Painting.vue";

</script>
<script>
export default {
    props:{painting1:{
    id: Number,
    location:String,
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String
  },
  painting2:{
    id: Number,
    location:String,
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String
  },
  painting3:{
    id: Number,
    location:String,
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String
  }},
  created(){
    console.log(this.painting1)
  }
}
</script>
<template>
<div class="paintingRow row ">
    <Painting v-bind='painting1'/>
    <Painting v-bind='painting2'/>
    <Painting v-bind='painting3'/>        
</div>
</template>