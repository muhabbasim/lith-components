import React from 'react'
import '../../Assets/additionalStyle.css';
// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Parallax } from "react-scroll-parallax";
import { m } from 'framer-motion'
import nabihLogo from '../../Assets/nabih_logo.png'
import hadafLogo from '../../Assets/hadf_logo.png'
// Components
import Header, { HeaderNav, Menu, SearchBar } from '../../Components/Header/Header'
import { fadeIn, zoomIn, fadeInUp } from '../../Functions/GlobalAnimations'
import Lists from '../../Components/Lists/Lists'
import TextBox from '../../Components/TextBox/TextBox'
import CustomModal from '../../Components/CustomModal'
import Buttons from '../../Components/Button/Buttons'
import FooterStyle03 from '../../Components/Footers/FooterStyle03'
import InViewPort from '../../Components/InViewPort';
import { Keyboard, Pagination, Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import IconWithText from '../../Components/IconWithText/IconWithText';
import Translatable from '../../Components/translatable_text/Translatable';
import { useSelector } from 'react-redux';
import backgroundImg from '../../Assets/img/backgrounds/home-freelancer-img-06.webp'
import backgroundImg2 from '../../Assets/pattern2.png'
import aiBackground from '../../Assets/ai_background.png'
import aiVid from '../../Assets/ai_video.mp4'
import aiIcon1 from '../../Assets/ai_icon1.png'

const IconWithTextData = [
    {
      icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
      title: "Enhancing Employability",
      content:
        "Contributes to HRDF's mission of enhancing employability among Saudi citizens",
    },
    {
      icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
      title: "Productivity Assessment",
      content:
        "It evaluates the productivity capabilities of employees in line with company roles and job requirements",
    },
    {
        icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
        title: "Dedicated Portals for Companies",
        content:
          "The program offers dedicated portals for companies to measure employee productivity and guide them in alignment with their capabilities and job requirements",
      },
    // {
    //   icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
    //   title: "Enhancing Employability",
    //   content:
    //     "Contributes to HRDF's mission of enhancing employability among Saudi citizens",
    // },
    // {
    //   icon: "line-icon-Gear-2 text-[#b7b7b7] text-[40px]",
    //   title: "Facilitating Job Matching",
    //   content:
    //     "Utilize a comprehensive analysis to match companies' employment needs with the suitable candidates",
    // },
    // {
    //   icon: "line-icon-Talk-Man text-[#b7b7b7] text-[40px]",
    //   title: "Streamlined Recruitment Process",
    //   content:
    //     "Simplifies the recruitment process for companies by providing them with access to a pool of pre-screened",
    // },
    // {
    //   icon: "line-icon-Cursor-Click2 text-[#b7b7b7] text-[40px]",
    //   title: "Efficiency and Effectiveness",
    //   content:
    //     "This program ensure that companies are connected with candidates who possess skills and qualifications to excel in their roles",
    // },
];
  
const swiperData = [
    {
        titleOne: "Save Time and Resources",
        titleTwo: "Unlock your company's potential with HRDF, Sign up now",
        subTitle: "HRDF Programm",
        img: "https://via.placeholder.com/500x555",
        bgImg: "https://www.hrdf.org.sa/media/%D8%A7%D9%84%D8%B4%D9%87%D8%A7%D8%AF%D8%A7%D8%AA-03.png",
        // bgImg: "https://www.arabianbusiness.com/cloud/2022/04/21/Saudi-Arabia-business-meeting.jpg",
        price: "$89",
        circleColor: "linear-gradient(rgb(255, 231, 217) 0%, rgb(254, 236, 225) 100%)"
    },
    {
        titleOne: "Join the ranks",
        titleTwo: "Of satisfied companies who have benefited from HRDF's extensive resources",
        subTitle: "HRDF Programm",
        img: "https://via.placeholder.com/529x594",
        // bgImg: "https://www.se.com.sa/-/media/sec-jss-app/New_Website_Photos/2040x1500/Sec-Images/SEC_Batch02_33.ashx",
        bgImg: "https://www.hrdf.org.sa/media/tucbcc4w/%D8%A8%D8%A7%D9%86%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D9%87-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87-04-1.webp",
        price: "$89",
        circleColor: "linear-gradient(rgb(140, 140, 140) 0%, rgb(255, 229, 225) 100%)"
    },
  
]

// bgImg: "https://www.hrdf.org.sa/media/cxejaho4/%D8%A8%D8%A7%D9%86%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D9%87-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87-05-1.webp",

const TextBoxData01 = [
    {
        number: "89%",
        color: "#de7a2c",
        subColor: "#f4d6be",
        title: "General Satisfaction Index for Establishments",
        // description: "Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor."
    },
    {
        number: "92%",
        color: "#34ac65",
        subColor: "#b6efcd",
        title: "General Satisfaction Index for Individuals",
        // description: "Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor."
    },

    {
        number: "92%",
        color: "#1c5187",
        subColor: "#a4cbf2",
        title: "General Satisfaction Index",
        // description: "Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor."
    }

]

const listData = [
    {
        icon: "fas fa-check",
        title: "Employment in the private sector",
        content: "A gateway linking private sector companies with top talents from 'Hadaf' to meet sector requirements",
      //   content: "a gateway connecting private sector companies with the best available talents from 'Hadaf' to meet the private sector's requirements",
    },
    {
      icon: "fas fa-check",
      title: "Sustainability of resources and energies",
      content: "Matching personnel capabilities to enhance private sector productivity",
        //   content: "Employing personnel in accordance with their capabilities and what supports their productivity, thereby increasing the productivity of the private sector",
    },
  
  ];
  

const ConsultingPage = (props) => {
    const swiperRef = React.useRef(null);
    const customizer = useSelector((state) => state.customizer);

    return (
        <div style={props.style}>
            <Header topSpace={{ md: true }} type="reverse-scroll border-b border-[#ffffff1a] bg-white z-90">
                <HeaderNav fluid="fluid" theme="dark" expand="lg" className="py-[8px] px-[35px] lg:pr-[35px] md:px-0 md:py-[20px] ">
                    <Col className="col-6 col-lg-2 me-auto ps-lg-0 ps-0 ps-md-3">
                        <Navbar.Brand className="inline-block p-0 m-0">
                            <img className="default-logo "  style={{ maxHeight: '80px' }} loading="lazy" src={nabihLogo} data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                            <img className="alt-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={nabihLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
                            <img className="mobile-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={nabihLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Toggle className="order-last md:mx-[20px] sm:ml-[15px] sm:mr-0">
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                        <span className="navbar-toggler-line"></span>
                    </Navbar.Toggle>
                    
                    <Navbar.Collapse className="col-auto menu-order px-lg-0 justify-end">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    
                    <Col className="col-auto text-end pe-0 pl-[15px] font-size-0">
                        <SearchBar />
                    </Col>
                        <Navbar.Brand className="inline-block p-0 m-0">
                            <img className="default-logo "  style={{ maxHeight: '80px' }} loading="lazy" src={hadafLogo} data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                            <img className="alt-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={hadafLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
                            <img className="mobile-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={hadafLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
                        </Navbar.Brand>
                </HeaderNav>
            </Header>

               <section className=" pt-[100px] furniture-shop flex items-center justify-center overflow-hidden">
                <Swiper
                    dir={customizer.activeDir} 
                    ref={swiperRef}
                    pagination={{ clickable: true, }}
                    keyboard={true}
                    allowTouchMove={true}
                    loop={false}
                    autoplay={{
                        delay: 9000
                    }}
                    modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                    className=" full-screen h-[90vh] relative swiper-pagination-02 swiper-pagination-dark swiper-pagination-big xs:h-[664px] landscape:md:h-auto"
                    >
                    <div className="absolute h-full w-full opacity-90 top-0 left-0 bg-transparentx bg-blue-300x"></div>

                    <div
                        onClick={() => swiperRef.current.swiper.slidePrev()} className="btn-slider-next absolute top-1/2 z-[1] left-[64px] text-[40px] text-darkgray h-[50px] w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer opacity-60 hover:opacity-100 transition-default xs:hidden">
                        <button aria-label="swiper next btn" className="text-xmd">
                            <i className="line-icon-Arrow-OutLeft text-[40px]"></i>
                        </button>
                    </div>
                    {
                        swiperData.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className="bg-center  bg-cover bg-no-repeat z-20 h-full overflow-hidden flex items-center transition-default" style={{ backgroundImage: `url(${item?.bgImg})` }}>
                            <m.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ ease: "easeIn", duration: 0.5 }}>
                                <m.div
                                className="big-circle sm:top-[65%] sm:right-1/2 sm:left-[-50%]"
                                style={{ background: item.circleColor, opacity: 0.5 }}
                                animate={{
                                    y: [1, -6, -9, -9, -6, 6, 9, 9, 1],
                                    x: [1, 6, 9, 9, -6, -9, -9, -6, 1]
                                }}
                                transition={{
                                    times: [1, 6, 2, 2, 6, 2, 2, 6],
                                    duration: 10,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                >
                                </m.div>
                            </m.div>
                            <Container className="relative z-50">
                                <Row className="items-center font-serif sm:justify-center">
                                <Col xl={6} lg={6} md={6} sm={12} className="text-[#094c87]x text-black sm:text-center">
                                    <m.span
                                    className="uppercase tracking-[2px] leading-[17px] text-base pt-[10px]x mb-[40px] px-[20px] py-2 opacity-70 bg-[#de7a2c] text-white inline-block font-medium md:text-sm sm:mt-[70px] sm:pb-[15px] xs:text-xxs"
                                    initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                                    whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', }}
                                    transition={{ delay: .3, duration: .8, ease: "easeInOut" }}
                                    ><Translatable>{item.subTitle}</Translatable> </m.span>
                                    <m.h2 className="heading-6 leading-[60px] text-[50px] font-normal lg:text-[40px] px-[20px] pb-[30px] -tracking-[3px] lg:leading-none md:text-[60px] xs:text-[40px] sm:text-center"
                                    initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                                    whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', }}
                                    transition={{ delay: 1.2, duration: .8, ease: "easeOut" }}
                                    ><strong className="font-semibold block text-[50px] leading-[70px] text-white mb-[30px]">
                                            <Translatable>
                                                {item.titleOne}
                                            </Translatable>
                                        </strong>
                                            <Translatable>
                                                {item.titleTwo}
                                            </Translatable>
                                        </m.h2>
                                    <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8, ease: "easeOut", delay: 1.4 }}>
                                        <Buttons ariaLabel="shop wide" target="_blank" href="https://dall-in.com/auth/login" className="font-medium text-[8px] mx-3 uppercase rounded-none shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-[#fff] hover:bg-white hover:text-white border-none" color="#000" size="lg" themeColor="#000" title={<Translatable>Sign up now!</Translatable>} />
                                    </m.div>
                                </Col>
                                <Col sm={6} className="relative">
                                    <div className="small-circle">
                                    <m.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeIn", delay: 1.9 }}>
                                        <m.div
                                        className="element-one inline-block"
                                        animate={{
                                            x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
                                            y: [1, 6, 9, 9, -6, -9, -9, -6, 1]
                                        }}
                                        transition={{
                                            times: [1, 6, 2, 2, 6, 2, 2, 6],
                                            duration: 10,
                                            repeat: Infinity,
                                        }}
                                        >
                                        </m.div>
                                    </m.div>
                                    </div>
                                </Col>
                                </Row>
                            </Container>
                            </SwiperSlide>
                        )
                        })}
                    <div
                        onClick={() => swiperRef.current.swiper.slideNext()} className="btn-slider-prev absolute top-1/2 z-[1] right-[64px] text-[40px] text-darkgray h-[50px] w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer opacity-60 hover:opacity-100 transition-default xs:hidden">
                        <button aria-label="swiper prev btn" className="text-xmd">
                            <i className="line-icon-Arrow-OutRight text-[40px]"></i>
                        </button>
                    </div>
                </Swiper>
            </section>


                       <section dir='ltr' style={{backgroundImage: `url(${backgroundImg2})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <Container>
                <Row className="items-center justify-center">
                    <Col xl={6} lg={5} md={10} className="md:mb-20"> 
                    <m.div {...{ ...fadeInUp, transition: { delay: 0.2 } }} className="relative w-[95%] md:w-full">
                        
                        <img style={{ height: '600px'}} width="535.8px" className="rounded-[10px]" src={aiBackground} alt="" data-no-retina="" />
                        {/* <img width="535.8px" height="628.22px" className="rounded-[10px]" src="https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-849.jpg?t=st=1720278459~exp=1720282059~hmac=b55333e5f457e807303b96abbe2546e3953dc9a5d2aedc5c0b26125afd406ae1&w=1380" alt="" data-no-retina="" /> */}
                        {/* Modal Component Start */}
                        <CustomModal.Wrapper
                        className="absolute top-0 items-center flex h-full right-[-50px] md:right-0 md:justify-center md:w-full"
                        modalBtn={<Buttons ariaLabel="modal btn" type="submit" className="btn-sonar border-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]" themeColor="#fff" color="#00b8b8" size="xl" title={<i className="feather-play text-[35px]" />} />}
                        >
                        <div className="w-[1020px] max-w-full relative rounded mx-auto">
                            <div className="fit-video">
                            <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src={aiVid} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                            </div>
                        </div>
                        </CustomModal.Wrapper>
                        {/* Modal Component End */}
                    </m.div>
                    </Col>
                    <Col xl={5} lg={{ span: 6, offset: 1 }} className="md:text-center">
                        <img width={120} height={50} className="mb-[10px] rounded-[10px] md:mx-auto" src={aiIcon1} alt="dentist" />
                        <div className="mb-[40px] md:text-center sm:mb-[10px]">
                            <span className="font-serif text-lg uppercase font-medium text-gradient bg-gradient-to-r from-[#00B8B8] to-[#7493e9]">
                                <Translatable>
                                    ai Powered data analysis
                                </Translatable>
                            </span>
                        </div>
                    {/* <img width={120} height={50} className="mb-[50px] rounded-[10px] md:mx-auto" src={aiChip} alt="dentist" /> */}
                    {/* <h2 className="heading-4 font-serif font-normal text-darkgray -tracking-[1px] mb-[35px]">
                        <Translatable>
                            Transforming Careers with Advanced
                        </Translatable>
                        <span className="font-semibold text-[#00B8B8]x">
                            <Translatable>AI Solutions</Translatable>
                        </span>
                    </h2> */}
                    <h2 className="w-[90%] heading-5 font-serif font-normal text-darkgray -tracking-[1px] mb-[35px]">
                        <Translatable>
                            Our advanced AI analyzes candidate data to reveal strengths, weaknesses, and ideal work environments, ensuring each individual thrives in their role
                        </Translatable>
                        </h2>
                    <Buttons ariaLabel="About clinic" href="#" className="btn-fill font-medium font-serif tracking-[1px] rounded-[4px] uppercase md:mb-[15px]" themeColor="#00b8b8" color="#fff" size="lg" title={<Translatable>about ai analysis</Translatable>} />
                    </Col>
                </Row>
                </Container>
            </section>

            <div style={{backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
                
                <section className="relative py-[100px] overflow-hidden lg:py-[120px]x md:py-[95px]x sm:py-[80px]x xs:py-[50px]x">
                    <Container>
                        <Row className="justify-between">
                            <Col xl={{ span: 5}} className="pl-0 " {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                                <div className="mb-[20px] md:text-center sm:mb-[10px]">
                                    <span className="font-serif text-lg uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
                                        <Translatable>
                                            The program goals
                                        </Translatable>
                                    </span>
                                </div>
                                <div className='w-full h-full flex flex-col justify-around'>
                                <h2 className="heading-4 font-serif font-normal text-darkgray -tracking-[1px] mb-[35px]">
                                    <Translatable>
                                        NABIH aims to efficiently provide guidance, training to enhance the
                                    </Translatable>
                                    {' '}
                                    <span className="font-semibold text-[#00B8B8]x">
                                        <Translatable>stability and development of the Saudi workforce</Translatable>
                                    </span>
                                </h2>
                                    <div className="pb-20">
                                        <Buttons href="/https://www.hrdf.org.sa/" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title={<Translatable>Discover More</Translatable>} />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={{ span: 6 }} >
                                <IconWithText grid="row-cols-1 row-cols-lg-1 row-cols-sm-2 gap-y-[20px]" theme="icon-with-text-01" data={IconWithTextData} animation={fadeIn} animationDelay={0.2} />
                            </Col>
                        </Row>
                    </Container>


                    <m.section  {...{ ...fadeInUp, transition: { delay: 0.2 } }} className=" pt-[100px] overflow-hiddenx ">
                        <Container className='bgColor borderx border-4 border-white py-16 rounded-lg shadow-sm hover:shadow-lg'>
                            <Row className="items-center justify-center">
                                <Col xl={5} md={6} xs={11} className="sm:mb-[30px]">
                                    <m.h2  {...{ ...fadeIn, transition: { delay: 0.2 } }} className="heading-4 font-serif font-bold text-[#1c5187]x text-white mb-0">
                                        <Translatable>
                                            You are looking for qualified employees
                                        </Translatable>
                                    </m.h2>
                                </Col>
                                <Col xl={{ span: 5, offset: 1 }} md={6} xs={11}>
                                    <m.p  {...{ ...fadeIn, transition: { delay: 0.3 } }} className="text-lg mb-[25px] leading-[38px] md:text-xmd text-[#1c5187]x text-gray-300">
                                        <Translatable>
                                            This program, in collaboration with the Saudi Human Resources Development Fund (HRDF), is here to streamline your recruitment process and connect you with the best talent in the market
                                        </Translatable>
                                    </m.p>
                                    <m.div  {...{ ...fadeIn, transition: { delay: 0.4 } }}><Buttons ariaLabel="button link for our services page" target="_blank" href="http://localhost:5174/auth/cooperate_pages_register" className="font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-white font-bold text-whitex hover:text-darkgray " color='white' size="xl"  title={<Translatable>Unlock Your Company's Potential</Translatable>}/></m.div>
                                </Col>
                            </Row>
                        </Container>
                    </m.section>
                </section>
            </div>



            <section
                className="bg-no-repeat bg-cover overflow-hidden relative bg-center border-mediumgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:py-0 xs:border-y"
                style={{
                    backgroundImage: `url('https://www.hrdf.org.sa/media/Event/%D8%A8%D8%A7%D9%86%D8%B1-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D8%AA%D9%88%D8%B8%D9%8A%D9%81.jpg')`,
                }}
            >
                <Container className="xs:px-0">
                    <Row className="justify-end md:justify-center xs:gx-0">
                    <m.div
                        className="col col-xl-6 col-lg-7 col-md-9 col-sm-11"
                        {...fadeIn}
                    >
                        <div className="w-full bg-white py-[6rem] px-[7rem] xs:px-[4rem] xs:py-[6rem] box-shadow-large">
                        <m.h2 className="heading-6 font-serif text-[#2f2f2f] font-bold uppercase tracking-[-1px] mb-[45px]" {...{ ...fadeIn, transition: { delay: 0.3 } }}>
                            <Translatable>
                                Nabih help HRDF achieve its goals
                            </Translatable>
                        </m.h2>
                        <Lists
                            theme="list-style-07"
                            data={listData}
                            animation={fadeIn}
                            animationDelay={0.5}
                        />
                        <m.div className="mt-[20px] inline-blockx xs:text-center flex justify-between pt-6" {...{ ...fadeIn, transition: { delay: 0.7 } }}>
                            <Buttons
                                aria-label="about company"
                                to="https://dall-in.com/auth/register"
                                className="btn-fill btn-fancy rounded-none font-medium font-serif tracking-[1px] uppercase mr-[35px]x xs:mt-0 xs:mb-[20px] xs:mx-[40px]"
                                themeColor="#232323"
                                color="#fff"
                                target='_blank'
                                size="sm"
                                title={<Translatable>Companies</Translatable>}
                            />
                            <Buttons
                                aria-label="company button"
                                to="https://dall-in.com/auth/register"
                                target='_blank'
                                className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray top-[-5px]"
                                color="#232323"
                                title={<Translatable>Individuals</Translatable>}
                                
                                size="xl"
                            />
                        </m.div>
                        </div>
                    </m.div>
                    </Row>
                </Container>
            </section>

            <InViewPort>
                {/* Section Start */}
                <section 
                    className=" py-[120px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]" 
                    style={{backgroundImage: `url(${backgroundImg2})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}
                >
                    <Container>
                        <m.div className="row justify-center" {...fadeIn}>
                            <Col xl={6} lg={7} sm={8} className="text-center font-medium mb-12 font-serif xs:mb-0">
                                <span className="text-[#bf8c4c] uppercase block mb-[15px]">
                                    <Translatable>
                                        Thoughtful experiences
                                    </Translatable>
                                </span>
                                <h2 className="heading-5 text-darkgray inline-block">
                                    <Translatable>
                                        Saudi Human Resources Development Fund (HRDF)
                                    </Translatable>
                                </h2>
                            </Col>
                        </m.div>
                        <TextBox grid="" data={TextBoxData01} animation={fadeIn} ani />
                    </Container>
                </section>

               

                {/* Section Start */}
                <div className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:flex md:items-center overflow-hidden relative">
                    <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh] xs:bg-[center_center]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1713461983836-de0a45009424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}></Parallax>
                    <div className="absolute h-full w-full opacity-80 top-0 left-0 bg-gradient-to-tr from-[#bf8c4c] to-[#445a58]"></div>
                    <Container className="relative">
                        <Row className="justify-center">
                            <Col xl={7} lg={8} sm={10} className="text-center text-white font-serif">
         
                                <CustomModal.Wrapper
                                    modalBtn={
                                        <m.div className="flex items-center justify-center" {...{ ...zoomIn, transition: { duration: 0.6 } }}>
                                            <Buttons ariaLabel="modal button" type="submit" className="btn-sonar border-0 mb-[3.5rem]" themeColor="#fff" color="#bf8c4c" size="lg" title={<i className="icon-control-play" />} />
                                        </m.div>
                                    } >
                                    <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                        <div className="fit-video">
                                            <iframe width="960" height="540" src="https://www.youtube.com/embed/pY5WC8CC7OY" title="طريقة تسجيل في برنامج دعم التوظيف" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </CustomModal.Wrapper>
                                <m.div {...fadeIn}>
                                    <h2 className="heading-4 font-semibold mb-[45px] sm:mb-[25px]">
                                        <Translatable>
                                            The HRDF initiative contributes to increasing of individual qualifications
                                        </Translatable>
                                    </h2>
                                    <span className="uppercase tracking-[2px]">
                                        <Translatable>
                                            Unlimited power and customization
                                        </Translatable>
                                    </span>
                                </m.div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <FooterStyle03 theme="dark" className="text-[#828282] bg-darkgray consulting-footer" />
            </InViewPort>
        </div>
    )
}

