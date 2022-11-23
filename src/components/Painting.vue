
<template>
<div class="paintingCol col">
    <div class="paintingCard imagePainting" @click="paintingInfo">
      <img :src="imagepath"/>

    </div>price: {{price}}
</div>
</template>

<script>
export default {
  data() {
    return {
      imagepath: "",
    };
  },
  props:{
    id: Number,
    location: {
      type:String,
      default:'http://127.0.0.1:8081/dino.png'
    },
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String,
    price:Number,
    description:String
  },
  created(){
    this.imagepath = 'http://127.0.0.1:8081/' + this.location
  },
    methods: {
      paintingInfo() {
        //Navigeer naar painting info view;
        this.$router.push({
          name:"info",
          params: {Id : this.id }
        });
      },
    },
}
</script>

<style scoped>
  img
  {
    
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;

  }
</style>