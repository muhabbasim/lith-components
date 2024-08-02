"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1133],{73171:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(65043),l=s(22963),i=s.n(l),o=s(65173),r=s(79663),c=s(68569),n=s(70579);const d={Close:e=>{const{customModal:t,setCustomModal:s}=(0,a.useContext)(c.A);return(0,n.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:e=>{e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((()=>{s({...t,el:null,isOpen:!1})}),100)},children:e.children})},Wrapper:e=>{const t=(0,a.useRef)(null),l=(0,a.useRef)(null),{customModal:o,setCustomModal:d}=(0,a.useContext)(c.A),m=()=>{t.current.node.classList.remove("open"),setTimeout((()=>{d({...o,el:null,isOpen:!1})}),100)},x=()=>{d({...o,el:t.current.node,isOpen:!0}),setTimeout((()=>{t.current.node.classList.add("open")}),100)};return(0,a.useEffect)((()=>{t.current.node.classList.add("custom_modal");const e=e=>{27===e.keyCode&&m()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,a.useEffect)((()=>{!0===e.defaultOpen&&setTimeout((()=>{Promise.all([s.e(8906),s.e(9437),s.e(802)]).then(s.bind(s,30802)).then((e=>{"shown"===e.getCookie("litho-promo-popup")?m():x()}))}),200)}),[]),(0,r.A)(l,m),i().setAppElement("#modal-outer"),(0,n.jsxs)("div",{className:e.className,children:[(0,n.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:x,children:e.modalBtn}),(0,n.jsx)(i(),{className:e.animation,ref:t,isOpen:null!==o.el&&o.el===t.current.node&&!0===o.isOpen,onRequestClose:m,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:()=>document.body,children:(0,n.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,n.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:m,children:"\xd7"}),(0,n.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:l,children:e.children})]})})]})}};d.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},d.Wrapper.propTypes={className:o.PropTypes.string,closeBtnOuter:o.PropTypes.bool,defaultOpen:o.PropTypes.bool,children:o.PropTypes.oneOfType([o.PropTypes.arrayOf(o.PropTypes.node),o.PropTypes.node]).isRequired},d.Close.propTypes={className:o.PropTypes.string,children:o.PropTypes.oneOfType([o.PropTypes.arrayOf(o.PropTypes.node),o.PropTypes.node]).isRequired};const m=d},42625:(e,t,s)=>{s.d(t,{e:()=>c,p:()=>r});var a=s(65043),l=s(96300),i=s(79913),o=s(70579);const r=e=>(0,o.jsx)(i.m.div,{className:"justify-center",...e.animation,children:(0,o.jsx)(l.A,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}),c=e=>{const t=(0,a.useRef)(null),[s,l]=(0,a.useState)(0),[r,c]=(0,a.useState)(0),[n,d]=(0,a.useState)(0),m=(0,a.useRef)({}),x={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((e=>e)),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((e=>e)),")"):e.lineColor};return(0,a.useEffect)((()=>{const t=setInterval((()=>{l((t=>t!==e.data.length-1?t+1:0))}),e.duration);return()=>clearTimeout(t)}),[]),(0,a.useEffect)((()=>{let e=0,s=0;setTimeout((()=>{t.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(t){e=t.clientWidth>e?t.clientWidth:e,s=t.clientHeight>s?t.clientHeight:s})),c(e+10),d(s)}),1e3)}),[]),(0,o.jsx)(i.m.div,{initial:{width:"auto"},animate:{width:r,height:n},ref:t,className:"cd-words-wrapper".concat(s?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:x,children:e.data.map(((t,a)=>(0,o.jsx)("span",{className:"cd-text".concat(s===a?" is-visible":" is-hidden"),ref:e=>m.current[a]=e,children:"type"===e.animation||"flip"===e.animation?t.split("").map(((l,i)=>(0,o.jsx)("i",{className:s===a?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/t.split("").length/2e3*i,"s")},children:l},i))):t},a)))})};r.defaultProps={className:"font-serif"}},81673:(e,t,s)=>{s.d(t,{A:()=>y});var a=s(65043),l=s(78602),i=s(69437),o=s.n(i),r=s(29376),c=s(79913),n=s(70579);const d=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"297",height:"367",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center",children:(0,n.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),m=(0,a.memo)(d),x=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"300",height:"300",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center py-[50px]",children:(0,n.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),p=(0,a.memo)(x),h=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"297",height:"297",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0  flex items-center justify-center py-[50px]",children:(0,n.jsx)("i",{className:"feather-zoom-in  text-[28px] font-light\ttext-white"})})]}),u=(0,a.memo)(h);var g=s(55634);const f=(e,t,s)=>{switch(e.theme){case"image-gallery-01":default:return(0,n.jsx)(m,{data:t});case"image-gallery-02":return(0,n.jsx)(p,{data:t});case"image-gallery-03":return(0,n.jsx)(u,{data:t})}},b=e=>{const[t,s]=(0,a.useState)(!1),[i,d]=(0,a.useState)(0),m=e.overlay&&"object"===typeof e.overlay?"linear-gradient(to top right, ".concat(e.overlay.map(((e,t)=>e)),")"):e.overlay,x=(0,a.useRef)(),p=(0,a.useRef)();return(0,a.useEffect)((()=>{x.current=new(o())(p.current,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),setTimeout((()=>{x.current.arrange({filter:"*"})}),1e3)}),[]),(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(r.A,{imageCaption:"".concat(e.data[i].title,"... ").concat(i+1," of ").concat(e.data.length),mainSrc:e.data[i].src,onCloseRequest:()=>s(!1),nextSrc:e.data[(i+1)%e.data.length].src,prevSrc:e.data[(i+e.data.length-1)%e.data.length].src,onMovePrevRequest:()=>d((i+e.data.length-1)%e.data.length),onMoveNextRequest:()=>d((i+1)%e.data.length)}),(0,n.jsx)(l.A,{children:(0,n.jsxs)("ul",{ref:p,className:"".concat(e.theme," ").concat(e.className?"".concat(e.className):"","grid-container ").concat(e.grid?"".concat(e.grid):""),children:[(0,n.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,a)=>(0,n.jsx)(c.m.li,{...e.animation,transition:{delay:a*e.animationDelay},className:"grid-item".concat(t.double_col?" grid-item-double":""),children:(0,n.jsx)("div",{className:"image-box",style:{background:"image-gallery-03"===e.theme?e.overlay[a]&&e.overlay[a]:m},onClick:()=>(e=>{s(!0),d(e)})(a),children:f(e,t)})},a)))]})})]})};b.defaultProps={data:g.rc,animationDelay:.2};const y=(0,a.memo)(b)},55634:(e,t,s)=>{s.d(t,{iD:()=>l,pW:()=>i,rc:()=>a});const a=[{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"}],l=[{double_col:!0,src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{double_col:!0,src:"https://via.placeholder.com/800x387",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"}],i=[{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"}]},62492:(e,t,s)=>{s.r(t),s.d(t,{default:()=>L});s(65043);var a=s(78602),l=s(36061),i=s(53519),o=s(61072),r=s(79913),c=s(35475),n=s(59425),d=s(81673),m=s(56789),x=s(76890),p=s(68345),h=s(1912),u=s(42625),g=s(71991),f=s(73171),b=s(37531),y=s(24792),j=s(30156),w=s(70579);const N=[{src:"https://via.placeholder.com/800x1060",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1060",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1060",title:"Lightbox gallery image title"}],v=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],k=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"}],A=p.bt.filter((e=>"clean"===e.blogType)),L=e=>(0,w.jsxs)("div",{style:e.style,children:[(0,w.jsx)(n.Ay,{topSpace:{desktop:!1,md:!0},type:"reverse-scroll",theme:"light",bg:"light",menu:"light",children:(0,w.jsxs)(n.zr,{fluid:"fluid",theme:"dark",expand:"lg",containerClass:"sm:px-0",className:"py-[0px] px-[35px] md:py-[18px] md:px-0",children:[(0,w.jsx)(a.A,{sm:6,lg:2,className:"col-auto me-auto ps-lg-0",children:(0,w.jsx)(c.N_,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,w.jsxs)(l.A.Brand,{className:"inline-block p-0 m-0",children:[(0,w.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,w.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"}),(0,w.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"})]})})}),(0,w.jsx)("div",{className:"order-last px-[15px] md:ml-[17px] sm:ml-[10px] hidden md:block",children:(0,w.jsxs)(l.A.Toggle,{children:[(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,w.jsx)(l.A.Collapse,{className:"col-auto col-lg-8 justify-center",children:(0,w.jsx)(n.W1,{...e})}),(0,w.jsx)(a.A,{className:"col-auto col-lg-2 text-end pe-0",children:(0,w.jsx)(m.A,{data:k,theme:"light",size:"xs",iconColor:"black"})})]})}),(0,w.jsx)(b.default,{}),(0,w.jsxs)("section",{className:"cover-background py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",style:{backgroundImage:"url(https://via.placeholder.com/1920x900)"},children:[(0,w.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-60 bg-darkgray"}),(0,w.jsx)(i.A,{children:(0,w.jsx)(o.A,{children:(0,w.jsxs)(a.A,{lg:8,md:10,className:"relative h-[600px] flex justify-end flex-col sm:h-[400px]",children:[(0,w.jsx)("h2",{className:"font-serif text-white font-medium mb-[5.5rem] w-[85%] lg:w-full",children:"Nature always wears the colors of the spirit"}),(0,w.jsxs)("ul",{children:[(0,w.jsxs)("li",{className:"inline-block mr-[50px] xs:block xs:mb-[10px] xs:mr-0",children:[(0,w.jsx)("span",{className:"text-white opacity-50 block",children:"Author name"}),(0,w.jsx)(c.N_,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-white font-serif",children:"Colene landin"})]}),(0,w.jsxs)("li",{className:"inline-block mr-[50px] xs:block xs:mb-[10px] xs:mr-0",children:[(0,w.jsx)("span",{className:"text-white opacity-50 block",children:"Publication date"}),(0,w.jsx)("span",{className:"text-white font-serif",children:"9 October 2020"})]}),(0,w.jsxs)("li",{className:"inline-block mr-[50px] xs:block xs:mr-0",children:[(0,w.jsx)("span",{className:"text-white opacity-50 block",children:"Categories"}),(0,w.jsx)(c.N_,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-white font-serif",children:"Latest fashion"})]})]})]})})})]}),(0,w.jsx)("section",{className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,w.jsx)(i.A,{children:(0,w.jsxs)(o.A,{className:"justify-center",children:[(0,w.jsxs)(a.A,{md:7,className:"sm:mb-[30px]",children:[(0,w.jsx)("h6",{className:"text-darkgray font-medium",children:"We finished our first sensor sweep of the neutral zone. You did exactly what you had to do. You considered all your options you tried every alternative"}),(0,w.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi eu ipsum orci pellentesque et vulputate odio sed finibus nibh. Etiam sit amet dictum nibh at pharetra quam aliquam luctus suscipit erat eget dignissim. In bibendum felis id justo venenatis rhoncus suspendisse potenti duis et gravida purus, laoreet maximus nibh. Maecenas malesuada ac risus rutrum gravida. Phasellus nec mi luctus, egestas magna eget, consequat sem."})]}),(0,w.jsx)(a.A,{lg:{span:4,offset:1},md:5,children:(0,w.jsxs)("div",{className:"items-start h-full justify-center flex flex-col p-[4.5rem] bg-neonorange bg-no-repeat bg-right-bottom lg:p-12",style:{backgroundImage:"url(/assets/img/webp/blog-post-layout-01-img-11.webp)"},children:[(0,w.jsx)("i",{className:"fas fa-quote-left text-white text-[32px] mb-[30px]"}),(0,w.jsx)("h6",{className:"text-darkgray -tracking-[0.5px] w-full",children:"Style is a way to say who you are without having to speak"}),(0,w.jsx)("span",{className:"font-serif uppercase text-md text-white",children:"Rachel Landin"})]})})]})})}),(0,w.jsx)("section",{className:"overflow-hidden",children:(0,w.jsx)(i.A,{className:"px-0",children:(0,w.jsx)(o.A,{children:(0,w.jsx)(d.A,{animation:y.qG,grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center",theme:"image-gallery-01 flex",data:N,overlay:"#232323",className:""})})})}),(0,w.jsx)(r.m.section,{...y.qG,transition:{delay:.2},className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,w.jsx)(i.A,{children:(0,w.jsx)(o.A,{className:"justify-center",children:(0,w.jsxs)(a.A,{md:10,children:[(0,w.jsx)("h6",{className:"text-darkgray font-medium",children:"What's my style is not your style, and I don\u2019t see how you can define it. It\u2019s something that expresses who you are in your own way."}),(0,w.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id massa ac orci aliquet dictum scelerisque vel turpis. Nunc quis fermentum ipsum. Proin finibus arcu id condimentum dapibus. Aliquam erat volutpat. Proin quis metus viverra, sodales leo vitae, ullamcorper risus. In justo tellus, vulputate et sem non, tristique interdum libero. Fusce blandit mattis mauris ac aliquam. Donec mauris lacus tempor non dui commodo bibendum efficitur nibh ut elit dui auctor id tortor quis bibendum tempor orci mauris sed commodo lacus."})]})})})}),(0,w.jsx)(r.m.section,{...y.qG,transition:{delay:.2},className:"pt-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,w.jsx)(i.A,{children:(0,w.jsxs)(o.A,{className:"justify-center z-index-0 relative",children:[(0,w.jsx)(a.A,{children:(0,w.jsx)(u.p,{children:(0,w.jsx)("div",{className:"relative cover-background h-[700px] md:h-[550px] sm:h-[350px]",style:{backgroundImage:"url(https://via.placeholder.com/1350x900)"},children:(0,w.jsx)("div",{className:"absolute top-0 left-0 h-full w-full opacity-30 bg-darkgray"})})})}),(0,w.jsx)("div",{className:"absolute top-1/2 left-1/2 w-auto h-auto z-[5] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",children:(0,w.jsx)(f.A.Wrapper,{className:"absolute top-0 items-center h-full right-1/2 contents md:right-0 md:justify-center md:w-full",modalBtn:(0,w.jsx)(h.A,{type:"submit",className:"btn-sonar border-0 mx-auto",themeColor:"#fff",color:"#232323",size:"lg",title:(0,w.jsx)("i",{className:"icon-control-play"})}),children:(0,w.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,w.jsx)("div",{className:"fit-video",children:(0,w.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})})]})})}),(0,w.jsx)("section",{className:"pt-0 py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,w.jsx)(i.A,{children:(0,w.jsxs)(o.A,{className:"justify-center items-center",children:[(0,w.jsx)(r.m.div,{...y.qG,className:"col-12 col-sm-2 col-lg-1 sm:text-end xs:mb-[10px] xs:text-start",children:(0,w.jsx)("i",{className:"fas fa-quote-left text-neonorange text-[32px] mr-[30px]"})}),(0,w.jsx)(r.m.div,{...y.qG,transition:{delay:.5},className:"col-12 col-xl-7 col-lg-8 col-md-9 col-sm-10 border-l border-mediumgray xs:border-0",children:(0,w.jsx)("h6",{className:"font-serif font-medium text-darkgray ml-[30px] mb-0 leading-[40px] xs:ml-0 xs:leading-[30px]",children:"What's my style is not your style, and I don\u2019t see how you can define it. It\u2019s something that expresses who you are in your own way."})})]})})}),(0,w.jsx)("section",{children:(0,w.jsx)(i.A,{children:(0,w.jsxs)(r.m.div,{...y.qG,className:"row justify-center",children:[(0,w.jsx)(a.A,{xs:12,className:"mb-20 xs:mb-[15px]",children:(0,w.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/1350x900",alt:""})}),(0,w.jsx)(a.A,{xs:12,children:(0,w.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/1350x900",alt:""})})]})})}),(0,w.jsx)(r.m.section,{...y.qG,className:"py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,w.jsxs)(i.A,{children:[(0,w.jsx)(o.A,{children:(0,w.jsxs)(a.A,{lg:10,className:"flex flex-wrap items-center mx-auto mb-[35px] sm:block",children:[(0,w.jsx)(a.A,{md:9,className:"md:text-start sm:mb-[10px] xs:text-center px-0 sm:justify-center",children:(0,w.jsxs)("div",{className:"tag-cloud flex flex-wrap sm:justify-center gap-y-5",children:[(0,w.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Development"}),(0,w.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Events"}),(0,w.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Media"}),(0,w.jsx)(c.N_,{"aria-label":"tag",className:"!mr-[8px] mb-[10px]",to:"/blogs/blog-grid",children:"Mountains"})]})}),(0,w.jsx)(a.A,{md:3,className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,w.jsxs)(c.N_,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] mb-[10px] leading-[20px] hover:text-black hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] transition-default",to:"#",children:[(0,w.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,w.jsx)("span",{children:"05 Likes"})]})})]})}),(0,w.jsx)(o.A,{children:(0,w.jsx)(a.A,{lg:10,className:"mx-auto mb-[60px] md:mb-[30px] ",children:(0,w.jsxs)("div",{className:"flex items-center w-full bg-white rounded-[5px] p-16 sm:block shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:[(0,w.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,w.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/125x125",className:"rounded-full w-[110px] mx-auto",alt:""}),(0,w.jsx)(c.N_,{"aria-label":"link",to:"/blogs/blog-grid",className:"text-darkgray font-serif font-medium mt-[20px] inline-block text-md hover:text-fastblue",children:"Colene Landin"}),(0,w.jsx)("span",{className:"text-md block leading-[18px] sm:mb-[15px]",children:"Co-founder"})]}),(0,w.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,w.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,w.jsx)(h.A,{to:"/blogs/blog-grid",className:"font-medium font-serif after:bg-black after:h-[2px] pt-0 hover:text-black uppercase btn-link md:mb-[15px]",color:"#232323",size:"lg",title:"All author posts"})]})]})})}),(0,w.jsx)(o.A,{children:(0,w.jsx)(a.A,{className:"col-12 col-lg-10 justify-center text-center mx-auto",children:(0,w.jsx)(m.A,{theme:"social-icon-style-09",className:"mt-auto justify-center",size:"md",iconColor:"dark",data:v,animation:y.qG,animationDelay:.3})})})]})}),(0,w.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,w.jsxs)(i.A,{className:"sm:px-0",children:[(0,w.jsx)(o.A,{className:"justify-center",children:(0,w.jsxs)(a.A,{lg:5,md:6,className:"text-center mb-20",children:[(0,w.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,w.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related posts"})]})}),(0,w.jsx)(x.A,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:A.slice(0,3)})]})}),(0,w.jsx)(j.A,{}),(0,w.jsx)(g.A,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})},61072:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(98139),l=s.n(a),i=s(65043),o=s(67852),r=s(70579);const c=i.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,as:i="div",...c}=e;const n=(0,o.oU)(s,"row"),d=(0,o.gy)(),m=(0,o.Jm)(),x="".concat(n,"-cols"),p=[];return d.forEach((e=>{const t=c[e];let s;delete c[e],null!=t&&"object"===typeof t?({cols:s}=t):s=t;const a=e!==m?"-".concat(e):"";null!=s&&p.push("".concat(x).concat(a,"-").concat(s))})),(0,r.jsx)(i,{ref:t,...c,className:l()(a,n,...p)})}));c.displayName="Row";const n=c}}]);
//# sourceMappingURL=1133.c23eb601.chunk.js.map