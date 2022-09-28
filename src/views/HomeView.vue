<script setup>
import axios from 'axios';
import 'bootstrap'
import PaintingRow from '../components/PaintingRow.vue'
</script>

<script>
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted(){
    axios
          .get('https://localhost:49153/WeatherForecast')
          .then(response => (this.info = response))
  }
  
};
</script>
<template>
  <div class="container">
    {{info}}
    <PaintingRow />
    <PaintingRow />
    <PaintingRow />
  </div>
</template>