export default ConsultingPage


// return (
//     <div style={props.style}>
//         <Header topSpace={{ md: true }} type="reverse-scroll border-b border-[#ffffff1a] bg-white z-90">
//             <HeaderNav fluid="fluid" theme="dark" expand="lg" className="py-[8px] px-[35px] lg:pr-[35px] md:px-0 md:py-[20px] ">
//                 <Col className="col-6 col-lg-2 me-auto ps-lg-0 ps-0 ps-md-3">
//                     <Navbar.Brand className="inline-block p-0 m-0">
//                         <img className="default-logo "  style={{ maxHeight: '80px' }} loading="lazy" src={nabihLogo} data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
//                         <img className="alt-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={nabihLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
//                         <img className="mobile-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={nabihLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
//                     </Navbar.Brand>
//                 </Col>
//                 <Navbar.Toggle className="order-last md:mx-[20px] sm:ml-[15px] sm:mr-0">
//                     <span className="navbar-toggler-line"></span>
//                     <span className="navbar-toggler-line"></span>
//                     <span className="navbar-toggler-line"></span>
//                     <span className="navbar-toggler-line"></span>
//                 </Navbar.Toggle>
                
//                 <Navbar.Collapse className="col-auto menu-order px-lg-0 justify-end">
//                     <Menu {...props} />
//                 </Navbar.Collapse>
                
