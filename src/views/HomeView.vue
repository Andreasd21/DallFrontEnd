<script setup>
import PaintingRow from '../components/PaintingRow.vue'
import {useFetch} from '../Js/FetchData.js'
import axios from 'axios';
</script>

<script>
export default {
  data() {
    return {
      info: {},
      post:[],
      count:9,
      isFetching:true
    };
  },

  mounted(){
    this.loadData()
  },
  methods: {

    loadData: async function() {
      await axios.get('https://localhost:44340/api/paintings').then(res =>{
      this.info = res

      let row= []
      let index =0;
      for(let x= 0; x<3;x++){
        for(let y=0;y<3;y++){
          row.push(res.data[index])
          index++
        }
        this.post.push(row)
        row = []
        console.log(this.info)
      }
      })
    },
      addRow() {
        let row = []
        row.push(this.info.data[this.count]); 
        row.push(this.info.data[this.count+1]);
        row.push(this.info.data[this.count+2]);
        this.post.push(row)
        this.count = this.count+3
        console.log(this.post)
      }
    },
};
</script>
<template>
  <div class="container" v-if="isFetching">
       <span v-for="paintings in post">
          <PaintingRow :painting1="paintings[0]" :painting2="paintings[1]" :painting3="paintings[2]"/>
       </span>
    <div class="rowButton">
      <button class="addRowButton" @click="addRow">
        More
      </button>
    </div>
  </div>
  <div class="container" v-else>
    loading
  </div>
</template>

