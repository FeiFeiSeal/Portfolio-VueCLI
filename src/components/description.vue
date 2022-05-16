<script>
import { reactive, ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';
import descriptionData from "@/assets/description/descriptionData.json";
export default {
    setup(){
        const router = useRoute();
        const descript =  reactive({data:[]});
        const isOpen = ref(false);
        const handOpen =()=>{ isOpen.value = !isOpen.value;}
        
        onMounted(()=>{
            descript.data = descriptionData.find((obj)=> obj["id"] === router.fullPath.substr(1))
        })
        return{ handOpen, isOpen, descript }

    }
}
</script>

<template>
    <div class="block-description" :class= "{active: isOpen}">
        <article >
            <div class="area-scroll">
                <section class="section-title">
                    <div class="box-title">
                        <font-awesome-icon :icon="['fas', 'info-circle']" class="icon"/>
                        <h1 class="title-name">作品名稱：<span>{{descript.data.name}}</span></h1>
                    </div>
                </section>
                <section class="section-skill">
                    <div class="box-title">
                        <font-awesome-icon :icon="['fas', 'tags']" class="icon" />
                        <h2 class="title-name">使用技術</h2>
                    </div>
                    <ul>
                        <li v-for="(item) in descript.data.tags" :key="item.skill">
                            {{item.skill}}<span v-if="item.txt">：{{item.txt}}</span>
                        </li>
                    </ul>
                </section>
                <section class="section-title">
                    <div class="box-title">
                        <font-awesome-icon :icon="['fas', 'scroll']" class="icon"/>
                        <h2 class="title-name">作品介紹</h2>
                    </div>
                    <ul>
                        <li v-for="(item) in descript.data.info" :key="item.txt">
                            <p>{{item.txt}}</p>
                            <img :src="item.img" alt="descript-img" v-if="item.img">
                        </li>
                    </ul>
                </section>
            </div>
            <a class="close-btn" title="關閉說明" @click="handOpen"><font-awesome-icon :icon="['fas', 'times']" /></a>
        </article>
    </div>
    <div class="descript-btn" @click="handOpen">
        <a title="作品說明" ><font-awesome-icon :icon="['fas', 'question']" /></a>    
    </div>
</template>


<style scoped>
    .block-description{
        display: none;
        width: 100%;
        padding: 4% 8%;
        background-color: #0233;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 20;
    }
    .block-description.active{
        display: block;
        opacity: 1;
        animation: show .2s both ease-in;
    }
    @keyframes show {
        0%{ opacity: 0;}
        100%{opacity: 1;}
    }
    .close-btn{
        display: inline-block;
        width: 60px;
        height: 60px;
        border: 3px solid #eee;
        border-radius: 50%;
        box-sizing: border-box;
        color: #126e82;
        font-size: 34px;
        line-height: 54px;
        text-align: center;
        box-shadow: -2px 2px 5px 2px #0003;
        user-select: none;
        position: absolute;
        top: -15px;
        right: -15px;
        background-color: #fff;
        transition: .2s ease-in;
    }
    .close-btn:hover{
        color: #f9a41c;
        transform: scale(1.1);
    }
    .close-btn:active{
        box-shadow: 0 2px 3px #0003;
        transform: translateY(1px);
        transition: 0s;
    }
    .block-description article{
        width: 100%;
        height: 100%;
        padding: 50px 5%;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 10px 5px #0003 ;
        position: relative;
    
     }
    .block-description .area-scroll{
        /*hover scrollBar*/
        width: 100%;
        height: 100%;
        overflow-x: hidden; 
        overflow-y: scroll;
        mask-image: linear-gradient(to top, transparent, black),
        linear-gradient(to left, transparent 20px, black 20px);
        mask-size: 100% 20000px;
        mask-position: left bottom;
        -webkit-mask-image: linear-gradient(to top, transparent, black),
                            linear-gradient(to left, transparent 20px, black 20px);
        -webkit-mask-size: 100% 20000px;
        -webkit-mask-position: left bottom;
        transition: mask-position 0.3s, -webkit-mask-position 0.3s;
    
    }
    .block-description .area-scroll{ 
        -webkit-mask-position: left top;
    }

    .block-description section{
        margin-bottom: 30px;
    }
    .block-description .icon{
        padding-right: 10px;
        color: #0b9bbb;
        font-size: 24px;
    }
    .box-title{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .box-title .title-name{
        padding-right: 15px;
        color: #023855;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        vertical-align: middle;
    }
    .block-description :first-child .box-title span{
        color: #000;
        font-size: 24px;
    }
    .block-description :not(:first-child) .box-title::after{
        content: "";
        height: 2px;
        background-image: repeating-linear-gradient(to right, #126e8233 0 10px, transparent 10px 20px );
        flex-grow: 1;
    }
    .block-description section ul{
        margin-left: 45px;
    }
    .block-description section li{
        margin-bottom: 10px;
        color: #333;
        list-style: disc;
        line-height: 1.5;
    }
    .block-description section li::marker{
        color: #126e8266;
        font-size: 14px;
    }
    .block-description section li p{
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 2;
    }
    .block-description section li img{
        display: inline-block;
        width: 90%;
        max-width: 450px;
    }
    .descript-btn{
        display: inline-block;
        width: 70px;
        height: 70px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 5px solid #fff8;
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 60px;
        background-color: #126e82cc;
        box-shadow: 0 10px 10px -10px #0006;
        user-select: none;
        position: absolute;
        right: 30px;
        bottom: 150px;
        transition:  .2s ease-in;
        animation: 
            come .6s .5s ease-out backwards,
            hint .3s 1.2s 4 alternate ;
    }
    @keyframes come {
        0%{ right: -70px;
            transform: rotate(720deg);
            }
        80%{
            right: 40px;
            transform: rotate(-60deg);
        }
        100%{ right: 30px;
              transform: rotate(0deg);
            }    
    }
    @keyframes hint {
        0%{ 
            height: 70px;
            box-shadow: 0 10px 2px -10px #0009;
            transform: translateY( 0px);
            background-color: #126e82;
        }
        100%{ 
            width: 65px;
            height: 80px;
            bottom: 158px;
            box-shadow: 0 25px 10px -15px #0003;
            transform: translateY( -8px);
            background-color: #178097;
        }
        
    }
    .descript-btn:hover{
        color: #f9a41c;
        background-color: #178097;
        transform: scale(1.1);
    }
    .descript-btn:active{
        box-shadow: 0 2px 1px #0003;
        transform: translateY(1px);
        transition: 0s;
    }
</style>