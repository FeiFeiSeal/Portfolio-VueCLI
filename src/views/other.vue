<script>
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        onMounted(()=>{
            const panels = document.querySelectorAll('.panel');

            function clearOpen(){
                panels.forEach((panel)=>{
                    panel.classList.remove('open')
                })
            }
            function toggleOpen(){
                clearOpen();
                this.classList.toggle('open');
            }

            function toggleActive(e){
                if (e.propertyName.includes('flex')){
                    this.classList.toggle('open-active');
                }
            }

            //首先放大框框+字體
            panels.forEach(panel => panel.addEventListener('click', toggleOpen));
            //因要等到框框+字體放大或縮小完成之後，再進行移動
            panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

        })
        return{}
    }
}
</script>

<template>
    <div class="panels">
        <div class="panel open open-active">
            <p></p>
            <p>Photoshop - 照片後製</p>
            <p>防疫期間於粉絲專頁為宣導民眾入園請戴口罩等防疫措施，<br>用可愛的園區吉祥物來合成示意圖。</p>
        </div>
        <div class="panel">
            <p></p>
            <p>Photoshop - 照片後製</p>
            <p>因園區吉祥物戴口罩圖獲得廣大迴響，<br>應粉絲要求陸續又製作了一系列的照片用於防疫措施宣傳。</p>
        </div>
        <div class="panel">
            <p></p>
            <p>Photoshop - 動畫效果</p>
            <p>因園區為日治時期淨水設施，且帶有親子共遊的性質，<br>在開幕粉絲專頁宣傳上就以「水管」作為意象，<br>搭配充滿童趣的色彩。</p>
        </div>
        <div class="panel">
            <p></p>
            <p>illustrator - LOGO設計</p>
            <p>整體採用柔和的線條表示伸展的概念，將火焰形象化成強壯的手臂，除了與之前的 LOGO 進行呼應外，閃電就像是將能量輸入進去手臂一般，代表訓練是需要適當放鬆的，如此將火焰和閃電彼此環繞帶出品牌名稱首字「B」。
</p>
        </div>
        <div class="panel">
            <p></p>
            <p>illustrator - 名片設計</p>
            <p>為工作室設計的名片，名片與 LOGO 風格皆發想於平時工程師常用的原始碼，並構思出專屬於工作室的 slogan，最後將名片燙凸增加質感，即便暗色主題也不單調。
            </p>
        </div>
    </div>
</template>

<style scoped>

    .panels {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height:100vh;
      overflow: hidden;
    }

    .panel {
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      flex: 1;
      /* Safari transitionend event.propertyName === flex */
      /* Chrome + FF transitionend event.propertyName === flex-grow */
      box-shadow:inset 0 0 0 10px #fff2;
      color:#fff;
      font-size: 20px;
      font-weight: 800;
      text-align: center;
      background-size:cover;
      background-position:center;
      background-repeat: no-repeat;
      overflow: hidden;
      filter: grayscale(1) blur(1px);
      position: relative;
      transition:
        font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s,
        filter 0.5s ease-in;
    }

    .panel:nth-child(1) { background-image:url(~@/assets/otherPortfolio/img05.jpg); }
    .panel:nth-child(2) { background-image:url(~@/assets/otherPortfolio/img06.png); }
    .panel:nth-child(3) { background-image:url(~@/assets/otherPortfolio/gif01.gif); }
    .panel:nth-child(4) { background-image:url(~@/assets/otherPortfolio/img02.jpg); }
    .panel:nth-child(5) { background-image:url(~@/assets/otherPortfolio/img03.jpg); }

    .panel > p {
      display:flex;
      justify-content:center;
      align-items:center;
      flex:1 0 auto;
      width: 100%;
      transition:transform .5s,
                 opacity .3s ease-in;       
    }

    .panel > p:first-child {transform:translateY(-100%);}
    .panel.open-active > p:first-child {transform:translateY(0);}
    .panel.open-active > p:nth-child(2) {opacity: 0;}
    .panel > p:last-child {transform:translateY(100%);}
    .panel.open-active > p:last-child {transform:translateY(0);}

    .panel p {
      padding: 0 30px;
      box-sizing: border-box;
      font-family: '微軟正黑體', cursive;
      font-size: 24px;
      text-shadow:0 0 5px #000,
                  0 0 20px #000,
                  0 0 25px #000a;
    }
    .panel p:nth-child(1){ background-image: linear-gradient(to top, transparent , #000a);}
    .panel p:nth-child(3){ 
        font-size: 0px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 2;
        opacity: 0;
        background-image: linear-gradient(to bottom, transparent 10%, 35%, #000d 100%);
    }
    .panel.open-active p:nth-child(3){
        font-size: 18px;
        opacity: 1;
    }
    .panel.open {
      font-size: 40px;
      flex: 5;
      filter: grayscale(0) blur(0px);
    }
    @media screen and (min-width: 1200px){
        .panels {
            flex-direction: row;
        }
    }
</style>