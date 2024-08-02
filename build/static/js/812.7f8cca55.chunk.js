"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[812],{42625:(e,s,t)=>{t.d(s,{e:()=>o,p:()=>c});var l=t(65043),a=t(96300),i=t(79913),n=t(70579);const c=e=>(0,n.jsx)(i.m.div,{className:"justify-center",...e.animation,children:(0,n.jsx)(a.A,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}),o=e=>{const s=(0,l.useRef)(null),[t,a]=(0,l.useState)(0),[c,o]=(0,l.useState)(0),[r,m]=(0,l.useState)(0),d=(0,l.useRef)({}),x={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((e=>e)),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((e=>e)),")"):e.lineColor};return(0,l.useEffect)((()=>{const s=setInterval((()=>{a((s=>s!==e.data.length-1?s+1:0))}),e.duration);return()=>clearTimeout(s)}),[]),(0,l.useEffect)((()=>{let e=0,t=0;setTimeout((()=>{s.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(s){e=s.clientWidth>e?s.clientWidth:e,t=s.clientHeight>t?s.clientHeight:t})),o(e+10),m(t)}),1e3)}),[]),(0,n.jsx)(i.m.div,{initial:{width:"auto"},animate:{width:c,height:r},ref:s,className:"cd-words-wrapper".concat(t?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:x,children:e.data.map(((s,l)=>(0,n.jsx)("span",{className:"cd-text".concat(t===l?" is-visible":" is-hidden"),ref:e=>d.current[l]=e,children:"type"===e.animation||"flip"===e.animation?s.split("").map(((a,i)=>(0,n.jsx)("i",{className:t===l?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/s.split("").length/2e3*i,"s")},children:a},i))):s},l)))})};c.defaultProps={className:"font-serif"}},86270:(e,s,t)=>{t.d(s,{A:()=>n});var l=t(65043),a=t(70579);const i=e=>{const s=(0,l.useRef)(null);return(0,l.useEffect)((()=>{function t(){if(s.current){let t=null===s||void 0===s?void 0:s.current.clientHeight,l=window.innerWidth>=768?t*e.value/100:0;null===s||void 0===s||s.current.style.setProperty("--overlapheight","-".concat(l,"px"))}}window.addEventListener("resize",t);let l=s.current.querySelectorAll("img");l.length>0?l.forEach((function(e){e.addEventListener("load",t)})):t()}),[]),(0,a.jsx)("div",{ref:s,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};i.defaultProps={value:50};const n=(0,l.memo)(i)},35713:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});t(65043);var l=t(78602),a=t(36061),i=t(53519),n=t(61072),c=t(35475),o=t(79913),r=t(59425),m=t(1912),d=t(56789),x=t(76890),p=t(42625),h=t(71991),u=t(86270),g=t(37531),f=t(24792),b=t(30156),y=t(68345),j=t(70579);const N=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],w=y.bt.filter((e=>"clean"===e.blogType)),v=e=>(0,j.jsxs)("div",{style:e.style,children:[(0,j.jsx)(r.Ay,{topSpace:{desktop:!1,md:!0},type:"reverse-scroll",children:(0,j.jsxs)(r.zr,{fluid:"fluid",theme:"dark",className:"px-[35px] py-[0px] md:px-0",containerClass:"sm:px-0",children:[(0,j.jsx)(l.A,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,j.jsx)(c.N_,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,j.jsxs)(a.A.Brand,{className:"inline-block p-0 m-0",children:[(0,j.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,j.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,j.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,j.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,j.jsxs)(a.A.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,j.jsx)("span",{className:"navbar-toggler-line"}),(0,j.jsx)("span",{className:"navbar-toggler-line"}),(0,j.jsx)("span",{className:"navbar-toggler-line"}),(0,j.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,j.jsx)(a.A.Collapse,{className:"col-auto px-0 justify-end",children:(0,j.jsx)(r.W1,{...e})}),(0,j.jsxs)(l.A,{className:"col-auto text-right pe-0",children:[(0,j.jsx)(r.IW,{className:"xs:pl-[15px] pr-0"}),(0,j.jsx)(r.WD,{className:"xs:pl-[15px]"}),(0,j.jsx)(r.sS,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,j.jsx)(g.default,{}),(0,j.jsx)("section",{style:{backgroundImage:"url(/assets/img/webp/blog-post-layout-05-img-12.webp)"},className:"py-[130px] h-[607px] overflow-hidden lg:py-[90px] sm:py-[50px] lg:h-[490px] sm:h-[400px] xs:h-auto",children:(0,j.jsx)(i.A,{children:(0,j.jsxs)(n.A,{children:[(0,j.jsxs)(l.A,{lg:6,xl:{offset:1},md:6,className:"flex justify-center flex-col pt-[6.5rem] sm:pt-16 xs:pt-0",children:[(0,j.jsxs)("div",{className:"inline-block uppercase mb-[25px] text-white leading-[22px]",children:[(0,j.jsx)(c.N_,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-white font-serif",children:"nature"}),(0,j.jsx)("span",{className:"opacity-50",children:"\xa0\xa0on\xa0\xa0"}),(0,j.jsx)("span",{className:"text-white font-serif",children:"23 November 2019"})]}),(0,j.jsx)("h3",{className:"font-serif text-white w-[90%] sm:mb-0 font-medium xs:mb-[25px] lg:w-[95%]",children:"Creativity is nothing but a mind set free"})]}),(0,j.jsx)(l.A,{md:3,className:"justify-center flex-col pt-[65px] md:pt-[66px] sm:hidden",children:(0,j.jsx)("span",{className:"h-[1px] opacity-50 bg-white w-full inline-block align-middle mt-[7.4rem] lg:mt-36"})}),(0,j.jsx)(l.A,{xl:2,md:3,className:"flex justify-center items-start flex-col pt-[65px] sm:py-16 xs:px-0 xs:py-0",children:(0,j.jsx)(c.N_,{"aria-label":"link",to:"/blogs/blog-grid",className:"ml-[15px] font-medium text-white font-serif",children:"By Colene landin"})})]})})}),(0,j.jsx)("section",{className:"visible py-0 ",children:(0,j.jsx)(i.A,{fluid:!0,children:(0,j.jsxs)(n.A,{className:"mt-[-100px] z-0 relative items-center justify-end lg:mt-[-80px] md:mt-[-60px] sm:mt-0",children:[(0,j.jsx)(l.A,{className:"left-[-50px] block absolute p-0",children:(0,j.jsx)("span",{className:"opacity-10 font-bold tracking-[-7px] text-darkgray text-[200px] leading-[200px] font-serif lg:text-[160px] md:text-[120px] sm:hidden",children:"business"})}),(0,j.jsx)(l.A,{md:9,className:"relative px-0",children:(0,j.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/1500x850",alt:"",className:"w-full"})})]})})}),(0,j.jsx)("section",{className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,j.jsx)(i.A,{children:(0,j.jsx)(o.m.div,{className:"row",...f.qG,children:(0,j.jsxs)(l.A,{lg:{span:9,offset:1},className:"",children:[(0,j.jsx)("h5",{className:"font-medium text-darkgray font-serif",children:"The ones who are crazy enough to think they can change the world, are the ones that do"}),(0,j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipiscing elit. In molestie elit quis risus mattis ornare pellentesque quam lacus rhoncus non leo non iaculis posuere felis. Nulla accumsan facilisis arcu vel sagittis. Donec tincidunt quam vel tellus cursus interdum. Maecenas nulla tellus viverra a pharetra quis convallis et lorem. Vestibulum ornare tincidunt scelerisque."})]})})})}),(0,j.jsx)("section",{className:"p-0 overflow-hidden",children:(0,j.jsx)(i.A,{fluid:!0,className:"px-[30px] sm:px-[15px]",children:(0,j.jsxs)(n.A,{children:[(0,j.jsx)(o.m.div,{className:"col-12 col-xl-3 col-md-6 pt-[40px] lg:px-[15px] sm:pt-0 sm:mb-[15px]",...f.qG,transition:{delay:.2},children:(0,j.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/800x980",alt:""})}),(0,j.jsx)(o.m.div,{className:"col-12 col-xl-3 col-md-6 lg:px-[15px] sm:mb-[15px]",...f.qG,transition:{delay:.4},children:(0,j.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/800x980",alt:""})}),(0,j.jsx)(o.m.div,{className:"col-12 col-xl-3 col-md-6 pt-[40px] lg:px-[15px] sm:pt-0 sm:mb-[15px]",...f.qG,transition:{delay:.6},children:(0,j.jsxs)("div",{className:"p-24 bg-darkgray text-white h-full flex items-start flex-col justify-center xl:p-8 lg:p-24 md:p-16",children:[(0,j.jsx)("h6",{className:"font-serif w-full",children:"All progress takes place outside the comfort zone"}),(0,j.jsx)("p",{className:"opacity-60 w-full mb-[35px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer."}),(0,j.jsx)(m.A,{href:"#",className:"font-medium font-serif uppercase rounded-none md:mb-[15px] bg-darkgray hover:text-black",color:"#fff",size:"sm",themeColor:"#fff",title:"read more"})]})}),(0,j.jsx)(o.m.div,{className:"col-12 col-xl-3 col-md-6 lg:px-[15px]",...f.qG,transition:{delay:.8},children:(0,j.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/800x980",alt:""})})]})})}),(0,j.jsx)("section",{className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,j.jsx)(i.A,{children:(0,j.jsx)(o.m.div,{className:"row xl:justify-center",...f.qG,children:(0,j.jsxs)(l.A,{lg:{span:9,offset:1},children:[(0,j.jsx)("h5",{className:"font-serif font-medium text-darkgray",children:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing you will be successful"}),(0,j.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the with the release of letraset sheets containing lorem ipsum passages and more recently with desktop. Lorem ipsum is simply dummy text of the printing and typesetting industry."})]})})})}),(0,j.jsx)("section",{className:"pt-[420px] pb-[255px] overflow-hidden lg:pt-[300px] md:pt-[200px] md:block sm:hidden",style:{backgroundImage:"url(/assets/img/webp/blog-post-layout-05-img-12.webp)"}}),(0,j.jsx)("section",{children:(0,j.jsxs)(i.A,{children:[(0,j.jsxs)(n.A,{className:"items-end relative",children:[(0,j.jsx)(u.A,{className:"mb-24 sm:mb-[15px] px-[15px] col-12 col-lg-5 offset-lg-1 col-md-6 overflow-hidden",children:(0,j.jsx)(o.m.div,{...f.gy,children:(0,j.jsxs)(p.p,{children:[(0,j.jsx)("h1",{className:"text-center text-black font-sans font-semibold mb-0 -tracking-[4px]",children:"01"}),(0,j.jsx)("div",{className:"mx-auto w-[1px] h-[110px] bg-black relative top-[25px]"}),(0,j.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/800x990",alt:""})]})})}),(0,j.jsx)(u.A,{className:"col-lg-5 col-md-6 px-[15px] mb-24 overflow-hidden",children:(0,j.jsx)(o.m.div,{...f.xs,children:(0,j.jsxs)(p.p,{children:[(0,j.jsxs)("div",{className:"text-start p-[6.5rem] bg-darkgray flex items-start flex-col justify-center lg:p-[52px] sm:py-16 sm:px-28 xs:p-16",children:[(0,j.jsx)("h6",{className:"font-serif text-white w-[90%]",children:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing you will successful."}),(0,j.jsx)("span",{className:"font-serif uppercase -tracking-[1px] font-medium",children:"Albert schweitzer"})]}),(0,j.jsx)("div",{className:"mx-auto w-[1px] h-[110px] bg-black relative top-[-25px]"}),(0,j.jsx)("h2",{className:"text-center text-black font-sans font-semibold tracking-[-4px] mb-0",children:"02"})]})})})]}),(0,j.jsxs)(n.A,{children:[(0,j.jsxs)(o.m.div,{className:"col-12 col-lg-5 col-md-6 offset-lg-1 sm:mb-[15px]",...f.qG,transition:{delay:.2},children:[(0,j.jsx)("span",{className:"font-serif block font-medium text-darkgray mb-[10px]",children:"Innovation work collaboration"}),(0,j.jsx)("p",{className:"w-[85%] md:w-full",children:"Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled."})]}),(0,j.jsxs)(o.m.div,{className:"col-12 col-lg-5 col-md-6",...f.qG,transition:{delay:.4},children:[(0,j.jsx)("span",{className:"font-serif block font-medium text-darkgray mb-[10px]",children:"Just look like and feels like"}),(0,j.jsx)("p",{className:"w-[85%] md:w-full",children:"Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled."})]})]})]})}),(0,j.jsx)("section",{className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,j.jsxs)(i.A,{children:[(0,j.jsx)(o.m.div,{className:"row",...f.qG,transition:{delay:.2},children:(0,j.jsxs)(l.A,{lg:10,className:"flex flex-wrap items-center mx-auto mb-[35px] sm:block",children:[(0,j.jsx)(l.A,{md:9,className:"md:text-start sm:mb-[10px] xs:text-center px-0 sm:justify-center",children:(0,j.jsxs)("div",{className:"tag-cloud flex flex-wrap sm:justify-center gap-y-5",children:[(0,j.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Development"}),(0,j.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Events"}),(0,j.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Media"}),(0,j.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Mountains"})]})}),(0,j.jsx)(l.A,{md:3,className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,j.jsxs)(c.N_,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] mb-[10px] leading-[20px] hover:text-black hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] transition-default",to:"#",children:[(0,j.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,j.jsx)("span",{children:"05 Likes"})]})})]})}),(0,j.jsx)(o.m.div,{className:"row",...f.qG,transition:{delay:.4},children:(0,j.jsx)(l.A,{lg:10,className:"mx-auto mb-[60px] md:mb-[30px] ",children:(0,j.jsxs)("div",{className:"flex items-center w-full bg-white rounded-[5px] p-16 sm:block shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:[(0,j.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,j.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/125x125",className:"rounded-full w-[110px] mx-auto",alt:""}),(0,j.jsx)(c.N_,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-darkgray font-serif font-medium mt-[20px] inline-block text-md hover:text-fastblue",children:"Colene Landin"}),(0,j.jsx)("span",{className:"text-md block leading-[18px] sm:mb-[15px]",children:"Co-founder"})]}),(0,j.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,j.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,j.jsx)(m.A,{to:"/blogs/blog-grid",className:"font-medium font-serif after:bg-black after:h-[2px] pt-0 hover:text-black uppercase btn-link md:mb-[15px]",color:"#232323",size:"lg",title:"All author posts"})]})]})})}),(0,j.jsx)(o.m.div,{className:"row",...f.qG,transition:{delay:.6},children:(0,j.jsx)(l.A,{className:"col-12 justify-center text-center elements-social social-icon-style-09 mx-auto",children:(0,j.jsx)(d.A,{theme:"social-icon-style-09",className:"mt-auto justify-center",size:"md",iconColor:"dark",data:N,animation:f.qG,animationDelay:.3})})})]})}),(0,j.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,j.jsxs)(i.A,{className:"sm:px-0",children:[(0,j.jsx)(n.A,{className:"justify-center",children:(0,j.jsxs)(l.A,{lg:5,md:6,className:"text-center mb-20",children:[(0,j.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,j.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related posts"})]})}),(0,j.jsx)(x.A,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:w.slice(0,3)})]})}),(0,j.jsx)(b.A,{}),(0,j.jsx)(h.A,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})},61072:(e,s,t)=>{t.d(s,{A:()=>r});var l=t(98139),a=t.n(l),i=t(65043),n=t(67852),c=t(70579);const o=i.forwardRef(((e,s)=>{let{bsPrefix:t,className:l,as:i="div",...o}=e;const r=(0,n.oU)(t,"row"),m=(0,n.gy)(),d=(0,n.Jm)(),x="".concat(r,"-cols"),p=[];return m.forEach((e=>{const s=o[e];let t;delete o[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const l=e!==d?"-".concat(e):"";null!=t&&p.push("".concat(x).concat(l,"-").concat(t))})),(0,c.jsx)(i,{ref:s,...o,className:a()(l,r,...p)})}));o.displayName="Row";const r=o}}]);
//# sourceMappingURL=812.7f8cca55.chunk.js.map