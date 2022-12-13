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
        async Buy(){
            if (sessionStorage.getItem('userDall') != null) {
                const user = JSON.parse(sessionStorage.getItem('userDall'))
                console.log(user)
                if (await BuyPainting(user.id,this.$route.params.Id)){
                    this.$router.push({
                        name:"user",
                        params: {Id : user.id }
                    })
                }else{
                    this.error = 'already bought item'
                }
            }
            else{
                this.error = 'PLS log in'
            }   
        }


  }
}


</script>
