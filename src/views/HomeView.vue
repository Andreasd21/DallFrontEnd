<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import axios from 'axios';
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
  <main>
  testtt
  {{info}}
    <TheWelcome />
  </main>
</template>
