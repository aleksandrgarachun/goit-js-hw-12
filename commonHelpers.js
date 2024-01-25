import{S as F,a as P,i as f}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const k="41829655-bf270f19af5dfab9e341d37e3",h=document.querySelector(".card-container"),C=document.querySelector(".search-form"),m=document.querySelector(".loader"),c=document.querySelector(".btn-more-primary");C.addEventListener("submit",T);c.addEventListener("click",x);let i=1,u=40,d=1,y="",p=0;c.style.display="none";const l=new F(".card-container a",{captionsData:"alt",captionDelay:250});function M(){const t=document.querySelector(".gallery-item");t&&(p=t.getBoundingClientRect().height)}function g(){l.refresh(),M()}async function x(){if(!(i>d)){S();try{i+=1;const t=await b(y,i,u);w(t),i>=d&&(c.style.display="none",H()),g()}catch(t){console.log(t)}finally{$(),R(),l.refresh()}}}function R(){window.scrollBy({top:2*p,behavior:"smooth"})}async function T(t){t.preventDefault();const o=t.currentTarget,n=o.elements.query.value;if(n.trim()){D(),S();try{const s=await b(n,i,u);w(s),d=Math.ceil(100/u),i=1,y=n,s.hits.length===0?c.style.display="none":c.style.display="block",g()}catch{L()}finally{o.reset(),$(),l.refresh()}}}async function b(t,o,n){const s=`https://pixabay.com/api/?key=${k}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;try{return(await P.get(s)).data}catch{throw new Error("Failed to fetch photos")}}function w(t){const o=t.hits||[];if(o.length===0){L();return}const n=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:q,comments:v,downloads:E})=>`
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
                    <li class="comments" >Views: ${q}</li>
                    <li class="comments" >Downloads: ${E}</li>
                    <li class="comments" >Comments: ${v}</li>
                </ul>
            </a>
        </li>
        `).join("");h.innerHTML+=n,l.refresh()}function L(t){f.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function D(){h.innerHTML=""}function S(){m.classList.add("visible")}function $(){m.classList.remove("visible")}function H(){f.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
