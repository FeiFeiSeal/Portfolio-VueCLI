<script>
import { ref } from '@vue/reactivity'

export default {
    setup(){
        const iconColor = ref("#4e392e");
    
        return { iconColor }
    }

}
</script>
<template>
    <div class="block-about">
        <section class="section-person">
            <div class="container">
                <div class="region-photo">
                    <div class="box-photo">
                        <img src="../assets/person-photo.png" alt="person-photo">
                    </div>
                    <h1>Pearlie Kuo</h1>
                    <p>Front-End 前端工程師</p>
                </div>
                <div class="region-info">
                    <div class="box-txt">
                        <span>「起步比別人晚就要比別人努力」</span>
                        <p>體貼又活潑的性格使我有不錯的協調性，造就了好的人際關係，讓職場氣氛融洽的同時也幫助我開拓視野、了解不同價值觀，使我能更快速的融入職場環境，提升工作效率。</p>
                        <p>對事情認真負責的態度，讓我不被動等待別人給予答案，自己尋找答案的過程讓我收穫更多，養成無時無刻保持自我進修的習慣，以臻於完成目標。</p>
                    </div>
                    <div class="box-contact">
                        <div class="icon">
                            <a href="https://www.linkedin.com/in/pearlie-kuo-36b168211/">
                                <font-awesome-icon :icon="['fab', 'linkedin']" 
                                                :style="{ color: 'iconColor' }"/>
                            </a>
                        </div>
                        <div class="icon">
                            <a href="https://github.com/FeiFeiSeal">                               
                                <font-awesome-icon :icon="['fab', 'github']" 
                                                :style="{ color: 'iconColor' }"/>
                            </a>
                        </div>
                        <div class="icon">
                            <a href="mailto:feifeiseal@gmail.com ">
                                <font-awesome-icon :icon="['fas', 'envelope']" 
                                                :style="{ color: 'iconColor' }"/>
                                feifeiseal@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-experience ">
            <div class="container">
                <div class="region-title">
                    <h2>工作經歷</h2>
                </div>
                <div class="region-experience">
                    <div class="box-unit">
                        <p>2020/10 ~ 2022/1</p>
                        <h3><span>Product Manager</span>我瘋程式工作室 (WowFunCode)</h3>
                    </div>
                    <ul class="box-duties">
                        <li>管理工作室帳目與工程師交辦事項</li>
                        <li>接洽並確認客戶需求，進而與工程師討論</li>
                        <li>規劃產品 wireframe</li>
                        <li>協助工程師調整 UI 內容</li>
                        <li>產品文件撰寫</li>
                        <li>開發時程規劃及跟進</li>
                        <li>產品測試</li>
                    </ul>
                </div>
                <div class="region-experience">
                    <div class="box-unit">
                        <p>2017/12 ~ 2020/12</p>
                        <h3><span>臨時技術人員/販賣部領班</span>臺南市政府文化局</h3>
                    </div>
                    <ul class="box-duties">
                        <li>管理販賣部運作，解決現場突發狀況</li>
                        <li>倉儲規劃與商品進銷管理</li>
                        <li>與其他部門協調業務內容</li>
                        <li>新進人員教育訓練</li>
                        <li>管理粉 Facebook 粉絲專頁與 Google 商家</li>
                        <li>管理販賣部人員排班事宜</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section-education ">
            <div class="container">
                <div class="region-title">
                    <h2>學歷</h2>
                </div>
                <div class="region-school">
                    <div class="icon">
                        <font-awesome-icon :icon='["fas", "graduation-cap"]' />
                    </div>
                    <div class="box-txt">
                        <h3>Natinal Chiayi University 國立嘉義大學
                            <span>史地系</span>
                        </h3>
                        <p>2010 - 2014</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-skill ">
            <div class="container">
                <div class="region-title">
                    <h2>技能</h2>
                </div>
                <div class="region-skill">
                    <div class="box-skill">
                        <div class="skill-name"> 
                            <h3>
                                <font-awesome-icon :icon='["fab", "html5"]'
                                :style= '{ color:"#f16529"}'/> HTML5 
                                / 
                                <font-awesome-icon :icon='["fab", "css3-alt"]'
                                :style= '{ color:"#33a9dc"}'/> CSS3
                            </h3>
                        </div>
                        <ul>
                            <li>瞭解語義化標籤使用情境（SEO）</li>
                            <li>瞭解 CSS 跨瀏覽器的處理</li>
                            <li>理解 CSS 命名的邏輯與應用</li>
                            <li>熟悉 Flex / Grid 使用</li>
                            <li>熟悉 CSS 選取器的應用</li>
                            <li>CSS Animation 製作</li>
                            <li>獨立手刻 RWD 響應式網站</li>
                            <li>具 Bootstrap5 使用經驗</li>
                        </ul>
                    </div>
                    <div class="box-skill">
                        <div class="skill-name"> 
                            <h3>
                                <font-awesome-icon :icon='["fab", "js-square"]'
                                :style= '{ color:"#f2bf22"}'/> JacaScript
                            </h3>
                        </div>
                        <ul>
                            <li>熟悉 ES6 語法</li>
                            <li>使用 axios 非同步處理</li>
                            <li>理解 Even Flow</li>
                            <li>理解 prototypal inheritance 與 Prototype Chain  </li>
                            <li>Regular expression 撰寫</li>
                            <li>Vue CLI 專案建置</li>
                            <li>Vue Router 進行 SPA 開發</li>
                        </ul>
                    </div>
                    <div class="box-skill">
                            <div class="skill-name"> 
                                <h3>
                                    其他技能
                                </h3>
                            </div>
                            <ul>
                                <li>Photoshop - 繪製與照片合成</li>
                                <li>illustrator - 設計與繪製</li>
                                <li>Balsamiq - wireframe規劃</li>
                                <li>Markdown 語法</li>
                                <li>WordPress - Elementor Website Builder</li>
                                <li>獨立閱讀技術文件</li>
                                <li>撰寫技術文件</li>
                            </ul>
                     </div>
                 </div>
            </div>
        </section>
        <section class="section-biography ">
            <div class="container">
                <div class="region-title">
                    <h2>前端之路</h2>
                </div>
                <div class="region-txt">
                    <p>在公部門工作時，雖然工作穩定且對工作內容十分嫻熟於心，但對自己總有更高的期望，為了讓自己更加進步不斷地嘗試其他發展的可能性。在因緣際會下加入了朋友開創的程式工作室，善用自己的圓融居於客戶與工程師之間，一次次進行對於功能或頁面配置等方面的溝通；在接案的過程中，對剛踏入這一行的我來說，客戶提出形形色色的需求總是讓人摸不著頭緒，但工作室的夥伴總不吝分享自己的實務經驗給我，讓我學習如何去面對這些需求，以及這些需求背後需要哪些技術。正因如此，這段期間促使我對網頁製作有更深的認識，進而想更深入地往前端技術發展。在自學了一段時間後報名 Amos 的暴力網頁新手入門班與 RWD 網頁班，課堂中不僅僅是鍛鍊切版的技術，培養我面對任何版型都能自行手刻，也鍛鍊了我閱讀技術文件與釐清自己思緒後尋找解答的能力，在後續學習 bootstrap 、JavaScript 都相當受用。</p>
                    <p>自學的這段期間不僅與工作室的夥伴們一起完成了形象網站建置專案，也在2021年參加 iT 鐵人賽以「前進切版之路! CSS微體驗」為題記錄自己 CSS 的學習理解過程，以及遇到問題的解決方式等等，在連續發文30天後順利完成挑戰，並學習使用 JavaScript 進行版面控制與資料串接，目前正在學習使用 Vue.js。我希望大學不會是我學習的最後一站，在職期間為了完成主管交辦的工作、為了與夥伴更有默契的合作養成自我進修的習慣，無不盡心盡力的完成目標，這當中學習了一件新的事物或是進行一項挑戰都讓我充滿成就感。</p>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
