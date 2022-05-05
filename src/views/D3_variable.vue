<script>
import { onMounted, reactive, ref, watch } from '@vue/runtime-core'
import description from "@/components/description.vue"

export default {
    components:{
        description,
    },
    setup(){
        function dataUpdate(){
            // console.log(this);
        }
        const inputData = reactive([ 
                {type:"range", id: "spacing", value:50,        suffix: "px",},
                {type:"range", id: "blur",    value:50,        suffix: "px",},
                {type:"color", id: "bgc",     value:"#ffffff", suffix: "",},
        ]);
        
        onMounted(()=>{

            document.querySelectorAll('.box-scroll input').forEach((el)=>{
                el.addEventListener('input', function(){
                    const suffix = this.dataset.suffix;
                    // document.documentElement.style.setProperty(`--${this.id}`,`${this.value}${suffix}`)
                    document.querySelector('.block-variable').style.setProperty(`--${this.id}`,`${this.value}${suffix}`)
                })
            })
            
        })
        return{ inputData, dataUpdate }
    }//setup
}//
</script>

<template>
    <div class="block-variable">
        <div class="box-title">
            <h1>Update CSS Variables with <span>JS</span></h1>
        </div>
        <div class="box-show">
            <img src="../assets/logo.png" alt="demoImg">
        </div>
        <div class="box-scroll">
            <label :for="item.id" v-for="(item) in inputData" :key="item.id">
                <span>{{item.id}}: {{item.value}} </span>
                <input :type= "item.type" :id="item.id"
                       :data-suffix="item.suffix"
                       v-model="item.value">
            </label>
        </div>
    </div>
    <description/>
</template>

<style scpoed>
:root{
    /* --bgc: #ffffff;
    --spacing: 10px;
    --blur: 10px; */
}
.block-variable{
    --bgc: #ffffff;
    --spacing: 10px;
    --blur: 10px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
}
.box-title{
    margin-bottom: 50px;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
}
.box-title span{  
    color: var(--bgc);
}
.box-show{
    width: 40%;
    padding: var(--spacing);
    margin: 0 auto 60px;
    background-color:  var(--bgc);
    filter: blur(var(--blur));
}
.box-show img{
    width: 100%;
    vertical-align: middle;
}
.box-scroll{
    width: 50%;
    margin: auto;
}
.box-scroll label{
    display: block;
    margin-bottom: 20px;
    font-family: '微軟正黑體';
    font-weight: 700;
}
.box-scroll label span{
    line-height: 1.5;
}
input[type="range"]{
  -webkit-appearance: none;
  /*overflow:hidden;*/     /* 限定範圍 */
  width: 100%;
  height: 3px;
  border-radius: 2000px;
  outline : none;      /* 避免點選會有藍線或虛線 */
  background: #555;
  position: relative;
}
input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance: none;
  width:30px;
  height:30px;
  border: 4px solid #555;
  background-color: #ffffff;
  border-radius:50%;
}

</style>