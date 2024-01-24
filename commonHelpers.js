import{S as q,a as v,i as d}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const E="41829655-bf270f19af5dfab9e341d37e3",f=document.querySelector(".card-container"),F=document.querySelector(".search-form"),h=document.querySelector(".loader"),l=document.querySelector(".btn-more-primary");F.addEventListener("submit",k);l.addEventListener("click",M);const P=new q(".card-container a",{captionsData:"alt",captionDelay:250});let i=1,c=40,u=1,m="";l.style.display="none";async function k(o){o.preventDefault();const r=o.currentTarget,n=r.elements.query.value;if(n.trim()){x(),b();try{const s=await y(n,i,c);p(s),u=Math.ceil(100/c),i=1,m=n,s.hits.length===0?l.style.display="none":l.style.display="block"}catch{g()}finally{r.reset(),L()}}}async function M(){if(!(i>u)){b();try{const o=await y(m,i,c);p(o),i+=1,i>u&&(l.style.display="none",C())}catch(o){console.log(o)}finally{L()}}}async function y(o,r,n){const s=`https://pixabay.com/api/?key=${E}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{return(await v.get(s)).data}catch{throw new Error("Failed to fetch photos")}}function p(o){const r=o.hits||[];if(r.length===0){g();return}const n=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:w,comments:$,downloads:S})=>`
        <li class="gallery-item">
            <a href="${e}" class="gallery-link">
                <img 
                class="gallery-image" 
                src="${s}" 
                alt="${t}"
                width="360" 
                height="200"
                />
                <ul class="gallery-item-description">
                    <li class="comments" >Likes: ${a}</li>
                    <li class="comments" >Views: ${w}</li>
                    <li class="comments" >Downloads: ${S}</li>
                    <li class="comments" >Comments: ${$}</li>
                </ul>
            </a>
        </li>
        `).join("");f.innerHTML+=n,P.refresh()}function g(o){d.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function x(){f.innerHTML=""}function b(){h.classList.add("visible")}function L(){h.classList.remove("visible")}function C(){d.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
