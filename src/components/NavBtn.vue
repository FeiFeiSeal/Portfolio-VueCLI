<script>
import { ref } from '@vue/reactivity';
import { onMounted, onUpdated, watch } from '@vue/runtime-core';
export default {
    setup(props, context){
        const btnState = ref(false); 
        const btnCtrl = ()=>{
            btnState.value = !btnState.value;
        };
        watch(btnState, (newState)=>{
            context.emit('isOpen', newState);
        })

        return { btnState, btnCtrl }
    }
}
</script>

<template>
       <div :class="['btn-nav', {open: btnState}]"
          @click="btnCtrl">
        <span></span>
        <span></span>
     </div>
</template>


<style scoped>
/*按鈕動畫*/
    .btn-nav{
        width: 50px;
        height: 50px;
        border-radius:5px;
        background-color: #ccc;
        position: relative;
        transform: rotate(0deg);
        transition:  .6s ease-in;
    }
    .btn-nav.open{
        transform: rotate(375deg);
        background-color: #f9a41c;
        animation: btnAni 1s .8s ease-in infinite alternate ;
    }
    .btn-nav span{
        width: 80%;
        height: 3px;
        border-radius:10px;
        background-color:#333 ;
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
    }
    .btn-nav span:nth-child(1){
        top: 15px;
        box-shadow:0 10px 0 #333; 
        transform: rotate(0deg);
        transition:box-shadow .02s .6s,
                    top .3s .3s,
                    transform .3s;
    }
    .btn-nav span:nth-child(2){
        top: 35px;
        transform: rotate(0deg);
        transition:top  .3s .3s,
                    transform .3s;
    }
    .btn-nav.open span:nth-child(1) {
        top: 25px;
        transform: rotate(45deg);
        box-shadow:0 20px 0 #3330; 
        transition:box-shadow .05s,
                    top .5s .05s,
                    transform .4s .55s;
    }
    .btn-nav.open span:nth-child(2) {
        top: 25px;
        transform: rotate(-45deg);
        transition:top .5s .05s,
                    transform .4s .55s;
    }
    @keyframes btnAni {
        from{ transform: rotate(375deg);}
        to{   transform: rotate(345deg);}
    }
</style>