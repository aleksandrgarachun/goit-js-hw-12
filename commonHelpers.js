import{S as C,a as E,i as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const k="41829655-bf270f19af5dfab9e341d37e3",h=document.querySelector(".card-container"),x=document.querySelector(".search-form"),m=document.querySelector(".loader"),a=document.querySelector(".btn-more-primary");x.addEventListener("submit",T);a.addEventListener("click",M);let i=1,c=40,u=1,y="",g=0;a.style.display="none";const p=new C(".card-container a",{captionsData:"alt",captionDelay:250});function P(){const t=document.querySelector(".gallery-item");t&&(g=t.getBoundingClientRect().height)}function b(){p.refresh(),P()}async function M(){if(!(i>u)){v();try{i+=1,a.disabled=!0;const t=await w(y,i,c);L(t),i>=u&&(a.style.display="none",z()),b()}catch(t){console.log(t)}finally{F(),a.disabled=!1,R()}}}function R(){window.scrollBy({top:2*g,behavior:"smooth"})}async function T(t){t.preventDefault();const r=t.currentTarget,n=r.elements.query.value;if(n.trim()){H(),v(),a.disabled=!0;try{i=1;const s=await w(n,i,c);L(s),u=Math.ceil(s.totalHits/c),y=n,s.hits.length===0?a.style.display="none":a.style.display=s.hits.length<c?"none":"block",b()}catch{d()}finally{r.reset(),F(),a.disabled=!1}}}async function w(t,r,n){const s=`https://pixabay.com/api/?key=${k}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{const e=await E.get(s);if(!e.status===200)throw new Error(e.statusText);return e.data}catch(e){throw console.error("Failed to fetch photos:",e),d(),e}}function L(t){const r=t.hits||[];if(r.length===0){d();return}const n=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:l,views:S,comments:$,downloads:q})=>`
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
                    <li class="comments" >Likes: ${l}</li>
                    <li class="comments" >Views: ${S}</li>
                    <li class="comments" >Downloads: ${q}</li>
                    <li class="comments" >Comments: ${$}</li>
                </ul>
            </a>
        </li>
        `).join("");h.innerHTML+=n,p.refresh()}function d(t){f.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function H(){h.innerHTML=""}function v(){m.classList.add("visible")}function F(){m.classList.remove("visible")}function z(){f.show({class:"error-svg",position:"topRight",icon:"error-svg",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
