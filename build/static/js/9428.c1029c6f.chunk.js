/*! For license information please see 9428.c1029c6f.chunk.js.LICENSE.txt */
(self.webpackChunklitho=self.webpackChunklitho||[]).push([[9428],{50498:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});r(65043);var s=r(53519),a=r(61072),l=r(78602),o=r(70579);const n=e=>{const t=()=>{e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,o.jsx)(s.A,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,o.jsxs)(a.A,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,o.jsx)(l.A,{xs:"auto",className:"md:mb-[30px]",children:(0,o.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,o.jsx)(l.A,{xs:"auto",children:e.filterData&&(0,o.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map(((e,r)=>(0,o.jsx)("li",{className:"px-[20px]".concat(0===r?" active":""),children:(0,o.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},r)))})})]})})}},5420:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(65043),a=r(79913),l=r(35475),o=r(50498),n=r(46246),c=r(70579);const i=e=>{const t=(0,s.useRef)(),[n,i]=(0,s.useState)(!0);(0,s.useEffect)((()=>{let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.all([r.e(8906),r.e(9437),r.e(802)]).then(r.bind(r,30802)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>i(!1)))}))}))}),[]);const d={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((e=>e)),")"):e.overlay};return(0,c.jsxs)("div",{className:"grid-wrapper",children:[(0,c.jsx)(o.A,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,c.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(n?" loading":""),children:[(0,c.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,r)=>(0,c.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,c.jsx)(l.N_,{"aria-label":"link",target:e.target,to:t.link,children:(0,c.jsx)(a.m.div,{className:"portfolio-overlay overflow-hidden",initial:{opacity:0},whileInView:!n&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,c.jsxs)("div",{className:"portfolio-image relative",style:d,children:[t.img&&(0,c.jsx)("img",{className:"w-full",src:t.img,height:447,width:550,alt:"portfolio-overlay"}),(0,c.jsxs)("div",{className:"portfolio-hover absolute font-serif justify-end flex flex-col py-[50px] text-center xl:py-[30px]",children:[(0,c.jsx)("i",{className:"ti-plus portfolio-plus-icon font-light text-lg text-basecolor"}),t.title&&(0,c.jsx)("div",{className:"font-serif text-white text-[15px] font-medium block m-0",children:t.title}),t.subtitle&&(0,c.jsx)("div",{className:"block text-white opacity-70 text-md",children:t.subtitle})]})]})})})},r)))]})]})};i.defaultProps={data:n.BK};const d=(0,s.memo)(i)},79428:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});r(65043);var s=r(53519),a=r(61072),l=r(78602),o=r(19268),n=r(5420),c=r(46246),i=r(70579);const d=e=>(0,i.jsxs)("div",{style:e.style,children:[(0,i.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,i.jsx)(o.kQ,{className:"lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg.webp)"}}),(0,i.jsx)(s.A,{className:"h-full relative",children:(0,i.jsx)(a.A,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,i.jsxs)(l.A,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,i.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio overlay three column"}),(0,i.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio overlay"})]})})})]}),(0,i.jsx)("section",{className:"relative pt-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:py-[50px]",children:(0,i.jsx)(s.A,{children:(0,i.jsx)(a.A,{children:(0,i.jsx)(l.A,{xs:12,className:"xs:px-0",children:(0,i.jsx)(n.A,{overlay:["#556fff","#b263e4","#e05fc4","#f767a6","#ff798e"],grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large",filterData:c.bk,data:c.BK})})})})})]})},78602:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(98139),a=r.n(s),l=r(65043),o=r(67852),n=r(70579);const c=l.forwardRef(((e,t)=>{const[{className:r,...s},{as:l="div",bsPrefix:c,spans:i}]=function(e){let{as:t,bsPrefix:r,className:s,...l}=e;r=(0,o.oU)(r,"col");const n=(0,o.gy)(),c=(0,o.Jm)(),i=[],d=[];return n.forEach((e=>{const t=l[e];let s,a,o;delete l[e],"object"===typeof t&&null!=t?({span:s,offset:a,order:o}=t):s=t;const n=e!==c?"-".concat(e):"";s&&i.push(!0===s?"".concat(r).concat(n):"".concat(r).concat(n,"-").concat(s)),null!=o&&d.push("order".concat(n,"-").concat(o)),null!=a&&d.push("offset".concat(n,"-").concat(a))})),[{...l,className:a()(s,...i,...d)},{as:t,bsPrefix:r,spans:i}]}(e);return(0,n.jsx)(l,{...s,ref:t,className:a()(r,!i.length&&c)})}));c.displayName="Col";const i=c},53519:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(98139),a=r.n(s),l=r(65043),o=r(67852),n=r(70579);const c=l.forwardRef(((e,t)=>{let{bsPrefix:r,fluid:s=!1,as:l="div",className:c,...i}=e;const d=(0,o.oU)(r,"container"),f="string"===typeof s?"-".concat(s):"-fluid";return(0,n.jsx)(l,{ref:t,...i,className:a()(c,s?"".concat(d).concat(f):d)})}));c.displayName="Container";const i=c},61072:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(98139),a=r.n(s),l=r(65043),o=r(67852),n=r(70579);const c=l.forwardRef(((e,t)=>{let{bsPrefix:r,className:s,as:l="div",...c}=e;const i=(0,o.oU)(r,"row"),d=(0,o.gy)(),f=(0,o.Jm)(),x="".concat(i,"-cols"),m=[];return d.forEach((e=>{const t=c[e];let r;delete c[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const s=e!==f?"-".concat(e):"";null!=r&&m.push("".concat(x).concat(s,"-").concat(r))})),(0,n.jsx)(l,{ref:t,...c,className:a()(s,i,...m)})}));c.displayName="Row";const i=c},67852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>f,Wz:()=>x,gy:()=>d,oU:()=>i});var s=r(65043);r(70579);const a=["xxl","xl","lg","md","sm","xs"],l="xs",o=s.createContext({prefixes:{},breakpoints:a,minBreakpoint:l}),{Consumer:n,Provider:c}=o;function i(e,t){const{prefixes:r}=(0,s.useContext)(o);return e||r[t]||t}function d(){const{breakpoints:e}=(0,s.useContext)(o);return e}function f(){const{minBreakpoint:e}=(0,s.useContext)(o);return e}function x(){const{dir:e}=(0,s.useContext)(o);return"rtl"===e}},98139:(e,t)=>{var r;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,l(r)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)s.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=9428.c1029c6f.chunk.js.map