//                 <Col className="col-auto text-end pe-0 pl-[15px] font-size-0">
//                     <SearchBar />
//                 </Col>
//                     <Navbar.Brand className="inline-block p-0 m-0">
//                         <img className="default-logo "  style={{ maxHeight: '80px' }} loading="lazy" src={hadafLogo} data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
//                         <img className="alt-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={hadafLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
//                         <img className="mobile-logo"  style={{ maxHeight: '80px' }} loading="lazy" src={hadafLogo} data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
//                     </Navbar.Brand>
//             </HeaderNav>
//         </Header>

//         <section className="pt-[100px] furniture-shop flex items-center justify-center overflow-hidden">
//             <Swiper
//                 dir={customizer.activeDir} 
//                 ref={swiperRef}
//                 pagination={{ clickable: true, }}
//                 keyboard={true}
//                 allowTouchMove={true}
//                 loop={false}
//                 autoplay={{
//                     delay: 9000
//                 }}
//                 modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
//                 className=" full-screen h-[90vh] relative swiper-pagination-02 swiper-pagination-dark swiper-pagination-big xs:h-[664px] landscape:md:h-auto"
//                 >
//                 <div className="absolute h-full w-full opacity-90 top-0 left-0 bg-transparentx bg-blue-300x"></div>

