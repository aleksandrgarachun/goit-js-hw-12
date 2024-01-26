import{S as C,a as E,i as u}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const k="41829655-bf270f19af5dfab9e341d37e3",f=document.querySelector(".card-container"),P=document.querySelector(".search-form"),h=document.querySelector(".loader"),a=document.querySelector(".btn-more-primary");P.addEventListener("submit",H);a.addEventListener("click",M);let i=1,c=40,d=1,m="",y=0;a.style.display="none";const g=new C(".card-container a",{captionsData:"alt",captionDelay:250});function x(){const t=document.querySelector(".gallery-item");t&&(y=t.getBoundingClientRect().height)}function p(){g.refresh(),x()}async function M(){if(!(i>d)){v(),a.disabled=!0;try{i+=1;const t=await b(m,i,c);w(t),i>=d&&(a.style.display="none",z()),p()}catch(t){console.log(t)}finally{F(),a.disabled=!1,R()}}}function R(){window.scrollBy({top:2*y,behavior:"smooth"})}async function H(t){t.preventDefault();const r=t.currentTarget,n=r.elements.query.value;if(n.trim()){T(),v(),a.disabled=!0;try{const s=await b(n,i,c);w(s),d=Math.ceil(s.totalHits/c),i=1,m=n,s.hits.length===0?a.style.display="none":a.style.display="block",p()}catch{L()}finally{r.reset(),F(),a.disabled=!1}}}async function b(t,r,n){const s=`https://pixabay.com/api/?key=${k}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{return(await E.get(s)).data}catch{throw new Error("Failed to fetch photos")}}function w(t){const r=t.hits||[];if(r.length===0){L();return}const n=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:l,views:S,comments:$,downloads:q})=>`
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
        `).join("");f.innerHTML+=n,g.refresh()}function L(t){u.show({position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function T(){f.innerHTML=""}function v(){h.classList.add("visible")}function F(){h.classList.remove("visible")}function z(){u.show({class:"error-svg",position:"topRight",icon:"error-svg",messageColor:"#FFF",messageSize:"16px",close:!1,backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
