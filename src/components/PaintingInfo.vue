<script setup>
import axios from 'axios';
</script>


<script >
    export default {
  data() {
    return {
      info : [],
    }
    },
    mounted(){
      this.loadData()
    },
    methods: {

      loadData: async function() {
        await axios.get('https://localhost:44340/api/paintings/'+this.$route.params.Id).then(res =>{
        this.info = res.data
      })
    }
  }
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
<template>
<div class="col paintingInfoCol">
<div class="bigPaintingCard imagePainting">
  <img :src="'../../'+info.location"/>
  <img>
</div>
</div>
<div class="col paintingInfoCol">
    <div class="infoPainting">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae in, accusantium sit excepturi a fugiat doloremque, corrupti explicabo ea debitis ipsum? Voluptate laudantium autem aliquid beatae tempore quisquam praesentium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus in reprehenderit ducimus itaque velit voluptates nihil maiores blanditiis temporibus eos, suscipit, ea maxime debitis fuga perferendis reiciendis dolores labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum excepturi dolores ut, dignissimos minus tempora doloribus velit quisquam commodi a et, animi cupiditate eum dolorum esse fugiat nostrum est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem amet, eum molestiae debitis iusto perferendis incidunt eaque earum accusantium quam adipisci voluptatum maiores, voluptatem sint saepe nam beatae at.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illum earum voluptate amet dicta eius aliquid laboriosam commodi assumenda corporis perferendis totam consequatur cumque quam, non, inventore consequuntur? Animi, voluptatem.
    </div>
</div>
</template>