//                 <div
//                     onClick={() => swiperRef.current.swiper.slidePrev()} className="btn-slider-next absolute top-1/2 z-[1] left-[64px] text-[40px] text-darkgray h-[50px] w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer opacity-60 hover:opacity-100 transition-default xs:hidden">
//                     <button aria-label="swiper next btn" className="text-xmd">
//                         <i className="line-icon-Arrow-OutLeft text-[40px]"></i>
//                     </button>
//                 </div>
//                 {
//                     swiperData.map((item, i) => {
//                     return (
//                         <SwiperSlide key={i} className="bg-center  bg-cover bg-no-repeat z-20 h-full overflow-hidden flex items-center transition-default" style={{ backgroundImage: `url(${item?.bgImg})` }}>
//                         <m.div
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ ease: "easeIn", duration: 0.5 }}>
//                             <m.div
//                             className="big-circle sm:top-[65%] sm:right-1/2 sm:left-[-50%]"
//                             style={{ background: item.circleColor, opacity: 0.5 }}
//                             animate={{
//                                 y: [1, -6, -9, -9, -6, 6, 9, 9, 1],
//                                 x: [1, 6, 9, 9, -6, -9, -9, -6, 1]
//                             }}
//                             transition={{
//                                 times: [1, 6, 2, 2, 6, 2, 2, 6],
//                                 duration: 10,
//                                 ease: "linear",
//                                 repeat: Infinity,
//                             }}
//                             >
//                             </m.div>
//                         </m.div>
//                         <Container className="relative z-50">
//                             <Row className="items-center font-serif sm:justify-center">
//                             <Col xl={6} lg={6} md={6} sm={12} className="text-[#094c87]x text-black sm:text-center">
//                                 <m.span
//                                 className="uppercase tracking-[2px] leading-[17px] text-base pt-[10px]x mb-[40px] px-[20px] py-2 opacity-70 bg-[#de7a2c] text-white inline-block font-medium md:text-sm sm:mt-[70px] sm:pb-[15px] xs:text-xxs"
//                                 initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
//                                 whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', }}
//                                 transition={{ delay: .3, duration: .8, ease: "easeInOut" }}
//                                 ><Translatable>{item.subTitle}</Translatable> </m.span>
//                                 <m.h2 className="heading-6 leading-[60px] text-[50px] font-normal lg:text-[40px] px-[20px] pb-[30px] -tracking-[3px] lg:leading-none md:text-[60px] xs:text-[40px] sm:text-center"
//                                 initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
//                                 whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', }}
//                                 transition={{ delay: 1.2, duration: .8, ease: "easeOut" }}
//                                 ><strong className="font-semibold block text-[70px] leading-[70px] text-white mb-[30px]">
//                                         <Translatable>
//                                             {item.titleOne}
//                                         </Translatable>
//                                     </strong>
//                                         <Translatable>
//                                             {item.titleTwo}
//                                         </Translatable>
//                                     </m.h2>
//                                 <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8, ease: "easeOut", delay: 1.4 }}>
//                                     <Buttons ariaLabel="shop wide" target="_blank" href="https://dall-in.com/auth/login" className="font-medium text-[8px] mx-3 uppercase rounded-none shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-[#fff] hover:bg-white hover:text-white border-none" color="#000" size="lg" themeColor="#000" title={<Translatable>Sign up now!</Translatable>} />
//                                 </m.div>
//                             </Col>
//                             <Col sm={6} className="relative">
//                                 <div className="small-circle">
//                                 <m.div
//                                     initial={{ opacity: 0 }}
//                                     whileInView={{ opacity: 1 }}
//                                     transition={{ ease: "easeIn", delay: 1.9 }}>
//                                     <m.div
//                                     className="element-one inline-block"
//                                     animate={{
//                                         x: [1, -6, -9, -9, -6, 6, 9, 9, 1],
//                                         y: [1, 6, 9, 9, -6, -9, -9, -6, 1]
//                                     }}
//                                     transition={{
//                                         times: [1, 6, 2, 2, 6, 2, 2, 6],
//                                         duration: 10,
//                                         repeat: Infinity,
//                                     }}
//                                     >
//                                     </m.div>
//                                 </m.div>
//                                 </div>
//                             </Col>
//                             </Row>
//                         </Container>
//                         </SwiperSlide>
//                     )
//                     })}
//                 <div
//                     onClick={() => swiperRef.current.swiper.slideNext()} className="btn-slider-prev absolute top-1/2 z-[1] right-[64px] text-[40px] text-darkgray h-[50px] w-[50px] leading-[50px] flex justify-center items-center right-inherit cursor-pointer opacity-60 hover:opacity-100 transition-default xs:hidden">
//                     <button aria-label="swiper prev btn" className="text-xmd">
//                         <i className="line-icon-Arrow-OutRight text-[40px]"></i>
//                     </button>
//                 </div>
//             </Swiper>
//         </section>

