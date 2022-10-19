
<template>
<div class="paintingCol col">
    <div class="paintingCard imagePainting" @click="paintingInfo">
      <img :src="location"/>

    </div>price: {{price}}
</div>
</template>

<script>
export default {
  data() {
    return {
      imagepath: "/src/components/dino.png",
    };
  },
  props:{
    id: Number,
    location: {
      type:String,
      default:'/src/assets/pictures/TestPainting.png'
    },
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String,
    price:Number,
    description:String
  },
  created(){
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
    margin: 5%;

  }
</style>