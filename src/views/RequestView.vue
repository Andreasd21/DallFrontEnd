<script setup>
    
</script>

<template>
<div class="container d-flex">
    <div class="row d-flex">
        <div class="col align-self-center d-flex title">
            Create you very own Painting
        </div>
    </div>
    <div class="row d-flex">
        <div class="col align-self-center d-flex">
            Prompt
            <input type="text" placeholder="b.v. Batman in a flowerfield, comic style">
        </div>
    </div>
    <div class="row d-flex">
        <div class="col align-self-center d-flex">
            <button type="submit">Sumit</button>
        </div>
    </div>
</div>
</template>

<style>
.dflex{
    align-content: stretch;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: stretch;
}
.title{
    align-items: center;
    margin-bottom: 4vh;
    font-size: 40px;
    font-weight:bold;
}
</style>

