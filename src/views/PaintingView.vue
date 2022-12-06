<script setup>
    import PaintingInfo from '../components/PaintingInfo.vue'
    import {BuyPainting} from '../Js/Painting'
</script>

<template>
<div class="container">
    <div class="row">
        <PaintingInfo/>
    </div>
    <div class="row d-flex">
        {{error}}
        <button class="buyButton" @click="Buy">
            Buy
        </button>
        <button class="buyButton">
            Favorite
        </button>
    </div>
</div>

</template>

<script>
  export default {
    data() {
        return {
            error:null
        }
    },
    methods: {
        Buy(){
            if (sessionStorage.getItem('userDall') != null) {
                BuyPainting()
            }
            else{
                this.error = 'PLS log in'
            }
        }


  }
}


</script>
