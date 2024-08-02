/*! For license information please see 6559.488cb98d.chunk.js.LICENSE.txt */
(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6559,4792,5815],{1912:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var o=n(65043),r=n(35475),a=n(14282),i=(n(59522),n(70579));const s=e=>{const t=e.themeColor&&e.themeColor[0],n=e.themeColor&&e.themeColor[1],o=e.color&&e.color[0],s=e.color&&e.color[1],l={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(o,", ").concat(s,", ").concat(o,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(a.A,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:l,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(c,{...e})}):(0,i.jsx)(r.N_,{style:l,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(c,{...e})})},c=e=>(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]});s.defaultProps={size:"lg",style:"primary"};const l=(0,o.memo)(s)},73171:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var o=n(65043),r=n(22963),a=n.n(r),i=n(65173),s=n(79663),c=n(68569),l=n(70579);const p={Close:e=>{const{customModal:t,setCustomModal:n}=(0,o.useContext)(c.A);return(0,l.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:e=>{e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((()=>{n({...t,el:null,isOpen:!1})}),100)},children:e.children})},Wrapper:e=>{const t=(0,o.useRef)(null),r=(0,o.useRef)(null),{customModal:i,setCustomModal:p}=(0,o.useContext)(c.A),d=()=>{t.current.node.classList.remove("open"),setTimeout((()=>{p({...i,el:null,isOpen:!1})}),100)},u=()=>{p({...i,el:t.current.node,isOpen:!0}),setTimeout((()=>{t.current.node.classList.add("open")}),100)};return(0,o.useEffect)((()=>{t.current.node.classList.add("custom_modal");const e=e=>{27===e.keyCode&&d()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,o.useEffect)((()=>{!0===e.defaultOpen&&setTimeout((()=>{Promise.all([n.e(8906),n.e(9437),n.e(802)]).then(n.bind(n,30802)).then((e=>{"shown"===e.getCookie("litho-promo-popup")?d():u()}))}),200)}),[]),(0,s.A)(r,d),a().setAppElement("#modal-outer"),(0,l.jsxs)("div",{className:e.className,children:[(0,l.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:u,children:e.modalBtn}),(0,l.jsx)(a(),{className:e.animation,ref:t,isOpen:null!==i.el&&i.el===t.current.node&&!0===i.isOpen,onRequestClose:d,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:()=>document.body,children:(0,l.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,l.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:d,children:"\xd7"}),(0,l.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:r,children:e.children})]})})]})}};p.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},p.Wrapper.propTypes={className:i.PropTypes.string,closeBtnOuter:i.PropTypes.bool,defaultOpen:i.PropTypes.bool,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},p.Close.propTypes={className:i.PropTypes.string,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired};const d=p},59522:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(74117),r=n(70579);function a(e){let{children:t}=e;const{t:n}=(0,o.Bd)();return(0,r.jsx)(r.Fragment,{children:n("".concat(t))})}},24792:(e,t,n)=>{"use strict";n.d(t,{Ce:()=>s,Rg:()=>h,U6:()=>f,cR:()=>y,gy:()=>l,jl:()=>m,ke:()=>d,nF:()=>a,qG:()=>r,tE:()=>i,xs:()=>p,z7:()=>c,z9:()=>u});const o=window.innerWidth<768,r=o?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},a=o?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},i=o?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},s=o?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},c=o?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},l=o?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},p=o?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=o?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},u=o?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},m=o?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},f=o?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},y=o?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},h=o?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},79663:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var o=n(65043);function r(e,t){(0,o.useEffect)((()=>{const n=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t])}},63223:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});n(65043);var o=n(53519),r=n(61072),a=n(78602),i=n(35475),s=n(79913),c=n(1912),l=n(73171),p=n(24792),d=n(70579);const u=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:"bg-darkgray py-[25px] page-title-small p-[130px] xxs:px-0",children:(0,d.jsx)(o.A,{children:(0,d.jsxs)(r.A,{className:"items-center justify-center",children:[(0,d.jsx)(a.A,{xl:8,lg:6,children:(0,d.jsx)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:"Vimeo video modal"})}),(0,d.jsx)(a.A,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,d.jsxs)("ul",{className:"xs:text-center",children:[(0,d.jsx)("li",{children:(0,d.jsx)(i.N_,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,d.jsx)("li",{children:(0,d.jsx)(i.N_,{to:"#","aria-label":"breadcrumb",className:"hover:text-white",children:"Features"})}),(0,d.jsx)("li",{children:"Vimeo video"})]})})]})})}),(0,d.jsx)(s.m.section,{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",...p.qG,children:(0,d.jsx)(o.A,{children:(0,d.jsxs)(r.A,{className:"justify-center",children:[(0,d.jsx)(a.A,{md:12,className:"text-center",children:(0,d.jsx)("h6",{className:"font-medium text-darkgray font-serif mb-[25px] lg:mb-[15px]",children:"Popup with Vimeo video"})}),(0,d.jsxs)(a.A,{xl:5,lg:8,md:10,className:"text-center",children:[(0,d.jsx)("h6",{className:"mb-[8%] font-light lg:mb-[60px] md:mb-[45px] sm:mb-[30px]",children:"In this example lightboxes are automatically disabled on small screen size and default behavior of link is triggered."}),(0,d.jsx)(l.A.Wrapper,{modalBtn:(0,d.jsx)(c.A,{type:"submit",className:"btn-fill mx-3 font-medium font-serif rounded-[4px] uppercase",themeColor:"#0038e3",color:"#fff",size:"md",title:"Open Vimeo Video"}),children:(0,d.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,d.jsx)("div",{className:"fit-video",children:(0,d.jsx)("iframe",{width:"100%",height:"100%",controls:!0,src:"//player.vimeo.com/video/75976293?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]})]})})})]})},14140:(e,t,n)=>{"use strict";n.d(t,{Am:()=>i,Ay:()=>c});var o=n(65043),r=n(70579);const a=["as","disabled"];function i(e){let{tagName:t,disabled:n,href:o,target:r,rel:a,role:i,onClick:s,tabIndex:c=0,type:l}=e;t||(t=null!=o||null!=r||null!=a?"a":"button");const p={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},p];const d=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(o||(o="#"),n&&(o=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:c,href:o,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},p]}const s=o.forwardRef(((e,t)=>{let{as:n,disabled:o}=e,s=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);const[c,{tagName:l}]=i(Object.assign({tagName:n,disabled:o},s));return(0,r.jsx)(l,Object.assign({},s,c,{ref:t}))}));s.displayName="Button";const c=s},41497:(e,t,n)=>{"use strict";var o=n(13218);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},65173:(e,t,n)=>{e.exports=n(41497)()},13218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},14282:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var o=n(98139),r=n.n(o),a=n(65043),i=n(14140),s=n(67852),c=n(70579);const l=a.forwardRef(((e,t)=>{let{as:n,bsPrefix:o,variant:a="primary",size:l,active:p=!1,disabled:d=!1,className:u,...m}=e;const f=(0,s.oU)(o,"btn"),[y,{tagName:h}]=(0,i.Am)({tagName:n,disabled:d,...m}),x=h;return(0,c.jsx)(x,{...y,...m,ref:t,disabled:d,className:r()(u,f,p&&"active",a&&"".concat(f,"-").concat(a),l&&"".concat(f,"-").concat(l),m.href&&d&&"disabled")})}));l.displayName="Button";const p=l},78602:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var o=n(98139),r=n.n(o),a=n(65043),i=n(67852),s=n(70579);const c=a.forwardRef(((e,t)=>{const[{className:n,...o},{as:a="div",bsPrefix:c,spans:l}]=function(e){let{as:t,bsPrefix:n,className:o,...a}=e;n=(0,i.oU)(n,"col");const s=(0,i.gy)(),c=(0,i.Jm)(),l=[],p=[];return s.forEach((e=>{const t=a[e];let o,r,i;delete a[e],"object"===typeof t&&null!=t?({span:o,offset:r,order:i}=t):o=t;const s=e!==c?"-".concat(e):"";o&&l.push(!0===o?"".concat(n).concat(s):"".concat(n).concat(s,"-").concat(o)),null!=i&&p.push("order".concat(s,"-").concat(i)),null!=r&&p.push("offset".concat(s,"-").concat(r))})),[{...a,className:r()(o,...l,...p)},{as:t,bsPrefix:n,spans:l}]}(e);return(0,s.jsx)(a,{...o,ref:t,className:r()(n,!l.length&&c)})}));c.displayName="Col";const l=c},53519:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var o=n(98139),r=n.n(o),a=n(65043),i=n(67852),s=n(70579);const c=a.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:o=!1,as:a="div",className:c,...l}=e;const p=(0,i.oU)(n,"container"),d="string"===typeof o?"-".concat(o):"-fluid";return(0,s.jsx)(a,{ref:t,...l,className:r()(c,o?"".concat(p).concat(d):p)})}));c.displayName="Container";const l=c},61072:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var o=n(98139),r=n.n(o),a=n(65043),i=n(67852),s=n(70579);const c=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,as:a="div",...c}=e;const l=(0,i.oU)(n,"row"),p=(0,i.gy)(),d=(0,i.Jm)(),u="".concat(l,"-cols"),m=[];return p.forEach((e=>{const t=c[e];let n;delete c[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const o=e!==d?"-".concat(e):"";null!=n&&m.push("".concat(u).concat(o,"-").concat(n))})),(0,s.jsx)(a,{ref:t,...c,className:r()(o,l,...m)})}));c.displayName="Row";const l=c},67852:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>d,Wz:()=>u,gy:()=>p,oU:()=>l});var o=n(65043);n(70579);const r=["xxl","xl","lg","md","sm","xs"],a="xs",i=o.createContext({prefixes:{},breakpoints:r,minBreakpoint:a}),{Consumer:s,Provider:c}=i;function l(e,t){const{prefixes:n}=(0,o.useContext)(i);return e||n[t]||t}function p(){const{breakpoints:e}=(0,o.useContext)(i);return e}function d(){const{minBreakpoint:e}=(0,o.useContext)(i);return e}function u(){const{dir:e}=(0,o.useContext)(i);return"rtl"===e}},55484:(e,t,n)=>{"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==s){var c=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:()=>i}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},96440:e=>{"use strict";var t=function(){};e.exports=t},98139:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=6559.488cb98d.chunk.js.map