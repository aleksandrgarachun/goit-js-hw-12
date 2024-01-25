import{S as E,a as F,i as f}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const P="41829655-bf270f19af5dfab9e341d37e3",h=document.querySelector(".card-container"),k=document.querySelector(".search-form"),m=document.querySelector(".loader"),c=document.querySelector(".btn-more-primary");k.addEventListener("submit",T);c.addEventListener("click",x);let i=1,u=40,d=1,y="",p=0;c.style.display="none";const l=new E(".card-container a",{captionsData:"alt",captionDelay:250});function C(){const t=document.querySelector(".gallery-item");t&&(p=t.getBoundingClientRect().height)}function M(){l.refresh(),C()}async function x(){if(!(i>d)){L();try{const t=await g(y,i,u);b(t),i+=1,i>d&&(c.style.display="none",H())}catch(t){console.log(t)}finally{S(),R(),l.refresh()}}}function R(){window.scrollBy({top:2*p,behavior:"smooth"})}async function T(t){t.preventDefault();const o=t.currentTarget,n=o.elements.query.value;if(n.trim()){D(),L();try{const s=await g(n,i,u);b(s),d=Math.ceil(100/u),i=1,y=n,s.hits.length===0?c.style.display="none":c.style.display="block",M()}catch{w()}finally{o.reset(),S(),l.refresh()}}}async function g(t,o,n){const s=`https://pixabay.com/api/?key=${P}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;try{return(await F.get(s)).data}catch{throw new Error("Failed to fetch photos")}}function b(t){const o=t.hits||[];if(o.length===0){w();return}const n=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:$,comments:q,downloads:v})=>`
        <li class="gallery-item">
            <a href="${e}" class="gallery-link">
                <img 
                class="gallery-image" 
                src="${s}" 
                alt="${r}"
                width="360" 
                height="200"
                />
                <ul class="gallery-item-description">
                    <li class="comments" >Likes: ${a}</li>
                    <li class="comments" >Views: ${$}</li>
                    <li class="comments" >Downloads: ${v}</li>
                    <li class="comments" >Comments: ${q}</li>
                </ul>
            </a>
        </li>
        `).join("");h.innerHTML+=n,l.refresh()}function w(t){f.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function D(){h.innerHTML=""}function L(){m.classList.add("visible")}function S(){m.classList.remove("visible")}function H(){f.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
