"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6503,4792],{42625:(e,t,i)=>{i.d(t,{e:()=>r,p:()=>c});var a=i(65043),l=i(96300),s=i(79913),o=i(70579);const c=e=>(0,o.jsx)(s.m.div,{className:"justify-center",...e.animation,children:(0,o.jsx)(l.A,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}),r=e=>{const t=(0,a.useRef)(null),[i,l]=(0,a.useState)(0),[c,r]=(0,a.useState)(0),[n,d]=(0,a.useState)(0),p=(0,a.useRef)({}),m={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((e=>e)),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((e=>e)),")"):e.lineColor};return(0,a.useEffect)((()=>{const t=setInterval((()=>{l((t=>t!==e.data.length-1?t+1:0))}),e.duration);return()=>clearTimeout(t)}),[]),(0,a.useEffect)((()=>{let e=0,i=0;setTimeout((()=>{t.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(t){e=t.clientWidth>e?t.clientWidth:e,i=t.clientHeight>i?t.clientHeight:i})),r(e+10),d(i)}),1e3)}),[]),(0,o.jsx)(s.m.div,{initial:{width:"auto"},animate:{width:c,height:n},ref:t,className:"cd-words-wrapper".concat(i?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:m,children:e.data.map(((t,a)=>(0,o.jsx)("span",{className:"cd-text".concat(i===a?" is-visible":" is-hidden"),ref:e=>p.current[a]=e,children:"type"===e.animation||"flip"===e.animation?t.split("").map(((l,s)=>(0,o.jsx)("i",{className:i===a?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/t.split("").length/2e3*s,"s")},children:l},s))):t},a)))})};c.defaultProps={className:"font-serif"}},876:(e,t,i)=>{i.d(t,{A:()=>m});var a=i(65043),l=i(35475),s=i(79913),o=i(34671),c=i(38906),r=i(50498),n=i(46246),d=i(70579);const p=e=>{const t=(0,a.useRef)(),n=(0,a.useRef)(),[p,m]=(0,a.useState)(!0);(0,a.useEffect)((()=>{if(!0!==e.carousel){let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.all([i.e(9437),i.e(8421)]).then(i.bind(i,30802)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>m(!1)))}))}))}}),[]);return(0,d.jsxs)("div",{className:"grid-wrapper",children:[(0,d.jsx)(r.A,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),!0===e.carousel?(0,d.jsx)(o.RC,{modules:[c.dK,c.Ij],...e.carouselOption,className:"".concat(e.className?" ".concat(e.className):""),ref:n,children:e.data.map(((t,i)=>(0,d.jsx)(o.qr,{children:(0,d.jsx)(s.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,d.jsx)(l.N_,{"aria-label":"link for filter content",target:e.target,to:t.link,children:(0,d.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[i]:e.overlay},children:(0,d.jsxs)("div",{className:"portfolio-image",children:[t.img&&(0,d.jsx)("img",{className:"w-full",src:t.img,height:675,width:540,alt:"portfolio-colorful"}),(0,d.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,d.jsxs)("div",{className:"portfolio-content",children:[t.subtitle&&(0,d.jsx)("span",{className:"text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:t.subtitle}),t.title&&(0,d.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:t.title})]}),(0,d.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},i)))}):(0,d.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(p?" loading":""),children:[(0,d.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,i)=>(0,d.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category?t.category.toString().split(",").join(" ").toLowerCase():""),children:(0,d.jsx)(s.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:!p&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,d.jsx)(l.N_,{"aria-label":"link for filter content",to:t.link,children:(0,d.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[i]:e.overlay},children:(0,d.jsxs)("div",{className:"portfolio-image",children:[t.img&&(0,d.jsx)("img",{className:"w-full",height:572,width:458,src:t.img,alt:"portfolio-box"}),(0,d.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,d.jsxs)("div",{className:"portfolio-content",children:[t.subtitle&&(0,d.jsx)("span",{className:" text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:t.subtitle}),t.title&&(0,d.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:t.title})]}),(0,d.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},i)))]})]})};p.defaultProps={data:n.bT};const m=(0,a.memo)(p)},24792:(e,t,i)=>{i.d(t,{Ce:()=>c,Rg:()=>u,U6:()=>h,cR:()=>g,gy:()=>n,jl:()=>x,ke:()=>p,nF:()=>s,qG:()=>l,tE:()=>o,xs:()=>d,z7:()=>r,z9:()=>m});const a=window.innerWidth<768,l=a?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},s=a?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},o=a?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},c=a?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},r=a?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},n=a?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=a?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},p=a?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},m=a?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},x=a?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},h=a?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},g=a?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},u=a?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},11162:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});i(65043);var a=i(78602),l=i(36061),s=i(53519),o=i(61072),c=i(35475),r=i(19268),n=i(79913),d=i(19473),p=i(59425),m=i(876),x=i(71991),h=i(42625),g=i(24792),u=i(37531),f=i(70579);const y=[{icon:"feather-life-buoy",title:"Digital branding"},{icon:"feather-briefcase",title:"BRAND STRATEGY"},{icon:"feather-globe",title:"WEBSITE DESIGNING"},{icon:"feather-shopping-bag",title:"ECOMMERCE TOOL"}],w=[{title:"Mongolish",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-01",double_col:!0},{title:"Masscoating",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Photography",link:"/portfolio/single-project-page-02"},{title:"Cortifiel",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-03"},{title:"Everyday",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-04",double_col:!0},{title:"Scandinavian",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-05"},{title:"The Simplest",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Website",link:"/portfolio/single-project-page-01"}],b=e=>(0,f.jsxs)("div",{style:e.style,children:[(0,f.jsx)(p.Ay,{type:"responsive-sticky",children:(0,f.jsxs)(p.zr,{fluid:"fluid",theme:"dark",bg:"black",menu:"light",className:"px-[35px] py-[0px] md:!py-0 md:px-0",children:[(0,f.jsx)(a.A,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,f.jsx)(c.N_,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,f.jsxs)(l.A.Brand,{className:"inline-block p-0 m-0",children:[(0,f.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,f.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,f.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"})]})})}),(0,f.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,f.jsxs)(l.A.Toggle,{className:"md:ml-[10px]",children:[(0,f.jsx)("span",{className:"navbar-toggler-line"}),(0,f.jsx)("span",{className:"navbar-toggler-line"}),(0,f.jsx)("span",{className:"navbar-toggler-line"}),(0,f.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,f.jsx)(l.A.Collapse,{className:"col-auto pe-0 justify-end",children:(0,f.jsx)(p.W1,{...e})}),(0,f.jsxs)(a.A,{className:"col-auto text-right pe-0 !pl-0",children:[(0,f.jsx)(p.IW,{className:"!pl-[7px] xs:pl-[15px] pr-0"}),(0,f.jsx)(p.WD,{className:"xs:pl-[15px]"}),(0,f.jsx)(p.sS,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,f.jsx)(u.default,{}),(0,f.jsxs)("div",{className:"full-screen relative overflow-hidden md:h-[650px] sm:h-[400px]",children:[(0,f.jsx)(r.kQ,{className:"lg-no-parallax bg-cover bg-right cover-background absolute top-[1px] left-0 w-full h-[100vh] sm:h-[50vh] md:top-[-60px]",translateY:[-40,40],style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"}}),(0,f.jsx)("div",{style:{backgroundImage:"url(https://via.placeholder.com/1920x1081)"},className:"absolute left-0 top-0 bg-no-repeat bg-center bg-cover w-full h-full overflow-hidden"}),(0,f.jsx)("div",{className:"flex items-center h-full",children:(0,f.jsx)(s.A,{className:"relative",children:(0,f.jsx)(o.A,{className:"items-center",children:(0,f.jsx)(a.A,{lg:5,md:6,sm:7,className:"py-[8rem] md:flex md:items-center",children:(0,f.jsx)("h1",{className:"font-serif font-semibold text-[100px] leading-[95px] tracking-[-4px] text-white mb-0 lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:tracking-[-.5px] xs:w-[65%]",children:"We are creative agency"})})})})}),(0,f.jsx)("div",{className:"scroll-down-bottom absolute bottom-[30px] w-auto left-0 right-0 z-[1]",children:(0,f.jsx)(d.N_,{to:"about",offset:0,delay:0,spy:!0,smooth:!0,duration:800,className:"section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute hover:text-white cursor-pointer",children:(0,f.jsx)("span",{className:"scroll-down-text absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0]",children:"scroll"})})})]}),(0,f.jsx)("section",{id:"about",className:"py-[160px] bg-black overflow-hidden lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[50px]",children:(0,f.jsxs)(s.A,{children:[(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{xl:4,lg:5,md:6,children:(0,f.jsxs)(n.m.h4,{className:"font-serif font-semibold text-white -tracking-[1px] sm:text-center xxs:mb-[45px]",...g.qG,children:[(0,f.jsx)("span",{className:"block p-0 sm:text-center tracking-[-1px]",children:"A creative agency specialized in web"}),(0,f.jsx)(h.e,{duration:3e3,color:"#fff",className:"rotate-text text-left sm:text-center font-semibold my-0 mx-auto",animation:"slide",data:["strategy creation","customize tools","generated revenue"]})]})}),(0,f.jsxs)(n.m.div,{className:"sm:text-center col-xl-5 col-md-6 offset-xl-2 offset-lg-1",...g.qG,transition:{delay:.5},children:[(0,f.jsx)("span",{className:"font-serif font-semibold text-white uppercase block mb-[15px]",children:"About litho web agency"}),(0,f.jsx)("p",{className:"text-xmd w-[95%] leading-[36px] md:w-full",children:"With years of experience in the website design and development industry pride ourselves on creating unique, creative and quality designs that are developed upon the latest modern coding and developing techniques."})]})]}),(0,f.jsx)(o.A,{className:"row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-36 justify-center md:mt-24 landscape:md:mt-12 xs:mt-[65px] gap-y-10",children:y.map(((e,t)=>(0,f.jsx)(n.m.div,{...g.qG,transition:{delay:.2*t},children:(0,f.jsxs)("div",{className:"flex justify-center items-center h-full",children:[(0,f.jsx)("i",{className:"".concat(e.icon," align-middle text-[28px] text-white mr-[15px]")}),(0,f.jsx)("span",{className:"font-serif font-semibold uppercase",children:e.title})]})},t)))})]})}),(0,f.jsx)("section",{className:"bg-black",children:(0,f.jsx)(s.A,{fluid:!0,children:(0,f.jsx)(o.A,{children:(0,f.jsx)(a.A,{className:"sm:px-0",children:(0,f.jsx)(m.A,{className:"m-0",overlay:"#232323e6",grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:w})})})})}),(0,f.jsx)(x.A,{theme:"dark",className:"bg-black text-[#828282]"})]})}}]);
//# sourceMappingURL=6503.0fb25816.chunk.js.map