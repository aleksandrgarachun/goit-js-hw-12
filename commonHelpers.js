import{S as v,a as E,i as d}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const F="41829655-bf270f19af5dfab9e341d37e3",f=document.querySelector(".card-container"),P=document.querySelector(".search-form"),h=document.querySelector(".loader"),c=document.querySelector(".btn-more-primary");P.addEventListener("submit",T);c.addEventListener("click",x);const k=new v(".card-container a",{captionsData:"alt",captionDelay:250});let i=1,l=40,u=1,m="",y=0;c.style.display="none";function C(){const t=document.querySelector(".gallery-item");t&&(y=t.getBoundingClientRect().height)}function M(){k.refresh(),C()}async function x(){if(!(i>u)){w();try{const t=await p(m,i,l);g(t),i+=1,i>u&&(c.style.display="none",H())}catch(t){console.log(t)}finally{L(),R()}}}function R(){window.scrollBy({top:2*y,behavior:"smooth"})}async function T(t){t.preventDefault();const r=t.currentTarget,n=r.elements.query.value;if(n.trim()){D(),w();try{const s=await p(n,i,l);g(s),u=Math.ceil(100/l),i=1,m=n,s.hits.length===0?c.style.display="none":c.style.display="block",M()}catch{b()}finally{r.reset(),L()}}}async function p(t,r,n){const s=`https://pixabay.com/api/?key=${F}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{return(await E.get(s)).data}catch{throw new Error("Failed to fetch photos")}}function g(t){const r=t.hits||[];if(r.length===0){b();return}const n=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:a,views:S,comments:$,downloads:q})=>`
        <li class="gallery-item">
            <a href="${e}" class="gallery-link">
                <img 
                class="gallery-image" 
                src="${s}" 
                alt="${o}"
                width="360" 
                height="200"
                />
                <ul class="gallery-item-description">
                    <li class="comments" >Likes: ${a}</li>
                    <li class="comments" >Views: ${S}</li>
                    <li class="comments" >Downloads: ${q}</li>
                    <li class="comments" >Comments: ${$}</li>
                </ul>
            </a>
        </li>
        `).join("");f.innerHTML+=n}function b(t){d.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function D(){f.innerHTML=""}function w(){h.classList.add("visible")}function L(){h.classList.remove("visible")}function H(){d.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
