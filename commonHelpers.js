import{S as C,a as E,i as f}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const k="41829655-bf270f19af5dfab9e341d37e3",h=document.querySelector(".card-container"),P=document.querySelector(".search-form"),m=document.querySelector(".loader"),c=document.querySelector(".btn-more-primary");P.addEventListener("submit",T);c.addEventListener("click",M);let i=1,u=40,d=1,y="",g=0;c.style.display="none";const l=new C(".card-container a",{captionsData:"alt",captionDelay:250});function x(){const t=document.querySelector(".gallery-item");t&&(g=t.getBoundingClientRect().height)}function p(){l.refresh(),x()}async function M(){if(!(i>d)){v();try{i+=1;const t=await b(y,i,u);w(t),i>=d&&(c.style.display="none",D()),p()}catch(t){console.log(t)}finally{F(),R(),l.refresh()}}}function R(){window.scrollBy({top:2*g,behavior:"smooth"})}async function T(t){t.preventDefault();const o=t.currentTarget,n=o.elements.query.value;if(n.trim()){z(),v();try{const s=await b(n,i,u);w(s),d=Math.ceil(100/u),i=1,y=n,s.hits.length===0?c.style.display="none":c.style.display="block",p()}catch{L()}finally{o.reset(),F(),l.refresh()}}}async function b(t,o,n){const s=`https://pixabay.com/api/?key=${k}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;try{return(await E.get(s)).data}catch{throw new Error("Failed to fetch photos")}}function w(t){const o=t.hits||[];if(o.length===0){L();return}const n=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:S,comments:$,downloads:q})=>`
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
                    <li class="comments" >Views: ${S}</li>
                    <li class="comments" >Downloads: ${q}</li>
                    <li class="comments" >Comments: ${$}</li>
                </ul>
            </a>
        </li>
        `).join("");h.innerHTML+=n,l.refresh()}function L(t){f.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function z(){h.innerHTML=""}function v(){m.classList.add("visible")}function F(){m.classList.remove("visible")}function D(){f.show({class:"error-svg",position:"topRight",icon:"error-svg",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
