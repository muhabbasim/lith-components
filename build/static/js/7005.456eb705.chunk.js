(self.webpackChunklitho=self.webpackChunklitho||[]).push([[7005],{1912:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(65043),n=a(35475),r=a(14282),o=(a(59522),a(70579));const c=e=>{const t=e.themeColor&&e.themeColor[0],a=e.themeColor&&e.themeColor[1],s=e.color&&e.color[0],c=e.color&&e.color[1],l={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(s,", ").concat(c,", ").concat(s,")"):e.color};return e.href||"submit"===e.type?(0,o.jsx)(r.A,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:l,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,o.jsx)(i,{...e})}):(0,o.jsx)(n.N_,{style:l,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,o.jsx)(i,{...e})})},i=e=>(0,o.jsxs)(o.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,o.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const l=(0,s.memo)(c)},52972:(e,t,a)=>{"use strict";a.d(t,{Sc:()=>i,fs:()=>c,pd:()=>o});var s=a(65043),n=a(63516),r=a(70579);const o=(0,s.memo)((e=>{let{label:t,labelClass:a,className:s,showErrorMsg:o,...c}=e;const[i,l]=(0,n.Mt)(c);return(0,r.jsxs)("label",{className:"block relative ".concat(l.touched&&l.error?" errors-danger":"").concat(a?" ".concat(a):""),children:[t,(0,r.jsx)("input",{className:"".concat(s).concat(l.touched&&l.error?" errors-danger":""),...i,...c}),l.touched&&l.error&&o?(0,r.jsx)("span",{className:"text-sm text-error block mt-[5px]",children:l.error}):null]})})),c=(0,s.memo)((e=>{let{label:t,labelClass:a,className:s,showErrorMsg:o,...c}=e;const[i,l]=(0,n.Mt)(c);return(0,r.jsxs)("label",{className:"block relative".concat(l.touched&&l.error?" errors-danger":"").concat(a?" ".concat(a):""),children:[t,(0,r.jsx)("textarea",{className:"".concat(s).concat(l.touched&&l.error?" errors-danger":""),...i,...c}),l.touched&&l.error&&o?(0,r.jsx)("span",{className:"text-sm text-error block mt-[5px]",children:l.error}):null]})})),i=(0,s.memo)((e=>{let{label:t,labelClass:a,className:s,children:o,...c}=e;const[i,l]=(0,n.Mt)(c);return(0,r.jsxs)("label",{className:"block relative".concat(l.touched&&l.error?" errors-danger":"").concat(a?" ".concat(a):""),children:[(0,r.jsx)("input",{type:"checkbox",className:"".concat(s).concat(l.touched&&l.error?" errors-danger":""),...i,...c}),o]})}));o.defaultProps={showErrorMsg:!0}},63121:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var s=a(65043),n=a(60824),r=a(70579);const o=e=>{let{theme:t,children:a,className:o,...c}=e;return(0,s.useEffect)((()=>{let e=document.querySelectorAll(".smooth-scrollbar");const t=()=>{e.forEach((e=>{setTimeout((()=>{let t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((e=>{e.addEventListener("click",t)}));let a=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof a&&null!=a&&a.forEach((e=>{let a=e.querySelector(".fa");"undefined"!=typeof a&&null!=a&&a.addEventListener("click",t)}))}),[]),(0,r.jsx)(n.Scrollbar,{...c,className:"smooth-scrollbar ".concat(t).concat(o?" ".concat(o):""),plugins:{overscroll:{effect:"bounce"}},children:a})};o.defaultProps={theme:"light"};const c=(0,s.memo)(o)},79088:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var s=a(65043),n=a(78784),r=a(79913),o=a(61072),c=a(34671),i=a(38906),l=a(70579);const m=(e,t,a)=>{switch(e.theme){case"testimonials-style-01":return(0,l.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,l.jsx)("i",{className:"ti-quote-left absolute -top-[25px] left-[50px] inline-block text-[50px] z-10"}),(0,l.jsx)("p",{className:"text-xmd w-[75%] mb-0 lg:w-[85%] md:w-[80%]",children:t.content}),(0,l.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,l.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",alt:"",src:t.img}),(0,l.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,l.jsx)("span",{className:"font-serif text-md font-medium leading-[20px] text-darkgray block uppercase",children:t.name}),t.designation&&(0,l.jsx)("span",{className:"block text-sm uppercase",children:t.designation})]})]})]});case"testimonials-style-02":return(0,l.jsxs)("div",{className:"".concat(e.theme," "),children:[t.img&&(0,l.jsx)("img",{width:"",height:"",className:"w-full h-auto",src:t.img,alt:""}),(0,l.jsxs)("div",{className:"bg-white p-[49px] text-center relative",children:[(0,l.jsx)("div",{className:"testimonials-rounded-icon absolute -top-[40px] left-1/2 text-[28px] h-[75px] w-[75px] leading-[71px] overflow-hidden bg-white rounded-full flex items-center justify-center",children:(0,l.jsx)("i",{className:"fa fa-quote-left"})}),t.content&&(0,l.jsx)("p",{className:"mb-7",children:t.content}),t.name&&(0,l.jsx)("span",{className:"font-serif font-medium text-center text-darkgray block",children:t.name}),t.designation&&(0,l.jsx)("span",{className:"block font-serif text-sm font-medium",children:t.designation})]})]});case"testimonials-style-03":return(0,l.jsxs)("div",{className:"".concat(e.theme),children:[(0,l.jsx)("div",{className:"testimonials-bubble py-8 px-12 lg:px-8 relative bg-white mb-[35px] rounded",children:t.content&&(0,l.jsx)("p",{className:"mb-0",children:t.content})}),(0,l.jsxs)("div",{className:"px-[20px] flex items-center",children:[t.img&&(0,l.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",src:t.img,alt:""}),(0,l.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,l.jsx)("span",{className:"font-serif text-md font-medium leading-[24px] text-darkgray block",children:t.name}),t.designation&&(0,l.jsx)("span",{className:"block text-sm",children:t.designation})]})]})]});case"testimonials-style-04":return(0,l.jsxs)("div",{className:"".concat(e.theme),children:[(0,l.jsx)("div",{className:"testimonials-bubble relative rounded-[5px] py-[30px] px-[40px] bg-white mb-[35px]",children:t.content&&(0,l.jsx)("p",{className:"mb-0",children:t.content})}),(0,l.jsxs)("div",{className:"items-center px-[20px] flex",children:[t.img&&(0,l.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[15px]",src:t.img,alt:""}),(0,l.jsxs)("div",{className:"items-center",children:[t.name&&(0,l.jsx)("span",{className:"font-serif text-md leading-[16px] font-medium text-darkgray block",children:t.name}),t.rating&&(0,l.jsx)("div",{className:"star-rating",children:(0,l.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})})]})]})]});case"testimonials-style-05":return(0,l.jsx)("div",{className:"".concat(e.theme," bg-white py-[3rem] px-[3.5rem] rounded-lg lg:p-10"),children:(0,l.jsxs)("div",{className:"items-center flex flex-wrap",children:[t&&(0,l.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[20px]",alt:"",src:t.img}),(0,l.jsxs)("div",{children:[t.rating&&(0,l.jsx)("div",{className:"star-rating",children:(0,l.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})}),t.name&&(0,l.jsx)("span",{className:"font-serif text-md leading-5 font-medium text-gray-900 block",children:t.name}),t.company&&(0,l.jsx)("span",{className:"text-sm",children:t.company})]}),(0,l.jsx)("div",{className:"testimonials-bubble relative bg-white mt-[25px]",children:t.content&&(0,l.jsx)("p",{className:"mb-0",children:t.content})})]})});default:return(0,l.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,l.jsx)("i",{className:"ti-quote-left"}),(0,l.jsx)("p",{className:"text-xmd w-75 mb-0",children:t.content}),(0,l.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,l.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[16px]",alt:"",src:t.img}),(0,l.jsxs)("div",{children:[t.name&&(0,l.jsx)("span",{className:"font-serif text-md font-medium text-darkgray block",children:t.name}),t.designation&&(0,l.jsx)("span",{className:"text-sm",children:t.designation})]})]})]})}},d=e=>{const t=(0,s.useRef)(null);return!0===e.carousel?(0,l.jsx)(c.RC,{ref:t,modules:[i.Vx,i.dK,i.Ij,i.s3],className:"testimonials-swiper".concat(e.className?" ".concat(e.className):""),...e.carouselOption,children:e.data.map(((t,a)=>(0,l.jsxs)(c.qr,{...e.animation,transition:{delay:a*e.animationDelay},children:[" ",m(e,t)]},a)))}):(0,l.jsx)(o.A,{className:e.grid,children:e.data.map(((t,a)=>(0,l.jsxs)(r.m.div,{className:"col flex justify-center".concat(e.className?" ".concat(e.className):""),...e.animation,transition:{delay:a*e.animationDelay},children:[" ",m(e,t)]},a)))})};d.defaultProps={data:n.K9,animationDelay:.5,theme:"testimonials-style-01",carouselOption:{slidesPerView:1,loop:!0,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:3}}}};const h=(0,s.memo)(d)},78784:(e,t,a)=>{"use strict";a.d(t,{DB:()=>o,DQ:()=>n,K9:()=>s,Kd:()=>c,Ks:()=>r});const s=[{name:"SHOKO MUGIKURA",designation:"GRAPHIC DESIGNER",content:"Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work.",img:"https://via.placeholder.com/125x125"},{name:"JONSAN DONNER",designation:"SALES MANAGER",content:"Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.",img:"https://via.placeholder.com/125x125"},{name:"MACKANGY ROSE",designation:"CREATIVE DIRECTOR",content:"This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",img:"https://via.placeholder.com/125x125"}],n=[{name:"JEREMY SMITH",designation:"CO FOUNDER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"SHOKO MUGIKURA",designation:"CREATIVE HEAD",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"HERMAN MILLER",designation:"HR MANAGER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"}],r=[{name:"Herman Miller",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Jeremy Girard",designation:"Microsoft Corporation",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Alexander Harvard",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"}],o=[{name:"Herman Miller",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Alexander Harvard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5}],c=[{name:"Herman Miller",content:"Simply superb resort. Management and staff deserve special appreciation and thanks for hospitality.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Loretta Smith",content:"We are back home now and feel that it is only right to write to you to express our warmest gratitude.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Wonderful place to live for holidays. Can\u2019t believe can have such beautiful environment to spend peaceful.",img:"https://via.placeholder.com/125x125",rating:5}]},59522:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var s=a(74117),n=a(70579);function r(e){let{children:t}=e;const{t:a}=(0,s.Bd)();return(0,n.jsx)(n.Fragment,{children:a("".concat(t))})}},79663:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var s=a(65043);function n(e,t){(0,s.useEffect)((()=>{const a=a=>{e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}}),[e,t])}},27139:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});a(65043);var s=a(53519),n=a(61072),r=a(78602),o=a(35475),c=a(79913),i=a(2481),l=a(24792),m=a(24901),d=a(37531),h=a(79088),x=a(78784),p=a(51088),u=a(70579);const g=e=>(0,u.jsxs)("div",{style:e.style,children:[(0,u.jsx)(d.default,{}),(0,u.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,u.jsx)(s.A,{children:(0,u.jsxs)(n.A,{className:"items-center justify-center mb-0",children:[(0,u.jsx)(r.A,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Footer style 03"})}),(0,u.jsx)(r.A,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,u.jsxs)("ul",{className:"xs-text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.N_,{to:"/","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.N_,{to:"#","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Features"})}),(0,u.jsx)("li",{children:"Footer"})]})})]})})}),(0,u.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white",children:(0,u.jsx)(s.A,{children:(0,u.jsx)(m.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-5",theme:"icon-with-text-03 text-center",data:p.Nc,animation:l.qG,animationDelay:0})})}),(0,u.jsx)("section",{className:"bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsxs)(s.A,{children:[(0,u.jsx)(n.A,{className:"justify-center",children:(0,u.jsxs)(c.m.div,{className:"text-center mb-20 col-xl-5 col-lg-6 col-sm-8",...l.qG,children:[(0,u.jsx)("span",{className:"text-center font-serif text-md inline-block font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase mb-[20px] sm:mb-[15px]",children:" What people are saying "}),(0,u.jsx)("h5",{className:"font-serif text-[2.3rem] justify-center text-center text-darkgray font-semibold -tracking-[1px]",children:" What our valuable customer are saying about us? "})]})}),(0,u.jsx)(n.A,{className:"justify-center",children:(0,u.jsx)(r.A,{className:"col-12 col-md-12 col-sm-8",children:(0,u.jsx)(h.A,{grid:"row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center",theme:"testimonials-style-03",data:x.Ks,animation:l.qG,animationDelay:.3})})})]})}),(0,u.jsx)(i.A,{className:"text-slateblue bg-[#262b35]",theme:"dark"})]})},41497:(e,t,a)=>{"use strict";var s=a(13218);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,r,o){if(o!==s){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}},65173:(e,t,a)=>{e.exports=a(41497)()},13218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},85632:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var s=a(65173),n=a.n(s),r=a(65043),o=a(98139),c=a.n(o),i=a(70579);const l={"aria-label":n().string,onClick:n().func,variant:n().oneOf(["white"])},m=r.forwardRef(((e,t)=>{let{className:a,variant:s,"aria-label":n="Close",...r}=e;return(0,i.jsx)("button",{ref:t,type:"button",className:c()("btn-close",s&&"btn-close-".concat(s),a),"aria-label":n,...r})}));m.displayName="CloseButton",m.propTypes=l;const d=m},4488:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var s=a(65043),n=a(98139),r=a.n(n),o=a(70579);const c=e=>s.forwardRef(((t,a)=>(0,o.jsx)("div",{...t,ref:a,className:r()(t.className,e)})))}}]);
//# sourceMappingURL=7005.456eb705.chunk.js.map