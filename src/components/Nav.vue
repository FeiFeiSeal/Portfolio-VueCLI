<script>
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        onMounted(()=>{
            const secList = document.querySelectorAll('.list-second li');
            function clearActive(){
                for(let i = 0 ; i < secList.length; i++ ){
                    secList[i].classList.remove('active');
                }
            };

            secList.forEach((el)=>{
                el.addEventListener('click', function(){
                    clearActive();
                    this.classList.add('active');
                })
            })
        })
    }
}
</script>

<template>
 <div class="main-nav">
     <ul class="list-first">
         <li><router-link to="/">關於我</router-link></li>
         <li>切版作品
            <ul class="list-second">
                <li><router-link to="/layout-kingNews">入口網頁-KingNews-RWD</router-link></li>
                <li><router-link to="/layout-MAIKON">形象網頁-MAIKON-RWD</router-link></li>
                <li><router-link to="/layout-PLATE">形象網頁-PLATE</router-link></li>
            </ul>
         </li>
         <li>JavaScript 作品
             <ul class="list-second">
                <li><router-link to="/TodoList">JS- TodoList (含RWD)</router-link></li>
                <li><router-link to="/TainanCultureAPI">axios- 台南市政府文化局古蹟點歷年參觀人次(axios, RWD)</router-link></li>
                <li><router-link to="/DrumKit">Vue- Drum kit (含RWD)</router-link></li>
                <li><router-link to="/Clock">Vue- Clock</router-link></li>
                <li><router-link to="/Variable">Vue- Update CSS variable with JS</router-link></li>
                <li><router-link to="/TypeAhead">Vue- Type Ahead</router-link></li>
                <li><router-link to="/Canvas">Canvas 畫布</router-link></li>
                <!-- <li><router-link to="/">JS30-4-</router-link></li>
                <li><router-link to="/">JS30-5-</router-link></li>       -->
            </ul>
         </li>
         <li>
             <a href="https://ithelp.ithome.com.tw/users/20140586/ironman/4225" target="_blank"> 2021 iThome 鐵人賽 (連結)</a>
        </li>
        <li><router-link to="/Other">其他作品</router-link></li>
     </ul>
     
 </div>

</template>

<style scoped>
    .main-nav{
        width: 100%;
        height: 100vh;
        padding: 30px 45px;
        font-family: '微軟正黑體';
        /*hover scrollBar*/
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
    .main-nav:hover{ 
        -webkit-mask-position: left top;
    }
    .main-nav li ul{ padding-top: 10px;}

    .list-second{ padding-left: 30px;}
    
    .list-first > li{  
        margin-bottom: 30px;
        list-style-type: circle;
    }
    .list-second > li { margin-bottom: 10px;}

    .list-second li.active a,
    .list-second li:hover a { 
        color: #23a9f2;
    }
    .list-second li a { 
        color: #023855;
        font-size: 14px;
        text-decoration: none;
        letter-spacing: 1px;
    }
    a{
        text-decoration: none;
    }
</style>