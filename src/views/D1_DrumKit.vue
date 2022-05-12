<script>
import { onMounted, reactive, ref } from '@vue/runtime-core';
import description from "@/components/description.vue"

export default {
  components:{
    description,
  },
  setup(){
    let recordTimer = null; //秒數計時器
    let i = 0; //計時
    let recordSec = ref((10));
    let melody = reactive([]);
    let btnState = ref(false);     //按鈕狀態

    //鍵盤播放+增加播放效果
    function BoardPlaySound(e){
      const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
      const playAni = document.querySelector(`.block-keyboard li[data-key= "${e.keyCode}"]`);
      
      // console.log(audio);  
      //當沒有按到相對應的案件時，audio 回傳 null,
      //而 Boolean(null)是 false
      //因此用判斷式表示，當!null = true (就是audio === null)的時候，阻斷程式往下執行
      if( !audio ) return; 
      audio.currentTime = 0; //連續按才能連續播放
      audio.play();  //audio才有play可以用
      playAni.classList.add("playing");
    }

    //滑鼠點擊播放
    function MousePlaySound(e){
          const audio = document.querySelector(`audio[data-key= "${e.target.dataset.key}"]`);
          audio.currentTime = 0; 
          audio.play();
    }

    //移除播放效果
    function removePlayAni(e){
      if(e.propertyName !== 'transform') return;
        this.classList.remove("playing");
    }

    
    //錄製
    function record(){
      console.log("錄音開始");
      recordSec.value = 10;
      melody = [];
      btnState.value = true;
      timeGo();
              
    }
    
    function timeGo(){
      const plays = document.querySelectorAll('.block-keyboard li');
      plays.forEach((el) => {
              //滑鼠點擊
              el.addEventListener('click', mouseScale);
      })
      //鍵盤按鍵
      window.addEventListener('keydown', scale); 

      recordTimer = setInterval(()=>{
        i+=100;
        recordSec.value-=0.1;
        if(recordSec.value <= 0){
            window.removeEventListener('keydown', scale);
            clearInterval(recordTimer);
        }
      },100)
    }
    //
    function mouseScale(e){          
          melody.push({keyCode:`${e.target.dataset.key}`, sec:`${i}`});
    }
    //鍵盤紀錄旋律
    function scale(e){
          const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
          if( !audio ) return; 
          melody.push({keyCode:`${e.keyCode}`, sec:`${i}`});
    }
    
    //清除錄音
    function recordClear(){
      recordSec.value = 10;
      melody = [];
      i=0;
      clearInterval(recordTimer);
      btnState.value = false;
    }

    //播放錄音
    function playRecord(e){
      window.removeEventListener('keydown', scale);
      clearInterval(recordTimer);
      e.target.disabled = true;

      melody.forEach((el)=>{
        const audio = document.querySelector(`audio[data-key= "${el.keyCode}"]`);
        const playAni = document.querySelector(`.block-keyboard li[data-key= "${el.keyCode}"]`);

        setTimeout(()=>{
          audio.currentTime = 0;
          audio.play();
          playAni.classList.add("playing");
        }, el.sec)
      })

      setTimeout(()=>{
        e.target.disabled = false;
      }, 10*1000)
    }
  
    //Vue 需要等 template 掛好之後才找的到DOM元素
    onMounted(()=>{
      const plays = document.querySelectorAll('.block-keyboard li');

      window.addEventListener('keydown', BoardPlaySound);

      plays.forEach((el) => {
        //滑鼠點擊播放
        el.addEventListener('click', MousePlaySound);
        
        //移除播放效果
          //注意transitionend會針對所有有transition效果的進行偵測
          //所以可以透過propertyName控制不同效果的出現
        el.addEventListener('transitionend', removePlayAni);
      })
    })
    
    return { record, recordSec, recordClear, btnState, playRecord }
  }
}
</script>

