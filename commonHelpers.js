import{S,i as c,a as L}from"./assets/vendor-b52d9f5e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const y=document.querySelector(".form"),p=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=document.querySelector(".more"),w=new S(".gallery-link"),a=document.querySelector("body"),u=document.querySelector(".checkbox");let d=1,g=15,h;m.style.display="none";l.style.display="none";const C=localStorage.getItem("theme"),A=JSON.parse(C);A===!0&&(a.classList.remove("light-theme"),a.classList.add("dark-theme"));y.addEventListener("submit",async s=>{if(s.preventDefault(),d=1,m.style.display="none",p.innerHTML="",h=y.elements.search.value.trim(),h===""){c.show({message:"Please write search image",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}l.style.display="inline-block";try{const{hits:t,totalHits:r}=await f(h,d);if(r===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}),l.style.display="none";return}v(t),r<g?b():m.style.display="block"}catch(t){c.show({message:`Sorry, ${t}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}finally{y.reset()}});m.addEventListener("click",async()=>{d+=1,l.style.display="inline-block";try{const{hits:s,totalHits:t}=await f(h,d);v(s),q(),g*d>t&&b()}catch(s){c.show({message:`Sorry, ${s}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"bottomCenter"})}});async function f(s,t){const r={key:"42093583-bfe36716eb3593f6644c471e3",q:s,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g},i=new URLSearchParams(r),{data:e}=await L.get(`https://pixabay.com/api/?${i}`);return e}function v(s){const t=s.map(({largeImageURL:r,webformatURL:i,tags:e,likes:o,views:n,comments:k,downloads:F})=>`<li class="gallery-item">
    <a class="gallery-link" href="${r}" >
      <img
        class="gallery-image"
        src="${i}"
        alt="${e}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${o}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${n}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${k}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${F}</p>
    </div>
      </div>
  </li>`).join("");p.insertAdjacentHTML("beforeend",t),w.refresh(),l.style.display="none"}function b(){c.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#1DB8F5",position:"topRight"}),m.style.display="none",l.style.display="none"}function q(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:t,left:0,behavior:"smooth"})}u.addEventListener("click",s=>{u.checked===!0?(a.classList.remove("light-theme"),a.classList.add("dark-theme")):(a.classList.remove("dark-theme"),a.classList.add("light-theme")),localStorage.setItem("theme",JSON.stringify(u.checked))});
//# sourceMappingURL=commonHelpers.js.map
