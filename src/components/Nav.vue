<script>
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        onMounted(()=>{
            const list = document.querySelectorAll('.list-second li');
            function clearActive(){
                for(let i = 0 ; i < list.length; i++ ){
                    list[i].classList.remove('active');
                }
            };

            list.forEach((el)=>{
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
 <nav class="main-nav">
     <ul class="list-first">
         <li>切版作品
            <ul class="list-second">
                <li><router-link to="/layout-kingNews">入口網頁-KingNews-RWD</router-link></li>
                <li><router-link to="/layout-MAIKON">形象網頁-MAIKONs-RWD</router-link></li>
                <li><router-link to="/layout-PLATE">形象網頁-PLATE</router-link></li>
            </ul>
         </li>
         <li>JavaScript 作品
             <ul class="list-second">
                <li><router-link to="/TodoList">TodoList (含RWD)</router-link></li>
                <li><router-link to="/TainanCultureAPI">台南市政府文化局古蹟點歷年參觀人次(axios, RWD)</router-link></li>
                <li><router-link to="/">JS30-1-Drum kit (含RWD)</router-link></li>
                <li><router-link to="/Clock">JS30-2-Clock</router-link></li>
                <li><router-link to="/Variable">JS30-3-Update CSS variable with JS</router-link></li>
                <li><router-link to="/">JS30-4-</router-link></li>
                <li><router-link to="/">JS30-5-</router-link></li>      
            </ul>
         </li>
         <li>
             <a href="https://ithelp.ithome.com.tw/users/20140586/ironman/4225" target="_blank"> 2021 iThome 鐵人賽 (連結)</a>
        </li>
     </ul>
     
 </nav>

</template>

<style scoped>
    .main-nav{
        width: 100%;
        height: 100vh;
        min-width: 300px;
        padding: 30px 45px;
        font-family: '微軟正黑體';
        background-color: #fff;
        box-shadow: 2px 0  10px  #0003;
        overflow-y: scroll;
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

</style>