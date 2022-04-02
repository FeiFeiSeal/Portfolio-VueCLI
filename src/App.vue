<script>
import Nav from '@/components/Nav.vue'
import NavBtn from '@/components/NavBtn.vue'
import { ref } from '@vue/reactivity';

export default ({
  components:{
    NavBtn,
    Nav,
  },
  setup() {
    const openState = ref(false);
    const isOpen = (btnState) => {
      openState.value = btnState;
    }
    return { isOpen, openState }
  },
})
</script>


<template>
  <NavBtn @isOpen="isOpen"/> 
  <div :class="['area-nav', {open: openState}]">
    <Nav/> 
  </div>
  <div class="area-demo">
    <router-view/>
  </div>
</template>

<style>
  *{ 
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    list-style: none;
  }
  html, body{
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #e6e9ee; 
    position: relative;
  }
  .area-nav{
    width: 30%;
    max-width: 350px;
    box-shadow: 2px 0  10px  #0003;
  }
  .area-demo{
    display: flex;
    align-items: center;
    flex-grow: 1;
    width: 70%;
    overflow: hidden;
  }
  @media screen and (max-width: 768px){
    .area-nav{
      position: absolute;
      top: 0;
      left: -100%;
      z-index: 10;
      opacity: 0.3;
      transition:  .6s ease-in;
    }
    .area-nav.open{ 
      left: 0px;
      opacity: 1;
    }
    .area-demo{
      width: 100%;
    }
  }
</style>
