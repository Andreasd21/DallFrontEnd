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
</div>
</div>
<div class="col paintingInfoCol">
    <div class="infoPainting">
      <div class="row">
        <div class="col attr">
          Name:{{info.name}}
        </div>
        <div class="col attr">
          Creator:{{info.creator}}
        </div>
      </div>
      <div class="row">
        <div class="col attr">{{info.description}}</div>
      </div>
      <div class="row bottom"> 
        <div class="col attr">
          Prompt: {{info.prompt}}
        </div>
        <div class="col attr">
          Date of creation: {{info.DateOfCreation}}
        </div>
        <div class="col attr">
          Price: {{info.price}}
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>
.attr{
  margin-bottom: 3%;
}

.bottom{
  bottom: -25vh;
}
</style>