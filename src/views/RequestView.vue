<script setup>
    import {postPrompt} from '../Js/Prompt.js'
</script>

<script>
    export default{
        data(){
            return{
                promptText:''
            }
        },
        mounted(){
            const user = JSON.parse(sessionStorage.getItem('userDall'))
            if (user == null){
                this.$router.push('/')
            }
        },
        methods:{
            promp(){
                if (this.promptText == ''){
                    return
                }
                const user = JSON.parse(sessionStorage.getItem('userDall'))
                postPrompt(this.promptText,user.id)
            }
        }
    }
</script>

<template>
<div class="container d-flex test">
    <div class="row d-flex">
        <div class="col align-self-center d-flex  title">
            Create you very own Painting
        </div>
    </div>
    <div class="row d-flex">
        <div class="col align-self-center d-flex">
            Prompt
            <input v-model="promptText" type="text" placeholder="b.v. Batman in a flowerfield, comic style">
        </div>
    </div>
    <div class="row d-flex">
        <div class="col align-self-center d-flex">
            <button type="submit" @click="promp()">Submit</button>
        </div>
    </div>
</div>
</template>

<style>
.test{
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

