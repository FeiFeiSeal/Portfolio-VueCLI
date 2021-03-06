<script>
import { onMounted, reactive, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router';
import description from "@/components/description.vue"

export default {
    components:{
      description,
    },
    setup(){
            const isDrawing = ref(false); //控制只有在滑鼠按下時才運作
            const moveDate = reactive({ lastX: 0, lastY: 0,})
            const brushSize = ref(10);
            const hslColor = ref(0);         //hsl色彩控制彩色筆刷
            const colorNow = ref("rainbow"); //預設彩色

            //螢幕縮放canvas要跟上
            const canvasSize = ()=>{
                const canvas = document.querySelector('#draw');
                //設定canvas寬度為window寬度
                canvas.width = canvas.parentElement.offsetWidth;
                //設定canvas高度為window高度
                canvas.height = canvas.parentElement.offsetHeight;
            }

            //開始畫圖(滑鼠)
            const draw=(e)=>{
                    const canvas = document.querySelector('#draw');
                    const ctx = canvas.getContext('2d');
                    
                    if(!isDrawing.value) return;
                    if(colorNow.value === "rainbow"){
                        ctx.strokeStyle = `hsl(${hslColor.value}, 100%, 50%`
                        hslColor.value++;
                    }  
                    //當兩條線交會時，繪製成圓角
                    ctx.lineJoin = 'round';
                    //繪製線條的末端為圓角
                    ctx.lineCap = 'round';
                    ctx.lineWidth = brushSize.value;
                    ctx.beginPath();                   
                    ctx.moveTo(moveDate.lastX, moveDate.lastY);
                    ctx.lineTo(e.offsetX, e.offsetY);
                    ctx.stroke();
 
                    [moveDate.lastX, moveDate.lastY] = [e.offsetX, e.offsetY];

                     
            }
            //開始畫圖(觸控)
            const touchDraw=(e)=>{
                    const canvas = document.querySelector('#draw');
                    const ctx = canvas.getContext('2d');
                    
                    if(!isDrawing.value) return;
                    if(colorNow.value === "rainbow"){
                        ctx.strokeStyle = `hsl(${hslColor.value}, 100%, 50%`
                        hslColor.value++;
                    }   
                    //當兩條線交會時，繪製成圓角
                    ctx.lineJoin = 'round';
                    //繪製線條的末端為圓角
                    ctx.lineCap = 'round';
                    ctx.lineWidth = brushSize.value;
                    ctx.beginPath();                   
                    ctx.moveTo(moveDate.lastX, moveDate.lastY);
                    ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
                    ctx.stroke();

                    [moveDate.lastX, moveDate.lastY] = [e.touches[0].clientX, e.touches[0].clientY];

                   
            }
            //結束畫圖狀態
            //要再保存畫圖的狀態
            const closeDrawing = ()=>{
              const canvas = document.querySelector('#draw');
              const ctx = canvas.getContext('2d')
              isDrawing.value = false;
              let state = ctx.getImageData(0, 0, canvas.width, canvas.height);
              window.history.pushState(state, null);
            }
            //開啟畫圖開關狀態
            const starDrawing = (e)=>{
              isDrawing.value = true;
              //解決一開始從起始值 0,0 飆過來的問題=> 當滑鼠按下去的時候就要馬上更新起始值
              [moveDate.lastX, moveDate.lastY] = [e.offsetX, e.offsetY];
            }

            //畫筆顏色設定
            const brushColor = (e)=>{
                const canvas = document.querySelector('#draw');
                const ctx = canvas.getContext('2d');
                colorNow.value = e.target.dataset.color;

                //顏色按鈕動態清除&添加
                e.target.parentNode.querySelectorAll('span').forEach((color)=>{
                    color.classList.remove('active');
                })
                e.target.classList.add('active');
                
                if( colorNow.value === "rainbow"){ ctx.strokeStyle = `hsl(${hslColor.value}, 100%, 50%`}
                else{ ctx.strokeStyle = colorNow.value}
            }
            //復原
            const router = useRouter();
            const undo = ()=>{  router.go(-1);}
            //清除
            const clear = ()=>{
                const canvas = document.querySelector('#draw');
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            //上傳圖片用canvas呈現
            //為了不使用input的預設外觀，用label去觸發input
            const upload =(e)=>{
                const canvas = document.querySelector('#draw');
                const ctx = canvas.getContext('2d');
                e.target.control.addEventListener('change',()=>{
                    const file = e.target.control.files[0]; 
                    
                    //取得上傳物件的檔案(files是陣列)，如果是多選會有很多個，只上傳一個的話就是陣列的第一個(索引值0)
                    //影響的載入需要網址，因此在這邊把影像轉換成網址
                    let src = URL.createObjectURL(file);//URL是系統內建的物件
                    let img = new Image();
                    img.src = src;
                    img.onload = function(){
                        let width = 0;
                        let height = 0;
                        //當圖片寬大於canvas寬時 => 圖片寬適應canvas寬
                        if(this.width > canvas.width){
                            width = (canvas.width/this.width)*this.width
                            height = (canvas.width/this.width)*this.height
                            if( height < canvas.height ){
                                let setY = (canvas.height - height - 70)/2;
                                ctx.drawImage(this, 0, setY, width, height);
                            }
                        }else{
                            width = this.width;
                            height = this.height;
                            if( height < canvas.height ){
                                let setX = ( canvas.width - width)/2;
                                let setY = ( canvas.height - height - 70)/2;
                                ctx.drawImage(this, setX, setY, width, height);
                            }
                        }
                    };
                })

                
             }
            //下載檔案
            //使用 HTML 5 中的 download 屬性
            //在a裡面有icon的情況下，點到icon會讓下載觸發失敗
            //改創造a元素來觸發 download
            const save = (e)=>{
                const canvas = document.querySelector('#draw');
                const downloadLink = document.createElement('a')
                downloadLink.download = "";
                downloadLink.href = canvas.toDataURL("image/jpeg/png");//canvas物件提供的網址功能,並指定引向輸出格式
                downloadLink.click();//主動觸發下載事件
            }
            //透過popstate存取上一步
            const changeStep=(e)=>{
                const canvas = document.querySelector('#draw');
                const ctx = canvas.getContext('2d');
                // 清除畫布
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // 透過 e.state 取得先前存到 window.history 的狀態
                if( e.state ){
                    ctx.putImageData(e.state, 0, 0);
                }
            }
            //初始化檔案
            const init = ()=>{
                const canvas = document.querySelector('#draw');
                const ctx = canvas.getContext('2d');
                
                //取得畫布的初始狀態，並保存起來
                let state = ctx.getImageData(0, 0, canvas.width, canvas.height);
                window.history.pushState(state, null);     
            }
        onMounted(()=>{
            canvasSize();
            init();           
            window.addEventListener('resize',canvasSize)
            window.addEventListener('popstate', changeStep, false);
        })
        return { draw, touchDraw, starDrawing, closeDrawing, 
                brushSize, brushColor, 
                undo, clear, upload, save }
    }//setup
}
</script>

<template>
    <div class="block-canvas">
        <div class="box-fnc">
            <a class="fnc-return" @click="undo"><font-awesome-icon :icon='["fas","undo"]'  @click="undo"/></a>
            <a class="fnc-clear" @click="clear"><font-awesome-icon :icon='["fas","broom"]'/></a>
            <a class="fnc-save" @click="save"><font-awesome-icon :icon='["fas","download"]' @click="save"/></a>
            <label for="upload" class="fnc-load" @click="upload">upload</label>
            <input type="file" id="upload">
        </div>
        <canvas id="draw" @mousemove="draw"        @touchmove="touchDraw"
                          @mousedown="starDrawing" @touchstart="starDrawing"
                          @mouseup="closeDrawing"  @touchend="closeDrawing"
                          @mouseout="closeDrawing" @touchcancel="closeDrawing">
        </canvas>
        <div class="box-color">           
            <div class="brush-color">                
                <span data-color="#f77" @click="brushColor"></span>
                <span data-color="#7f7" @click="brushColor"></span>
                <span data-color="#69f" @click="brushColor"></span>
                <span class="active" data-color="rainbow" @click="brushColor"></span>
            </div>
            <div class="brush-size">
                <input type="range" min="1" v-model="brushSize">
                <p>size: {{brushSize}}</p>
            </div>
        </div>

    </div>
    <description/>
</template>
<style scoped>

.block-canvas{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    font-family:"微軟正黑體" ,serif;
    position: relative;
    overflow: hidden;
}
canvas{
    /*用CSS去訂canvas大小會造成圖案縮放*/
    /* width: 100%;
    height: 100%; */
    background-color: rgb(243, 243, 236);
    box-shadow: 0 5px 5px #0005;
}
.box-color{
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0  -5px 5px #0003;
    position: absolute;
    bottom: 0px;
    left: 0px;
}
.box-color span{
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    border: 3px solid #fffe;
    border-radius: 50%;
    box-shadow: 0 0 8px #0008,
                inset 2px 2px 5px #0008,
                inset -2px -2px 5px #fff8;
    vertical-align: middle;
    cursor: pointer;
    overflow: hidden;
}
.box-color span:nth-child(1){ background-color: #f77; }
.box-color span:nth-child(2){ background-color: #7f7; }
.box-color span:nth-child(3){ background-color: #69f; }
.box-color span:nth-child(4){ 
    background-color: red;
    background-image: linear-gradient(to bottom, red,orange, yellow, green,blue, purple);
}
.box-color span.active,
.box-color span:hover{ 
    box-shadow: 0 0 8px 1px #f00,
                inset 2px 2px 5px #0008,
                inset -2px -2px 5px #fff8;
    transform: translateY(-5px);}
.box-color span:not(:last-child){ margin-right: 10px;}

.box-color .brush-color{
    display: inline-block;
    margin-right: 30px;
    margin-bottom: 30px;
}
.box-color .brush-size{
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.box-color .brush-size p{
    font-size: 14px;
    text-shadow: 0 0 10px #fff;
    position: absolute;
    top: -20px;
    right: 0;
}
.box-color input[type="range"]{
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 2000px;
  outline : none;      /* 避免點選會有藍線或虛線 */
  background-image: linear-gradient(to right, #fff, #0008);
  box-shadow: inset 0 0 5px #000;
  position: relative;
}
.box-color input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance: none;
  width:30px;
  height:30px;
  border-radius:50%;
  background-color: #ffffff;
  box-shadow: inset 0 0 2px #000;
}
.box-fnc{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    box-shadow: 0  5px 5px #0003;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
}
.box-fnc [class*="fnc-"]{
    height: 50px;
    padding: 0 15px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
    color: #000a;
    transition:  .2s ease-in;
    user-select: none;
    cursor: pointer;
}
.box-fnc .fnc-load{
    font-size: 12px;
}
.box-fnc input[type="file"]{
    display: none;
}
.box-fnc [class*="fnc-"]:hover{
    transform: scale(1.1);
}
.box-fnc [class*="fnc-"]:active{
    color: #fa08;
    transition:  0s ease-in;
}

@media screen and (max-width: 400px){
    .box-color span{
        display: inline-block;
        width: 30px;
        height: 30px;
    }
    .box-fnc [class*="fnc-"]{
        height: 40px;
        line-height: 40px;
        font-size:5vw;
    }
    .box-color span.active,
    .box-color span:hover{ 
        transform: translateY( 0px);
    }
    .box-color input[type="range"]{ height: 5px;}
    .box-color input[type="range"]::-webkit-slider-thumb{
        width:20px;
        height:20px;
    }
    .box-color .brush-color{
        display: block;
        margin-right: 0px;
        margin-bottom: 10px;
    }
    .box-color .brush-size p{
        position: relative;
        top: 10px;
    }
}

</style>