"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[3980,802,8421,4792,4901,7282],{42625:(e,t,i)=>{i.d(t,{e:()=>r,p:()=>l});var n=i(65043),o=i(96300),a=i(79913),s=i(70579);const l=e=>(0,s.jsx)(a.m.div,{className:"justify-center",...e.animation,children:(0,s.jsx)(o.A,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}),r=e=>{const t=(0,n.useRef)(null),[i,o]=(0,n.useState)(0),[l,r]=(0,n.useState)(0),[c,d]=(0,n.useState)(0),m=(0,n.useRef)({}),p={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((e=>e)),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((e=>e)),")"):e.lineColor};return(0,n.useEffect)((()=>{const t=setInterval((()=>{o((t=>t!==e.data.length-1?t+1:0))}),e.duration);return()=>clearTimeout(t)}),[]),(0,n.useEffect)((()=>{let e=0,i=0;setTimeout((()=>{t.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(t){e=t.clientWidth>e?t.clientWidth:e,i=t.clientHeight>i?t.clientHeight:i})),r(e+10),d(i)}),1e3)}),[]),(0,s.jsx)(a.m.div,{initial:{width:"auto"},animate:{width:l,height:c},ref:t,className:"cd-words-wrapper".concat(i?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:p,children:e.data.map(((t,n)=>(0,s.jsx)("span",{className:"cd-text".concat(i===n?" is-visible":" is-hidden"),ref:e=>m.current[n]=e,children:"type"===e.animation||"flip"===e.animation?t.split("").map(((o,a)=>(0,s.jsx)("i",{className:i===n?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/t.split("").length/2e3*a,"s")},children:o},a))):t},n)))})};l.defaultProps={className:"font-serif"}},24901:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(65043),o=(i(66655),i(61072)),a=i(79913),s=i(35475),l=(i(1912),i(51088)),r=i(59522),c=i(70579);const d=e=>(0,c.jsx)(o.A,{className:" ".concat(e.grid," md:justify-center"),children:e.data.map(((t,i)=>(0,c.jsx)(a.m.div,{className:"project_goal",...e.animation,transition:{delay:i*e.animationDelay,ease:e.animationTransition,duration:e.animationDuration},children:(0,c.jsxs)("div",{className:"rounded-md w-full flex gap-4",children:[(0,c.jsx)(s.N_,{"aria-label":"link for icon",to:"#",children:(0,c.jsx)("i",{className:"goal_icon ".concat(t.icon," text-[#de7a2c]x")})}),(0,c.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,c.jsx)("span",{className:"font-medium titlex text-lg font-serif text-whitex text-[#1c5187]",children:(0,c.jsx)(r.A,{children:t.title})}),t.content&&(0,c.jsx)("p",{className:"text-[#1c5187]x text-lg",children:(0,c.jsx)(r.A,{children:t.content})})]})]})},i)))});d.defaultProps={data:l.NN,animationDelay:.6,animationDuration:.8,animationTransition:"circOut",theme:"icon-with-text-01"};const m=(0,n.memo)(d)},51088:(e,t,i)=>{i.d(t,{G$:()=>o,Gf:()=>r,NN:()=>n,NT:()=>l,Nc:()=>a,Nl:()=>m,Q4:()=>u,UZ:()=>d,Uv:()=>s,Vo:()=>p,zD:()=>c});const n=[{icon:"line-icon-Navigation-LeftWindow text-basecolor text-[40px] text-fastblue",title:"Amazing layouts",content:"Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."},{icon:"line-icon-Cursor-Click2 text-basecolor text-[40px] text-fastblue",title:"No coding required",content:"Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."},{icon:"line-icon-Like-2 text- text-[40px] text-fastblue",title:"Easy to customize",content:"Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."},{icon:"line-icon-Talk-Man text-basecolor text-[40px] text-fastblue",title:"Customer satisfaction",content:"Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."},{icon:"line-icon-Heart text-basecolor text-[40px] text-fastblue",title:"Huge icon collection",content:"Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."},{icon:"line-icon-Gear-2 text-basecolor text-[40px] text-fastblue",title:"Powerfull customize",content:"Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."}],o=[{icon:"line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",title:"Powerfull theme options",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore."},{icon:"line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",title:"Unlimited layouts and styles",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore."},{icon:"line-icon-Archery-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",title:"Developing an effective strategy",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore."},{icon:"line-icon-Female text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",title:"Automated testing and support",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore."}],a=[{icon:"line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#0039e3] via-[#5e28dd] via-[#741bd9] to-[#8600d4] text-[40px]",title:"Amazing layouts",content:"Lorem ipsum is simply dummy text the printing typesetting"},{icon:"line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#0039e3] via-[#5e28dd] via-[#741bd9] to-[#8600d4] text-[40px]",title:"No coding required",content:"Lorem ipsum is simply dummy text the printing typesetting"},{icon:"line-icon-Gear-2 text-gradient bg-gradient-to-r from-[#0039e3] via-[#5e28dd] via-[#741bd9] to-[#8600d4] text-[40px]",title:"Easy to customize",content:"Lorem ipsum is simply dummy text the printing typesetting"},{icon:"line-icon-Talk-Man text-gradient bg-gradient-to-r from-[#0039e3] via-[#5e28dd] via-[#741bd9] to-[#8600d4] text-[40px]",title:"Customer satisfaction",content:"Lorem ipsum is simply dummy text the printing typesetting"}],s=[{icon:"line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Innovative business",content:"Easy to customize"},{icon:"line-icon-Bakelite text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Expertly marketing",content:"High quality services"},{icon:"line-icon-Boy text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Engaging audiences",content:"Build perfect websites"}],l=[{icon:"line-icon-Vector-5",title:"Good design"},{icon:"line-icon-Police",title:"Inspiring ideas"},{icon:"line-icon-Bee",title:"Innovative code"},{icon:"line-icon-Medal-2",title:"Best quality"},{icon:"line-icon-Idea-5",title:"Brand analysis"}],r=[{icon:"line-icon-Android-Store text-fastblue",title:"eCommerce development",content:"Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.",linkTitle:"READ MORE",link:"/page/what-we-offer"},{icon:"line-icon-Bakelite text-fastblue",title:"Design and development",content:"Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt.",linkTitle:"READ MORE",link:"/page/what-we-offer"},{icon:"line-icon-Archery-2 text-fastblue",title:"Social media marketing",content:"Lorem ipsum dolor sit consectetur adipiscing elit eiusmod incididunt. ",linkTitle:"READ MORE",link:"/page/what-we-offer"}],c=[{icon:"line-icon-Money-Bag text-[#2ed47c]",title:"Effective strategy",content:"Lorem ipsum dolor sit amet consectetur adipiscing eiusmod tempor incididunt labore et dolore magna tempor.",linkTitle:"LEARN MORE",link:"/page/our-services"},{icon:"line-icon-Talk-Man text-[#2ed47c]",title:"Customer satisfaction",content:"Lorem ipsum dolor sit amet consectetur adipiscing eiusmod tempor incididunt labore et dolore magna tempor.",linkTitle:"LEARN MORE",link:"/page/our-services"},{icon:"line-icon-Gear-2 text-[#2ed47c]",title:"Powerfull customize",content:"Lorem ipsum dolor sit amet consectetur adipiscing eiusmod tempor incididunt labore et dolore magna tempor. ",linkTitle:"LEARN MORE",link:"/page/our-services"}],d=[{icon:"line-icon-Cursor-Click2",title:"Powerfull options",content:"Lorem ipsum dolor consectet eiusmod tempor incididunt"},{icon:"line-icon-Sand-watch2",title:"Unlimited variations",content:"Lorem ipsum dolor consectet eiusmod tempor incididunt"},{icon:"line-icon-Idea-5",title:"Effective strategy",content:"Lorem ipsum dolor consectet eiusmod tempor incididunt "}],m=[{icon:"feather-monitor text-gradient bg-gradient-to-r from-[#ec606c] via-[#ee6362] via-[#ee6757] via-[#ed6c4d] to-[#eb7274]",title:"Online marketing"},{icon:"feather-clock text-gradient bg-gradient-to-r from-[#ec606c] via-[#ee6362] via-[#ee6757] via-[#ed6c4d] to-[#eb7274]",title:"Real time analytics"},{icon:"feather-thumbs-up text-gradient bg-gradient-to-r from-[#ec606c] via-[#ee6362] via-[#ee6757] via-[#ed6c4d] to-[#eb7274]",title:"Boost performance"},{icon:"feather-globe text-gradient bg-gradient-to-r from-[#ec606c] via-[#ee6362] via-[#ee6757] via-[#ed6c4d] to-[#eb7274]",title:"Google advertising"}],p=[{icon:"line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Amazing layouts",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"No coding required",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Like-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Easy to customize",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Talk-Man text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Customer satisfaction",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Heart text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Huge icon collection",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-One-FingerTouch text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]",title:"Responsive layout",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."}],u=[{icon:"line-icon-Cursor-Click2  text-fastblue",title:"Consulting services",content:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum text"},{icon:"line-icon-Archery-2 text-fastblue",title:"Digital marketing",content:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum text"},{icon:"line-icon-Medal-2 text-fastblue",title:"Branding identity",content:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum text"}]},78379:(e,t,i)=>{i.d(t,{A:()=>N});var n=i(65043),o=i(98139),a=i.n(o),s=i(79106),l=i(71456),r=i(67852),c=i(4488),d=i(70579);const m=(0,c.A)("h4");m.displayName="DivStyledAsH4";const p=n.forwardRef(((e,t)=>{let{className:i,bsPrefix:n,as:o=m,...s}=e;return n=(0,r.oU)(n,"alert-heading"),(0,d.jsx)(o,{ref:t,className:a()(i,n),...s})}));p.displayName="AlertHeading";const u=p;var x=i(56161);const f=n.forwardRef(((e,t)=>{let{className:i,bsPrefix:n,as:o=x.A,...s}=e;return n=(0,r.oU)(n,"alert-link"),(0,d.jsx)(o,{ref:t,className:a()(i,n),...s})}));f.displayName="AlertLink";const g=f;var h=i(18072),y=i(85632);const b=n.forwardRef(((e,t)=>{const{bsPrefix:i,show:n=!0,closeLabel:o="Close alert",closeVariant:c,className:m,children:p,variant:u="primary",onClose:x,dismissible:f,transition:g=h.A,...b}=(0,s.Zw)(e,{show:"onClose"}),v=(0,r.oU)(i,"alert"),w=(0,l.A)((e=>{x&&x(!1,e)})),N=!0===g?h.A:g,j=(0,d.jsxs)("div",{role:"alert",...N?void 0:b,ref:t,className:a()(m,v,u&&"".concat(v,"-").concat(u),f&&"".concat(v,"-dismissible")),children:[f&&(0,d.jsx)(y.A,{onClick:w,"aria-label":o,variant:c}),p]});return N?(0,d.jsx)(N,{unmountOnExit:!0,...b,ref:void 0,in:n,children:j}):n?j:null}));b.displayName="Alert";const v=Object.assign(b,{Link:g,Heading:u}),w=e=>{const[t,i]=(0,n.useState)(!0);if(t)return(0,d.jsx)(v,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:()=>i(!1),dismissible:e.dismissible,children:e.message})};w.defaultProps={className:"",theme:"message-box01"};const N=(0,n.memo)(w)},24792:(e,t,i)=>{i.d(t,{Ce:()=>l,Rg:()=>g,U6:()=>x,cR:()=>f,gy:()=>c,jl:()=>u,ke:()=>m,nF:()=>a,qG:()=>o,tE:()=>s,xs:()=>d,z7:()=>r,z9:()=>p});const n=window.innerWidth<768,o=n?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},a=n?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},s=n?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},l=n?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},r=n?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},c=n?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=n?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},m=n?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},p=n?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},u=n?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},x=n?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},f=n?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},g=n?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},30802:(e,t,i)=>{i.r(t),i.d(t,{InputField:()=>m,SetHeaderMenuPos:()=>x,addZeroBeforeNumber:()=>r,getCookie:()=>s,getParents:()=>l,initializeIsotop:()=>d,initializeSwiper:()=>c,resetForm:()=>u,sendEmail:()=>p,setDocumentFullHeight:()=>f});var n=i(69437),o=i.n(n),a=i(38906);const s=e=>{for(var t=document.cookie.split(";"),i=0;i<t.length;i++){var n=t[i].split("=");if(e===n[0].trim())return decodeURIComponent(n[1])}return null},l=e=>{for(var t=[];e.parentNode&&"body"!==e.parentNode.nodeName.toLowerCase();)e=e.parentNode,t.push(e);return t},r=e=>e>9?e:"0".concat(e),c=(e,t)=>{const i=new a.Ay(e,t);return i.init(),i},d=e=>{let t=e.closest(".grid-wrapper").querySelector(".filter-menu");const i=new(o())(e,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}});return setTimeout((()=>{i.arrange({filter:"*"})}),1e3),t&&t.querySelectorAll("li").forEach((e=>{e.querySelector("span").addEventListener("click",(function(e){let n=e.target,o=n.getAttribute("data-filter");t.querySelectorAll("li").forEach((e=>e.classList.remove("active"))),n.closest("li").classList.add("active"),i.arrange({filter:"*"===o?"*":".".concat(o)})}))})),i},m=e=>{document.querySelectorAll(".quantity").forEach((t=>{let i=e||0,n=t.querySelector(".qty-text"),o=t.querySelector(".qty-plus"),a=t.querySelector(".qty-minus");o.addEventListener("click",(()=>{i+=1,n.setAttribute("value",i)})),a.addEventListener("click",(()=>{i=i>0?i-1:0,n.setAttribute("value",i)})),n.setAttribute("value",i)}))},p=async e=>{const t=await fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL,"/send"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>e));return await t},u=(e,t)=>{e&&(e.resetForm(),e.setStatus(!0),e.setSubmitting(!1),setTimeout((()=>e.setStatus(!1)),5e3)),t&&(t.current.reset(),t.current.captcha.classList.remove("error"))},x=()=>{function e(){let e=document.querySelectorAll(".megamenu");e.length>0&&e.forEach((e=>{let t=e.clientWidth,i=e.getBoundingClientRect().left;i+t>=window.screen.width&&(e.style.left="-".concat(i+t-window.innerWidth+25,"px"))}))}function t(){let e=document.querySelectorAll(".simple-dropdown-menu");"undefined"!=typeof e&&null!=e&&e.forEach((e=>{let t=e.getBoundingClientRect().left,i=e.getBoundingClientRect().top,n=e.clientWidth,o=e.clientHeight;t+n+10>window.innerWidth&&(e.style.left="".concat(window.innerWidth-(t+n+10),"px"),e.classList.add("menu-left")),i+o>window.innerHeight&&(e.style.transform="translateY(".concat(-(i+o-window.innerHeight),"px)"))}))}e(),t(),window.addEventListener("resize",(i=>{setTimeout((()=>{e(),t()}),500)}))},f=()=>{const e=()=>{document.documentElement.style.setProperty("--viewport-height","".concat(window.innerHeight,"px"))};window.addEventListener("resize",e),e()}},11937:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});i(65043);var n=i(24792),o=i(1912),a=i(71991),s=i(59425),l=i(24901),r=i(42625),c=i(52972),d=i(56789),m=i(78379),p=i(37531),u=i(63121),x=i(18604),f=i(30802),g=i(73033),h=i(19268),y=i(78602),b=i(36061),v=i(53519),w=i(61072),N=i(35475),j=i(63516),k=i(82752),A=i(79913),L=i(70579);const E=[{icon:"line-icon-Money-Bag text-[#828282] text-[40px]",title:"Effective strategy",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor."},{icon:"line-icon-Gear-2 text-[40px] text-[#828282]",title:"Powerfull customize",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor."},{icon:"line-icon-Talk-Man text-[40px] text-[#828282]",title:"Customer satisfaction",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor."},{icon:"line-icon-Cursor-Click2 text-[40px] text-[#828282]",title:"No coding required",content:"Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor."}],C=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],S=e=>(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("div",{style:e.style,children:[(0,L.jsx)(s.Ay,{className:"headerwithpush-header",topSpace:{md:!0},type:"reverse-scroll",children:(0,L.jsxs)(s.zr,{theme:"dark",fluid:"fluid",expand:"lg",containerClass:"sm:px-0",className:"py-[0px] px-[35px] border-b border-[#ffffff1a] md:pr-[15px] md:pl-0",children:[(0,L.jsx)(y.A,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,L.jsx)(N.N_,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,L.jsxs)(b.A.Brand,{className:"inline-block p-0 m-0",children:[(0,L.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,L.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,L.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,L.jsxs)(b.A.Toggle,{className:"order-last md:ml-[25px] sm:ml-[15px]",children:[(0,L.jsx)("span",{className:"navbar-toggler-line"}),(0,L.jsx)("span",{className:"navbar-toggler-line"}),(0,L.jsx)("span",{className:"navbar-toggler-line"}),(0,L.jsx)("span",{className:"navbar-toggler-line"})]}),(0,L.jsx)(b.A.Collapse,{className:"col-auto menu-order px-lg-0 justify-end",children:(0,L.jsx)(s.W1,{...e})}),(0,L.jsxs)(y.A,{className:"col-auto text-end hidden-xs pe-0 font-size-0",children:[(0,L.jsx)(s.IW,{className:"xs:pl-[15px]"}),(0,L.jsx)(s.WD,{className:"xs:pl-[15px]"}),(0,L.jsx)("span",{className:"md:hidden pl-[17px]",children:(0,L.jsx)(s.Rt,{className:"",theme:"dark",children:(0,L.jsx)(y.A,{className:"flex flex-col justify-center px-[50px] py-[70px] w-[500px] h-[100vh] shadow-[0_0_20px_rgba(0,0,0,0.3)] right-0 text-center bg-white",children:(0,L.jsx)(u.A,{className:"pl-[15px]",theme:"dark",children:(0,L.jsxs)("div",{children:[(0,L.jsx)("h1",{className:"mb-0 font-bold tracking-[-3px] text-darkgray tracking-[-3px] font-serif uppercase",children:"Hello"}),(0,L.jsx)("p",{className:"text-lg text-fastblue font-serif uppercase block",children:"Let's be friends."}),(0,L.jsx)("div",{className:"my-20 w-full",children:(0,L.jsx)(x.A,{})}),(0,L.jsxs)("div",{className:"mb-20 text-center",children:[(0,L.jsx)("p",{className:"w-[70%] mb-12 text-darkgray leading-[26px] text-lg font-serif mx-auto inline-block",children:"Get latest update for our trusted applications"}),(0,L.jsx)(j.l1,{initialValues:{email:""},validationSchema:g.Ik().shape({email:g.Yj().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,t)=>{t.setSubmitting(!0);"success"===(await(0,f.sendEmail)(e)).status&&(0,f.resetForm)(t)},children:e=>{let{isSubmitting:t,status:i}=e;return(0,L.jsxs)("div",{className:"relative subscribe-style-05",children:[(0,L.jsxs)(j.lV,{className:"relative",children:[(0,L.jsx)(c.pd,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] medium-input rounded-[5px] border-solid border-[#dfdfdf]",placeholder:"Enter your email address"}),(0,L.jsxs)("button",{"aria-label":"Subscribe",type:"submit",className:"text-xs leading-[18px] py-[12px] px-[28px] uppercase xs:text-center".concat(t?" loading":""),children:[(0,L.jsx)("i",{className:"far fa-envelope text-fastblue text-sm leading-none mr-[10px] xs:mr-0"}),"Subscribe"]})]}),(0,L.jsx)(k.N,{children:i&&(0,L.jsx)(A.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] top-[115%] left-0 w-full",children:(0,L.jsx)(m.A,{className:"rounded-[4px] text-md py-[10px] px-[22px] z-10",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]}),(0,L.jsx)("div",{className:"mb-[10px] text-center",children:(0,L.jsx)(d.A,{theme:"social-icon-style-01",size:"sm",iconColor:"dark",data:C})})]})})})})})]})]})}),(0,L.jsx)(p.default,{}),(0,L.jsxs)("div",{className:"full-screen relative overflow-hidden landscape:md:h-[600px]",children:[(0,L.jsx)(h.kQ,{className:"lg-no-parallax bg-cover absolute top-[0px] left-0 w-full h-[100vh] bg-center md:top-[-30px] landscape:md:h-[600px]",translateY:[-40,40],style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"}}),(0,L.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"}),(0,L.jsx)(v.A,{className:"relative h-[100vh] flex items-center justify-center landscape:md:h-[600px]",children:(0,L.jsx)(w.A,{className:"justify-center items-center",children:(0,L.jsx)(y.A,{className:"z-0 text-center justify-center full-screen flex-col col-12 col-xl-8 col-md-10 col-lg-9 flex landscape:md:h-[600px]",children:(0,L.jsx)(r.p,{children:(0,L.jsxs)("div",{className:"relative p-[7.5rem] rounded-[6px] bg-black lg:p-[4.5rem] xs:p-[22px]",children:[(0,L.jsx)("i",{className:"line-icon-French-Fries inline-block mb-14 text-white text-[70px] leading-[80px]"}),(0,L.jsx)("h1",{className:"mb-14 bg-center font-semibold tracking-[-4px] text-neonorange text-[100px] leading-[95px] font-serif uppercase mx-auto lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:-tracking-[1px] image-mask xs:w-[90%] xs:mx-auto xxs:w-full",style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"},children:" DELICIOUS COOKING"}),(0,L.jsx)("span",{className:"font-medium tracking-[3px] text-md text-serif uppercase block",children:"EXPERIENCE THE TASTE OF ITALY"})]})})})})})]}),(0,L.jsx)("section",{className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,L.jsx)(v.A,{children:(0,L.jsxs)(w.A,{className:"justify-center",children:[(0,L.jsxs)(A.m.div,{className:"flex flex-col md:mb-24 col-xl-3 col-lg-4 col-sm-7",...n.qG,children:[(0,L.jsx)("div",{className:"mb-[20px] md:text-center sm:mb-[10px]",children:(0,L.jsx)("span",{className:"font-serif text-md uppercase font-medium text-[#828282]",children:"About company"})}),(0,L.jsx)("h5",{className:"alt-font text-darkgray font-semibold font-serif mb-[20px] md:text-center md:mb-[30px] xs:w-[90%] xs:mx-auto",children:"We combine design, thinking and technical"}),(0,L.jsx)("div",{className:"mt-auto mx-auto mx-lg-0",children:(0,L.jsx)(o.A,{ariaLabel:"link for",to:"/",className:"btn-fill btn-fancy rounded-none mt-[82px] tracking-[1px] font-medium font-serif uppercase md:my-0",themeColor:"#232323",color:"#fff",size:"sm",title:"Discover litho"})})]}),(0,L.jsx)("div",{className:"col-xl-7 col-lg-8 offset-xl-2",children:(0,L.jsx)(l.default,{grid:"row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[60px] sm:gap-y-[30px] xs:gap-y-[40px]",theme:"icon-with-text-01",data:E,animation:n.qG,animationDelay:.2})})]})})}),(0,L.jsx)(a.A,{theme:"dark",className:"bg-darkgray"})]})})},61072:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(98139),o=i.n(n),a=i(65043),s=i(67852),l=i(70579);const r=a.forwardRef(((e,t)=>{let{bsPrefix:i,className:n,as:a="div",...r}=e;const c=(0,s.oU)(i,"row"),d=(0,s.gy)(),m=(0,s.Jm)(),p="".concat(c,"-cols"),u=[];return d.forEach((e=>{const t=r[e];let i;delete r[e],null!=t&&"object"===typeof t?({cols:i}=t):i=t;const n=e!==m?"-".concat(e):"";null!=i&&u.push("".concat(p).concat(n,"-").concat(i))})),(0,l.jsx)(a,{ref:t,...r,className:o()(n,c,...u)})}));r.displayName="Row";const c=r},66655:()=>{}}]);
//# sourceMappingURL=3980.9f23ea86.chunk.js.map