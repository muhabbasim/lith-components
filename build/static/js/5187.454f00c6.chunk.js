/*! For license information please see 5187.454f00c6.chunk.js.LICENSE.txt */
(self.webpackChunklitho=self.webpackChunklitho||[]).push([[5187,4792],{24792:(e,t,i)=>{"use strict";i.d(t,{Ce:()=>o,Rg:()=>h,U6:()=>x,cR:()=>f,gy:()=>l,jl:()=>u,ke:()=>p,nF:()=>n,qG:()=>s,tE:()=>r,xs:()=>d,z7:()=>c,z9:()=>m});const a=window.innerWidth<768,s=a?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},n=a?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},r=a?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},o=a?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},c=a?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},l=a?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=a?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},p=a?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},m=a?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},u=a?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},x=a?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},f=a?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},h=a?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},75187:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var a=i(65043),s=i(53519),n=i(61072),r=i(78602),o=i(79913),c=i(35475),l=i(24792),d=i(34671),p=i(38906),m=i(70579);const u=e=>(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsx)(d.RC,{slidesPerView:4,modules:[p.Vx,p.dK,p.Ij,p.s3],className:"".concat(e.className," instagram-posts"),...e.carouselOption,children:e.data&&e.data.slice(0,e.total_posts).map(((e,t)=>(0,m.jsx)(d.qr,{children:(0,m.jsx)("figure",{className:"relative overflow-hidden mb-0 rounded-[3px]",children:(0,m.jsxs)("a",{"aria-label":"instagram",href:e.permalink,target:"_blank",rel:"noreferrer",children:[(0,m.jsx)("img",{src:e.media_url,alt:"",width:"180",height:"180"}),(0,m.jsx)("i",{className:"fab fa-instagram"})]})})},t)))}),e.title&&(0,m.jsx)("div",{className:"instagram-title whitespace-nowrap font-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-[15px] px-9 bg-white text-darkgray rounded-[2px] font-medium text-md tracking-[1px] uppercase",children:e.title})]});u.defaultProps={total_posts:8};const x=(0,a.memo)(u),f=e=>{const t=(0,a.useRef)(null),[s,n]=(0,a.useState)(!0),[r,o]=(0,a.useState)("");return(0,a.useEffect)((()=>{(async()=>{const e=await fetch("https://graph.instagram.com/me/media?fields=id,media_type,media_url,timestamp,permalink,comments_count,like_count&access_token=".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_INSTA_API_KEY)),t=await e.json(),i=await t.data;o(i)})()}),[]),(0,a.useEffect)((()=>{null!==r&&null!==t.current&&Promise.all([i.e(9437),i.e(8421)]).then(i.bind(i,30802)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>n(!1)))}))}),[r]),!0!==e.carousel?(0,m.jsx)("div",{className:"grid-wrapper",children:(0,m.jsxs)("ul",{ref:t,className:"grid-container".concat(e.grid?" ".concat(e.grid):"").concat(s?" loading":""," instagram-posts"),children:[(0,m.jsx)("li",{className:"grid-sizer"}),r&&r.slice(0,e.total_posts).map(((e,t)=>(0,m.jsx)("li",{className:"grid-item",children:(0,m.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,m.jsxs)("a",{"aria-label":"instagram",href:e.permalink,target:"_blank",rel:"noreferrer",children:[(0,m.jsx)("img",{className:"w-full",src:e.media_url,alt:"",width:179,height:179}),(0,m.jsx)("span",{className:"insta-counts",children:(0,m.jsx)("i",{className:"fab fa-instagram"})})]})})},t)))]})}):(0,m.jsx)(x,{data:r,...e})};f.defaultProps={theme:"instagram-style-01",total_posts:6};const h=(0,a.memo)(f),y=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,m.jsx)(s.A,{children:(0,m.jsxs)(n.A,{className:"items-center justify-center mb-0",children:[(0,m.jsx)(r.A,{xl:8,lg:6,children:(0,m.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Instagram"})}),(0,m.jsx)(r.A,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,m.jsxs)("ul",{className:"xs-text-center",children:[(0,m.jsx)("li",{children:(0,m.jsx)(c.N_,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)(c.N_,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,m.jsx)("li",{children:"Instagram"})]})})]})})}),(0,m.jsx)(o.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...l.qG,children:(0,m.jsxs)(s.A,{children:[(0,m.jsx)(n.A,{className:"justify-center",children:(0,m.jsx)(r.A,{md:12,className:"text-center mb-[7%]",children:(0,m.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Instagram style 01"})})}),(0,m.jsx)(n.A,{className:"justify-center",children:(0,m.jsx)(r.A,{md:12,children:(0,m.jsx)(h,{carousel:!0,carouselOption:{loop:!0,slidesPerView:2,spaceBetween:15,autoplay:{delay:3500,disableOnInteraction:!1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1200:{slidesPerView:6},992:{slidesPerView:3},768:{slidesPerView:3}}},total_posts:8,title:"#instagram decor",grid:"",animation:l.qG})})})]})}),(0,m.jsx)(o.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",...l.qG,children:(0,m.jsxs)(s.A,{children:[(0,m.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-24",children:"Instagram style 02"}),(0,m.jsx)(n.A,{className:"justify-center",children:(0,m.jsx)(r.A,{md:8,className:"xs:px-0",children:(0,m.jsx)(h,{total_posts:6,grid:"grid grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",animation:l.qG})})})]})})]})},78602:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var a=i(98139),s=i.n(a),n=i(65043),r=i(67852),o=i(70579);const c=n.forwardRef(((e,t)=>{const[{className:i,...a},{as:n="div",bsPrefix:c,spans:l}]=function(e){let{as:t,bsPrefix:i,className:a,...n}=e;i=(0,r.oU)(i,"col");const o=(0,r.gy)(),c=(0,r.Jm)(),l=[],d=[];return o.forEach((e=>{const t=n[e];let a,s,r;delete n[e],"object"===typeof t&&null!=t?({span:a,offset:s,order:r}=t):a=t;const o=e!==c?"-".concat(e):"";a&&l.push(!0===a?"".concat(i).concat(o):"".concat(i).concat(o,"-").concat(a)),null!=r&&d.push("order".concat(o,"-").concat(r)),null!=s&&d.push("offset".concat(o,"-").concat(s))})),[{...n,className:s()(a,...l,...d)},{as:t,bsPrefix:i,spans:l}]}(e);return(0,o.jsx)(n,{...a,ref:t,className:s()(i,!l.length&&c)})}));c.displayName="Col";const l=c},53519:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var a=i(98139),s=i.n(a),n=i(65043),r=i(67852),o=i(70579);const c=n.forwardRef(((e,t)=>{let{bsPrefix:i,fluid:a=!1,as:n="div",className:c,...l}=e;const d=(0,r.oU)(i,"container"),p="string"===typeof a?"-".concat(a):"-fluid";return(0,o.jsx)(n,{ref:t,...l,className:s()(c,a?"".concat(d).concat(p):d)})}));c.displayName="Container";const l=c},67852:(e,t,i)=>{"use strict";i.d(t,{Jm:()=>p,Wz:()=>m,gy:()=>d,oU:()=>l});var a=i(65043);i(70579);const s=["xxl","xl","lg","md","sm","xs"],n="xs",r=a.createContext({prefixes:{},breakpoints:s,minBreakpoint:n}),{Consumer:o,Provider:c}=r;function l(e,t){const{prefixes:i}=(0,a.useContext)(r);return e||i[t]||t}function d(){const{breakpoints:e}=(0,a.useContext)(r);return e}function p(){const{minBreakpoint:e}=(0,a.useContext)(r);return e}function m(){const{dir:e}=(0,a.useContext)(r);return"rtl"===e}},98139:(e,t)=>{var i;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=r(e,n(i)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)a.call(e,i)&&e[i]&&(t=r(t,i));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(i=function(){return s}.apply(t,[]))||(e.exports=i)}()}}]);
//# sourceMappingURL=5187.454f00c6.chunk.js.map