"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1403,4792],{31378:(e,t,a)=>{a.d(t,{A:()=>r});var i=a(65043),s=a(61072),n=a(79913),l=a(60610),o=a(70579);const c=e=>(0,o.jsx)(s.A,{className:e.grid,children:e.data.map(((t,a)=>(0,o.jsx)(n.m.div,{className:"col landscape:md:!px-0",...e.animation,transition:{delay:a*e.animationDelay},children:(0,o.jsxs)("div",{className:"".concat(e.theme," ").concat(e.className),children:[t.img?(0,o.jsx)("img",{width:"",height:"",className:"inline-block items-center justify-center mb-[30px]",src:t.img,alt:"featurebox"}):(0,o.jsxs)("div",{className:"feature-box-icon",children:[t.icon&&(0,o.jsx)("i",{className:t.icon}),"custom-icon-with-text02"===e.theme&&(0,o.jsx)("span",{className:"feature-box-svg-shap drop-shadow",children:(0,o.jsx)("svg",{width:"100",viewBox:"-100 -100 200 200",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"#fff",d:"M86.2,51.4C58.6,97.5,-53.4,96.5,-81.8,49.9C-110.3,3.3,-55.1,-88.8,0.9,-88.3C56.9,-87.8,113.7,5.3,86.2,51.4Z"})})})]}),(0,o.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,o.jsx)("h3",{className:"heading-6 title font-medium text-base font-serif text-darkgray mb-[10px]",children:t.title}),t.content&&(0,o.jsx)("p",{className:"text-base text-center",children:t.content})]})]})},a)))});c.defaultProps={data:l.r,theme:"custom-icon-with-text01",animationDelay:.2};const r=(0,i.memo)(c)},60610:(e,t,a)=>{a.d(t,{k:()=>s,r:()=>i});const i=[{img:"https://via.placeholder.com/75x66",title:"SIGNIFICANT BAR",content:"Lorem ipsum dolor sit amet sectetura dipisicing"},{img:"https://via.placeholder.com/75x66",title:"WONDERFUL CUISINE",content:"Lorem ipsum dolor sit amet sectetura dipisicing"},{img:"https://via.placeholder.com/75x66",title:"CLASSIC RESTAURANT",content:"Lorem ipsum dolor sit amet sectetura dipisicing"},{img:"https://via.placeholder.com/75x66",title:"BEST MASTERCHEFS",content:"Lorem ipsum dolor sit amet sectetura dipisicing"}],s=[{icon:"line-icon-Navigation-LeftWindow",title:"Amazing layouts",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Cursor-Click2",title:"No coding required",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Like-2",title:"Easy to customize",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Talk-Man",title:"Customer satisfaction",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Paper-Plane",title:"Blazing performance",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."},{icon:"line-icon-Heart",title:"Huge icon collection",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."}]},73171:(e,t,a)=>{a.d(t,{A:()=>d});var i=a(65043),s=a(22963),n=a.n(s),l=a(65173),o=a(79663),c=a(68569),r=a(70579);const m={Close:e=>{const{customModal:t,setCustomModal:a}=(0,i.useContext)(c.A);return(0,r.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:e=>{e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((()=>{a({...t,el:null,isOpen:!1})}),100)},children:e.children})},Wrapper:e=>{const t=(0,i.useRef)(null),s=(0,i.useRef)(null),{customModal:l,setCustomModal:m}=(0,i.useContext)(c.A),d=()=>{t.current.node.classList.remove("open"),setTimeout((()=>{m({...l,el:null,isOpen:!1})}),100)},p=()=>{m({...l,el:t.current.node,isOpen:!0}),setTimeout((()=>{t.current.node.classList.add("open")}),100)};return(0,i.useEffect)((()=>{t.current.node.classList.add("custom_modal");const e=e=>{27===e.keyCode&&d()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,i.useEffect)((()=>{!0===e.defaultOpen&&setTimeout((()=>{Promise.all([a.e(8906),a.e(9437),a.e(802)]).then(a.bind(a,30802)).then((e=>{"shown"===e.getCookie("litho-promo-popup")?d():p()}))}),200)}),[]),(0,o.A)(s,d),n().setAppElement("#modal-outer"),(0,r.jsxs)("div",{className:e.className,children:[(0,r.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:p,children:e.modalBtn}),(0,r.jsx)(n(),{className:e.animation,ref:t,isOpen:null!==l.el&&l.el===t.current.node&&!0===l.isOpen,onRequestClose:d,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:()=>document.body,children:(0,r.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,r.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:d,children:"\xd7"}),(0,r.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:s,children:e.children})]})})]})}};m.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},m.Wrapper.propTypes={className:l.PropTypes.string,closeBtnOuter:l.PropTypes.bool,defaultOpen:l.PropTypes.bool,children:l.PropTypes.oneOfType([l.PropTypes.arrayOf(l.PropTypes.node),l.PropTypes.node]).isRequired},m.Close.propTypes={className:l.PropTypes.string,children:l.PropTypes.oneOfType([l.PropTypes.arrayOf(l.PropTypes.node),l.PropTypes.node]).isRequired};const d=m},46403:(e,t,a)=>{a.d(t,{A:()=>N});var i=a(65043),s=a(61072),n=a(34671),l=a(38906),o=a(79913),c=a(70579);const r=e=>{let{item:t}=e;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"266",height:"320",loading:"lazy",src:t.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map(((e,t)=>(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:e.icon})},t)))})]})]})},m=(0,i.memo)(r),d=e=>{let{item:t}=e;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"367",height:"452",loading:"lazy",src:t.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsxs)("div",{className:"team-member-details",children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation})]}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map(((e,t)=>(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:e.icon})},t)))})]})]})},p=(0,i.memo)(d),f=e=>{let{item:t}=e;return(0,c.jsxs)("figure",{children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"auto",height:"444",loading:"lazy",src:t.img,alt:"images"})}),(0,c.jsxs)("figcaption",{children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map(((e,t)=>(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-70",children:(0,c.jsx)("i",{className:e.icon})},t)))})]})]})},x=(0,i.memo)(f),w=e=>{let{item:t}=e;return(0,c.jsxs)("figure",{children:[(0,c.jsxs)("div",{className:"team-member-image",children:[(0,c.jsx)("img",{width:"370",height:"450",loading:"lazy",src:t.img,alt:"images"}),(0,c.jsxs)("div",{className:"team-member-details",children:[t.title&&(0,c.jsx)("span",{className:"quote",children:t.title}),t.subtitle&&(0,c.jsx)("span",{className:"text-center text-white opacity-70 w-[70%] md:w-full",children:t.subtitle}),t.social_links&&(0,c.jsx)("div",{className:"social-icon",children:t.social_links.map(((e,t)=>(0,c.jsx)("a",{"aria-label":"team",href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("i",{className:e.icon})},t)))})]})]}),(0,c.jsx)("figcaption",{children:(0,c.jsxs)("div",{className:"title-bottom",children:[(0,c.jsx)("span",{className:"title",children:t.name}),(0,c.jsx)("span",{className:"sub-title",children:t.designation})]})})]})},h=(0,i.memo)(w),b=e=>{let{item:t}=e;return(0,c.jsxs)("figure",{className:"rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden",children:[(0,c.jsx)("div",{className:"team-member-image",children:(0,c.jsx)("img",{width:"370",height:"460",alt:"",loading:"lazy",src:t.img})}),(0,c.jsxs)("figcaption",{className:"bg-[#fff] py-[40px] text-center lg:py-[30px] relative",children:[(0,c.jsx)("div",{className:"team-title text-base font-medium font-serif text-[#262b35] text-uppercase",children:t.name}),(0,c.jsx)("span",{className:"sub-title text-sm font-sans uppercase block mb-[20px] text-[#828282] lg:mb-[10px]",children:t.designation}),t.social_links&&(0,c.jsx)("div",{className:"social-icon font-sans text-[#262b35] text-[15px]",children:t.social_links.map(((e,t)=>(0,c.jsx)("a",{"aria-label":"team",href:e.link,rel:"noreferrer",target:"_blank",className:"mx-[15px]",children:(0,c.jsx)("i",{className:e.icon})},t)))})]})]})},g=(0,i.memo)(b);var u=a(17774);const k=(e,t,a)=>{switch(e.theme){case"team-style-01":default:return(0,c.jsx)(m,{item:t});case"team-style-02":return(0,c.jsx)(p,{item:t});case"team-style-03":return(0,c.jsx)(x,{item:t});case"team-style-04":return(0,c.jsx)(h,{item:t});case"team-style-05":return(0,c.jsx)(g,{item:t})}},y=e=>{const t=i.useRef(null),a={"--brand-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((e=>e)),")"):e.overlay};return!0===e.carousel?(0,c.jsxs)(o.m.div,{className:"team-slider-wrapper relative ".concat(e.theme," ").concat(e.themeColor," ").concat(e.className),...e.animation,children:[(0,c.jsx)(n.RC,{slidesPerView:3,className:"swiper-pagination-dark pb-[50px] black-move",ref:t,modules:[l.Vx,l.dK,l.Ij],...e.carouselOption,children:e.data.map(((t,i)=>(0,c.jsx)(n.qr,{style:a,className:e.theme,children:k(e,t)},i)))}),e.carouselOption.navigation&&(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{onClick:()=>t.current.swiper.slidePrev(),className:"btn-slider-next rounded-full flex justify-center items-center text-darkgray bg-white border-[1px] border-solid border-mediumgray h-[40px] w-[40px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] left-[-90px] right-auto",children:(0,c.jsx)("i",{className:"feather-arrow-left text-xmd"})}),(0,c.jsx)("div",{onClick:()=>t.current.swiper.slideNext(),className:"btn-slider-prev rounded-full border-[1px] border-solid border-mediumgray bg-white text-darkgray flex justify-center items-center h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-xl transition-all duration-800 absolute top-[38%] right-[-90px] left-auto",children:(0,c.jsx)("i",{className:"feather-arrow-right text-xmd"})})]})]}):(0,c.jsx)(s.A,{className:"".concat(e.grid?e.grid:"").concat(e.className?" ".concat(e.className):""),children:e.data.map(((t,i)=>(0,c.jsx)(o.m.div,{style:a,className:"col ".concat(e.theme," ").concat(e.themeColor),...e.animation,transition:{delay:i*e.animationDelay},children:k(e,t)},i)))})};y.defaultProps={theme:"team-style-01",data:u.r2,overlay:["#556fffcc","#b263e4cc","#e05fc4cc","#f767a6cc","#ff798ecc"],animationDelay:.5,carouselOption:{slidesPerView:1,spaceBetween:30,loop:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{dynamicBullets:!0,clickable:!0},breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2}}}};const N=(0,i.memo)(y)},17774:(e,t,a)=>{a.d(t,{ko:()=>s,r2:()=>i,rH:()=>n,rW:()=>o,yy:()=>l});const i=[{img:"https://via.placeholder.com/525x639",name:"Alexander Harvard",designation:"CO FOUNDER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Bryan Jonhson",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jemmy Watson",designation:"DESIGNER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/525x639",name:"Jeremy Dupont",designation:"MANAGER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}],s=[{img:"https://via.placeholder.com/721x902",name:"Alexander Harvard",designation:"Operations officer",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/721x902",name:"Bryan Jonhson",designation:"Graphic designer",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/721x902",name:"Jeremy Dupont",designation:"Web developer",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}],n=[{img:"https://via.placeholder.com/375x460",name:"Alexander Harvard",designation:"GENERALIST CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]},{img:"https://via.placeholder.com/375x460",name:"Bryan Jonhson",designation:"SPECIALIST CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]},{img:"https://via.placeholder.com/375x460",name:"Jemmy Watson",designation:"FINANCIAL CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]},{img:"https://via.placeholder.com/375x460",name:"Jeremy Dupont",designation:"BUSINESS CONSULTANT",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"}]}],l=[{img:"https://via.placeholder.com/800x1000",name:"JEMMY WATSON",designation:"GRAPHIC DESIGNER",title:"I AM CREATIVE",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"dribbble",link:"https://www.dribbble.com",icon:"fa-brands fa-dribbble"},{title:"linkedin",link:"https://www.linkedin.com",icon:"fa-brands fa-linkedin-in"}]},{img:"https://via.placeholder.com/800x1000",name:"JEREMY DUPONT",designation:"WEB DEVELOPER",title:"I AM TRENDY",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"dribbble",link:"https://www.dribbble.com",icon:"fa-brands fa-dribbble"},{title:"linkedin",link:"https://www.linkedin.com",icon:"fa-brands fa-linkedin-in"}]},{img:"https://via.placeholder.com/800x1000",name:"BRYAN JONHSON",designation:"OPERATIONS OFFICER",title:"I AM PANCTUAL",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"},{title:"dribbble",link:"https://www.dribbble.com",icon:"fa-brands fa-dribbble"},{title:"linkedin",link:"https://www.linkedin.com",icon:"fa-brands fa-linkedin-in"}]}],o=[{img:"https://via.placeholder.com/800x1005",name:"JEMMY WATSON",designation:"BOOTCAMP TRAINER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/800x1005",name:"BRYAN JONHSON",designation:"CROSSFIT TRAINER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},{img:"https://via.placeholder.com/800x1005",name:"JEREMY DUPONT",designation:"SPINNING TRAINER",social_links:[{title:"facebook",link:"https://www.facebook.com",icon:"fab fa-facebook-f"},{title:"instagram",link:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{title:"twitter",link:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}]},24792:(e,t,a)=>{a.d(t,{Ce:()=>o,Rg:()=>h,U6:()=>x,cR:()=>w,gy:()=>r,jl:()=>f,ke:()=>d,nF:()=>n,qG:()=>s,tE:()=>l,xs:()=>m,z7:()=>c,z9:()=>p});const i=window.innerWidth<768,s=i?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},n=i?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},l=i?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},o=i?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},c=i?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},r=i?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},m=i?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=i?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},p=i?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},f=i?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},x=i?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},w=i?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},h=i?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},42878:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});a(65043);var i=a(78602),s=a(36061),n=a(53519),l=a(61072),o=a(35475),c=a(19268),r=a(79913),m=a(19473),d=a(24792),p=a(1912),f=a(56789),x=a(31378),w=a(71991),h=a(46403),b=a(59425),g=a(73171),u=a(37531),k=a(17774),y=a(60610),N=a(70579);const j=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.pinterest.com/",icon:"fab fa-pinterest-p"},{color:"#828282",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],v=e=>(0,N.jsxs)("div",{children:[(0,N.jsx)(b.Ay,{topSpace:{desktop:!0},className:"toplogo-header absolute top-0 left-0 w-full z-10",children:(0,N.jsxs)(b.zr,{fluid:"fluid",theme:"light",bg:"white",expand:"lg",className:"px-0 py-0",containerClass:"flex-col sm:px-0",children:[(0,N.jsx)("div",{className:"border-b md:border-0 bg-white py-[8px] md:py-[9px] w-full",children:(0,N.jsxs)(i.A,{className:"col-12 col-sm-12 col-lg-8 lg:mx-auto text-center flex items-center justify-between mx-auto",children:[(0,N.jsx)(i.A,{className:"col header-social-icon text-start d-lg-flex d-none ms-0 me-auto me-lg-0 border-0 p-0",children:(0,N.jsx)("div",{className:"md:hidden",children:(0,N.jsx)(f.A,{theme:"social-icon-style-01",size:"xs",iconColor:"dark",className:"justify-start",data:j})})}),(0,N.jsx)("div",{className:"col d-lg-none flex ms-0 me-auto border-0 p-0",children:(0,N.jsxs)(s.A.Toggle,{children:[(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"}),(0,N.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,N.jsx)(i.A,{className:"col navbar-brand padding-15px-tb mx-auto px-0",children:(0,N.jsx)(o.N_,{"aria-label":"header logo",className:"flex justify-center",to:"/",children:(0,N.jsxs)(s.A.Brand,{className:"inline-block p-0 m-0",children:[(0,N.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,N.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,N.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,N.jsxs)(i.A,{className:"col flex items-center justify-end ms-auto p-0",children:[(0,N.jsx)(b.IW,{className:"py-[9px] sm:pl-[15px] text-black pl-0"}),(0,N.jsx)(b.sS,{className:"py-[9px] sm:pl-[15px] text-black",style:{"--base-color":"#0038e3"}})]})]})}),(0,N.jsx)(s.A.Collapse,{id:"basic-navbar-nav",className:"justify-center",children:(0,N.jsx)(b.W1,{...e})})]})}),(0,N.jsx)(u.default,{}),(0,N.jsxs)("div",{className:"full-screen relative overflow-hidden landscape:md:h-[600px]",children:[(0,N.jsx)(c.kQ,{className:"lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 w-full h-[100vh] md:top-[-35px] landscape:md:h-[600px]",translateY:[-40,40],style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"}}),(0,N.jsx)("div",{className:"absolute top-0 left-0 h-full w-full bg-darkgray opacity-30"}),(0,N.jsx)(n.A,{className:"h-full relative landscape:md:h-[600px]",children:(0,N.jsxs)(l.A,{className:"h-full items-center",children:[(0,N.jsxs)(i.A,{xl:6,lg:7,sm:8,xs:12,className:"justify-center items-center my-0 mx-auto relative text-center flex flex-col lg:px-0",children:[(0,N.jsx)(g.A.Wrapper,{className:"justify-center flex",modalBtn:(0,N.jsx)(p.A,{ariaLabel:"model btn",type:"submit",size:"lg",className:"btn-sonar mx-auto mb-[40px]",themeColor:["#8600d4","#0039e3"],color:"#fff",title:(0,N.jsx)("i",{className:"icon-control-play"})}),children:(0,N.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,N.jsx)("div",{className:"fit-video",children:(0,N.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,N.jsx)("h2",{className:"font-semibold text-white font-serif text-center mb-0",children:"Hand crafted pixel perfect designs"})]}),(0,N.jsx)(m.N_,{to:"about",offset:0,delay:0,spy:!0,smooth:!0,duration:800,className:"absolute bottom-[50px] left-1/2 -translate-x-1/2 w-auto cursor-pointer",children:(0,N.jsx)("i",{className:"ti-mouse icon-small text-white up-down-ani  text-[28px] inline-block"})})]})})]}),(0,N.jsx)("section",{id:"about",className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,N.jsx)(n.A,{children:(0,N.jsxs)(l.A,{className:"items-center md:justify-center",children:[(0,N.jsxs)(i.A,{xs:12,lg:5,md:9,className:"lg:text-start md:mb-28 md:mx-auto md:text-center",children:[(0,N.jsx)("span",{className:"inline-block mb-[20px] font-medium text-base font-serif uppercase text-start text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] md:block",children:"EXPERIENCE AGENCY"}),(0,N.jsx)("h4",{className:"mb-[25px] font-semibold text-darkgray font-serif mx-0 w-[95%] text-start lg:mb-[15px]",children:"We help our clients build value digital web solutions"}),(0,N.jsx)("p",{className:"w-[80%] lg:w-[95%] mb-[25px] sm:mb-[15px] text-start",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua printing typesetting."}),(0,N.jsx)("div",{className:"text-start",children:(0,N.jsx)(p.A,{ariaLabel:"our-services",to:"/page/our-services",className:"font-medium font-serif mt-[15px] uppercase btn-fill rounded-[4px]",themeColor:"#232323",color:"#fff",size:"md",title:"Our Services",icon:"feather-arrow-right",iconPosition:"after"})})]}),(0,N.jsx)(i.A,{lg:7,md:9,xs:12,className:"px-[55px] md:py-0 md:px-0 md:pl-[5px] sm:pr-[50px]",children:(0,N.jsxs)(r.m.figure,{className:"image-back-offset-shadow w-100",children:[(0,N.jsx)(r.m.img,{width:582.5,height:44.16,className:"rounded-[6px] w-auto h-auto",src:"https://via.placeholder.com/800x610",alt:"","data-no-retina":"",initial:{opacity:0,x:"0",y:"0"},whileInView:{opacity:1,x:"10px",y:"-20px"},viewport:{once:!0},transition:{delay:.4,easing:"linear"}}),(0,N.jsx)(r.m.span,{className:"rounded-[6px]",...d.qG,animate:{x:"35px",y:"5px"}})]})})]})})}),(0,N.jsx)("section",{className:"bg-lightgray text-center grid-rows-3 grid-cols-2 py-[130px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,N.jsx)(n.A,{children:(0,N.jsx)(x.A,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-[10px]",theme:"custom-icon-with-text02",data:y.k,animation:d.qG})})}),(0,N.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,N.jsx)(n.A,{children:(0,N.jsxs)(l.A,{children:[(0,N.jsxs)(i.A,{xs:12,className:"text-center",children:[(0,N.jsx)("span",{className:"inline-block mb-[5px] font-medium text-[15px] text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] font-serif uppercase",children:"MEET OUR PEOPLE"}),(0,N.jsx)("h6",{className:"text-darkgray font-semibold text-[2.85rem] leading-[3.4rem] font-serif mb-24",children:"Creative People"})]}),(0,N.jsx)(i.A,{xs:12,children:(0,N.jsx)(h.A,{themeColor:"dark",overlay:["#b783fff2","#e37be0f2","#fa7cc1f2","#ff85a6f2","#ff9393f2"],theme:"team-style-02",data:k.ko,grid:"row-cols-1 row-cols-sm-2 row-cols-md-3 justify-center gap-y-10",className:"justify-center",animation:d.qG,carousel:!1,carouselOption:{slidesPerView:3,spaceBetween:30,loop:!0,navigation:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{dynamicBullets:!0,clickable:!0}}})})]})})}),(0,N.jsx)(w.A,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]})}}]);
//# sourceMappingURL=1403.ebf91f90.chunk.js.map