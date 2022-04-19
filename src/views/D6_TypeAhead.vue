<script>
import { reactive, ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';

/*▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ Ｖｕｅ 無圈選文字▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼*/
/*
export default {
    setup(){
        //城市資料API
        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        const cities = [];
        //撈回來的資料格式為[{...},{...},...]
        //如果這裡宣告用let就可以在撈回資料的時候直接 .then((data)=> cities = data ) 把資料塞進去
        //否則用const會噴 TypeError: Assignment to constant variable.
        //但如果想保持資料格式不被更改
        //就可以用const宣告 + cities.push(data)
        
        fetch(endpoint)
        //使用裡面的json()來叫出json資料
        .then((res)=> res.json())
        .then((data)=> cities.push(...data))
                        //這裡沒有用展開的話會變成[[{...},{...},...]]        
        
        const enterKey = ref("");    
        const matchData = reactive({data:[]});

        function displayMatch(enterWord){
            const reg = new RegExp( enterWord.trim(), 'gi');
            matchData.data = cities.filter((obj)=>{
                return obj.city.match(reg) || obj.state.match(reg)
            })
        }
        //處理從input輸入的關鍵字，
        //把關鍵字用Reg處理，找到對應的資料
        watch( enterKey, (newData)=>{
            displayMatch(newData);
        } )
        return{ enterKey, matchData,}
    }//setup
}
*/
/*▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ ＪＳ + Ｖｕｅ 有圈選文字▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼*/
export default {
    setup(){
        //城市資料API
        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        const cities = [];
        //撈回來的資料格式為[{...},{...},...]
        //如果這裡宣告用let就可以在撈回資料的時候直接 .then((data)=> cities = data ) 把資料塞進去
        //否則用const會噴 TypeError: Assignment to constant variable.
        //但如果想保持資料格式不被更改
        //就可以用const宣告 + cities.push(data)
        
        fetch(endpoint)
        //使用裡面的json()來叫出json資料
        .then((res)=> res.json())
        .then((data)=> cities.push(...data))
                        //這裡沒有用展開的話會變成[[{...},{...},...]]
        
        
        //處理從input輸入的關鍵字，把關鍵字做成Reg，輸出篩選完成的Arr
        const dataMatch = function(reg){
            return cities.filter((obj)=> obj.city.match(reg) ||  obj.state.match(reg))
        }

        //把對應的資料推到畫面上
        //Vue 在scpoed的情況下，用 v-html 或是 innerHTML 插入的資料不會帶有樣式
        //所以透過這種狀況產生的原始碼可以在style裡面加入>>>表示深層作用
        const displayHTML = ref("<li>Filter for a city</li><li>or a state</li>");

        //人口數增加小數點
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); ''
        };

        const displayDataMatch = function(){
          const reg = new RegExp( this.value.trim(), "gi");
          const matchArr = dataMatch(reg);

          displayHTML.value = matchArr.map((obj)=>{
            //把篩選的文字圈選
            const regCity = obj.city.replace(reg, `<span class="hightLight">${this.value}</span>`) ;
            const regState = obj.state.replace(reg, `<span class="hightLight">${this.value}</span>`) ;
              return `<li>
                        <span class="name">${regCity}, ${regState}</span>
                        <span class="population">${numberWithCommas(obj.population)}</span>
                      </li>` 
          }).join("");
            //消除分隔逗點
        }
        

        onMounted(()=>{
            //監聽input輸入的關鍵字
            document.querySelector("input.search").addEventListener("change", displayDataMatch);
            document.querySelector("input.search").addEventListener("keyup", displayDataMatch);

        })  


        return{ displayHTML }
    }//setup
}
</script>

<template >
    <div class="block-TypeAhead">
        <!-- Vue 寫法 ---------------------------------------------->
        <!-- <form class="search-form">
            <input type="text" class="search" placeholder="City or State" v-model="enterKey">
            <ul class="suggestions" >
                <li v-for="item in matchData.data" :key="item.rank">
                   <span class="name">{{item.city}}, {{item.state}}</span>
		               <span class="population">{{item.population}}</span>
                </li>
            </ul>
         </form> -->
          
        <!-- JS +Vue 寫法 ---------------------------------------------->
        <form class="search-form">
            <input type="text" class="search" placeholder="City or State">
            <ul class="suggestions" v-html="displayHTML">
            </ul>
        </form>
    </div>
</template>

<style scoped >
    .block-TypeAhead{
        width: 100%;
    }
    .search-form {
        width: 100%;
        max-width:400px;
        padding: 0 30px;
        margin: auto;
        box-sizing: border-box;
    }
    input.search {
      width: 100%;
      padding:20px;
      margin: auto;
      border: 10px solid #F7F7F7;
      border-radius: 5px;
      box-sizing: border-box;
      outline:0;
      font-size: 6vw;
      text-align: center;
      position: relative;
      top: 10px;
      z-index: 2;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), 
                  inset 0 0 2px rgba(0, 0, 0, 0.19);
    }

    .suggestions {
      width: 80%;
      margin: auto;
      position: relative;
      z-index: 1;
    }
    .suggestions >>> li {
      display:flex;
      justify-content:space-between;
      padding:20px 15px;
      border-bottom: 1px solid #D8D8D8;
      font-size: 16px;
      text-transform: capitalize;
      background:white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
      transition: background 0.2s;
    }

    .suggestions >>> li:nth-child(even) {
      transform: perspective(200px) rotateX(3deg) translateY(2px) scale(1.001);
      background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 200%);
    }
    .suggestions >>> li:nth-child(odd) {
      transform: perspective(200px) rotateX(-3deg) translateY(3px);
      background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
    }

    .suggestions >>> span.population {
      font-size: 14px;
    }
    .suggestions >>> span.hightLight {
      background:#ffc600;
    }
    a {
      color:black;
      background:rgba(0,0,0,0.1);
      text-decoration: none;
    }

    @media screen and (min-width:768px) {
      input.search{
        font-size: 40px;
      }
      
    }
</style>