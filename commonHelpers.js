import{S as v,i as a,a as w}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),g=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=document.querySelector(".more"),k=new v(".gallery-link");let c=1,u=15,y;d.style.display="none";n.style.display="none";m.addEventListener("submit",async s=>{if(s.preventDefault(),c=1,d.style.display="none",g.innerHTML="",y=m.elements.search.value.trim(),y===""){a.show({message:"Please write search image",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}n.style.display="inline-block";try{const{hits:o,totalHits:r}=await h(y,c);if(r===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}),n.style.display="none";return}p(o),r<u?f():d.style.display="block"}catch(o){a.show({message:`Sorry, ${o}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}finally{m.reset()}});d.addEventListener("click",async()=>{c+=1,n.style.display="inline-block";try{const{hits:s,totalHits:o}=await h(y,c);p(s),C(),u*c>o&&f()}catch(s){a.show({message:`Sorry, ${s}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"bottomCenter"})}});async function h(s,o){const r={key:"42093583-bfe36716eb3593f6644c471e3",q:s,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u},i=new URLSearchParams(r),{data:e}=await w.get(`https://pixabay.com/api/?${i}`);return e}function p(s){const o=s.map(({largeImageURL:r,webformatURL:i,tags:e,likes:t,views:l,comments:F,downloads:b})=>`<li class="gallery-item">
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
    <p> ${t}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${l}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${F}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${b}</p>
    </div>
      </div>
  </li>`).join("");g.insertAdjacentHTML("beforeend",o),k.refresh(),n.style.display="none"}function f(){a.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#1DB8F5",position:"topRight"}),d.style.display="none",n.style.display="none"}function C(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
