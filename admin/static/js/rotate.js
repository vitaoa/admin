import{_ as e,u as t}from"./index-27a27445.js";/* empty css        *//* empty css          */import{k as a,l as n}from"./element.js";import{a as o,Z as s,d as i,Y as r,m as l,p as m,q as c,u as g,U as u,O as d,S as p}from"./vue.js";import"./lib.js";const f={class:"box"},h={t:"1713059543990",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1835",width:"200",height:"200"},v=["fill"];var w=e({__name:"rotate",setup(e){const w=t().themeConfig,_=o();let y=o(),b=s(),I=o(!1);const x=[{name:"一等奖",img:"./static/css/prize_1-c612db18.png",color:"cyan"},{name:"二等奖",img:"./static/css/prize_2-f502ff4e.png",color:"pink"},{name:"三等奖",img:"./static/css/prize_3-4794dd0e.png",color:"yellow"},{name:"四等奖",img:"./static/css/prize_4-389adb77.png",color:"green"},{name:"五等奖",img:"./static/css/prize_5-deffb99c.png",color:"blue"},{name:"六等奖",img:"./static/css/prize_6-e903811d.png",color:"blueviolet"}];let z=s([]);function M(){if(I.value)return;I.value=!0;let e=0;sessionStorage.getItem("num")&&(e=Number(sessionStorage.getItem("num")));let t=null,a=0,n=Math.floor(360*(Math.random()+2));!function o(){const s=Date.now();t||(t=s),a=s-t;let i=Math.min(a/3e3,1),r=e+n*i;if(_.value.style.transform="rotate("+r+"deg)",a<3e3)requestAnimationFrame(o);else{I.value=!1;const e=r%360;sessionStorage.setItem("num",e);for(let t=0;t<z.length;t++){const[a,n]=z[t].zone;n<a?(e>a||e<n)&&S(z[t].name):e>a&&e<n&&S(z[t].name)}}}()}function S(e){n.alert(`<p style="text-align:center;"><strong>${e}</strong></p>`,"中奖结果",{dangerouslyUseHTMLString:!0})}return i((()=>{b=_.value.getContext("2d"),y.value=b.getImageData(0,0,_.value.width,_.value.height),function(){const e=Math.min(_.value.width,_.value.height)/2,t=e-15-4,a=2*Math.PI/x.length,n=1.5*Math.PI-a/2;b.lineWidth=30,b.strokeStyle=w.backgroundColor,b.setTransform(1,0,0,1,0,0),b.translate(e,e),b.arc(0,0,t,0,2*Math.PI,!1),b.stroke(),x.forEach(((e,o)=>{const s=a*o,i=a*(o+1),r=330-60*(o-1),l=330-60*o;z.push({name:e.name,zone:[l,r>360?r-360:r]}),b.beginPath(),b.arc(0,0,t,n+s,n+i,!1),b.lineTo(0,0),b.fillStyle=e.color,b.fill();var m=new Image;m.src=e.img,m.onload=function(){b.save(),b.rotate(s),b.fillStyle="rgba(0,0,0,1)",b.font="16px Microsoft YaHei";const a=b.measureText(e.name).width;b.fillText(e.name,-a/2,-t/2+15),b.drawImage(m,-m.width/2,15-t,m.width,m.height),b.restore()}}))}()})),r((()=>{sessionStorage.removeItem("num")})),(e,t)=>{const n=a;return l(),m("div",f,[c("canvas",{ref_key:"rouletteCanvas",ref:_,width:"480",height:"480"},null,512),(l(),m("svg",h,[c("path",{d:"M263.577601 776.630449a242.559588 242.559588 0 0 1 138.417007-218.124973L483.818959 23.36268a27.485506 27.485506 0 0 1 54.283873 0l81.824351 535.142796a242.559588 242.559588 0 0 1 138.417006 218.124973 247.369551 247.369551 0 0 1-494.739102 0z","p-id":"1836",fill:g(w).rotateColor},null,8,v)])),u(n,{onClick:M,loading:g(I),size:"large",type:"primary"},{default:d((()=>[p("开始抽奖")])),_:1},8,["loading"])])}}},[["__scopeId","data-v-23459d92"]]);export{w as default};
