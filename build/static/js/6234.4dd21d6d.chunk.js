"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6234],{1912:(e,t,s)=>{s.d(t,{A:()=>c});var n=s(65043),a=s(35475),r=s(14282),i=(s(59522),s(70579));const o=e=>{const t=e.themeColor&&e.themeColor[0],s=e.themeColor&&e.themeColor[1],n=e.color&&e.color[0],o=e.color&&e.color[1],c={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(n,", ").concat(o,", ").concat(n,")"):e.color};return e.href||"submit"===e.type?(0,i.jsx)(r.A,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:c,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,i.jsx)(l,{...e})}):(0,i.jsx)(a.N_,{style:c,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,i.jsx)(l,{...e})})},l=e=>(0,i.jsxs)(i.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,i.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,i.jsx)("span",{})]});o.defaultProps={size:"lg",style:"primary"};const c=(0,n.memo)(o)},22747:(e,t,s)=>{s.d(t,{A:()=>c});var n=s(65043),a=s(61072),r=s(78602),i=s(1912),o=s(70579);const l=e=>(0,o.jsx)(a.A,{className:"pt-[7.5rem] sm:pt-[20px] pb-4 justify-center overflow-hidden ".concat(e.className?" ".concat(e.className):"").concat(e.grid?" ".concat(e.grid):""),children:e.data.map(((t,s)=>(0,o.jsx)(r.A,{className:"".concat(e.theme).concat(t.popular&&t.popular.isPopular?" popular":""," text-center rounded-md p-[0px] sm:px-[10px]"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,o.jsxs)("div",{className:"w-full",children:[t.title&&(0,o.jsx)("h3",{className:"title",children:t.title}),t.icon&&(0,o.jsx)("i",{className:"".concat(t.icon," icon")}),t.price&&(0,o.jsx)("h4",{className:"price",children:t.price}),(0,o.jsx)("ul",{className:"services-wrapper",children:t.plans&&t.plans.map(((e,t)=>(0,o.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)))}),t.buttonLink&&(t.popular&&t.popular.isPopular?(0,o.jsx)(i.A,{ariaLabel:"pricing table",to:t.buttonLink,className:"btn-fill font-medium font-serif uppercase mt-[5px]",color:"#ffffff",size:"md",themeColor:"#232323",title:t.buttonTitle}):(0,o.jsx)(i.A,{ariaLabel:"pricing table",to:t.buttonLink,className:"font-medium font-serif uppercase bg-[#fff] hover:text-white",color:"#000",size:"md",themeColor:"#000",title:t.buttonTitle}))]})},s)))}),c=(0,n.memo)(l)},54500:(e,t,s)=>{s.d(t,{A:()=>p});var n=s(65043),a=s(61072),r=s(78602),i=s(1912),o=s(50192),l=s(70579);const c=e=>(0,l.jsx)(a.A,{className:"".concat(e.grid),children:e.data.map(((t,s)=>(0,l.jsx)(r.A,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):"").concat(t.popular&&t.popular.isPopular?" popular":""," flex text-center justify-center rounded-md"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,l.jsxs)("div",{className:"pricing-wrapper",children:[t.subtitle&&(0,l.jsx)("div",{className:"pricing-sub-head text-md text-[14px] font-serif",children:t.subtitle}),t.title&&(0,l.jsx)("div",{className:"pricing-head font-medium text-[18px] uppercase font-serif md:text-xmd",children:t.title}),t.price&&(0,l.jsx)("h3",{className:"price-wrap font-medium font-serif mb-[8px]",children:t.price}),t.term&&(0,l.jsx)("div",{className:"pricing-terms",children:t.term}),(0,l.jsx)("span",{className:"plans-wrapper block",children:(0,l.jsx)("ul",{className:"py-12 pl-0 m-0 list-none",children:t.plans&&t.plans.map(((e,t)=>(0,l.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)))})}),t.buttonLink&&(t.popular?(0,l.jsx)(i.A,{ariaLabel:"pricing table",to:t.buttonLink,"aria-label":"price page link",className:"font-serif btn-fancy btn-fill rounded-none font-medium uppercase",themeColor:"#fff",color:"#232323",size:"md",title:t.buttonTitle}):(0,l.jsx)(i.A,{ariaLabel:"pricing table",to:t.buttonLink,"aria-label":"price page link",className:"font-medium btn-fancy btn-fill rounded-none font-serif uppercase",themeColor:"#232323",color:"#fff",size:"sm",title:t.buttonTitle}))]})},s)))});c.defaultProps={data:o.dr};const p=(0,n.memo)(c)},50192:(e,t,s)=>{s.d(t,{JJ:()=>i,Yt:()=>n,dc:()=>a,dr:()=>o,wn:()=>r});const n=[{title:"BASIC",subtitle:"Basic features",price:"$9.99",term:"monthly",plans:["<strong>5</strong> Domains","<strong>2 GB</strong> File upload","<strong>20 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Choose plan",buttonLink:"/page/pricing-packages"},{title:"STANDARD",subtitle:"MOST POPULAR",price:"$19.99",term:"monthly",plans:["<strong>10</strong> Domains","<strong>2 GB</strong> File upload","<strong>40 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Choose plan",buttonLink:"/page/pricing-packages",popular:{isPopular:!0}},{title:"PREMIUM",subtitle:"ALL YOU MAY NEED",price:"$29.99",term:"monthly",plans:["<strong>20</strong> Domains","<strong>4 GB</strong> File upload","<strong>60 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Choose plan",buttonLink:"/page/pricing-packages"}],a=[{icon:"line-icon-Boy",title:"STANDARD",price:"$800",term:"PER MONTH",plans:["Limited hours","Limited projects"],buttonTitle:"Get started",buttonLink:"/page/pricing-packages"},{icon:"line-icon-Business-Mens",title:"ADVANCED",price:"$1200",term:"PER MONTH",plans:["Unlimited hours","Unlimited projects","Unlimited variations"],buttonTitle:"Get started",buttonLink:"/page/pricing-packages",popular:{isPopular:!0}},{icon:"line-icon-Business-ManWoman",title:"BUSINESS",price:"$900",term:"PER MONTH",plans:["Unlimited hours","Unlimited projects"],buttonTitle:"Get started",buttonLink:"#"}],r=[{icon:"line-icon-Boy",title:"BASIC PLAN",subtitle:"Basic features",price:"$9.99",term:"monthly",plans:["<strong>5</strong> Domains","<strong>2 GB</strong> File upload","<strong>20 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Register now",buttonLink:"/page/pricing-packages"},{icon:"line-icon-Business-ManWoman",title:"STANDARD PLAN",subtitle:"MOST POPULAR",price:"$19.99",term:"monthly",plans:["<strong>10</strong> Domains","<strong>2 GB</strong> File upload","<strong>40 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Register now",buttonLink:"/page/pricing-packages",popular:{isPopular:!0}},{icon:"line-icon-Business-Mens",title:"PREMIUM PLAN",subtitle:"ALL YOU MAY NEED",price:"$29.99",term:"monthly",plans:["<strong>20</strong> Domains","<strong>4 GB</strong> File upload","<strong>60 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Register now",buttonLink:"/page/pricing-packages"}],i=[{icon:"line-icon-Boy",title:"BASIC PLAN",subtitle:"Basic features",price:"$90.99",term:"yearly",plans:["<strong>5</strong> Domains","<strong>2 GB</strong> File upload","<strong>20 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Register now",buttonLink:"/page/pricing-packages"},{icon:"line-icon-Business-ManWoman",title:"STANDARD PLAN",subtitle:"MOST POPULAR",price:"$199.99",term:"yearly",plans:["<strong>10</strong> Domains","<strong>2 GB</strong> File upload","<strong>40 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Register now",buttonLink:"/page/pricing-packages",popular:{isPopular:!0}},{icon:"line-icon-Business-Mens",title:"PREMIUM PLAN",subtitle:"ALL YOU MAY NEED",price:"$290.99",term:"yearly",plans:["<strong>20</strong> Domains","<strong>4 GB</strong> File upload","<strong>60 GB</strong> Secure storage","<strong>Unlimited</strong> bandwidth"],buttonTitle:"Register now",buttonLink:"/page/pricing-packages"}],o=[{title:"BASIC PLAN",subtitle:"Core features",price:"$29",term:"PER YEAR",plans:["Pixel perfect design","Personal applications","Step by step support"],buttonTitle:"Choose Package",buttonLink:"/page/pricing-packages"},{title:"STANDARD PLAN",subtitle:"Most popular",price:"$39",term:"PER YEAR",plans:["Pixel perfect design","Personal applications","Responsive app layout","Step by step support"],buttonTitle:"Choose Package",buttonLink:"/page/pricing-packages",popular:{isPopular:!0}},{title:"PREMIUM PLAN",subtitle:"Huge features",price:"$49",term:"PER YEAR",plans:["Pixel perfect design","Personal applications","Step by step support"],buttonTitle:"Choose Package",buttonLink:"/page/pricing-packages"}]},59522:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(74117),a=s(70579);function r(e){let{children:t}=e;const{t:s}=(0,n.Bd)();return(0,a.jsx)(a.Fragment,{children:s("".concat(t))})}},76234:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var n=s(98030),a=s(65043),r=s(53519),i=s(61072),o=s(78602),l=s(79422),c=s(35475),p=s(1912),m=s(50192),d=s(70579);const u=e=>(0,d.jsx)(i.A,{className:"".concat(e.grid," ").concat(e.className),children:e.data.map(((t,s)=>(0,d.jsx)(o.A,{className:"".concat(e.theme).concat(t.popular&&t.popular.isPopular?" popular":""," ").concat(e.themeColor," flex text-center justify-center rounded-md"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,d.jsxs)("div",{className:"pricing-wrapper",children:[t.popular&&t.popular.isPopular&&(0,d.jsx)("span",{className:"top-head hidden",children:"Popular"}),t.title&&(0,d.jsx)("div",{className:"pricing-head font-medium text-xlg uppercase font-serif",children:t.title}),t.subtitle&&(0,d.jsx)("div",{className:"pricing-sub-head text-sm uppercase mb-[40px]",children:t.subtitle}),t.price&&(0,d.jsx)("h3",{className:"heading-4 price-wrap mb-[5px] -tracking-[1px]",children:t.price}),t.term&&(0,d.jsx)("div",{className:"text-md",children:t.term}),(0,d.jsx)("span",{className:"plans-wrapper block",children:(0,d.jsx)("ul",{className:"pl-0 m-0 list-none py-[30px]",children:t.plans&&t.plans.map(((e,t)=>(0,d.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t)))})}),t.buttonLink&&(t.popular&&t.popular.isPopular?(0,d.jsx)(p.A,{ariaLabel:"pricing table",to:t.buttonLink,className:"font-serif font-medium mt-[15px] uppercase rounded-[4px] hover:text-white",size:"md",color:"#fff",themeColor:["#e42564","#fa6259"],title:t.buttonTitle}):(0,d.jsx)(p.A,{ariaLabel:"pricing table",to:t.buttonLink,className:"font-serif font-medium mt-[15px] uppercase rounded-[4px] btn-transparent hover:text-white",size:"sm",color:"#262b35",themeColor:"#262b35",title:t.buttonTitle}))]})},s)))});u.defaultProps={data:m.Yt};const g=(0,a.memo)(u),x=e=>(0,d.jsx)(i.A,{className:"".concat(e.grid," ").concat(e.className),children:e.data.map(((t,s)=>(0,d.jsx)(o.A,{className:"".concat(e.theme).concat(t.popular?" popular":""," text-center justify-center"),style:t.popular&&t.popular.color&&{"--popular-bg":t.popular.color},children:(0,d.jsxs)("div",{className:"pricing-wrapper",children:[t.popular&&t.popular.isPopular&&(0,d.jsx)("span",{className:"top-head hidden uppercase",children:"Popular"}),t.icon&&(0,d.jsx)("i",{className:"".concat(t.icon," text-[50px] text-[#ffcc2e] inline-block")}),t.title&&(0,d.jsx)("h3",{className:"font-semibold mt-[5px] text-xmd uppercase font-serif text-[#262b35] mb-[40px] tracking-normal",children:t.title}),t.price&&(0,d.jsx)("h4",{className:"price-wrap text-[#262b35] mb-0 font-semibold tracking-[-2px] font-serif",children:t.price}),t.term&&(0,d.jsx)("div",{className:"mb-[30px] uppercase font-medium tracking-[1px] text-sm text-[#828282] font-serif",children:t.term}),(0,d.jsx)("ul",{className:"mb-[40px] pl-0 mx-0 list-none",children:t.plans&&t.plans.map(((e,t)=>(0,d.jsx)("li",{className:"text-[#828282] mb-[10px] last:mb-0",dangerouslySetInnerHTML:{__html:e}},t)))}),t.buttonLink&&(t.popular&&t.popular.isPopular?(0,d.jsx)(p.A,{ariaLabel:"pricing table",to:t.buttonLink,className:"btn-fancy font-medium font-serif btn-fill rounded-none uppercase hover:text-black tracking-[0.5px]",color:"#ffffff",size:"sm",themeColor:"#232323",title:t.buttonTitle}):(0,d.jsx)(p.A,{ariaLabel:"pricing table",to:t.buttonLink,className:"btn-fancy font-medium font-serif uppercase btn-transparent rounded-none hover:text-white border-[#dbdbdb]",color:"#232323",size:"sm",themeColor:"#232323",title:t.buttonTitle}))]})},s)))});x.defaultProps={data:m.dc};const b=(0,a.memo)(x);var h=s(22747),f=s(54500);const j=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,d.jsx)(r.A,{children:(0,d.jsxs)(i.A,{className:"items-center justify-center mb-0",children:[(0,d.jsx)(o.A,{xl:8,lg:6,children:(0,d.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Pricing table"})}),(0,d.jsx)(o.A,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,d.jsxs)("ul",{className:"xs-text-center",children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,d.jsx)("li",{children:"Pricing table"})]})})]})})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(r.A,{children:[(0,d.jsx)(i.A,{children:(0,d.jsx)(o.A,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 01"})})}),(0,d.jsx)(g,{grid:"row-cols-1 row-cols-lg-3 gap-y-10 justify-center items-center",theme:"pricing-table-style-01 col-12 col-lg-4 col-md-8",className:"",data:m.Yt,themeColor:"dark"})]})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",children:(0,d.jsxs)(r.A,{className:"px-[7%] md:px-[15px]",children:[(0,d.jsx)(i.A,{children:(0,d.jsx)(o.A,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 02"})})}),(0,d.jsx)(b,{grid:"row-cols-1 row-cols-md-3 gap-y-[30px] sm:mx-0 justify-center items-center",theme:"pricing-table-style-02",className:"",data:m.dc})]})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,d.jsxs)(r.A,{children:[(0,d.jsx)(i.A,{children:(0,d.jsx)(o.A,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 03"})})}),(0,d.jsx)(i.A,{className:"justify-center",children:(0,d.jsx)(o.A,{xs:12,xl:10,lg:11,className:"switch-tab",children:(0,d.jsxs)(l.A,{defaultActiveKey:"monthly",children:[(0,d.jsx)(n.oz,{eventKey:"monthly",title:"MONTHLY",children:(0,d.jsx)(h.A,{grid:"row row-cols-1 gap-y-10 row-cols-md-3 items-center",theme:"pricing-table-style-03",className:"",data:m.wn})}),(0,d.jsx)(n.oz,{eventKey:"yearly",title:"YEARLY",children:(0,d.jsx)(h.A,{grid:"row row-cols-1 row-cols-md-3 gap-y-10 items-center",theme:"pricing-table-style-03",className:"",data:m.JJ})})]})})})]})}),(0,d.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",children:(0,d.jsxs)(r.A,{children:[(0,d.jsx)(i.A,{children:(0,d.jsx)(o.A,{className:"mb-[7%]",children:(0,d.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Pricing table style 04"})})}),(0,d.jsx)(f.A,{grid:"row-cols-1 row-cols-lg-3 gap-y-[30px] justify-center items-center",theme:"pricing-table-style-04 col-12 col-lg-4 col-md-8",className:"",data:m.dr})]})})]})}}]);
//# sourceMappingURL=6234.4dd21d6d.chunk.js.map