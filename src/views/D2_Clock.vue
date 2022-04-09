<script>
import { onMounted, onUnmounted, ref } from '@vue/runtime-core';
export default{
    setup(){
        const show = ref("00:00:00");
        let timer = null;

        function setClockTime(){
            const now = new Date();
            const getHr = now.getHours();
            const getMin = now.getMinutes();
            const getSec = now.getSeconds();
            const secDeg = (getSec / 60)*360 + 90;
            const minDeg = (getMin / 60)*360 + 90;
            const hrDeg = (getHr / 12)*360 + 90 + (getMin / 60 / 12) * 360;      

            //小時
            document.querySelector('.hour').style.transform = `rotate(${hrDeg}deg)`
            //分
            document.querySelector('.min').style.transform = `rotate(${minDeg}deg)`
            //秒
            document.querySelector('.sec').style.transform = `rotate(${secDeg}deg)`

            show.value = showTimer(getHr, getMin, getSec);
        }

        function showTimer(Hr, Min, Sec){
            let newHr = addZero(Hr);
            let newMin = addZero(Min);
            let newSec = addZero(Sec);

            return `${newHr}:${newMin}:${newSec}`
        }

        //針對只有個位的數字添加前置0
        function addZero(num){
            let arr = num.toString().split('');

            if( arr.length >= 2){
                return  arr.join('');   
            }else{
                arr.unshift("0");
                return arr.join('');
            }
        }
   
        onMounted(()=>{ timer = setInterval( setClockTime , 1000) })
        onUnmounted(()=> clearInterval(timer))

        return { show }
    }//setup-end
}//export-end
</script>

<template>
  <div class="block-clock">
      <div class="clock">
          <div class="time-pointer">
            <span class="pointer hour"></span>
            <span class="pointer min"></span>
            <span class="pointer sec"></span>
          </div>
      </div>
      <div class="show">
          {{show}}
      </div>
  </div> 
</template>

<style scoped>
    .block-clock{
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .clock{
        width: 50%;
        padding-bottom: 50%;
        margin-bottom: 150px;
        border-radius: 50%;
        background-color: #fffd;
        box-shadow: 
              0px 0px  3px 50px #f1f6ffcc,
             -3px 5px 10px -5px #00d3,
             50px 0px 60px 30px #0003,
            -30px 0px 20px 30px #fff8 ;
        position: relative;
    }
    .clock .time-pointer{
        border-radius: 50%;
        background-image: 
            repeating-conic-gradient( from -0.5deg, 
            #fff8 0deg 1deg,
            #0000 1deg 30deg);
        position: absolute;
        top: -50px;
        bottom: -50px;
        right: -50px;
        left: -50px;
    }
    .time-pointer .pointer{
        border-radius: 2px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 50%;
        margin: auto;
        transform-origin: center right;
    }
    .time-pointer .hour{
        width: 30%;
        height: 2%;
        border-radius: 40% 2px 2px 40% ;
        background-color: #131232;
        box-shadow: 30px 0px 0 #131232;
    }
    .time-pointer .min{
        width: 47%;
        height: 1.5%;
        border-radius: 50% 2px 2px 50% ;
        background-color: #f20e74;
        box-shadow: 30px 0px 0 #f20e74;
    }
    .time-pointer .min::before{
        content: "";
        border-radius: 50%;
        /* box-shadow: 0px 0 15px 5px #f20e7455; */
        position: absolute;
        top: 0;
        bottom: 0;
        right: 80%;
        margin: auto;
        animation: minAni 1s ease-in infinite alternate;
    }
    .time-pointer .sec{
        width: 47%;
        padding-bottom: 1%;
        height: 1%;
        background-color: #ccc;
        box-shadow: 30px 0px 0 #ccc;
        /* transform: rotate(270deg); */
        /* transition: transform 1s linear; */
    }
    .time-pointer .sec::after{
        content: "";
        width: 8%;
        padding-bottom: 8%;
        border-radius: 50%;
        background-color: inherit;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 96%;
        margin: auto;
    }
    .block-clock .show{
        font-size: 50px;
        font-family: '微軟正黑體';
    }
    @keyframes minAni{
        from{ box-shadow: -20px 0 15px 10px #f20e7455;}
        to{box-shadow: -20px 0 25px 5px #f20e7433;}
    }
</style>