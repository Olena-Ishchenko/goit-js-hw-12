import{i as c,a as b,S as v}from"./assets/vendor-b52d9f5e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const h=document.querySelector(".form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".more");let n=1,p=15;d.style.display="none";l.style.display="none";const a={key:"42093583-bfe36716eb3593f6644c471e3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p};h.addEventListener("submit",r=>{r.preventDefault(),n=1,l.style.display="inline-block",m.innerHTML="";const e=h.elements.search.value.trim();a.q=e,a.page=n,y().then(i=>{f(i),i.totalHits>p?d.style.display="block":g()}).catch(i=>c.show({message:`Sorry, ${i}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})),h.reset()});d.addEventListener("click",r=>{n+=1,a.page=n,l.style.display="inline-block",y().then(e=>{f(e),p*n>e.totalHits&&g()}).catch(e=>c.show({message:`Sorry, ${e}`,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"bottomCenter"}))});async function y(){const r=new URLSearchParams(a);return(await b.get(`https://pixabay.com/api/?${r}`)).data}function f(r){if(r.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const e=r.hits.map(s=>`<li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}" >
      <img
        class="gallery-image"
        src="${s.webformatURL}"
        alt="${s.tags}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${s.likes}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${s.views}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${s.comments}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${s.downloads}</p>
    </div>
      </div>
  </li>`).join("");m.insertAdjacentHTML("beforeend",e),F(),new v(".gallery-link").refresh()}l.style.display="none"}function g(){c.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#1DB8F5",position:"topRight"}),d.style.display="none",l.style.display="none"}function F(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
