import{S as d,i as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="41829655-bf270f19af5dfab9e341d37e3",a=document.querySelector(".card-container"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");g.addEventListener("submit",L);const p=new d(".card-container a",{captionsData:"alt",captionDelay:250});function L(n){n.preventDefault();const o=n.currentTarget,r=o.elements.query.value;r.trim()&&(S(),$(),b(r).then(w).catch(c).finally(()=>{o.reset(),q()}))}function b(n){const o=`https://pixabay.com/api/?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function w(n){const o=n.hits||[];if(o.length===0){c();return}const r=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:u,comments:f,downloads:m})=>`
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
                    <li class="comments" >Likes: ${i}</li>
                    <li class="comments" >Views: ${u}</li>
                    <li class="comments" >Downloads: ${m}</li>
                    <li class="comments" >Comments: ${f}</li>
                </ul>
            </a>
        </li>
        `).join("");a.innerHTML=r,p.refresh()}function c(n){h.show({...v,backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"})}function S(){a.innerHTML=""}function $(){l.classList.add("visible")}function q(){l.classList.remove("visible")}const v={position:"topRight",messageColor:"#FFF",messageSize:"16px",close:!1};
//# sourceMappingURL=commonHelpers.js.map
