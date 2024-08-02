import React, { useState, useEffect } from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import { m } from 'framer-motion'
import { Languages } from '../../utils/LanguageData.ts';
import { useDispatch, useSelector } from '../../store/Store.tsx';
import { useTranslation } from 'react-i18next';
// Components
import Header, { HamburgerMenu, HeaderNav } from '../../Components/Header/Header'
import ReactCustomScrollbar from '../../Components/ReactCustomScrollbar'
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import Buttons from '../../Components/Button/Buttons'
import Overlap from '../../Components/Overlap/Overlap'
import CustomModal from '../../Components/CustomModal'
import { Footer } from '../../Components/Footers/Footer';
import { fadeIn } from '../../Functions/GlobalAnimations'
import hiratLogo from '../../Assets/hiratLogo.png'
import hiratLogo2 from '../../Assets/HIRAT_LOGO.png'
// Data
import Translatable from '../../Components/translatable_text/Translatable';
import { setDir, setLanguage } from '../../store/customizer/CustomizerSlice.tsx';

const SwiperData = [
  {
    number: "01",
    img: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Make your",
    subtitle: "team",
    btnName: "explore project",
    btnLink: "/portfolio/single-project-page-01"
  },
  {
    number: "02",
    img: "https://media.licdn.com/dms/image/D5612AQEei7PlFMiFMA/article-cover_image-shrink_720_1280/0/1694418920287?e=2147483647&v=beta&t=i1pY18kTblSac-1uX5CzDgB7A551pFrXKqFWGTzc6Ak",
    title: "Find your",
    subtitle: "future",
    btnName: "explore project",
    btnLink: "/portfolio/single-project-page-02"
  },
  {
    number: "02",
    img: "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reach your",
    subtitle: "pation",
    btnName: "explore project",
    btnLink: "/portfolio/single-project-page-02"
  },
  {
    number: "03",
    img: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Find your",
    subtitle: "calling",
    btnName: "explore project",
    btnLink: "/portfolio/single-project-page-03"
  }
]

const selecteworkData = [
  {
    title: "Design Specialist",
    subtitle: "Design Engineer",
    img: "https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/single-project-page-01"
  },
  {
    title: "IT PMO Manager",
    subtitle: "Information Tech",
    img: "https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/single-project-page-02"
  },
  {
    title: "Engineering Director",
    subtitle: "Engineering",
    img: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/single-project-page-03"
  },
  {
    title: "Marketing Data & Insights Analyst",
    subtitle: "Marketing",
    img: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/single-project-page-04"
  },
  {
    title: "Business Operations Analyst",
    subtitle: "Management",
    img: "https://cdn.pixabay.com/photo/2024/04/05/05/16/businesswoman-8676522_1280.jpg",
    link: "/portfolio/single-project-page-05"
  },
  {
    title: "Lead Projects Accounting",
    subtitle: "Finance",
    img: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/portfolio/single-project-page-01"
  }
]

const FooterIconData = [
  {
    color: "#828282",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    color: "#828282",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble"
  },
  {
    color: "#828282",
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    color: "#828282",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  }
]

// Filter the blog data category wise

