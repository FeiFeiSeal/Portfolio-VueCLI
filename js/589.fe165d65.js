"use strict";(self["webpackChunkPortfolio_VueCLI"]=self["webpackChunkPortfolio_VueCLI"]||[]).push([[589],{435:function(e,t,o){o.r(t),o.d(t,{default:function(){return b}});var a=o(252),n=o(963),l=o(577);const s=e=>((0,a.dD)("data-v-65bf4412"),e=e(),(0,a.Cn)(),e),r={class:"block-canvas"},i={class:"box-fnc"},c=s((()=>(0,a._)("input",{type:"file",id:"upload"},null,-1))),u={class:"box-color"},d={class:"brush-color"},h={class:"brush-size"};function w(e,t,o,s,w,g){const f=(0,a.up)("font-awesome-icon"),v=(0,a.up)("description");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",r,[(0,a._)("div",i,[(0,a._)("a",{class:"fnc-return",onClick:t[0]||(t[0]=(...e)=>s.undo&&s.undo(...e))},[(0,a.Wm)(f,{icon:["fas","undo"],onClick:s.undo},null,8,["onClick"])]),(0,a._)("a",{class:"fnc-clear",onClick:t[1]||(t[1]=(...e)=>s.clear&&s.clear(...e))},[(0,a.Wm)(f,{icon:["fas","broom"]})]),(0,a._)("a",{class:"fnc-save",onClick:t[2]||(t[2]=(...e)=>s.save&&s.save(...e))},[(0,a.Wm)(f,{icon:["fas","download"],onClick:s.save},null,8,["onClick"])]),(0,a._)("label",{for:"upload",class:"fnc-load",onClick:t[3]||(t[3]=(...e)=>s.upload&&s.upload(...e))},"upload"),c]),(0,a._)("canvas",{id:"draw",onMousemove:t[4]||(t[4]=(...e)=>s.draw&&s.draw(...e)),onTouchmove:t[5]||(t[5]=(...e)=>s.touchDraw&&s.touchDraw(...e)),onMousedown:t[6]||(t[6]=(...e)=>s.starDrawing&&s.starDrawing(...e)),onTouchstart:t[7]||(t[7]=(...e)=>s.starDrawing&&s.starDrawing(...e)),onMouseup:t[8]||(t[8]=(...e)=>s.closeDrawing&&s.closeDrawing(...e)),onTouchend:t[9]||(t[9]=(...e)=>s.closeDrawing&&s.closeDrawing(...e)),onMouseout:t[10]||(t[10]=(...e)=>s.closeDrawing&&s.closeDrawing(...e)),onTouchcancel:t[11]||(t[11]=(...e)=>s.closeDrawing&&s.closeDrawing(...e))},null,32),(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("span",{"data-color":"#f77",onClick:t[12]||(t[12]=(...e)=>s.brushColor&&s.brushColor(...e))}),(0,a._)("span",{"data-color":"#7f7",onClick:t[13]||(t[13]=(...e)=>s.brushColor&&s.brushColor(...e))}),(0,a._)("span",{"data-color":"#69f",onClick:t[14]||(t[14]=(...e)=>s.brushColor&&s.brushColor(...e))}),(0,a._)("span",{class:"active","data-color":"rainbow",onClick:t[15]||(t[15]=(...e)=>s.brushColor&&s.brushColor(...e))})]),(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"range",min:"1","onUpdate:modelValue":t[16]||(t[16]=e=>s.brushSize=e)},null,512),[[n.nr,s.brushSize]]),(0,a._)("p",null,"size: "+(0,l.zw)(s.brushSize),1)])])]),(0,a.Wm)(v)],64)}var g=o(262),f=o(119),v=o(46),p={components:{description:v.Z},setup(){const e=(0,g.iH)(!1),t=(0,g.qj)({lastX:0,lastY:0}),o=(0,g.iH)(10),n=(0,g.iH)(0),l=(0,g.iH)("rainbow"),s=()=>{const e=document.querySelector("#draw");e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight},r=a=>{const s=document.querySelector("#draw"),r=s.getContext("2d");e.value&&("rainbow"===l.value&&(r.strokeStyle=`hsl(${n.value}, 100%, 50%`,n.value++),r.lineJoin="round",r.lineCap="round",r.lineWidth=o.value,r.beginPath(),r.moveTo(t.lastX,t.lastY),r.lineTo(a.offsetX,a.offsetY),r.stroke(),[t.lastX,t.lastY]=[a.offsetX,a.offsetY])},i=a=>{const s=document.querySelector("#draw"),r=s.getContext("2d");e.value&&("rainbow"===l.value&&(r.strokeStyle=`hsl(${n.value}, 100%, 50%`,n.value++),r.lineJoin="round",r.lineCap="round",r.lineWidth=o.value,r.beginPath(),r.moveTo(t.lastX,t.lastY),r.lineTo(a.touches[0].clientX,a.touches[0].clientY),r.stroke(),[t.lastX,t.lastY]=[a.touches[0].clientX,a.touches[0].clientY])},c=()=>{const t=document.querySelector("#draw"),o=t.getContext("2d");e.value=!1;let a=o.getImageData(0,0,t.width,t.height);window.history.pushState(a,null)},u=o=>{e.value=!0,[t.lastX,t.lastY]=[o.offsetX,o.offsetY]},d=e=>{const t=document.querySelector("#draw"),o=t.getContext("2d");l.value=e.target.dataset.color,e.target.parentNode.querySelectorAll("span").forEach((e=>{e.classList.remove("active")})),e.target.classList.add("active"),"rainbow"===l.value?o.strokeStyle=`hsl(${n.value}, 100%, 50%`:o.strokeStyle=l.value},h=(0,f.tv)(),w=()=>{h.go(-1)},v=()=>{const e=document.querySelector("#draw"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height)},p=e=>{const t=document.querySelector("#draw"),o=t.getContext("2d");e.target.control.addEventListener("change",(()=>{const a=e.target.control.files[0];let n=URL.createObjectURL(a),l=new Image;l.src=n,l.onload=function(){let e=0,a=0;if(this.width>t.width){if(e=t.width/this.width*this.width,a=t.width/this.width*this.height,a<t.height){let n=(t.height-a-70)/2;o.drawImage(this,0,n,e,a)}}else if(e=this.width,a=this.height,a<t.height){let n=(t.width-e)/2,l=(t.height-a-70)/2;o.drawImage(this,n,l,e,a)}}}))},C=e=>{const t=document.querySelector("#draw"),o=document.createElement("a");o.download="",o.href=t.toDataURL("image/jpeg/png"),o.click()},m=e=>{const t=document.querySelector("#draw"),o=t.getContext("2d");o.clearRect(0,0,t.width,t.height),e.state&&o.putImageData(e.state,0,0)},b=()=>{const e=document.querySelector("#draw"),t=e.getContext("2d");let o=t.getImageData(0,0,e.width,e.height);window.history.pushState(o,null)};return(0,a.bv)((()=>{s(),b(),window.addEventListener("resize",s),window.addEventListener("popstate",m,!1)})),{draw:r,touchDraw:i,starDrawing:u,closeDrawing:c,brushSize:o,brushColor:d,undo:w,clear:v,upload:p,save:C}}},C=o(744);const m=(0,C.Z)(p,[["render",w],["__scopeId","data-v-65bf4412"]]);var b=m}}]);
//# sourceMappingURL=589.fe165d65.js.map