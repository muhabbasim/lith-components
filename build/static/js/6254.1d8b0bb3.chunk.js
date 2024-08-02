"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6254,4792],{73171:(e,s,t)=>{t.d(s,{A:()=>x});var l=t(65043),a=t(22963),i=t.n(a),c=t(65173),o=t(79663),r=t(68569),n=t(70579);const d={Close:e=>{const{customModal:s,setCustomModal:t}=(0,l.useContext)(r.A);return(0,n.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:e=>{e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((()=>{t({...s,el:null,isOpen:!1})}),100)},children:e.children})},Wrapper:e=>{const s=(0,l.useRef)(null),a=(0,l.useRef)(null),{customModal:c,setCustomModal:d}=(0,l.useContext)(r.A),x=()=>{s.current.node.classList.remove("open"),setTimeout((()=>{d({...c,el:null,isOpen:!1})}),100)},m=()=>{d({...c,el:s.current.node,isOpen:!0}),setTimeout((()=>{s.current.node.classList.add("open")}),100)};return(0,l.useEffect)((()=>{s.current.node.classList.add("custom_modal");const e=e=>{27===e.keyCode&&x()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,l.useEffect)((()=>{!0===e.defaultOpen&&setTimeout((()=>{Promise.all([t.e(8906),t.e(9437),t.e(802)]).then(t.bind(t,30802)).then((e=>{"shown"===e.getCookie("litho-promo-popup")?x():m()}))}),200)}),[]),(0,o.A)(a,x),i().setAppElement("#modal-outer"),(0,n.jsxs)("div",{className:e.className,children:[(0,n.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:m,children:e.modalBtn}),(0,n.jsx)(i(),{className:e.animation,ref:s,isOpen:null!==c.el&&c.el===s.current.node&&!0===c.isOpen,onRequestClose:x,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:()=>document.body,children:(0,n.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,n.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:x,children:"\xd7"}),(0,n.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:a,children:e.children})]})})]})}};d.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},d.Wrapper.propTypes={className:c.PropTypes.string,closeBtnOuter:c.PropTypes.bool,defaultOpen:c.PropTypes.bool,children:c.PropTypes.oneOfType([c.PropTypes.arrayOf(c.PropTypes.node),c.PropTypes.node]).isRequired},d.Close.propTypes={className:c.PropTypes.string,children:c.PropTypes.oneOfType([c.PropTypes.arrayOf(c.PropTypes.node),c.PropTypes.node]).isRequired};const x=d},81673:(e,s,t)=>{t.d(s,{A:()=>y});var l=t(65043),a=t(78602),i=t(69437),c=t.n(i),o=t(29376),r=t(79913),n=t(70579);const d=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"297",height:"367",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center",children:(0,n.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),x=(0,l.memo)(d),m=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"300",height:"300",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center py-[50px]",children:(0,n.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),p=(0,l.memo)(m),h=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"297",height:"297",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0  flex items-center justify-center py-[50px]",children:(0,n.jsx)("i",{className:"feather-zoom-in  text-[28px] font-light\ttext-white"})})]}),g=(0,l.memo)(h);var u=t(55634);const b=(e,s,t)=>{switch(e.theme){case"image-gallery-01":default:return(0,n.jsx)(x,{data:s});case"image-gallery-02":return(0,n.jsx)(p,{data:s});case"image-gallery-03":return(0,n.jsx)(g,{data:s})}},f=e=>{const[s,t]=(0,l.useState)(!1),[i,d]=(0,l.useState)(0),x=e.overlay&&"object"===typeof e.overlay?"linear-gradient(to top right, ".concat(e.overlay.map(((e,s)=>e)),")"):e.overlay,m=(0,l.useRef)(),p=(0,l.useRef)();return(0,l.useEffect)((()=>{m.current=new(c())(p.current,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),setTimeout((()=>{m.current.arrange({filter:"*"})}),1e3)}),[]),(0,n.jsxs)(n.Fragment,{children:[s&&(0,n.jsx)(o.A,{imageCaption:"".concat(e.data[i].title,"... ").concat(i+1," of ").concat(e.data.length),mainSrc:e.data[i].src,onCloseRequest:()=>t(!1),nextSrc:e.data[(i+1)%e.data.length].src,prevSrc:e.data[(i+e.data.length-1)%e.data.length].src,onMovePrevRequest:()=>d((i+e.data.length-1)%e.data.length),onMoveNextRequest:()=>d((i+1)%e.data.length)}),(0,n.jsx)(a.A,{children:(0,n.jsxs)("ul",{ref:p,className:"".concat(e.theme," ").concat(e.className?"".concat(e.className):"","grid-container ").concat(e.grid?"".concat(e.grid):""),children:[(0,n.jsx)("li",{className:"grid-sizer"}),e.data.map(((s,l)=>(0,n.jsx)(r.m.li,{...e.animation,transition:{delay:l*e.animationDelay},className:"grid-item".concat(s.double_col?" grid-item-double":""),children:(0,n.jsx)("div",{className:"image-box",style:{background:"image-gallery-03"===e.theme?e.overlay[l]&&e.overlay[l]:x},onClick:()=>(e=>{t(!0),d(e)})(l),children:b(e,s)})},l)))]})})]})};f.defaultProps={data:u.rc,animationDelay:.2};const y=(0,l.memo)(f)},55634:(e,s,t)=>{t.d(s,{iD:()=>a,pW:()=>i,rc:()=>l});const l=[{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"}],a=[{double_col:!0,src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{double_col:!0,src:"https://via.placeholder.com/800x387",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"}],i=[{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"}]},24792:(e,s,t)=>{t.d(s,{Ce:()=>o,Rg:()=>u,U6:()=>h,cR:()=>g,gy:()=>n,jl:()=>p,ke:()=>x,nF:()=>i,qG:()=>a,tE:()=>c,xs:()=>d,z7:()=>r,z9:()=>m});const l=window.innerWidth<768,a=l?{}:{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4}},i=l?{}:{initial:{opacity:0,scale:.3},whileInView:{opacity:1,scale:1},viewport:{once:!0}},c=l?{}:{initial:{opacity:0,y:"30%"},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},o=l?{}:{initial:{opacity:0,y:-50},whileInView:{opacity:1,y:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},r=l?{}:{initial:{opacity:0,filter:"blur(20px)"},whileInView:{opacity:1,filter:"blur(0px)"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},n=l?{}:{initial:{opacity:0,x:"-50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},d=l?{}:{initial:{opacity:0,x:"50%"},whileInView:{opacity:1,x:"0"},viewport:{once:!0},transition:{ease:"circOut",duration:1}},x=l?{}:{initial:{opacity:0,scale:1.2},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.4}},m=l?{}:{transition:{y:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1/0,type:"spring"}},whileInView:{y:["40px","20px"]}},p=l?{}:{transition:{opacity:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:2,type:"spring"}},whileInView:{opacity:[0,1]}},h=l?{}:{whileInView:{scale:[1,1.05,1]},transition:{duration:.9,ease:"easeIn",delay:.3},viewport:{once:!0}},g=l?{}:{transition:{scaleX:{duration:.6,viewport:{once:!0},ease:"easeOut",yoyo:1,type:"spring"}},whileInView:{scaleX:[1,1.5,1]}},u=l?{}:{initial:{opacity:0,y:-150,rotate:45},whileInView:{opacity:1,y:"0",rotate:0},viewport:{once:!0},transition:{ease:"circOut",duration:1}}},41231:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(65043);var l=t(78602),a=t(36061),i=t(53519),c=t(61072),o=t(35475),r=t(79913),n=t(1912),d=t(71991),x=t(81673),m=t(56789),p=t(59425),h=t(73171),g=t(37531),u=t(24792),b=t(55634),f=t(70579);const y=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],j=e=>(0,f.jsxs)("div",{style:e.style,children:[(0,f.jsx)(p.Ay,{topSpace:{desktop:!0},type:"reverse-scroll",children:(0,f.jsxs)(p.zr,{fluid:"fluid",theme:"light",bg:"white",menu:"light",className:"px-[35px] py-[0px] md:px-0 border-b border-b-[#0000001a]",containerClass:"sm:px-0",children:[(0,f.jsx)(l.A,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,f.jsx)(o.N_,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,f.jsxs)(a.A.Brand,{className:"inline-block p-0 m-0",children:[(0,f.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"}),(0,f.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"}),(0,f.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"})]})})}),(0,f.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,f.jsxs)(a.A.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,f.jsx)("span",{className:"navbar-toggler-line"}),(0,f.jsx)("span",{className:"navbar-toggler-line"}),(0,f.jsx)("span",{className:"navbar-toggler-line"}),(0,f.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,f.jsx)(a.A.Collapse,{className:"col-auto px-0 justify-end",children:(0,f.jsx)(p.W1,{...e})}),(0,f.jsxs)(l.A,{className:"col-auto text-right pe-0",children:[(0,f.jsx)(p.IW,{className:"pr-0 xs:p-0"}),(0,f.jsx)(p.WD,{}),(0,f.jsx)(p.sS,{})]})]})}),(0,f.jsx)(g.default,{}),(0,f.jsx)("section",{className:"h-[600px] bg-no-repeat bg-cover overflow-hidden relative bg-center items-center py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] lg:h-[400px] flex",style:{backgroundImage:"url(https://via.placeholder.com/1920x609)"},children:(0,f.jsx)(i.A,{children:(0,f.jsxs)(c.A,{className:"items-center justify-center",children:[(0,f.jsx)(l.A,{lg:4,sm:5,className:"col-9 text-center xs:mb-[30px] xs:flex xs:justify-center",children:(0,f.jsx)("img",{height:"",width:"",className:"mx-auto",src:"https://via.placeholder.com/349x160",alt:""})}),(0,f.jsx)(l.A,{lg:8,sm:7,className:"col-10 sm:p-0",children:(0,f.jsxs)("div",{className:"relative text-right sm:text-end xs:text-center sm:mx-[15px]",children:[(0,f.jsx)("div",{className:"h-[1px] w-[90%] right-0 top-[30px] z-0 bg-[#986248] block absolute sm:block sm:w-full sm:top-[25px] xs:hidden xs:w-[95%] xs:right-[15px]"}),(0,f.jsx)(o.N_,{to:"#",className:"px-[35px] py-[20px] bg-[#986248] leading-[20px] text-white text-xmd relative inline-block text-right sm:py-[15px] sm:px-[25px]",children:"www.sixthsense.com"})]})})]})})}),(0,f.jsx)("section",{className:"bg-lightgray py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,f.jsx)(i.A,{children:(0,f.jsxs)(c.A,{children:[(0,f.jsxs)(l.A,{xl:4,lg:5,className:"md:mb-[30px] xl:pr-0",children:[(0,f.jsx)("span",{className:"mb-[20px] text-sm uppercase block md:mb-[10px]",children:"About the project information"}),(0,f.jsx)("h6",{className:"w-[85%] lg:w-[80%] tracking-[-1px] text-darkgray font-serif mb-0 xs:w-full",children:"I always feel great when I don't have clothes on."})]}),(0,f.jsxs)(l.A,{lg:2,xl:{offset:1},md:4,className:"sm:mb-[20px]",children:[(0,f.jsx)("span",{className:"mb-[20px] text-sm uppercase block md:mb-[10px]",children:"Awards"}),(0,f.jsx)("span",{className:"w-[85%] md:w-[75%] xs:w-full leading-[28px] text-darkgray text-xmd font-serif block",children:"Best website design 2020"})]}),(0,f.jsxs)(l.A,{lg:2,md:4,className:"sm:mb-[20px]",children:[(0,f.jsx)("span",{className:"mb-[20px] text-sm uppercase block md:mb-[10px]",children:"Services"}),(0,f.jsxs)("span",{className:"w-[85%] md:w-[60%] xs:w-full leading-[28px] text-darkgray text-xmd font-serif block",children:["Web design and Branding",""]})]}),(0,f.jsxs)(l.A,{lg:3,md:4,className:"",children:[(0,f.jsx)("span",{className:"mb-[20px] text-sm uppercase block md:mb-[10px]",children:"Client"}),(0,f.jsxs)("span",{className:"w-[85%] md:w-[75%] xs:w-full leading-[28px] text-darkgray text-xmd font-serif block",children:["Sixth sense fashion Indonesia",""]})]})]})})}),(0,f.jsx)("section",{className:"overflow-visible px-[8%] relative py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] xl:px-[5%] lg:px-[3%] xs:px-[15px]",children:(0,f.jsx)(i.A,{fluid:!0,children:(0,f.jsx)(c.A,{children:(0,f.jsx)(l.A,{className:"h-[800px] relative bg-cover overflow-hidden bg-center bg-no-repeat bg-fixed text-center xs:h-[300px] md:bg-scroll\tmd:h-[650px] sm:h-[500px]",style:{backgroundImage:"url(https://via.placeholder.com/1920x1050)"}})})})}),(0,f.jsx)("section",{className:"pb-[130px] overflow-hidden lg:pb-[90px] md:pb-[75px] sm:pb-[50px]",children:(0,f.jsx)(i.A,{children:(0,f.jsxs)(c.A,{children:[(0,f.jsx)(r.m.div,{...u.qG,className:"col-12 col-lg-6 md:mb-[30px] xs:mb-[20px]",children:(0,f.jsxs)("h5",{className:"text-darkgray font-serif mb-0",children:[" Fashion is a form of ",(0,f.jsx)("span",{className:"font-semibold",children:"ugliness so intolerable"})," that we have to alter it every six months."]})}),(0,f.jsx)(r.m.div,{...u.qG,transition:{delay:.5},className:"col-12 col-lg-5 offset-lg-1",children:(0,f.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})})}),(0,f.jsx)("section",{className:"px-[8%] xl:px-[5%] lg:px-[3%] xs:px-0",children:(0,f.jsx)(i.A,{fluid:!0,children:(0,f.jsx)(c.A,{className:"justify-center",children:(0,f.jsx)(l.A,{className:"h-[700px] bg-no-repeat bg-cover overflow-hidden relative bg-center md:h-[550px] sm:h-[350px]",style:{backgroundImage:"url(https://via.placeholder.com/1570x700)"},children:(0,f.jsx)("div",{className:"font-serif text-white",children:(0,f.jsx)("span",{className:"inline-block",children:(0,f.jsx)(h.A.Wrapper,{className:"flex absolute top-0 left-0 w-full h-full items-center justify-center",modalBtn:(0,f.jsx)(n.A,{type:"submit",className:"btn-sonar border-0 mx-auto",themeColor:"#986248",color:"#fff",size:"lg",title:(0,f.jsx)("i",{className:"icon-control-play"})}),children:(0,f.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,f.jsx)("div",{className:"fit-video",children:(0,f.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})})})})})})}),(0,f.jsx)("section",{className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,f.jsx)(i.A,{children:(0,f.jsxs)(c.A,{className:"items-center",children:[(0,f.jsx)(r.m.div,{...u.gy,className:"col-12 col-xl-6 col-md-5 sm:mb-[30px]",children:(0,f.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x800",alt:""})}),(0,f.jsxs)(l.A,{xl:5,lg:{span:6,offset:1},md:7,children:[(0,f.jsxs)("h5",{className:"text-darkgray font-serif",children:["A woman carries her clothes but shoe ",(0,f.jsx)("span",{className:"font-medium",children:"carries the woman"})]}),(0,f.jsx)("p",{className:"mb-[4.5rem]",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula eros, sollicitudin sed orci ut, vehicula fringilla turpis. Quisque tincidunt nulla id suscipit sodales. Suspendisse potenti nam iaculis lectus id odio mollis porttitor."}),(0,f.jsxs)(c.A,{className:"row-cols-1",children:[(0,f.jsxs)(r.m.div,{...u.qG,className:"col col-sm text-center xs:mb-[30px]",children:[(0,f.jsx)("i",{className:"line-icon-Blouse text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0"}),(0,f.jsx)("span",{className:"leading-[18px] font-medium text-sm font-serif uppercase block",children:"SMOOTH COTTON"})]}),(0,f.jsxs)(r.m.div,{...u.qG,transition:{delay:.5},className:"col col-sm offset-lg-1 text-center xs:mb-[30px]",children:[(0,f.jsx)("i",{className:"line-icon-Leafs text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0"}),(0,f.jsx)("span",{className:"leading-[18px] font-medium text-sm font-serif uppercase block",children:"NATURAL FABRIC"})]}),(0,f.jsxs)(r.m.div,{...u.qG,transition:{delay:.6},className:"col col-sm offset-lg-1 text-center xs:mb-[30px]",children:[(0,f.jsx)("i",{className:"line-icon-Polo-Shirt text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0"}),(0,f.jsx)("span",{className:"leading-[18px] font-medium text-sm font-serif uppercase block",children:"STRETCH FABRIC"})]}),(0,f.jsxs)(r.m.div,{...u.qG,transition:{delay:.7},className:"col col-sm offset-lg-1 text-center",children:[(0,f.jsx)("i",{className:"line-icon-Box-Open text-[40px] inline-block mb-[20px] text-[#986248] sm:mb-0"}),(0,f.jsx)("span",{className:"leading-[18px] font-medium text-sm font-serif uppercase block",children:"FABRIC PRINTING"})]})]})]})]})})}),(0,f.jsx)("section",{className:"px-[8%] py-0 overflow-hidden xl:px-[5%] lg:px-[3%] xs:px-[15px]",children:(0,f.jsx)(i.A,{fluid:!0,children:(0,f.jsxs)(c.A,{children:[(0,f.jsx)(l.A,{lg:3,sm:6,style:{backgroundImage:"url(https://via.placeholder.com/800x1367)"},className:"h-[800px] bg-no-repeat bg-cover overflow-hidden relative bg-center lg:h-[450px] sm:h-[450px] xs:h-[650px] md:mb-[15px]"}),(0,f.jsx)(l.A,{lg:3,sm:6,style:{backgroundImage:"url(https://via.placeholder.com/800x1367)"},className:"h-[800px] bg-no-repeat bg-cover overflow-hidden relative bg-center lg:h-[450px] sm:h-[450px] xs:h-[650px] md:mb-[15px]"}),(0,f.jsx)(l.A,{lg:6,style:{backgroundImage:"url(https://via.placeholder.com/960x820)"},className:"h-[800px] bg-no-repeat bg-cover overflow-hidden relative bg-center lg:h-[450px]"})]})})}),(0,f.jsx)("section",{className:"pt-[130px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px]",children:(0,f.jsxs)(i.A,{children:[(0,f.jsx)(c.A,{className:"justify-center",children:(0,f.jsxs)(l.A,{xl:6,lg:7,sm:8,className:"mb-28 text-center px-[15px] md:mb-20",children:[(0,f.jsx)("span",{className:"mb-[15px] font-serif font-medium text-[#986248] text-md uppercase block",children:"Stranger by his clothes"}),(0,f.jsx)("h5",{className:"tracking-[-1px] text-darkgray font-serif mb-0",children:"The fashionable woman wears clothes. The clothes don't wear her"})]})}),(0,f.jsxs)(c.A,{lg:3,sm:2,className:"row-cols-1 justify-center gap-y-[30px] xs:gap-y-[15px]",children:[(0,f.jsx)(r.m.div,{...u.gy,transition:{duration:.8,delay:.6},children:(0,f.jsxs)("div",{className:"bg-lightgray",children:[(0,f.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x651",alt:""}),(0,f.jsxs)("div",{className:"p-14 md:p-[2.5rem] text-center relative",children:[(0,f.jsx)("span",{className:"mb-[10px] font-medium text-darkgray font-serif block",children:"Business card design"}),(0,f.jsx)("p",{className:"",children:"Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor"})]})]})}),(0,f.jsx)(r.m.div,{...u.gy,transition:{duration:.6,delay:.4},children:(0,f.jsxs)("div",{className:"bg-lightgray",children:[(0,f.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x651",alt:""}),(0,f.jsxs)("div",{className:"p-14 md:p-[2.5rem] text-center relative",children:[(0,f.jsx)("span",{className:"mb-[10px] font-medium text-darkgray font-serif block",children:"Folder and file design"}),(0,f.jsx)("p",{className:"",children:"Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor"})]})]})}),(0,f.jsx)(r.m.div,{...u.gy,transition:{duration:.4,delay:.2},children:(0,f.jsxs)("div",{className:"bg-lightgray",children:[(0,f.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x651",alt:""}),(0,f.jsxs)("div",{className:"p-14 md:p-[2.5rem] text-center relative",children:[(0,f.jsx)("span",{className:"mb-[10px] font-medium text-darkgray font-serif block",children:"Brochure design"}),(0,f.jsx)("p",{className:"",children:"Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor"})]})]})})]})]})}),(0,f.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,f.jsxs)(i.A,{className:"text-center",children:[(0,f.jsx)("span",{className:"mb-[15px] font-medium text-darkgray text-sm font-serif uppercase inline-block",children:"Share this project"}),(0,f.jsx)(m.A,{theme:"social-icon-style-10",className:"justify-center",data:y})]})}),(0,f.jsx)("section",{className:"px-[8%] xl:px-[5%] lg:px-[2%] xs:px-0",children:(0,f.jsx)(i.A,{fluid:!0,children:(0,f.jsx)(c.A,{className:"gx-0 !mx-[-15px]",children:(0,f.jsx)(x.A,{animation:u.qG,theme:"image-gallery-01",data:b.rc,overlay:"#986248",className:"",grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center"})})})}),(0,f.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,f.jsx)(i.A,{children:(0,f.jsx)(c.A,{children:(0,f.jsx)(l.A,{className:"text-center",children:(0,f.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/1570x497",alt:""})})})})}),(0,f.jsx)("section",{className:"relative z-[1] bg-lightgray p-0 overflow-hidden",children:(0,f.jsx)(i.A,{fluid:!0,className:"px-0",children:(0,f.jsxs)(c.A,{sm:2,className:"row-cols-1 justify-center xs:text-center gx-0",children:[(0,f.jsx)(l.A,{className:"relative",children:(0,f.jsxs)(o.N_,{to:"/portfolio/single-project-page-01",className:"portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex",children:[(0,f.jsx)("div",{className:"portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150\tbg-no-repeat bg-cover overflow-hidden bg-center",style:{backgroundImage:"url(https://via.placeholder.com/955x185)"}}),(0,f.jsxs)("div",{className:"btn_icon font-medium text-darkgray font-serif mr-uto uppercase",children:[(0,f.jsx)("i",{className:"line-icon-Arrow-OutLeft duration-100\ttext-[40px] inline-block mr-[20px] align-middle\t"}),(0,f.jsx)("span",{className:"text-sm inline-block md:hidden",children:"Prev project"})]}),(0,f.jsx)("span",{className:"portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left",children:"Model photography"})]})}),(0,f.jsx)(l.A,{className:"relative md:flex md:justify-end xs:block",children:(0,f.jsxs)(o.N_,{to:"/portfolio/single-project-page-03",className:"portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex",children:[(0,f.jsx)("span",{className:"portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right",children:"Daimler financial"}),(0,f.jsx)("div",{className:"portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150\tbg-no-repeat bg-cover overflow-hidden bg-center",style:{backgroundImage:"url(https://via.placeholder.com/955x185)"}}),(0,f.jsxs)("div",{className:"btn_icon font-medium text-darkgray font-serif mr-uto uppercase",children:[(0,f.jsx)("span",{className:"text-sm inline-block md:hidden",children:"Next project "}),(0,f.jsx)("i",{className:"line-icon-Arrow-OutRight duration-100\ttext-[40px] inline-block ml-[20px] align-middle\t"})]})]})})]})})}),(0,f.jsx)(d.A,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})},61072:(e,s,t)=>{t.d(s,{A:()=>n});var l=t(98139),a=t.n(l),i=t(65043),c=t(67852),o=t(70579);const r=i.forwardRef(((e,s)=>{let{bsPrefix:t,className:l,as:i="div",...r}=e;const n=(0,c.oU)(t,"row"),d=(0,c.gy)(),x=(0,c.Jm)(),m="".concat(n,"-cols"),p=[];return d.forEach((e=>{const s=r[e];let t;delete r[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const l=e!==x?"-".concat(e):"";null!=t&&p.push("".concat(m).concat(l,"-").concat(t))})),(0,o.jsx)(i,{ref:s,...r,className:a()(l,n,...p)})}));r.displayName="Row";const n=r}}]);
//# sourceMappingURL=6254.1d8b0bb3.chunk.js.map