<template>
  <div class="block-keyboard"> 
    <ul>
      <li data-key="65"><p>A<span>Do</span></p></li>
      <li data-key="83"><p>S<span>Re</span></p></li>
      <li data-key="68"><p>D<span>Mi</span></p></li>
      <li data-key="70"><p>F<span>Fa</span></p></li>
      <li data-key="71"><p>G<span>So</span></p></li>
      <li data-key="72"><p>H<span>La</span></p></li>
      <li data-key="74"><p>J<span>Si</span></p></li>
      <li data-key="75"><p>K<span>Do</span></p></li>
    </ul>
    <div class="box-control">
      <button @click="record" :disabled="btnState">錄音</button>
      <button @click="recordClear" :disabled="!btnState">清除</button>
      <button @click="playRecord" :disabled="!btnState">播放</button>
      <p>{{recordSec.toFixed(0)}}</p>
    </div>



    <audio data-key="65">
      <source src="..\assets\sound\pianoC.mp3" type="audio/mp3">
    </audio>
    <audio data-key="83">
      <source src="..\assets\sound\pianoD.mp3" type="audio/mp3">
    </audio>
    <audio data-key="68">
      <source src="..\assets\sound\pianoE.mp3" type="audio/mp3">
    </audio>
    <audio data-key="70">
      <source src="..\assets\sound\pianoF.mp3" type="audio/mp3">
    </audio>
    <audio data-key="71">
      <source src="..\assets\sound\pianoG.mp3" type="audio/mp3">
    </audio>
    <audio data-key="72">
      <source src="..\assets\sound\pianoA.mp3" type="audio/mp3">
    </audio>
    <audio data-key="74">
      <source src="..\assets\sound\pianoB.mp3" type="audio/mp3">
    </audio>
    <audio data-key="75">
      <source src="..\assets\sound\pianoC2.mp3" type="audio/mp3">
    </audio>  
    <!-- GET http://localhost:8080/assets/sound/pianoA.mp3 404 (Not Found) -->
    <!-- <audio src="..\assets\sound\pianoA.mp3"></audio> -->
  </div>
  <description/>
</template>

<style scoped>
  .block-keyboard{ 
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
  .block-keyboard ul{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .block-keyboard li::before{
    content: "";
    height: 15px;
    background-color: #666;
    box-shadow: 
      inset 0 -3px 2px #0007,
      0 3px 2px #0008;
    position: absolute;
    top: -15px;
    left: -2px;
    right: -2px;
  }
  .block-keyboard li{
    width: 10%;
    padding-bottom: 30%;
    /* aspect-ratio: 1 / 3;
    -webkit-aspect-ratio: 1 / 3;
    -moz-aspect-ratio: 1 / 3; */
    border-radius: 0 0 6px 6px;
    background-color: #fff;
    background-image: linear-gradient(to bottom, #fff,#0001);
    box-shadow: 
      inset 0 0 4px #0003,
      2px 0 0px #0003,
      -2px 0 0px #0003;
    position: relative;
    transition: background .05s;
  }

  .block-keyboard li.playing{
    background-image: linear-gradient(to bottom, #fff,#0003);
    box-shadow: 
      inset 0 0 4px #0003,
      2px 0 0px #0003,
      -2px 0 0px #0003;
  }
  .block-keyboard li:hover{  background-color: #faa5;}

  .block-keyboard li + li{   margin-left: 2px; }
  
  .block-keyboard li:nth-child(1)::after,
  .block-keyboard li:nth-child(2)::after,
  .block-keyboard li:nth-child(4)::after,
  .block-keyboard li:nth-child(5)::after,
  .block-keyboard li:nth-child(6)::after{
    content: "";
    width: 50%;
    padding-bottom: 150%;
    /* aspect-ratio: 1 / 3;
    -webkit-aspect-ratio: 1 / 3;
    -moz-aspect-ratio: 1 / 3; */
    border-radius: 0 0 6px 6px;
    box-shadow: 
      inset 0px -15px 10px #000,
      inset 0px -15px 10px #fff8,
      inset 0 0 4px #000,
      2px 0 2px #0008,
      2px 0 10px #0005,
      -2px 0 2px #0008;
    background-color: #222;
    position: absolute;
    top: 00px;
    left: 75%;
    z-index: 2;
  }
  .block-keyboard li p{
    font-size: 14px;
    font-weight: bolder;
    text-align: center;
    position: absolute;
    bottom: -50px;
    left: 30%;
    transition: transform .1s;
  }
  .block-keyboard li span{
    display: block;
    padding: 5px 0;
    font-weight: normal;
  }

  .block-keyboard li.playing p,
  .block-keyboard li:hover p{
      color: #f92659;
      transform: scale(1.2);
  }
  .box-control{
    display: block;
    padding: 100px 0;
    text-align: center;
  }
  .box-control button{
    padding: 5px 15px;
    margin-right: 10px;
  }
  .box-control p{
    display: block;
    padding: 30px 0;
    color: #222;
    font-size: 28px;
    font-weight: 700;

  }
</style>