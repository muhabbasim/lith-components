(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6295],{1912:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var a=t(65043),r=t(35475),l=t(14282),o=(t(59522),t(70579));const c=e=>{const s=e.themeColor&&e.themeColor[0],t=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],c=e.color&&e.color[1],i={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(c,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,o.jsx)(l.A,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:i,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,o.jsx)(n,{...e})}):(0,o.jsx)(r.N_,{style:i,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,o.jsx)(n,{...e})})},n=e=>(0,o.jsxs)(o.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,o.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const i=(0,a.memo)(c)},52972:(e,s,t)=>{"use strict";t.d(s,{Sc:()=>n,fs:()=>c,pd:()=>o});var a=t(65043),r=t(63516),l=t(70579);const o=(0,a.memo)((e=>{let{label:s,labelClass:t,className:a,showErrorMsg:o,...c}=e;const[n,i]=(0,r.Mt)(c);return(0,l.jsxs)("label",{className:"block relative ".concat(i.touched&&i.error?" errors-danger":"").concat(t?" ".concat(t):""),children:[s,(0,l.jsx)("input",{className:"".concat(a).concat(i.touched&&i.error?" errors-danger":""),...n,...c}),i.touched&&i.error&&o?(0,l.jsx)("span",{className:"text-sm text-error block mt-[5px]",children:i.error}):null]})})),c=(0,a.memo)((e=>{let{label:s,labelClass:t,className:a,showErrorMsg:o,...c}=e;const[n,i]=(0,r.Mt)(c);return(0,l.jsxs)("label",{className:"block relative".concat(i.touched&&i.error?" errors-danger":"").concat(t?" ".concat(t):""),children:[s,(0,l.jsx)("textarea",{className:"".concat(a).concat(i.touched&&i.error?" errors-danger":""),...n,...c}),i.touched&&i.error&&o?(0,l.jsx)("span",{className:"text-sm text-error block mt-[5px]",children:i.error}):null]})})),n=(0,a.memo)((e=>{let{label:s,labelClass:t,className:a,children:o,...c}=e;const[n,i]=(0,r.Mt)(c);return(0,l.jsxs)("label",{className:"block relative".concat(i.touched&&i.error?" errors-danger":"").concat(t?" ".concat(t):""),children:[(0,l.jsx)("input",{type:"checkbox",className:"".concat(a).concat(i.touched&&i.error?" errors-danger":""),...n,...c}),o]})}));o.defaultProps={showErrorMsg:!0}},59522:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(74117),r=t(70579);function l(e){let{children:s}=e;const{t:t}=(0,a.Bd)();return(0,r.jsx)(r.Fragment,{children:t("".concat(s))})}},23709:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>j});var a=t(65043),r=t(53519),l=t(61072),o=t(78602),c=t(90722),n=t(35475),i=t(79913),d=t(82752),m=t(63516),x=t(24792),p=t(30802),b=t(1912),u=t(52972),h=t(47045),f=t(78379),y=t(70579);const j=()=>{const e=(0,a.useRef)(null),s=(0,a.useRef)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,y.jsx)(r.A,{children:(0,y.jsxs)(l.A,{className:"items-center justify-center mb-0",children:[(0,y.jsx)(o.A,{xl:8,lg:6,children:(0,y.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Contact form"})}),(0,y.jsx)(o.A,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,y.jsxs)("ul",{className:"xs-text-center",children:[(0,y.jsx)("li",{children:(0,y.jsx)(n.N_,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,y.jsx)("li",{children:(0,y.jsx)(n.N_,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,y.jsx)("li",{children:"Contact form"})]})})]})})}),(0,y.jsx)(i.m.section,{className:"py-[160px] lg:py-[120px] md:py-[80px] xs:py-[50px]",...x.qG,children:(0,y.jsxs)(r.A,{children:[(0,y.jsx)(l.A,{children:(0,y.jsx)(o.A,{className:"mb-[6%]",children:(0,y.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Contact form style 01"})})}),(0,y.jsx)(l.A,{className:"justify-center",children:(0,y.jsx)(o.A,{xl:5,lg:10,md:10,children:(0,y.jsx)(m.l1,{initialValues:{name:"",email:"",phone:"",comment:"",recaptcha:""},validationSchema:h.ND,onSubmit:async(e,t)=>{if(t.setSubmitting(!0),""!==e.recaptcha){"success"===(await(0,p.sendEmail)(e)).status&&(0,p.resetForm)(t,s)}else s.current.captcha.classList.add("error")},children:t=>{let{isSubmitting:a,status:r,setFieldValue:l}=t;return(0,y.jsxs)(m.lV,{ref:e,children:[(0,y.jsx)(u.pd,{showErrorMsg:!1,name:"name",type:"text",className:"py-[18px] px-[25px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your name",labelClass:"mb-[25px]"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,name:"email",type:"email",className:"py-[18px] px-[25px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your email address",labelClass:"mb-[25px]"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,name:"phone",type:"tel",className:"py-[18px] px-[25px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Mobile number",labelClass:"mb-[25px]"}),(0,y.jsx)(u.fs,{className:"mb-[35px] pt-[22px] px-[25px] pb-[32px] w-full border-[1px] border-solid border-[#dfdfdf] resize-none",name:"comment",rows:"5",placeholder:"How can we help you?"}),{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GRECAPTCHA_API_KEY&&(0,y.jsx)(c.A,{ref:s,className:"mb-[35px]",sitekey:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GRECAPTCHA_API_KEY,onChange:e=>{l("recaptcha",e)}}),(0,y.jsx)(b.A,{ariaLabel:"form button",type:"submit",className:"font-medium font-serif rounded-none uppercase text-[11px]".concat(a?" loading":""),themeColor:["#0039e3","#8600d4"],size:"md",color:"#fff",title:"send message"}),(0,y.jsx)(d.N,{children:r&&(0,y.jsx)(i.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,y.jsx)(f.A,{className:"mt-[35px] py-[10px] tracking-[1px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}})})})]})}),(0,y.jsx)(i.m.section,{className:"py-[160px] bg-cover\tbg-no-repeat overflow-hidden relative bg-center lg:py-[120px] md:py-[95px] xs:py-[80px] xxs:py-[50px]",style:{backgroundImage:"url('https://via.placeholder.com/1920x857')"},...x.qG,children:(0,y.jsx)(r.A,{className:"xs:px-0",children:(0,y.jsx)(l.A,{className:"justify-end md:justify-center",children:(0,y.jsx)(o.A,{xl:7,lg:7,md:9,sm:11,children:(0,y.jsxs)("div",{className:"px-[7rem] py-[5rem] rounded-md shadow-[0_0_30px_rgb(0,0,0,0.08)] bg-white sm:p-20 xs:rounded-none xs:px-[3.5rem] xs:py-[6rem]",children:[(0,y.jsx)("span",{className:"mb-[15px] font-medium text-center text-[#8bb867] text-md font-serif uppercase block sm:mb-[10px]",children:"Request a call back"}),(0,y.jsx)("h5",{className:"w-[80%] mb-[40px] font-bold text-center\ttracking-[-1px] text-black font-serif uppercase mx-auto xs:w-full",children:"Need a consultant for your business?"}),(0,y.jsx)(m.l1,{initialValues:{name:"",email:""},validationSchema:h.ND,onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,p.sendEmail)(e)).status&&(0,p.resetForm)(s)},children:e=>{let{isSubmitting:s,status:t}=e;return(0,y.jsxs)(m.lV,{className:"mb-[30px]",children:[(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"text",name:"name",labelClass:"mb-[25px]",className:"rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your name"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"email",name:"email",labelClass:"mb-[25px]",className:"rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your email address"}),(0,y.jsx)(b.A,{ariaLabel:"form button",type:"submit",className:"btn-fill text-sm leading-none font-medium tracking-[1px] py-[13px] px-[32px] rounded-[4px] w-full uppercase mb-[5px]".concat(s?" loading":""),themeColor:"#8bb867",color:"#fff",size:"lg",title:"Request a call schedule"}),(0,y.jsx)(d.N,{children:t&&(0,y.jsx)(i.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,y.jsx)(f.A,{className:"mt-[20px] text-center py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}}),(0,y.jsx)("p",{className:"w-[80%] text-xs leading-6 mx-auto xs:w-full text-center",children:"We are committed to protecting your privacy. We will never collect information about you without your explicit consent."})]})})})})}),(0,y.jsx)(i.m.section,{className:"py-[160px] lg:py-[120px] md:py-[75px] sm:py-[50px] xs:py-[80px] xxs:py-[50px]",...x.qG,children:(0,y.jsxs)(r.A,{children:[(0,y.jsx)(l.A,{children:(0,y.jsx)(o.A,{className:"mb-[6%]",children:(0,y.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Contact form style 03"})})}),(0,y.jsx)(l.A,{className:"justify-center",children:(0,y.jsx)(o.A,{children:(0,y.jsx)(m.l1,{initialValues:{name:"",email:"",phone:"",terms_condition:!1},validationSchema:h.a,onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,p.sendEmail)(e)).status&&(0,p.resetForm)(s)},children:e=>{let{isSubmitting:s,status:t}=e;return(0,y.jsxs)(m.lV,{children:[(0,y.jsxs)(l.A,{className:"row-cols-1 row-cols-md-2",children:[(0,y.jsxs)(o.A,{className:"mb-16 lg:mb-[25px] sm:mb-0",children:[(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"text",name:"name",className:"py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]",labelClass:"mb-[25px]",placeholder:"Your name"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"email",name:"email",className:"py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]",labelClass:"mb-[25px]",placeholder:"Your email address"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"tel",name:"phone",className:"py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]",labelClass:"sm:mb-[25px]",placeholder:"Mobile number"})]}),(0,y.jsx)(o.A,{className:"mb-16 lg:mb-[25px]",children:(0,y.jsx)(u.fs,{className:"border-[1px] border-solid border-[#dfdfdf] w-full h-full py-[15px] px-[20px] text-md resize-none",name:"comment",labelClass:"h-full sm:h-[200px]",placeholder:"Your message"})}),(0,y.jsx)(o.A,{className:"text-left sm:mb-[20px]",children:(0,y.jsx)(u.Sc,{type:"checkbox",name:"terms_condition",className:"inline-block mt-[4px]",labelClass:"flex items-start",children:(0,y.jsxs)("span",{className:"ml-[10px] text-sm w-[85%] md:w-[90%] xs:w-[85%]",children:["I accept the terms & conditions and I understand that my data will be hold securely in accordance with the\xa0",(0,y.jsx)(n.N_,{to:"/privacy",target:"_blank",className:"text-darkgray underline hover:text-fastblue",children:"privacy policy"}),"."]})})}),(0,y.jsx)(o.A,{className:"text-right sm:text-center",children:(0,y.jsx)(b.A,{ariaLabel:"form button",type:"submit",className:"text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase".concat(s?" loading":""),themeColor:["#556fff","#ff798e"],size:"md",color:"#fff",title:"Send Message"})})]}),(0,y.jsx)(d.N,{children:t&&(0,y.jsx)(l.A,{children:(0,y.jsx)(o.A,{xs:12,children:(0,y.jsx)(i.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,y.jsx)(f.A,{className:"mt-[20px] py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})})})]})}})})})]})}),(0,y.jsx)(i.m.section,{className:"py-[160px] bg-darkslateblue lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...x.qG,children:(0,y.jsxs)(r.A,{children:[(0,y.jsx)(l.A,{children:(0,y.jsx)(o.A,{className:"mb-[6%]",children:(0,y.jsx)("h6",{className:"font-serif text-white text-center font-medium mb-[25px] lg:mb-[15px]",children:"Contact form style 04"})})}),(0,y.jsx)(l.A,{className:"justify-center",children:(0,y.jsx)(o.A,{xl:5,lg:10,md:10,className:"xs:px-[15px]",children:(0,y.jsx)(m.l1,{initialValues:{name:"",email:"",phone:""},validationSchema:h.ND,onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,p.sendEmail)(e)).status&&(0,p.resetForm)(s)},children:e=>{let{isSubmitting:s,status:t}=e;return(0,y.jsxs)(m.lV,{children:[(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"text",name:"name",labelClass:"mb-[25px]",className:"pt-[20px] pr-[36px] pb-[23px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px]",placeholder:"Your name"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"email",name:"email",labelClass:"mb-[25px]",className:"pt-[20px] pr-[36px] pb-[23px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px]",placeholder:"Your email address"}),(0,y.jsx)(u.pd,{showErrorMsg:!1,type:"tel",name:"phone",labelClass:"mb-[25px]",className:"pt-[20px] pr-[36px] pb-[23px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px]",placeholder:"Mobile number"}),(0,y.jsx)(u.fs,{className:"mb-[35px] py-[20px] pr-[36px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px] resize-none",rows:"6",name:"comment",placeholder:"How can we help you?"}),(0,y.jsx)(b.A,{ariaLabel:"form button",type:"submit",className:"tracking-[0.5px] rounded-none font-medium uppercase".concat(s?" loading":""),themeColor:["#556fff","#ff798e"],size:"sm",color:"#fff",title:"Send Message"}),(0,y.jsx)(d.N,{children:t&&(0,y.jsx)(i.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,y.jsx)(f.A,{className:"mt-[20px] py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}})})})]})})]})}},41497:(e,s,t)=>{"use strict";var a=t(13218);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,s,t,r,l,o){if(o!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function s(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:l,resetWarningCache:r};return t.PropTypes=t,t}},65173:(e,s,t)=>{e.exports=t(41497)()},13218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},14282:(e,s,t)=>{"use strict";t.d(s,{A:()=>d});var a=t(98139),r=t.n(a),l=t(65043),o=t(14140),c=t(67852),n=t(70579);const i=l.forwardRef(((e,s)=>{let{as:t,bsPrefix:a,variant:l="primary",size:i,active:d=!1,disabled:m=!1,className:x,...p}=e;const b=(0,c.oU)(a,"btn"),[u,{tagName:h}]=(0,o.Am)({tagName:t,disabled:m,...p}),f=h;return(0,n.jsx)(f,{...u,...p,ref:s,disabled:m,className:r()(x,b,d&&"active",l&&"".concat(b,"-").concat(l),i&&"".concat(b,"-").concat(i),p.href&&m&&"disabled")})}));i.displayName="Button";const d=i},85632:(e,s,t)=>{"use strict";t.d(s,{A:()=>m});var a=t(65173),r=t.n(a),l=t(65043),o=t(98139),c=t.n(o),n=t(70579);const i={"aria-label":r().string,onClick:r().func,variant:r().oneOf(["white"])},d=l.forwardRef(((e,s)=>{let{className:t,variant:a,"aria-label":r="Close",...l}=e;return(0,n.jsx)("button",{ref:s,type:"button",className:c()("btn-close",a&&"btn-close-".concat(a),t),"aria-label":r,...l})}));d.displayName="CloseButton",d.propTypes=i;const m=d},61072:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var a=t(98139),r=t.n(a),l=t(65043),o=t(67852),c=t(70579);const n=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:a,as:l="div",...n}=e;const i=(0,o.oU)(t,"row"),d=(0,o.gy)(),m=(0,o.Jm)(),x="".concat(i,"-cols"),p=[];return d.forEach((e=>{const s=n[e];let t;delete n[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const a=e!==m?"-".concat(e):"";null!=t&&p.push("".concat(x).concat(a,"-").concat(t))})),(0,c.jsx)(l,{ref:s,...n,className:r()(a,i,...p)})}));n.displayName="Row";const i=n},4488:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var a=t(65043),r=t(98139),l=t.n(r),o=t(70579);const c=e=>a.forwardRef(((s,t)=>(0,o.jsx)("div",{...s,ref:t,className:l()(s.className,e)})))}}]);
//# sourceMappingURL=6295.0ae4d071.chunk.js.map