//         <div className='relative' style={{backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
//             <section style={{ marginTop: '-50px', zIndex: 10 }} className=" absolute top-0 left-0 right-0 py-[-300px]x overflow-hiddenx relativex lg:py-[120px]x md:py-[95px]x sm:py-[80px]x xs:py-[50px]x">
//                 <Container className='bgColor borderx border-4 border-white py-16 rounded-lg shadow-sm hover:shadow-lg'>
//                     <Row className="items-center justify-center">
//                         <Col xl={5} md={6} xs={11} className="sm:mb-[30px]">
//                             <m.h2  {...{ ...fadeIn, transition: { delay: 0.2 } }} className="heading-4 font-serif font-bold text-[#1c5187]x text-white mb-0">
//                                 <Translatable>
//                                     You are looking for qualified employees
//                                 </Translatable>
//                             </m.h2>
//                         </Col>
//                         <Col xl={{ span: 5, offset: 1 }} md={6} xs={11}>
//                             <m.p  {...{ ...fadeIn, transition: { delay: 0.3 } }} className="text-lg mb-[25px] leading-[38px] md:text-xmd text-[#1c5187]x text-gray-300">
//                                 <Translatable>
//                                     This program, in collaboration with the Saudi Human Resources Development Fund (HRDF), is here to streamline your recruitment process and connect you with the best talent in the market
//                                 </Translatable>
//                             </m.p>
//                             <m.div  {...{ ...fadeIn, transition: { delay: 0.4 } }}><Buttons ariaLabel="button link for our services page" target="_blank" href="http://localhost:5174/auth/cooperate_pages_register" className="font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-white font-bold text-whitex hover:text-darkgray " color='white' size="xl"  title={<Translatable>Unlock Your Company's Potential</Translatable>}/></m.div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <section className="bg-[#232323]x pt-[450px] pb-[150px] py-[100px] overflow-hidden lg:py-[120px]x md:py-[95px]x sm:py-[80px]x xs:py-[50px]x">
//                 <Container>
//                     <Row className="justify-between">
//                         <Col xl={{ span: 5}} className="pl-0 " {...{ ...fadeIn, transition: { delay: 0.2 } }}>
//                             <div className="mb-[20px] md:text-center sm:mb-[10px]">
//                                 <span className="font-serif text-lg uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
//                                     <Translatable>
//                                         The program goals
//                                     </Translatable>
//                                 </span>
//                             </div>
//                             <div className='w-full h-full flex flex-col justify-around'>

