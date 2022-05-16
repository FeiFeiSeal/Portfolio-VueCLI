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
        border-radius: 5px;
        background-color: #126e82aa;
        box-shadow: 2px 2px 6px #0006;
        position: relative;
        transform: rotate(0deg);
        transition:
            background .2s,
            transform  .6s ease-in;
    }
    .btn-nav:hover{
        background-color: #126e82;
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
        background-color:#fff ;
        position: absolute;
        right: 0;
        left: 0;
        margin: auto;
    }
    .btn-nav span:nth-child(1){
        top: 15px;
        box-shadow:0 10px 0 #fff; 
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
        box-shadow:0 20px 0 #fff0; 
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
        from{
            transform:rotate(375deg);}
        to{ 
            transform: rotate(345deg);}
    }
</style>