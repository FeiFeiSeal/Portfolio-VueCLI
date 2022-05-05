<script>
import Nav from '@/components/Nav.vue';
import NavBtn from '@/components/NavBtn.vue';
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
  <aside :class="['area-nav', {open: openState}]">
    <div :class="['navCtrl', {open: openState}]" >
      <NavBtn @isOpen="isOpen"/> 
    </div>
    <div class="list-nav">
      <Nav/> 
    </div>
  </aside>
  <div class="area-demo">
    <router-view/>
  </div>
</template>

<style>
@import url(~@/assets/CSS/reset.css);

  *{ 
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    list-style: none;
  }
  html, body{
    width: 100%;
    height: 100%;
    font-family: "微軟正黑體";
    font-size: 16px;
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #e6e9ee; 
    position: relative;
    /* overflow-x: hidden; */ /*會導致srollY回傳都是0*/
  }
  .area-nav{
    width: 30%;
    background-color: #fff;
    box-shadow: 2px 0  20px 0px  #0005;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .area-nav .navCtrl{
    display: none;
  }
  .area-demo{
    display: flex;
    align-items: center;
    flex-grow: 1;
    width: 70%;
    position: relative;
    overflow-x: hidden;
  }
  @media screen and (max-width: 768px){
    .area-nav{
      width: 70%;
      position: fixed;
      top: 0;
      left: -70%;
      z-index: 10;
      transition:  .6s ease-in;
    }
    .area-nav.open{
      left: 0px;
      opacity: 1;
    }
    .area-nav .navCtrl{
      display: inline-block;
      position: absolute;
      top: 30px;
      right: -60px;
      z-index: 12;
    }
    .area-nav .list-nav{
      opacity: 0;
      transition:  .6s ease-in;
    }
    .area-nav.open .list-nav{
      opacity: 1;
    }
    .area-demo{
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1200px){
    .area-demo{
       padding-left: 30%;
    }
  }
  @media screen and (min-width: 1200px){
    .area-nav{
      max-width: 400px;
    }
    .area-demo{
       padding-left: 400px;
    }
       
  }
</style>