//                                 <h3 className="alt-font text-black font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">
//                                     <Translatable>
//                                         HRDF aims to efficiently provide guidance, training, and empowerment services to enhance the stability and development of the Saudi workforce
//                                     </Translatable>
//                                 </h3>
//                                 <div className="pb-20">
//                                     <Buttons href="/https://www.hrdf.org.sa/" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title={<Translatable>Discover More</Translatable>} />
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col xl={{ span: 6 }} >
//                             <IconWithText grid="row-cols-1 row-cols-lg-1 row-cols-sm-2 gap-y-[20px]" theme="icon-with-text-01" data={IconWithTextData} animation={fadeIn} animationDelay={0.2} />
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>

//         {/* Section Start */}
//             <section
//                 className="bg-no-repeat bg-cover overflow-hidden relative bg-center border-mediumgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] xs:py-0 xs:border-y"
//                 style={{
//                     backgroundImage: `url('https://www.hrdf.org.sa/media/Event/%D8%A8%D8%A7%D9%86%D8%B1-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D8%AA%D9%88%D8%B8%D9%8A%D9%81.jpg')`,
//                 }}
//             >
//                 <Container className="xs:px-0">
//                     <Row className="justify-end md:justify-center xs:gx-0">
//                     <m.div
//                         className="col col-xl-6 col-lg-7 col-md-9 col-sm-11"
//                         {...fadeIn}
//                     >
//                         <div className="w-full bg-white py-[6rem] px-[7rem] xs:px-[4rem] xs:py-[6rem] box-shadow-large">
//                         <m.h2 className="heading-5 font-serif text-[#2f2f2f] font-bold uppercase tracking-[-1px] mb-[45px]" {...{ ...fadeIn, transition: { delay: 0.3 } }}>
//                             <Translatable>
//                                 Nabih help HRDF achieve its goals
//                             </Translatable>
//                         </m.h2>
//                         <Lists
//                             theme="list-style-07"
//                             data={listData}
//                             animation={fadeIn}
//                             animationDelay={0.5}
//                         />
//                         <m.div className="mt-[20px] inline-blockx xs:text-center flex justify-between pt-6" {...{ ...fadeIn, transition: { delay: 0.7 } }}>
//                             <Buttons
//                                 aria-label="about company"
//                                 to="https://dall-in.com/auth/register"
//                                 className="btn-fill btn-fancy rounded-none font-medium font-serif tracking-[1px] uppercase mr-[35px]x xs:mt-0 xs:mb-[20px] xs:mx-[40px]"
//                                 themeColor="#232323"
//                                 color="#fff"
//                                 target='_blank'
//                                 size="sm"
//                                 title={<Translatable>Companies</Translatable>}
//                             />
//                             <Buttons
//                                 aria-label="company button"
//                                 to="https://dall-in.com/auth/register"
//                                 target='_blank'
//                                 className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray top-[-5px]"
//                                 color="#232323"
//                                 title={<Translatable>Individuals</Translatable>}
                                
