"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8421,802],{30802:(e,t,n)=>{n.r(t),n.d(t,{InputField:()=>u,SetHeaderMenuPos:()=>h,addZeroBeforeNumber:()=>s,getCookie:()=>l,getParents:()=>c,initializeIsotop:()=>d,initializeSwiper:()=>a,resetForm:()=>p,sendEmail:()=>m,setDocumentFullHeight:()=>w});var r=n(69437),i=n.n(r),o=n(38906);const l=e=>{for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e===r[0].trim())return decodeURIComponent(r[1])}return null},c=e=>{for(var t=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,t.push(e);return t},s=e=>e>9?e:"0".concat(e),a=(e,t)=>{const n=new o.Ay(e,t);return n.init(),n},d=e=>{let t=e.closest(".grid-wrapper").querySelector(".filter-menu");const n=new(i())(e,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}});return setTimeout((()=>{n.arrange({filter:"*"})}),1e3),t&&t.querySelectorAll("li").forEach((e=>{e.querySelector("span").addEventListener("click",(function(e){let r=e.target,i=r.getAttribute("data-filter");t.querySelectorAll("li").forEach((e=>e.classList.remove("active"))),r.closest("li").classList.add("active"),n.arrange({filter:"*"===i?"*":".".concat(i)})}))})),n},u=e=>{document.querySelectorAll(".quantity").forEach((t=>{let n=e||0,r=t.querySelector(".qty-text"),i=t.querySelector(".qty-plus"),o=t.querySelector(".qty-minus");i.addEventListener("click",(()=>{n+=1,r.setAttribute("value",n)})),o.addEventListener("click",(()=>{n=n>0?n-1:0,r.setAttribute("value",n)})),r.setAttribute("value",n)}))},m=async e=>{const t=await fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL,"/send"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>e));return await t},p=(e,t)=>{e&&(e.resetForm(),e.setStatus(!0),e.setSubmitting(!1),setTimeout((()=>e.setStatus(!1)),5e3)),t&&(t.current.reset(),t.current.captcha.classList.remove("error"))},h=()=>{function e(){let e=document.querySelectorAll(".megamenu");e.length>0&&e.forEach((e=>{let t=e.clientWidth,n=e.getBoundingClientRect().left;n+t>=window.screen.width&&(e.style.left="-".concat(n+t-window.innerWidth+25,"px"))}))}function t(){let e=document.querySelectorAll(".simple-dropdown-menu");"undefined"!=typeof e&&null!=e&&e.forEach((e=>{let t=e.getBoundingClientRect().left,n=e.getBoundingClientRect().top,r=e.clientWidth,i=e.clientHeight;t+r+10>window.innerWidth&&(e.style.left="".concat(window.innerWidth-(t+r+10),"px"),e.classList.add("menu-left")),n+i>window.innerHeight&&(e.style.transform="translateY(".concat(-(n+i-window.innerHeight),"px)"))}))}e(),t(),window.addEventListener("resize",(n=>{setTimeout((()=>{e(),t()}),500)}))},w=()=>{const e=()=>{document.documentElement.style.setProperty("--viewport-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",e),e()}}}]);
//# sourceMappingURL=8421.149f6488.chunk.js.map