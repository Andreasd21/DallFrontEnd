<script setup>
import axios from 'axios';
import PaintingRow from '../components/PaintingRow.vue'
</script>

<script>
export default {
  data() {
    return {
      info: null,
      Rows:[PaintingRow,PaintingRow,PaintingRow]
    };
  },
  mounted(){
    axios
          .get('https://localhost:49153/WeatherForecast')
          .then(response => (this.info = response))
  },
  methods: {
      addRow() {
        this.Rows.push(PaintingRow);
        this.Rows.push(PaintingRow);
      },
    },
};
</script>
<template>
  <div class="container">
    {{info}}
    <span 
    v-for="(Row,Index) in Rows"
    :key="Index"
    :is="Row">
  <PaintingRow/>
    </span>
      
    <div class="rowButton">
      <button class="addRowButton" @click="addRow">
        More
      </button>
    </div>
  </div>
</template>