.block-about{
    --font-color: #132C33;
    --icon-color: #126E82;
    --link-color: #51C4D3;
    --base-color: #D8E3E7;
    --gap: 30px;
    width: 100%;
    color: var(--font-color);
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #e6e9ee; 
}
.block-about a{
 color: var(--icon-color);
}
.container{
    max-width: 1200px;
    margin: auto;
    padding: var(--gap);
    background-color: #fff8;
    position: relative;
}
[class*="section-"]:not(:last-child) .container::after{
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    text-align: center;
    background-color: #aaa;
    box-shadow: 
        -20px 0 0 #ccc,
        20px 0 0 #ccc;
    position: absolute;
    bottom: calc(var(--gap)/-2);
    left: 0;
    right: 0;
    margin: auto;
    animation: divAni 2s infinite;
}
@keyframes divAni{
    0%{ background-color: #ccc;
        box-shadow: 
        -20px 0 0 #aaa,
        20px 0 0 #ccc;}
    50%{ background-color: #aaa;
        box-shadow: 
        -20px 0 0 #ccc,
        20px 0 0 #ccc;}
    100%{ background-color: #ccc;
        box-shadow: 
        -20px 0 0 #ccc,
        20px 0 0 #aaa;}
}
.region-title{
    margin-bottom: calc(var(--gap)/2);
}
.region-title h2{
    font-size: 28px;
    font-weight: 500;
    text-align: center;
}
.region-title h2::before,
.region-title h2::after{
    content: " — ";
}
 /*section-person-------------*/
/*---------------------------*/
.section-person .region-photo{
    text-align: center;
    margin-bottom: var(--gap);
}
.section-person .box-photo{
    width: 150px;
    height: 150px;
    margin: 0 auto calc(var(--gap) / 2);
    /*IOS chrome 100.0.4896.77 aspect-ratio 無效*/
    /* aspect-ratio: 1 / 1;
    -webkit-aspect-ratio: 1 / 1;
    -moz-aspect-ratio: 1 / 1; */
    border-radius: 50%;
    box-shadow: 0 0 10px #0003;
    overflow: hidden;
}
.section-person .box-photo img{
    width: 100%;
    vertical-align: middle;
    transform: translate( 0 , -10% );
}
.section-person .region-photo h1{
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 38px;
}
.section-person .region-photo p{
    font-size: 20px;
}
.section-person .region-info p{
    font-size: 18px;
    margin-bottom: calc(var(--gap)/2);
}
.section-person .region-info span{
    display: block;
    margin-bottom: var(--gap);
    font-size: 28px;
    text-align: center;
}
.region-info .box-contact .icon{  display: inline-block;}
.region-info .box-contact .icon + .icon{    margin-left: 15px;}

.region-info .box-contact .icon a{
    color: var(--icon-color);
    font-size: 22px;
    transition: color .2s;
}
.region-info .box-contact .icon a:hover{   color: var(--link-color);}

 /*section-experience---------*/
/*---------------------------*/
.region-experience{
    padding: calc(var(--gap)/2);
    border-bottom: 1px solid #aaa;
}
.region-experience .box-unit p{
    color: var(--link-color);
    margin-bottom: 10px;
}
.region-experience .box-unit{
    margin-bottom: 20px;
}
.region-experience .box-unit h3{
    font-size: 18px;
    font-weight: 500;
}
.region-experience .box-unit h3 span{
    display: block;
    font-size: 22px;
}
.region-experience .box-duties li::before{
    content: "•";
    font-size: 14px;
}

 /*section-education----------*/
/*---------------------------*/
.section-education .region-school .icon{
    display: inline-block;
    width: calc( 20% - calc(var(--gap)/2));
    max-width: 100px;
    margin-right: calc(var(--gap)/2);
    border-radius: 10px;
    color: var(--icon-color);
    font-size: 28px;
    text-align: center;
    vertical-align: middle;
    background-color: var(--base-color);
}
.section-education .region-school .box-txt{
    display: inline-block;
    vertical-align: middle;
}
.region-school .box-txt h3{
    font-size: 18px;
    font-weight: 500;
}
.region-school .box-txt h3 span{
    display: block;
}
.region-school .box-txt p{
    color: var(--link-color);
}
 /*section-skill--------------*/
/*---------------------------*/

.region-skill .box-skill{    
    padding: 15px;
    margin-bottom: var(--gap);
    box-sizing: border-box;
    border-radius: 25px;
    box-shadow: 0 0 5px #0001;
    background-color: #fffc;
}
.region-skill .skill-name{
    padding: 5px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 22px;
    font-weight: 500;
}
.region-skill li{
    padding-left: 10px;
    margin-bottom: 5px;
    text-indent: -15px;
}
.region-skill li::before{
    content: "•";
    font-size: 14px;
}
 /*section-biography----------*/
/*---------------------------*/
.section-biography .region-txt p{
    margin-bottom: calc(var(--gap)/2);
    text-indent: 32px;
}

/*---------------------------------*/
@media screen and (min-width: 768px) {





}
@media screen and (min-width: 1200px) {
    .container{
        padding: calc(var(--gap)*2);
    }
     /*section-person-------------*/
    /*--------------------min1200*/
    .section-person .container{
        display: flex;
        align-items: center;
        column-gap: var(--gap);
        padding-top: 60px;
    }
    .section-person .region-photo{ width: 35%;}
    .section-person .region-info { width: 65%;}
   .section-person .region-photo h1{
       font-size: 30px;
   }
     /*section-experience---------*/
    /*--------------------min1200*/ 
    .region-experience{
        display: flex;
        column-gap: var(--gap);
    }
    .region-experience .box-unit{   width: 40%;}
    .region-experience .box-duties{ width: 60%;}

     /*section-education----------*/
    /*--------------------min1200*/

     /*section-skill--------------*/
    /*--------------------min1200*/
    .region-skill{
        display: flex;
        column-gap: var(--gap);
        flex-wrap: wrap;
    }
    .region-skill .box-skill{
        flex-grow: 1;
        width: calc( 100%/3 - var(--gap)*2);


    }



}   
</style>