const ArchitecturePage = (props) => {
  const [activeSlide, setActiveSlide] = useState(0)

    
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const customizer = useSelector((state) => state.customizer);
  const currentLang = Languages.find((lang) => lang.value === customizer.isLanguage) || Languages[0];
  

  const handleChageLanguage = async ( value ) => {
    localStorage.setItem('language', JSON.stringify(value))

    dispatch(setLanguage(value))  
    if ( value === 'ar' ) {
      dispatch(setDir('rtl'))
    } else if ( value === 'en' ) {
      dispatch(setDir('ltr'))
    }
  
    window.location.reload();
  }

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [currentLang]);


  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} className="bg-[#23262d] absolute top-0 w-full">
        <HeaderNav containerClass="ps-xl-0 pr-0 lg:pr-[15px] md:px-0 h-[100px] md:h-[70px]" fluid="fluid" expand="lg" bg="[#23262d]" className="px-[90px] py-0 xl:px-[45px] lg:px-0 md:px-[15px] navbar-lg-dark sm:px-0">
          <Col className="">
            <Navbar.Brand className="inline-block p-0 m-0">
              <Link aria-label="header logo link" className="flex items-center " target='_blank' to="https://www.neom.com/en-us">
                <img className="default-logo mt-3" style={{ maxHeight: '50px' }}  loading="lazy" src={hiratLogo} data-rjs='/assets/img/webp/logo-parrot-green@2x.webp' alt='logo' />
              </Link>
            </Navbar.Brand>
          </Col>
          <Col className="w-56 col-auto lg:pr-[15px] md:pr-0 flex gap-6">
            {Languages.map((lang) => (
              <span key={lang.value} style={{ color: currentLang.value === lang.value && "white"}} className={`cursor-pointer`} onClick={() => handleChageLanguage(lang.value)}>{lang.name}</span>
            ))}
          </Col>
          <Col className="col-auto lg:pr-[15px] md:pr-0">
            <HamburgerMenu theme="light" className="relative h-[100vh] w-1/2 xl:w-[60%] lg:w-[70%] md:w-[50%] sm:w-full z-[5] architecture-hamburgermenu landscape:md:h-[auto]">
              <Row className="h-full mx-0">
                <Col className="h-full col-6 bg-no-repeat bg-cover overflow-hidden relative bg-center md:hidden" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}></Col>
                <Col lg={6} className="p-0 h-full flex flex-col justify-center">
                  <Row className="flex-col landscape:md:flex-row landscape:md:overflow-auto p-[5.5rem] mx-0 h-[100vh] items-center justify-center xs:p-[3rem] bg-[#23262d] ">
                    <Col xs={12} className="hamburgermenu-modern-page p-0 text-left max-h-[calc(65vh-100px)] h-[calc(100vh-150px)] xs:max-h-[calc(65vh-60px)] xs:h-[calc(100vh-60px)]">
                      <ReactCustomScrollbar autoHide>
                        <div>
                          <ul className="font-serif w-full h-full flex flex-col justify-center sm:flex sm:flex-col sm:justify-center sm:h-full">
                            <li className="py-[13px] px-0 relative sm:text-center sm:!py-[10px]"><Link className="!font-normal" aria-label="menu" to="/"><Translatable>Home</Translatable></Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center sm:!py-[10px]"><Link className="!font-normal" aria-label="menu" to="/page/about-us"><Translatable>about</Translatable></Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center sm:!py-[10px]"><Link className="!font-normal" aria-label="menu" to="/page/our-services"><Translatable>services</Translatable></Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center sm:!py-[10px]"><Link className="!font-normal" aria-label="menu" to="/portfolio/portfolio-colorful-metro"><Translatable>portfolio</Translatable></Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center sm:!py-[10px]"><Link className="!font-normal" aria-label="menu" to="/home-magazine"><Translatable>blog</Translatable></Link></li>
                            <li className="py-[13px] px-0 relative sm:text-center sm:!py-[10px]"><Link className="!font-normal" aria-label="menu" to="/page/contact-modern"><Translatable>contact</Translatable></Link></li>
                          </ul>
                        </div>
                      </ReactCustomScrollbar>
                    </Col>
                    <Col xs={12} className="block p-0 sm:hidden">
                      <div className="hamburgermenu-modern-social-icon font-serif relative mt-[40px]">
                        <ul>
                          <li className="py-[10px] leading-none border-b border-[#ffffff26]"><a aria-label="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="text-white text-center rounded-full relative uppercase text-sm inline-block hover:opacity-50"><i className="fab fa-facebook-f w-[30px] text-left"></i>Facebook</a></li>
                          <li className="py-[10px] leading-none border-b border-[#ffffff26]"><a aria-label="link" target="_blank" rel="noreferrer" href="https://twitter.com/" className="text-white text-center rounded-full relative uppercase text-sm inline-block hover:opacity-50"><i className="fab fa-twitter w-[30px] text-left"></i>Twitter</a></li>
                          <li className="py-[10px] leading-none border-b border-[#ffffff26]"><a aria-label="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="text-white text-center rounded-full relative uppercase text-sm inline-block hover:opacity-50"><i className="fab fa-instagram w-[30px] text-left"></i>Instagram</a></li>
                          <li className="py-[10px] leading-none"><a aria-label="link" target="_blank" href="https://dribbble.com/" rel="noreferrer" className="text-white text-center rounded-full relative uppercase text-sm inline-block hover:opacity-50"><i className="fab fa-dribbble w-[30px] text-left"></i>Dribbble</a></li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </HamburgerMenu>
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}

      <div className="px-[90px] bg-[#23262d] overflow-hidden xl:px-[45px] lg:px-0">
        <div className="relative">
          {/* Section Start */}
          <section className="full-screen min-h-[-webkit-fill-available] sm:h-[760px] relative xs:h-[564px] architecture-slider-wrapper landscape:md:h-[400px]">
            <Swiper
              className="swiper-pagination-light h-full relative architecture-slider min-h-[-webkit-fill-available]"
              slidesPerView={1}
              loop={true}
              modules={[EffectFade, Navigation, Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={true}
              effect="fade"
              onSlideChange={(swiperCore) => {
                const { realIndex } = swiperCore;
                setActiveSlide(realIndex)
              }}>
              {
                SwiperData.map((item, i) => {
                  return (
                    <SwiperSlide key={i} className="overflow-hidden h-full relative bg-cover bg-no-repeat bg-center min-h-[-webkit-fill-available]" style={{ backgroundImage: `url(${item.img})` }}>
                      <div className="absolute h-full w-full top-0 left-0 opacity-[0.01] bg-black"></div>
                      <Container fluid className="relative h-full">
                        <Row className="justify-center h-full items-center">
                          <Col xs={12} xl={7} className="flex xs:justify-center xs:text-center pl-[65px]x lg:pl-[120px] md:pl-[30px]">

                            <div className="w-[144px] h-[221px] lg:w-[130px] lg:h-[198px] md:w-[165px] md:h-[255px] relative sm:hidden mx-[55px]">
                              <m.div
                                animate={activeSlide === i ? { scaleX: [0, 1], originX: ["0%", "0%"] } : { scaleX: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "linear" }}
                                className="bg-basecolorx bg-white opacity-30 absolute top-0 h-full w-full"></m.div>
                              <h2 className="heading-4 text-darkgrayx text-[#b79435]x text-[#6ab1dd] text-[85px] font-serif opacity-100 absolute top-[50px] -left-[7px] font-semibold lg:text-[75px] md:text-[87px] md:top-[70px]">0{i + 1}</h2>
                            </div>
                            
                            <div className="flex flex-col items-start justify-center xs:items-center">
                              <h2 className="heading-5 text-white text-[67px] leading-none tracking-[-2px] font-serif font-semibold text-shadow-small lg:text-[60px] md:text-[34px] sm:text-[75px] relative mb-[15px] xs:text-[45px]">
                                <Translatable>
                                  {item.title}
                                </Translatable>
                                <br></br>
                                <Translatable>
                                  {item.subtitle}
                                </Translatable>
                                <m.span
                                  animate={activeSlide === i ? { scaleX: [0, 1, 1, 0], originX: ["0%", "0%", "100%", "100%"] } : { scaleX: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.6, ease: "linear" }}
                                  className="bg-white list-block absolute top-0 left-0 h-full w-full"></m.span>
                              </h2>
                              <div className="relative inline-block">
                                <m.div
                                  animate={activeSlide === i ? { scaleX: [0, 1, 1, 0], originX: ["0%", "0%", "100%", "100%"] } : { scaleX: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.6, ease: "linear" }}
                                  className="bg-white list-block absolute top-0 h-full w-full"></m.div>
                                <Buttons ariaLabel="link for btn" to={item.btnLink} className="font-medium font-serif uppercase btn-link after:h-[1px] text-base leading-[20px] md:text-md md:mb-[15px] after:bg-[#fff] hover:text-[#fff]" color="#fff" size="xlg" title={<Translatable>{item.btnName}</Translatable>} />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </section>
          {/* Section End */}

          {/* Section Start */}
          <section className="overflow-hidden sm:py-[50px] xs:pb-0">
            <Container fluid className="md:p-0">
              <Row className="justify-end">
                <Col lg={7} xl={6} md={10} className="z-[1] absolute bottom-0 right-0 bg-[#23262d] flex py-[49px] px-8 xl:px-8 lg:py-12 sm:relative sm:pt-0 architecture-overlap xs:flex-col xs:items-center xs:text-center">
                  <div className="pl-[49px] pr-[39px] py-[10px] border-r border-[#ffffff1a] xl:px-6 md:px-12 xs:p-0 xs:mb-[20px] xs:border-0">
                    <span className="font-serif font-medium text-white inline-block mb-[5px] mxl:block xs:mr-[10px] xs:mb-0">01</span>
                    <span className="min-w-24 font-serif text-md uppercase block"><Translatable>for dreamers</Translatable></span>
                  </div>
                  <div className="pl-[49px] pr-[39px] py-[10px] border-r border-[#ffffff1a] xl:px-6 md:px-12 xs:p-0 xs:mb-[30px] xs:border-r-0">
                    <span className="font-serif font-medium text-white block mb-[5px] mxl:block xs:mr-[10px] xs:mb-0">02</span>
                    <span className="min-w-20 font-serif text-md uppercase inline-block"><Translatable>for doers</Translatable></span>
                  </div>
                  <div className="pl-14 pr-36 py-[10px] xl:px-6 sm:px-12 xs:p-0">
                    <span className="font-serif font-medium text-basecolorx text-[#b79435] uppercase block mb-[5px]">NEOM HR</span>
                    <span className="font-serif text-md uppercase block w-full xs:w-[90%] xs:mx-auto"><Translatable>Unlock your potential with Hirat's cutting-edge insights</Translatable></span>
                    {/* <span className="font-serif text-md uppercase block w-full xs:w-[90%] xs:mx-auto">NEOM offers opportunities in different sectors in a futuristic and innovative environment</span> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* Section End */}
        </div>

        {/* Section Start */}
        <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:pt-[0px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="items-center justify-center md:items-start sm:text-center">
              <Col lg={4} md={6} className="md:mb-[50px]">
                <m.div className="inline-block text-center w-[300px]x py-14 px-[15px] relative xs:p-[30px] xs:w-[315px]" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                  <div className="border-r-0 border-solid	border-[10px] border-[#ffffff1a] h-full w-[67px] block absolute bottom-0 left-0 xs:left-[25px]"></div>
                  <h1 className="text-[80px] leading-[72px] mb-0 mr-[15px] font-semibold tracking-[-5px] text-basecolorx text-[#b79435]x text-[#6ab1dd] font-serif inline-block align-middle"><Translatable>HIRAT</Translatable></h1>
                  {/* <img className="default-logo" style={{ width: '100%' }}  loading="lazy" src={hiratLogo2} data-rjs='/assets/img/webp/logo-parrot-green@2x.webp' alt='logo' /> */}
                  {/* <br/> */}
                  <div className="w-[40%]x leading-[24px] text-white text-xmd font-serif text-left relative inline-block align-middle lg:w-[50%] sm:w-[35%]"><Translatable>2030 Futuristic Vision</Translatable></div>
                  <div className="border-l-0 border-solid	border-[10px] border-[#ffffff1a] h-full w-[67px] block absolute bottom-0 right-0 xs:right-[25px]"></div>
                </m.div>
              </Col>
              <m.div className="col-lg-3 col-md-4 text-left sm:text-center" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                {/* <span className="mb-[20px] text-[15px] font-serif uppercase block">Since 1992</span> */}
                <span className="w-[85%] leading-[34px] font-medium text-white text-xlg font-serif block md:text-lg sm:w-full sm:mb-[15px]"><Translatable>UNLOCKING THE POTENTIAL OF SAUDI ARABIA'S FUTURE LEADERS</Translatable></span>
              </m.div>
              <m.div className="col-lg-5 col-md-10 text-leftx sm:text-center" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                <p className="w-[85%] mb-[20px] block sm:w-full"><Translatable>Advanced behavioral analysis uesed by NEOM to unlock applicant potential, gaining deep insights into their strengths and social skills. This enables NEOM's HR team to make informed recruitment decisions, placing the right individuals in roles where they can excel</Translatable></p>
                {/* <p className="w-[85%] mb-[20px] block sm:w-full">Hirat is an innovative project built upon specialized algorithms designed to analyze behaviors through multi-option based testing. This sophisticated analysis yields insights into individual social skills and identifies the best sectors that align with their capabilities</p> */}
                <Buttons ariaLabel="link for About company" to="/page/about-us" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] sm:mb-0 after:bg-spanishgray hover:text-spanishgray" color="#939393" size="xlg" title={<Translatable>Could you be the ideal candidate?</Translatable>} />
              </m.div>
            </Row>
          </Container>
        </section>
        {/* <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:pt-[0px] sm:py-[80px] xs:py-[50px]">
          <Container>
            <Row className="items-center justify-center md:items-start sm:text-center">
              <Col lg={4} md={6} className="md:mb-[50px]">
                <m.div className="inline-block text-center w-[300px]x py-14 px-[15px] relative xs:p-[30px] xs:w-[315px]" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                  <div className="border-r-0 border-solid	border-[10px] border-[#ffffff1a] h-full w-[67px] block absolute bottom-0 left-0 xs:left-[25px]"></div>
                  <h1 className="text-[80px] leading-[72px] mb-0 mr-[15px] font-semibold tracking-[-5px] text-basecolor font-serif inline-block align-middle">NEOM</h1>
                  <div className="w-[40%]x leading-[24px] text-white text-xmd font-serif text-left relative inline-block align-middle lg:w-[50%] sm:w-[35%]">2030 future vision</div>
                  <div className="border-l-0 border-solid	border-[10px] border-[#ffffff1a] h-full w-[67px] block absolute bottom-0 right-0 xs:right-[25px]"></div>
                </m.div>
              </Col>
              <m.div className="col-lg-3 col-md-4 text-left sm:text-center" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <span className="w-[85%] leading-[34px] font-medium text-white text-xlg font-serif block md:text-lg sm:w-full sm:mb-[15px]">UNLOCKING THE POTENTIAL OF SAUDI ARABIA'S FUTURE LEADERS</span>
              </m.div>
              <m.div className="col-lg-5 col-md-10 text-left sm:text-center" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                <p className="w-[85%] mb-[20px] block sm:w-full">NEOM offers the chance to work on the world's most ambitious project. Our Graduates Opportunities in Work (GrOW) program offers not only full-time employment, but also immersive training and extensive professional development resources. We are accelerating the growth of tomorrow's changemakers</p>
                <Buttons ariaLabel="link for About company" to="/page/about-us" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] sm:mb-0 after:bg-spanishgray hover:text-spanishgray" color="#939393" size="xlg" title="Could you be the ideal candidate?" />
              </m.div>
            </Row>
          </Container>
        </section> */}
        {/* Section End */}

        {/* <m.section {...{ ...fadeIn, transition: { delay: 0.5, duration: 1.2 } }}>
          <Container fluid className="lg:px-[30px]">
            <InteractiveBanners15 data={InteractiveBannersData15} grid="row-cols-1 row-cols-xl-4 row-cols-md-2 gap-y-10" animation={fadeIn} />
          </Container>
        </m.section> */}

            {/* Section Start */}
        <m.section className="cover-background p-0" style={{ backgroundImage: `url(https://neom.directory/images/neom-made-to-change.jpg)` }} {...fadeIn}>
          <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-darkslateblue"></div>
          <Container>
            <Row className="justify-center">
              <Col md={6} className="h-[600px] items-center flex flex-col justify-center text-center lg:h-[500px] sm:h-[400px] xs:h-[300px]">
                {/* Modal Component Start */}
                <CustomModal.Wrapper
                  modalBtn={<Buttons ariaLabel="modal button" type="submit" className="btn-sonar border-0" themeColor="#b79435" color="white" size="lg" title={<i className="icon-control-play" />} />
                  } >
                  <div className="w-[1020px] max-w-full relative rounded mx-auto">
                    <div className="fit-video">
                    <iframe width="852" height="300" src="https://www.youtube.com/embed/V_p3kl6FHDY" title="What is OXAGON?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      {/* <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://youtu.be/V_p3kl6FHDY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe> */}
                    </div>
                  </div>
                </CustomModal.Wrapper>
                {/* Modal Component End */}
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <m.section className="overflow-visible pb-0 md:pt-0 sm:pt-[50px] sm:pb-0" {...{ ...fadeIn, transition: { delay: 0.8 } }}>
          <Container fluid>
            <Row className="justify-end">
              <Overlap value={80} className="col col-xl-4 col-lg-6 col-md-7 relative bg-[#23262d] md:text-start sm:text-center py-[5.5rem] px-[6.5rem] xl:px-[4.5rem] lg:p-14 sm:px-[15px] sm:py-0">
                <h2 className="heading-4 font-serif font-medium text-white mb-0 -tracking-[1px]">
                  <Translatable>Leading the</Translatable> <br/>
                  <span className="text-basecolorx text-[#b79435] text-[#6ab1dd]x inline-block font-semibold  text-decoration-line-bottom">
                    <Translatable>Future Revolution</Translatable></span></h2>
              </Overlap>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
          <Container>
            <Row>
              <m.div className="w-full pb-10 flex flex-col justify-center items-center" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <img className="default-logo" style={{ width: '300px' }}  loading="lazy" src={hiratLogo2} data-rjs='/assets/img/webp/logo-parrot-green@2x.webp' alt='logo' />
              </m.div>
              <m.div className="w-full pb-10 flex flex-col justify-center items-center" {...{ ...fadeIn, transition: { delay: 0.5 } }}>
                <span style={{ fontSize: '40px'}} className="font-bold text-[#b79435] uppercase mb-[5px]"><Translatable>HIRAT ALGORITHEM</Translatable></span>
              </m.div>
              <Col lg={12} md={9} className="md:mb-[40px] xs:mb-[30px]">
                <m.h2 className="text-center heading-6 font-serif text-white leading-[44px] mb-0 md:leading-[34px] sm:leading-[30px] sm:w-[80%] xs:w-full" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                  <Translatable>
                    Integrating Hirat into NEOM's recruitment process sharpens candidate selection and streamlines hiring. By identifying the best candidates based on their skills and aptitudes, NEOM builds a stronger, more cohesive workforce, propelling its ambitious vision forward
                  </Translatable>
                </m.h2>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}


    {/* Section Start */}
    <m.section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
          <Container fluid>
            <Row className="justify-center">
              <Col className="text-center divider-full mb-[9.5rem] p-0 lg:mb-[5.5rem]">
                <div className="divider-border divider-light flex items-center w-full">
                  <span className="font-serif font-medium text-basecolor uppercase tracking-[1px] block px-[30px] text-[#b79435]x text-[#6ab1dd]"><Translatable>vacant positions</Translatable></span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Swiper className="work-architecture-slider"
                  spaceBetween={26}
                  slidesPerView="auto"
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={false}
                  modules={[Autoplay, Keyboard]}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  breakpoints={{
                    1200: { slidesPerView: 5 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 }
                  }} >
                  {
                    selecteworkData.map((item, i) => {
                      return (
                        <SwiperSlide key={i} className="architecture-portfolio-slider">
                          <div className="portfolio-box">
                            <div className="portfolio-imagex opacity-100 hover:bg-[#6ab1dd] flex relative overflow-hidden transition delay-120 duration-300 ease-in-out">
                              <Link aria-label="link for img" to={"#"}>
                              {/* width={405} height={518} */}
                                <img className='w-[350px] h-[350px] opacity-60 hover:opacity-30 hover:scale-110 transition delay-120 duration-300 ease-in-out'  src={item.img} alt="slider" />
                              </Link>
                              <div className="portfolio-hover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Link aria-label="link for button" className="bg-white w-[40px] h-[40px] inline-block align-middle leading-[40px] text-center mx-[3px] z-[3] relative border-white border-[2px] rounded-full" to={item.link}><i className="ti-arrow-right inline-block text-darkgray text-center"></i></Link>
                              </div>
                            </div>
                            <div className="portfolio-caption justify-center text-center py-[30px]">
                              <Link aria-label="link for title" className="text-white font-serif uppercase font-medium" to={item.link}>{item.title}</Link>
                              <span className="block uppercase text-sm">{item.subtitle}</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </Col>
            </Row>
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        {/* <section className="pt-[80px] pb-0 md:pt-[50px]">
          <Container>
            <Clients
              grid="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4"
              theme="client-logo-style-02"
              data={ClientData}
              animation={fadeIn}
            />
          </Container>
        </section> */}
        {/* Section End */}

        {/* Section Start */}
        {/* <section className="pt-[130px] lg:pt-[90px] md:pt-[75px] sm:pt-[50px]  pb-[90px] md:pb-[75px] sm:pb-[50px]">
          <Container fluid>
            <Row className="justify-center">
              <Col className="text-center divider-full mb-32 p-0 lg:mb-[5.5rem] xs:mb-14">
                <m.div className="divider-border divider-light flex items-center w-full" {...fadeIn}>
                  <span className="font-serif font-medium text-basecolor uppercase tracking-[1px] block px-[30px]">LATEST BLOGS</span>
                </m.div>
              </Col>
            </Row>
            <Row>
              <Col className="px-md-0">
                <BlogMetro pagination={false} grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data={blogMetroData} />
              </Col>
            </Row>
            <Row className="mt-[80px] md:mt-[70px] sm:mt-[40px]">
              <Col className="text-center">
                <m.h2 className="heading-6 font-serif font-semibold text-white uppercase mb-0" {...fadeIn}>Are you ready to work with us? <Buttons ariaLabel="button" to="/page/contact-modern" className="font-semibold font-serif pt-0 uppercase btn-link after:h-[1px] md:text-md after:bg-[#cee002] after:!bottom-0 hover:text-white hover:!opacity-100 !text-[1.8rem] !leading-[2.5rem] hover:after:bg-white" color="#cee002" title="start a project" />
                </m.h2>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* Section End */}

        {/* Footer Start */}
        <Footer className="overflow-hidden" theme="light">
          <div className="py-[70px] xs:py-[50px] border-t border-[#ffffff1a]">
            <Container fluid>
              <Row className="justify-center">
                <Col md={2} className="sm:mb-[20px]">
                  <Link to="https://www.neom.com/en-us/be-part-of-neom/be-part-of-neom" className="sm:flex sm:justify-center">
                    <img className="default-logo" style={{ maxHeight: '50px' }}  loading="lazy" src={hiratLogo} data-rjs='/assets/img/webp/logo-parrot-green@2x.webp' alt='logo' />
                  </Link>
                </Col>
                <Col xl={8} md={6} className="text-center flex justify-center sm:mb-[20px]">
                  <p className="font-serif uppercase text-md items-center inline-block"> FOLLOW NEOM ON SOCIAL MEDIA </p>
                </Col>
                <Col xl={2} md="auto" className="text-right footer-icon xs:text-center">
                  <SocialIcons theme="social-icon-style-01" size="xs" iconColor="light" className="justify-end sm:justify-center" data={FooterIconData} />
                </Col>
              </Row>
            </Container>
          </div>
        </Footer>
        {/* Footer End */}
      </div>
    </div>
  )
}

export default ArchitecturePage