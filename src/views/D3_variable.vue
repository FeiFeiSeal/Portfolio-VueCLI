<script>
export default {
    
    }
</script>

<template>
    <div class="block-variable">
        <div class="box-show">
            <img src="../assets/logo.png" alt="demoImg">
        </div>
        <div class="box-scroll">
            <label for="spacing">
                <span>Spacing </span>
                <input type="range" id="spacing">
            </label>
            <label for="blur">
                <span>Blur </span>
                <input type="range" id="blur">
            </label>
            <label for="base">
                <span>Base Color </span>
                <input type="color" id="base">
            </label>
        </div>
    </div>
</template>

<style scpoed>
.block-variable{
    width: 100%;
    max-width: 1200px;
    margin: auto;
}
.box-show{
    width: 40%;
    padding: 60px;
    margin: auto;
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
  background-color: #fff;
  border-radius:50%;
}

</style>