//                                 size="xl"
//                             />
//                         </m.div>
//                         </div>
//                     </m.div>
//                     </Row>
//                 </Container>
//             </section>
//         {/* Section End*/}

//         <InViewPort>
//             {/* Section Start */}
//             <section 
//                 className=" py-[120px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]" 
//                 style={{backgroundImage: `url(${backgroundImg2})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}
//             >
//                 <Container>
//                     <m.div className="row justify-center" {...fadeIn}>
//                         <Col xl={6} lg={7} sm={8} className="text-center font-medium mb-12 font-serif xs:mb-0">
//                             <span className="text-[#bf8c4c] uppercase block mb-[15px]">
//                                 <Translatable>
//                                     Thoughtful experiences
//                                 </Translatable>
//                             </span>
//                             <h2 className="heading-5 text-darkgray inline-block">
//                                 <Translatable>
//                                     Saudi Human Resources Development Fund (HRDF)
//                                 </Translatable>
//                             </h2>
//                         </Col>
//                     </m.div>
//                     <TextBox grid="" data={TextBoxData01} animation={fadeIn} ani />
//                 </Container>
//             </section>

           

//             {/* Section Start */}
//             <div className="py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] md:flex md:items-center overflow-hidden relative">
//                 <Parallax className="lg-no-parallax bg-cover absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh] xs:bg-[center_center]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1713461983836-de0a45009424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}></Parallax>
//                 <div className="absolute h-full w-full opacity-80 top-0 left-0 bg-gradient-to-tr from-[#bf8c4c] to-[#445a58]"></div>
//                 <Container className="relative">
//                     <Row className="justify-center">
//                         <Col xl={7} lg={8} sm={10} className="text-center text-white font-serif">
     
