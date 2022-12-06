<script setup>
import PaintingRow from '../components/PaintingRow.vue'
import axios from 'axios';
</script>

<script>
export default {
  data() {
    return {
      info: {},
      post:[],
      count:9,
      isFetching:true,
      Remaining:true
    };
  },

  mounted(){
    this.loadData()
    axios.get('http://dall_api/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://dall_api/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://dall_api:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://dall_api:433/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.1/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.1/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.2/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.2/api/Paintings').then((res)=>{
      console.log(res)
    })


    axios.get('http://172.22.0.3/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.3/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.4/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.4/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.5/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.5/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.6/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.6/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.1:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.1:433/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.2:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.2:433/api/Paintings').then((res)=>{
      console.log(res)
    })


    axios.get('http://172.22.0.3:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.3:433/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.4:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.4:433/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.5:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.5:433/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://172.22.0.6:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    axios.get('https://172.22.0.6:433/api/Paintings').then((res)=>{
      console.log(res)
    })
    

    axios.get('http://localhost:8082/api/Paintings').then((res)=>{
      console.log(res)
    })

    axios.get('http://localhost:8083/api/Paintings').then((res)=>{
      console.log(res)
    })
  },
  methods: {

    loadData: async function() {
      await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/Paintings`).then(res =>{
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
      }
      })
      this.isFetching = false
    },
      addRow() {
        let row = []
        row.push(this.info.data[this.count]); 
        row.push(this.info.data[this.count+1]);
        row.push(this.info.data[this.count+2]);
        this.post.push(row)
        this.count = this.count+3
        if (this.info.data[this.count] == null){
          this.showRequest()
        }
      },
      showRequest(){
        this.Remaining = false
      },
      toRequest(){
        this.$router.push('Request')
      }
    },
};
</script>
<template>
  <div class="container" v-if="isFetching">
    loading
  </div>
  <div class="container" v-else>
       <span v-for="paintings in post">
          <PaintingRow :painting1="paintings[0]" :painting2="paintings[1]" :painting3="paintings[2]"/>
       </span>
    <div class="rowButton">
      <button class="addRowButton" @click="addRow" v-if="Remaining">
        More
      </button>
      <button class="addRowButton" @click="toRequest" v-else >
        No more paintings
      </button>
    </div>
  </div>

</template>

