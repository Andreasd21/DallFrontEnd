<script setup>
</script>
<template>
<div class="paintingCol col">
    <div class="painting" @click="paintingInfo"></div>price:
</div>
</template>

<script>
export default {
    methods: {
      paintingInfo() {
        //Navigeer naar painting info view;
        this.$router.push("info");
      },
    }
}
</script>