//                             <CustomModal.Wrapper
//                                 modalBtn={
//                                     <m.div className="flex items-center justify-center" {...{ ...zoomIn, transition: { duration: 0.6 } }}>
//                                         <Buttons ariaLabel="modal button" type="submit" className="btn-sonar border-0 mb-[3.5rem]" themeColor="#fff" color="#bf8c4c" size="lg" title={<i className="icon-control-play" />} />
//                                     </m.div>
//                                 } >
//                                 <div className="w-[1020px] max-w-full relative rounded mx-auto">
//                                     <div className="fit-video">
//                                         <iframe width="960" height="540" src="https://www.youtube.com/embed/pY5WC8CC7OY" title="طريقة تسجيل في برنامج دعم التوظيف" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                                     </div>
//                                 </div>
//                             </CustomModal.Wrapper>
//                             <m.div {...fadeIn}>
//                                 <h2 className="heading-4 font-semibold mb-[45px] sm:mb-[25px]">
//                                     <Translatable>
//                                         The HRDF initiative contributes to increasing of individual qualifications
//                                     </Translatable>
//                                 </h2>
//                                 <span className="uppercase tracking-[2px]">
//                                     <Translatable>
//                                         Unlimited power and customization
//                                     </Translatable>
//                                 </span>
//                             </m.div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>

//             <FooterStyle03 theme="dark" className="text-[#828282] bg-darkgray consulting-footer" />
//         </InViewPort>
//     </div>
// )