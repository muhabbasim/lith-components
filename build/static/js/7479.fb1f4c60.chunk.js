"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[7479,4792],{42625:(e,t,i)=>{i.d(t,{e:()=>c,p:()=>o});var l=i(65043),a=i(96300),s=i(79913),r=i(70579);const o=e=>(0,r.jsx)(s.m.div,{className:"justify-center",...e.animation,children:(0,r.jsx)(a.A,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}),c=e=>{const t=(0,l.useRef)(null),[i,a]=(0,l.useState)(0),[o,c]=(0,l.useState)(0),[n,d]=(0,l.useState)(0),p=(0,l.useRef)({}),m={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((e=>e)),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((e=>e)),")"):e.lineColor};return(0,l.useEffect)((()=>{const t=setInterval((()=>{a((t=>t!==e.data.length-1?t+1:0))}),e.duration);return()=>clearTimeout(t)}),[]),(0,l.useEffect)((()=>{let e=0,i=0;setTimeout((()=>{t.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(t){e=t.clientWidth>e?t.clientWidth:e,i=t.clientHeight>i?t.clientHeight:i})),c(e+10),d(i)}),1e3)}),[]),(0,r.jsx)(s.m.div,{initial:{width:"auto"},animate:{width:o,height:n},ref:t,className:"cd-words-wrapper".concat(i?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:m,children:e.data.map(((t,l)=>(0,r.jsx)("span",{className:"cd-text".concat(i===l?" is-visible":" is-hidden"),ref:e=>p.current[l]=e,children:"type"===e.animation||"flip"===e.animation?t.split("").map(((a,s)=>(0,r.jsx)("i",{className:i===l?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/t.split("").length/2e3*s,"s")},children:a},s))):t},l)))})};o.defaultProps={className:"font-serif"}},876:(e,t,i)=>{i.d(t,{A:()=>m});var l=i(65043),a=i(35475),s=i(79913),r=i(34671),o=i(38906),c=i(50498),n=i(46246),d=i(70579);const p=e=>{const t=(0,l.useRef)(),n=(0,l.useRef)(),[p,m]=(0,l.useState)(!0);(0,l.useEffect)((()=>{if(!0!==e.carousel){let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.all([i.e(9437),i.e(8421)]).then(i.bind(i,30802)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>m(!1)))}))}))}}),[]);return(0,d.jsxs)("div",{className:"grid-wrapper",children:[(0,d.jsx)(c.A,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),!0===e.carousel?(0,d.jsx)(r.RC,{modules:[o.dK,o.Ij],...e.carouselOption,className:"".concat(e.className?" ".concat(e.className):""),ref:n,children:e.data.map(((t,i)=>(0,d.jsx)(r.qr,{children:(0,d.jsx)(s.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,d.jsx)(a.N_,{"aria-label":"link for filter content",target:e.target,to:t.link,children:(0,d.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[i]:e.overlay},children:(0,d.jsxs)("div",{className:"portfolio-image",children:[t.img&&(0,d.jsx)("img",{className:"w-full",src:t.img,height:675,width:540,alt:"portfolio-colorful"}),(0,d.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,d.jsxs)("div",{className:"portfolio-content",children:[t.subtitle&&(0,d.jsx)("span",{className:"text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:t.subtitle}),t.title&&(0,d.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:t.title})]}),(0,d.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},i)))}):(0,d.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(p?" loading":""),children:[(0,d.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,i)=>(0,d.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category?t.category.toString().split(",").join(" ").toLowerCase():""),children:(0,d.jsx)(s.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:!p&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,d.jsx)(a.N_,{"aria-label":"link for filter content",to:t.link,children:(0,d.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[i]:e.overlay},children:(0,d.jsxs)("div",{className:"portfolio-image",children:[t.img&&(0,d.jsx)("img",{className:"w-full",height:572,width:458,src:t.img,alt:"portfolio-box"}),(0,d.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,d.jsxs)("div",{className:"portfolio-content",children:[t.subtitle&&(0,d.jsx)("span",{className:" text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:t.subtitle}),t.title&&(0,d.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:t.title})]}),(0,d.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},i)))]})]})};p.defaultProps={data:n.bT};const m=(0,l.memo)(p)},24792:(e,t,i)=>{i.d(t,{Ce:()=>o,Rg:()=>g,U6:()=>h,cR:()=>f,gy:()=>n,jl:()=>x,ke:()=>p,nF:()=>s,qG:()=>a,tE:()=>r,xs:()=>d,z7:()=>c,z9:()=>m});const l=window.innerWidth<768,a=l?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},s=l?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},r=l?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},o=l?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},c=l?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},n=l?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=l?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},p=l?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},m=l?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},x=l?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},h=l?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},f=l?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},g=l?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},15802:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});i(65043);var l=i(34671),a=i(38906),s=i(78602),r=i(36061),o=i(61072),c=i(53519),n=i(35475),d=i(79913),p=i(59425),m=i(876),x=i(71991),h=i(63121),f=i(42625),g=i(24792),u=i(37531),b=i(70579);const w=[{img:"https://via.placeholder.com/1920x1160",title:"Black",subtitle:"shade",link:"/portfolio/single-project-page-01"},{img:"https://via.placeholder.com/1920x1160",title:"Browne",subtitle:"coffee",link:"/portfolio/single-project-page-02"},{img:"https://via.placeholder.com/1920x1160",title:"Nature",subtitle:"travel",link:"/portfolio/single-project-page-03"}],j=[{icon:"feather-life-buoy",title:"Digital branding"},{icon:"feather-briefcase",title:"BRAND STRATEGY"},{icon:"feather-globe",title:"WEBSITE DESIGNING"},{icon:"feather-shopping-bag",title:"ECOMMERCE TOOL"}],y=[{title:"Mongolish",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-01",double_col:!0},{title:"Masscoating",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Photography",link:"/portfolio/single-project-page-02"},{title:"Cortifiel",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-03"},{title:"Everyday",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-04",double_col:!0},{title:"Scandinavian",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-05"},{title:"The Simplest",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Website",link:"/portfolio/single-project-page-01"}],N=e=>(0,b.jsxs)("div",{style:e.style,children:[(0,b.jsx)(p.Ay,{topSpace:{md:!0},className:"absolute top-0 left-0 w-full z-10 md:py-0",children:(0,b.jsxs)(p.zr,{fluid:"fluid",theme:"dark",expand:"lg",containerClass:"sm:px-0",className:"px-[35px] md:px-0 h-[100px] md:h-[70px]",children:[(0,b.jsx)(s.A,{className:"col-auto col-sm-6 col-lg-2 mr-auto ps-lg-0",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/",className:"flex items-center",children:(0,b.jsxs)(r.A.Brand,{className:"inline-block p-0 m-0",children:[(0,b.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,b.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,b.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"})]})})}),(0,b.jsx)(s.A,{className:"col-auto pr-0 flex",children:(0,b.jsx)(p.Rt,{theme:"light",className:"h-[100vh] w-[50vw] xl:w-[60vw] lg:w-[70vw] md:w-[50vw] sm:w-[100vw]",children:(0,b.jsxs)(o.A,{className:"h-full mx-0",children:[(0,b.jsx)(s.A,{className:"col-6 bg-no-repeat bg-cover overflow-hidden relative bg-center md:hidden",style:{backgroundImage:'url("https://via.placeholder.com/800x1200")'}}),(0,b.jsx)(s.A,{lg:6,className:"p-0",children:(0,b.jsxs)(o.A,{className:"h-full flex-col p-[5.5rem] landscape:md:py-[2.5rem] landscape:md:h-[100vh] mx-0 items-center justify-around xs:p-[3rem] bg-black",children:[(0,b.jsx)(s.A,{xs:12,className:"hamburgermenu-modern-page landscape:md:mt-0 text-left h-auto px-0 max-h-[calc(65vh-100px)] xs:max-h-[calc(100vh-60px)]",children:(0,b.jsx)(h.A,{className:"h-full",autoHide:!0,children:(0,b.jsx)("div",{children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{className:"py-[13px] px-0 relative sm:text-center",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/",children:"home"})}),(0,b.jsx)("li",{className:"py-[13px] px-0 relative sm:text-center",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/page/about-us",children:"about"})}),(0,b.jsx)("li",{className:"py-[13px] px-0 relative sm:text-center",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/page/our-services",children:"services"})}),(0,b.jsx)("li",{className:"py-[13px] px-0 relative sm:text-center",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/portfolio/portfolio-colorful-metro",children:"portfolio"})}),(0,b.jsx)("li",{className:"py-[13px] px-0 relative sm:text-center",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/blogs/blog-grid",children:"blog"})}),(0,b.jsx)("li",{className:"py-[13px] px-0 relative sm:text-center",children:(0,b.jsx)(n.N_,{"aria-label":"link for",to:"/page/contact-modern",children:"contact"})})]})})})}),(0,b.jsx)(s.A,{xs:12,className:"block sm:hidden px-0",children:(0,b.jsx)("div",{className:"hamburgermenu-modern-social-icon font-serif relative mt-[50px] landscape:md:mt-0",children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{className:"py-[10px] border-b border-[#ffffff26]",children:(0,b.jsxs)("a",{"aria-label":"link for",target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/",className:"text-[#3b5998] text-center rounded-full relative inline-block hover:text-white",children:[(0,b.jsx)("i",{className:"fab fa-facebook-f w-[30px]"}),"Facebook"]})}),(0,b.jsx)("li",{className:"py-[10px] border-b border-[#ffffff26]",children:(0,b.jsxs)("a",{"aria-label":"link for",target:"_blank",rel:"noreferrer",href:"https://twitter.com/",className:"text-[#00aced] text-center rounded-full relative inline-block hover:text-white",children:[(0,b.jsx)("i",{className:"fab fa-twitter w-[30px]"}),"Twitter"]})}),(0,b.jsx)("li",{className:"py-[10px] border-b border-[#ffffff26]",children:(0,b.jsxs)("a",{"aria-label":"link for",target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/",className:"text-[#fe1f49] text-center rounded-full relative inline-block hover:text-white",children:[(0,b.jsx)("i",{className:"fab fa-instagram w-[30px]"}),"Instagram"]})}),(0,b.jsx)("li",{className:"py-[10px]",children:(0,b.jsxs)("a",{"aria-label":"link for",target:"_blank",href:"https://dribbble.com/",rel:"noreferrer",className:"text-[#ea4c89] text-center rounded-full relative inline-block hover:text-white",children:[(0,b.jsx)("i",{className:"fab fa-dribbble w-[30px]"}),"Dribbble"]})})]})})})]})})]})})})]})}),(0,b.jsx)(u.default,{}),(0,b.jsx)("section",{className:"p-0 overflow-hidden HamburgerMenuModernPage-vertical-swiper",children:(0,b.jsx)(l.RC,{autoplay:{delay:4500,disableOnInteraction:!1},keyboard:{enabled:!0,onlyInViewport:!0},modules:[a.Ij,a.dK,a.s3],loop:!1,slidesPerView:1,pagination:{clickable:!0},direction:"horizontal",breakpoints:{992:{direction:"vertical"}},className:"full-screen swiper-pagination-01 swiper-pagination-light swiper-pagination-medium vertical-white-move landscape:md:h-[600px]",children:w&&w.map(((e,t)=>(0,b.jsxs)(l.qr,{className:"bg-no-repeat bg-cover relative overflow-hidden bg-center",style:{backgroundImage:"url(".concat(e.img,")")},children:[(0,b.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(16,16,16,0),#101010)]"}),(0,b.jsx)(c.A,{className:"h-full landscape:md:h-[600px]",children:(0,b.jsx)(o.A,{className:"block justify-center h-full",children:(0,b.jsxs)(s.A,{md:7,sm:6,xs:10,className:"relative flex flex-column justify-center text-start py-[7rem] h-full",children:[(0,b.jsxs)("h1",{className:"font-serif font-light text-[130px] lg:text-[110px] md:text-[90px] sm:text-[50px] text-white leading-[120px] lg:leading-[100px] md:leading-[85px] sm:leading-[50px] tracking-[-6px] sm:tracking-[-0.5px]",children:[(0,b.jsx)("span",{className:"font-semibold block",children:e.title}),e.subtitle]}),(0,b.jsx)(n.N_,{"aria-label":"link for",to:e.link,className:"left-[15px] bottom-[100px] z-[100] absolute text-left",children:(0,b.jsxs)("span",{className:"flex items-center text-center hover:text-[#828282]",children:[(0,b.jsx)("span",{className:"w-[50px] h-[50px] text-lg relative flex justify-center items-center rounded-[50%] mr-[25px] border-[2px] border-[#ffffff1a]",children:(0,b.jsx)("i",{className:"fas fa-arrow-right flex items-center justify-center text-xmd leading-normal ml-0 text-white"})}),(0,b.jsx)("span",{className:"font-medium text-xmd font-serif uppercase inline-block align-middle text-white",children:"Watch projects"})]})})]})})})]},t)))})}),(0,b.jsx)("section",{id:"about",className:"py-[160px] bg-darkgray overflow-hidden lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[50px]",children:(0,b.jsxs)(c.A,{children:[(0,b.jsxs)(o.A,{children:[(0,b.jsx)(s.A,{xl:4,lg:5,md:6,children:(0,b.jsxs)(d.m.h4,{className:"font-serif font-semibold text-white -tracking-[1px] sm:text-center xxs:mb-[45px]",...g.qG,children:[(0,b.jsx)("span",{className:"block p-0 sm:text-center tracking-[-1px]",children:"A creative agency specialized in web"}),(0,b.jsx)(f.e,{duration:3e3,color:"#fff",className:"rotate-text text-left sm:text-center font-semibold my-0 mx-auto",animation:"slide",data:["strategy creation","customize tools","generated revenue"]})]})}),(0,b.jsxs)(d.m.div,{className:"sm:text-center col-xl-5 col-md-6 offset-xl-2 offset-lg-1",...g.qG,transition:{delay:.5},children:[(0,b.jsx)("span",{className:"font-serif font-semibold text-white uppercase block mb-[15px]",children:"About litho web agency"}),(0,b.jsx)("p",{className:"text-xmd w-[95%] leading-[36px] md:w-full",children:"With years of experience in the website design and development industry pride ourselves on creating unique, creative and quality designs that are developed upon the latest modern coding and developing techniques."})]})]}),(0,b.jsx)(o.A,{className:"row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-36 justify-center md:mt-24 landscape:md:mt-12 xs:mt-[65px] gap-y-10",children:j.map(((e,t)=>(0,b.jsx)(d.m.div,{...g.qG,transition:{delay:.2*t},children:(0,b.jsxs)("div",{className:"flex justify-center items-center h-full",children:[(0,b.jsx)("i",{className:"".concat(e.icon," align-middle text-[28px] text-white mr-[15px]")}),(0,b.jsx)("span",{className:"font-serif font-semibold uppercase",children:e.title})]})},t)))})]})}),(0,b.jsx)("section",{className:"bg-darkgray",children:(0,b.jsx)(c.A,{fluid:!0,children:(0,b.jsx)(o.A,{children:(0,b.jsx)(s.A,{className:"sm:px-0",children:(0,b.jsx)(m.A,{className:"m-0",overlay:"#232323e6",grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:y})})})})}),(0,b.jsx)(x.A,{className:"bg-darkgray text-[#828282]",theme:"dark"})]})}}]);
//# sourceMappingURL=7479.fb1f4c60.chunk.js.map