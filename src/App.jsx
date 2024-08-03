import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context.jsx";

// Components
import ScrollToTopButton from "./Components/ScrollToTop.jsx"

// Home
import HomeStartupPage from "./Pages/Home/Startup/Startup.jsx";

import { useDispatch, useSelector } from "./store/Store.tsx";
import { setDir } from "./store/customizer/CustomizerSlice.tsx";
import { useTranslation } from "react-i18next";
import { Languages } from "./utils/LanguageData.ts";

const HomeBusinessPage = lazy(() => import("./Pages/Home/Business.jsx"))
const CorporatePage = lazy(() => import("./Pages/Home/Corporate.jsx"))
const FinancePage = lazy(() => import("./Pages/Home/Finance.jsx"))
const ApplicationPage = lazy(() => import("./Pages/Home/Application.jsx"))
const ConsultingPage = lazy(() => import("./Pages/Home/Consulting.jsx"))
const DigitalagencyPage = lazy(() => import("./Pages/Home/DigitalAgency.jsx"))
const MarketingAgencyPage = lazy(() => import("./Pages/Home/MarketingAgency.jsx"))
const EventsConferencePage = lazy(() => import("./Pages/Home/EventsConference.jsx"))
const SeoAgencyPage = lazy(() => import("./Pages/Home/SeoAgency.jsx"))
const DesignagencyPage = lazy(() => import("./Pages/Home/DesignAgency.jsx"))
const WebagencyPage = lazy(() => import("./Pages/Home/WebAgency.jsx"))
const CreativeAgencyPage = lazy(() => import("./Pages/Home/CreativeAgency.jsx"))
const BrandingagencyPage = lazy(() => import("./Pages/Home/BrandingAgency.jsx"))
const PhotographyPage = lazy(() => import("./Pages/Home/Photography.jsx"))
const PersonalportfolioPage = lazy(() => import("./Pages/Home/PersonalPortfolio.jsx"))
const InteractiveportfolioPage = lazy(() => import("./Pages/Home/InteractivePortfolio.jsx"))
const CreativeportfolioPage = lazy(() => import("./Pages/Home/CreativePortfolio.jsx"))
const VerticalportfolioPage = lazy(() => import("./Pages/Home/VerticalPortfolio.jsx"))
const SplitPortfolioPage = lazy(() => import("./Pages/Home/SplitPortfolio.jsx"))
const ArchitecturePage = lazy(() => import("./Pages/Home/Architecture.jsx"))
const HotelResortPage = lazy(() => import("./Pages/Home/HotelResort.jsx"))
const TravelAgencyPage = lazy(() => import("./Pages/Home/TravelAgency.jsx"))
const YogaMeditationPage = lazy(() => import("./Pages/Home/YogaMeditation.jsx"))
const RestaurantPage = lazy(() => import("./Pages/Home/Restaurant.jsx"))
const GymFitnessPage = lazy(() => import("./Pages/Home/GymFitness.jsx"))
const SpaSalonPage = lazy(() => import("./Pages/Home/SpaSalon.jsx"))
const CafePage = lazy(() => import("./Pages/Home/Cafe.jsx"))
const HomeDecorPage = lazy(() => import("./Pages/Home/Decor.jsx"))
const DentistPage = lazy(() => import("./Pages/Home/Dentist.jsx"))
const InteriorDesignPage = lazy(() => import("./Pages/Home/InteriorDesign.jsx"))
const FurnitureShopPage = lazy(() => import("./Pages/Home/FurnitureShop.jsx"))
const FashionShopPage = lazy(() => import("./Pages/Home/FashionShop.jsx"))
const LifestyleBlogPage = lazy(() => import("./Pages/Home/LifestyleBlog.jsx"))
const ClassicBlogPage = lazy(() => import("./Pages/Home/ClassicBlog.jsx"))
const MagazinePage = lazy(() => import("./Pages/Home/Magazine.jsx"))

// Pages
const LandingPage = lazy(() => import("./Pages/Landing.jsx"))
const AccordionPage = lazy(() => import("./Pages/Elements/Accordion.jsx"))
const ButtonPage = lazy(() => import("./Pages/Elements/Button.jsx"))
const TeamPage = lazy(() => import("./Pages/Elements/Team.jsx"))
const TeamCarouselPage = lazy(() => import("./Pages/Elements/TeamCarousel.jsx"))
const ClientPage = lazy(() => import("./Pages/Elements/Clients.jsx"))
const ClientCarouselPage = lazy(() => import("./Pages/Elements/ClientCarousel.jsx"))
const SubscribePage = lazy(() => import("./Pages/Elements/Subscribe.jsx"))
const CallToActionPage = lazy(() => import("./Pages/Elements/CallToAction.jsx"))
const TabPage = lazy(() => import("./Pages/Elements/Tab.jsx"))
const GoogleMapPage = lazy(() => import("./Pages/Elements/GoogleMap.jsx"))
const ContactFormPage = lazy(() => import("./Pages/Elements/ContactForm.jsx"))
const ImageGalleryPage = lazy(() => import("./Pages/Elements/ImageGallery.jsx"))
const ProgressBarPage = lazy(() => import("./Pages/Elements/ProgressBar.jsx"))
const IconWithTextPage = lazy(() => import("./Pages/Elements/IconWithText.jsx"))
const OverLineIconBoxPage = lazy(() => import("./Pages/Elements/OverLineIconBox.jsx"))
const CustomIconWithTextPage = lazy(() => import("./Pages/Elements/CustomIconWithText.jsx"))
const CountersPage = lazy(() => import("./Pages/Elements/Counters.jsx"))
const CountDownPage = lazy(() => import("./Pages/Elements/CountDown.jsx"))
const PieChartPage = lazy(() => import("./Pages/Elements/PieChart.jsx"))
const FancyTextBoxPage = lazy(() => import("./Pages/Elements/FancyTextBox.jsx"))
const TextBoxPage = lazy(() => import("./Pages/Elements/TextBox.jsx"))
const FancyTextPage = lazy(() => import("./Pages/Elements/FancyText.jsx"))
const TestimonialsPage = lazy(() => import("./Pages/Elements/Testimonials.jsx"))
const TestimonialsCarouselPage = lazy(() => import("./Pages/Elements/TestimonialsCarousel.jsx"))
const VideoPage = lazy(() => import("./Pages/Elements/Video.jsx"))
const InteractiveBannersPage = lazy(() => import("./Pages/Elements/InteractiveBanners.jsx"))
const ServicesPage = lazy(() => import("./Pages/Elements/Services.jsx"))
const InfoBannerPage = lazy(() => import("./Pages/Elements/InfoBanner.jsx"))
const RotateBoxPage = lazy(() => import("./Pages/Elements/RotateBox.jsx"))
const ProcessStepPage = lazy(() => import("./Pages/Elements/ProcessStep.jsx"))
const InstagramPage = lazy(() => import("./Pages/Elements/Instagram.jsx"))
const ParallaxScrollingPage = lazy(() => import("./Pages/Elements/ParallaxScrolling.jsx"))
const TextSliderPage = lazy(() => import("./Pages/Elements/TextSlider.jsx"))
const HeadingPage = lazy(() => import("./Pages/Elements/Heading.jsx"))
const DropCapsPage = lazy(() => import("./Pages/Elements/DropCaps.jsx"))
const ColumnsPage = lazy(() => import("./Pages/Elements/Columns.jsx"))
const BlockquotePage = lazy(() => import("./Pages/Elements/Blockquote.jsx"))
const HighlightsPage = lazy(() => import("./Pages/Elements/Highlights.jsx"))
const MessageBoxPage = lazy(() => import("./Pages/Elements/MessageBox.jsx"))
const SocialIconsPage = lazy(() => import("./Pages/Elements/SocialIcons.jsx"))
const ListsPage = lazy(() => import("./Pages/Elements/Lists.jsx"))
const SeparatorsPage = lazy(() => import("./Pages/Elements/Separators.jsx"))
const PricingTablePage = lazy(() => import("./Pages/Elements/PricingTable.jsx"))
const ElementPage = lazy(() => import("./Pages/Elements.jsx"))

const PortfolioPage = lazy(() => import("./Pages/Portfolios.jsx"))
const PortfolioClassicTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicTwoColumn.jsx"))
const PortfolioClassicThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicThreeColumn.jsx"))
const PortfolioClassicFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicFourColumn.jsx"))
const PortfolioClassicMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicMasonry.jsx"))
const PortfolioClassicMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioClassic/PortfolioClassicMetro.jsx"))

const PortfolioBorderedTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedTwoColumn.jsx"))
const PortfolioBorderedThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedThreeColumn.jsx"))
const PortfolioBorderedFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedFourColumn.jsx"))
const PortfolioBorderedMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedMasonry.jsx"))
const PortfolioBorderedMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioBordered/PortfolioBorderedMetro.jsx"))

const PortfolioBoxedTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedTwoColumn.jsx"))
const PortfolioBoxedThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedThreeColumn.jsx"))
const PortfolioBoxedFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedFourColumn.jsx"))
const PortfolioBoxedMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedMasonry.jsx"))
const PortfolioBoxedMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioBoxed/PortfolioBoxedMetro.jsx"))

const PortfolioColorfulTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulTwoColumn.jsx"))
const PortfolioColorfulThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulThreeColumn.jsx"))
const PortfolioColorfulFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulFourColumn.jsx"))
const PortfolioColorfulMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulMasonry.jsx"))
const PortfolioColorfulMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioColorful/PortfolioColorfulMetro.jsx"))

const PortfolioOverlayTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayTwoColumn.jsx"))
const PortfolioOverlayThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayThreeColumn.jsx"))
const PortfolioOverlayFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayFourColumn.jsx"))
const PortfolioOverlayMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayMetro.jsx"))
const PortfolioOverlayMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioOverlay/PortfolioOverlayMasonry.jsx"))
const PortfolioSwitchImgTwoColPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageTwoColumn.jsx"))
const PortfolioSwitchImgThreeColPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageThreeColumn.jsx"))
const PortfolioSwitchImgFourColPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageFourColumn.jsx"))
const PortfolioSwitchImgMasonryPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageMasonry.jsx"))
const PortfolioSwitchImgMetroPage = lazy(() => import("./Pages/Portfolios/PortfolioSwitchImage/PortfolioSwitchImageMetro.jsx"))
const PortfolioScatteredPage = lazy(() => import("./Pages/Portfolios/PortfolioScattered.jsx"))
const PortfolioJustifiedGalleryPage = lazy(() => import("./Pages/Portfolios/PortfolioJustifiedGallery.jsx"))
const PortfolioSliderPage = lazy(() => import("./Pages/Portfolios/PortfolioSlider.jsx"))
const SingleProjectPage01 = lazy(() => import("./Pages/Portfolios/SingleProjectPage01.jsx"))
const SingleProjectPage02 = lazy(() => import("./Pages/Portfolios/SingleProjectPage02.jsx"))
const SingleProjectPage03 = lazy(() => import("./Pages/Portfolios/SingleProjectPage03.jsx"))
const SingleProjectPage04 = lazy(() => import("./Pages/Portfolios/SingleProjectPage04.jsx"))
const SingleProjectPage05 = lazy(() => import("./Pages/Portfolios/SingleProjectPage05.jsx"))

// Header
const TransparentHeaderPage = lazy(() => import("./Pages/Header/TransparentHeaderPage.jsx"))
const WhiteHeaderPage = lazy(() => import("./Pages/Header/WhiteHeaderPage.jsx"))
const DarkHeaderPage = lazy(() => import("./Pages/Header/DarkHeaderPage.jsx"))
const HeaderwithTopbarPage = lazy(() => import("./Pages/Header/HeaderwithTopbarPage.jsx"))
const HeaderWithPushPage = lazy(() => import("./Pages/Header/HeaderWithPushPage.jsx"))
const CenterNavigationPage = lazy(() => import("./Pages/Header/CenterNavigationPage.jsx"))
const CenterLogoPage = lazy(() => import("./Pages/Header/CenterLogoPage.jsx"))
const TopLogoPage = lazy(() => import("./Pages/Header/TopLogoPage.jsx"))
const OnePageNavigationPage = lazy(() => import("./Pages/Header/OnePageNavigationPage.jsx"))
const LeftMenuClassicPage = lazy(() => import("./Pages/Header/LeftMenuClassicPage.jsx"))
const LeftMenuModernPage = lazy(() => import("./Pages/Header/LeftMenuModernPage.jsx"))
const HeaderAlwaysFixedPage = lazy(() => import("./Pages/Header/HeaderTypes/HeaderAlwaysFixedPage.jsx"))
const HeaderResponsiveSticky = lazy(() => import("./Pages/Header/HeaderTypes/HeaderResponsiveSticky.jsx"))
const HeaderDisableFixed = lazy(() => import("./Pages/Header/HeaderTypes/HeaderDisableFixed.jsx"))
const HeaderReverseScroll = lazy(() => import("./Pages/Header/HeaderTypes/HeaderReverseScroll.jsx"))
const MobileMenuClassicPage = lazy(() => import("./Pages/Header/MobileMenu/MobileMenuClassicPage.jsx"))
const MobileMenuModernPage = lazy(() => import("./Pages/Header/MobileMenu/MobileMenuModernPage.jsx"))
const MobileMenuFullScreen = lazy(() => import("./Pages/Header/MobileMenu/MobileMenuFullScreen.jsx"))
const HamburgerMenuPage = lazy(() => import("./Pages/Header/HamburgerMenu/HamburgerMenuPage.jsx"))
const HamburgerMenuModernPage = lazy(() => import("./Pages/Header/HamburgerMenu/HamburgerMenuModernPage.jsx"))
const HamburgerMenuHalfPage = lazy(() => import("./Pages/Header/HamburgerMenu/HamburgerMenuHalfPage.jsx"))

// Footer
const FooterStyle01Page = lazy(() => import("./Pages/Footer/FooterStyle01Page.jsx"))
const FooterStyle02Page = lazy(() => import("./Pages/Footer/FooterStyle02Page.jsx"))
const FooterStyle03Page = lazy(() => import("./Pages/Footer/FooterStyle03Page.jsx"))
const FooterStyle04Page = lazy(() => import("./Pages/Footer/FooterStyle04Page.jsx"))
const FooterStyle05Page = lazy(() => import("./Pages/Footer/FooterStyle05Page.jsx"))
const FooterStyle06Page = lazy(() => import("./Pages/Footer/FooterStyle06Page.jsx"))
const FooterStyle07Page = lazy(() => import("./Pages/Footer/FooterStyle07Page.jsx"))
const FooterStyle08Page = lazy(() => import("./Pages/Footer/FooterStyle08Page.jsx"))
const FooterStyle09Page = lazy(() => import("./Pages/Footer/FooterStyle09Page.jsx"))
const FooterStyle10Page = lazy(() => import("./Pages/Footer/FooterStyle10Page.jsx"))
const FooterStyle11Page = lazy(() => import("./Pages/Footer/FooterStyle11Page.jsx"))
const FooterStyle12Page = lazy(() => import("./Pages/Footer/FooterStyle12Page.jsx"))

// Model-Popup
const ModalPopupPage = lazy(() => import("./Pages/ModalPopup.jsx"))
const SimpleModel = lazy(() => import("./Pages/ModelPopup/SimpleModel.jsx"))
const ContactFormModal = lazy(() => import("./Pages/ModelPopup/ContactFormModal.jsx"))
const SubscriptionModal = lazy(() => import("./Pages/ModelPopup/SubscriptionModal.jsx"))
const VimeoVideoModal = lazy(() => import("./Pages/ModelPopup/VimeoVideoModal.jsx"))
const YouTubeVideoModal = lazy(() => import("./Pages/ModelPopup/YouTubeVideoModal.jsx"))
const GoogleMapModal = lazy(() => import("./Pages/ModelPopup/GoogleMapModal.jsx"))

// Icon Packs
const IconsMindLinePage = lazy(() => import("./Pages/Icons/IconsMindIconPage.jsx"))
const IconsMindSolidPage = lazy(() => import("./Pages/Icons/IconsMindSolidPage.jsx"))
const FontAwesomeIconPage = lazy(() => import("./Pages/Icons/FontAwesomeIconPage.jsx"))
const FeatherIconPage = lazy(() => import("./Pages/Icons/FeatherIconPage.jsx"))
const EtLineIconPage = lazy(() => import("./Pages/Icons/EtLineIconPage.jsx"))
const SimplelineIconPage = lazy(() => import("./Pages/Icons/SimplelineIconPage.jsx"))
const ThemifyIconPage = lazy(() => import("./Pages/Icons/ThemifyIconPage.jsx"))
const AnimationPage = lazy(() => import("./Pages/Animation.jsx"))

// Page-Title
const LeftAlignmentPage = lazy(() => import("./Pages/PageTitle/LeftAlignmentPage.jsx"))
const RightAlignmentPage = lazy(() => import("./Pages/PageTitle/RightAlignmentPage.jsx"))
const CenterAlignmentPage = lazy(() => import("./Pages/PageTitle/CenterAlignmentPage.jsx"))
const ColorfulStylePage = lazy(() => import("./Pages/PageTitle/ColorfulStylePage.jsx"))
const ParallaxBackground = lazy(() => import("./Pages/PageTitle/ParallaxBackground.jsx"))
const SeparateBreadcrumbsPage = lazy(() => import("./Pages/PageTitle/SeparateBreadcrumbsPage.jsx"))
const GalleryBackgroundPage = lazy(() => import("./Pages/PageTitle/GalleryBackgroundPage.jsx"))
const BackgroundVideoPage = lazy(() => import("./Pages/PageTitle/BackgroundVideoPage.jsx"))
const MiniVersionPage = lazy(() => import("./Pages/PageTitle/MiniVersionPage.jsx"))
const BigTypographyPage = lazy(() => import("./Pages/PageTitle/BigTypographyPage.jsx"))
const PageTitle = lazy(() => import("./Pages/PageTitle.jsx"))

// About Pages
const AboutMePage = lazy(() => import("./Pages/About/AboutMePage.jsx"))
const AboutUsPage = lazy(() => import("./Pages/About/AboutUsPage.jsx"))
const OurStoryPage = lazy(() => import("./Pages/About/OurStoryPage.jsx"))
const WhoWeArePage = lazy(() => import("./Pages/About/WhoWeArePage.jsx"))

// Services Pages
const OurServicesPage = lazy(() => import("./Pages/Services/OurServicesPage.jsx"))
const WhatWeOfferPage = lazy(() => import("./Pages/Services/WhatWeOfferPage.jsx"))
const OurProcessPage = lazy(() => import("./Pages/Services/OurProcessPage.jsx"))

// Contact Pages
const ContactUsSimplePage = lazy(() => import("./Pages/Contact/ContactUsSimplePage.jsx"))
const ContactUsClassicPage = lazy(() => import("./Pages/Contact/ContactUsClassicPage.jsx"))
const ContactUsModernPage = lazy(() => import("./Pages/Contact/ContactUsModernPage.jsx"))

// Additional Pages
const LatestNewsPage = lazy(() => import("./Pages/AdditionalPages/LatestNewsPage.jsx"))
const OurTeamPage = lazy(() => import("./Pages/AdditionalPages/OurTeamPage.jsx"))
const FreelancerPage = lazy(() => import("./Pages/Home/Freelancer.jsx"))
const PricingPackagesPage = lazy(() => import("./Pages/AdditionalPages/PricingPackagesPage.jsx"))
const NotFoundPage = lazy(() => import("./Pages/404.jsx"))
const MaintenancePage = lazy(() => import("./Pages/AdditionalPages/MaintenancePage.jsx"))
const ComingSoonPage = lazy(() => import("./Pages/AdditionalPages/ComingSoonPage.jsx"))
const ComingSoonV2Page = lazy(() => import("./Pages/AdditionalPages/ComingSoonV2Page.jsx"))
const FaqSPage = lazy(() => import("./Pages/AdditionalPages/FaqSPage.jsx"))
const SearchResultPage = lazy(() => import("./Pages/AdditionalPages/SearchResultPage.jsx"))

// Shop Pages
const ShopWidePage = lazy(() => import("./Pages/Shop/ShopWide.jsx"))
const HomeBlogMetroPage = lazy(() => import("./Pages/Home/BlogMetro.jsx"))
const ShoppingCart = lazy(() => import("./Pages/Shop/ShoppingCart.jsx"))
const Checkout = lazy(() => import("./Pages/Shop/Checkout.jsx"))
const LoginRegister = lazy(() => import("./Pages/Shop/LoginRegister.jsx"))
const SingleProduct = lazy(() => import("./Pages/Shop/SingleProduct.jsx"))
const OnlyCategoriesPage = lazy(() => import("./Pages/Shop/OnlyCategories.jsx"))
const RightSidebar = lazy(() => import("./Pages/Shop/RightSidebar.jsx"))
const LeftSidebar = lazy(() => import("./Pages/Shop/LeftSideBar.jsx"))
const Footer = lazy(() => import("./Pages/Footer.jsx"))
const Privacy = lazy(() => import("./Pages/Privacy.jsx"))

// Blogs
const BlogPage = lazy(() => import("./Pages/Blogs.jsx"))
const BlogGridPage = lazy(() => import("./Pages/Blogs/BlogGrid.jsx"))
const BlogMasonryPage = lazy(() => import("./Pages/Blogs/BlogMasonry.jsx"))
const BlogClassicPage = lazy(() => import("./Pages/Blogs/BlogClassic.jsx"))
const BlogSimplePage = lazy(() => import("./Pages/Blogs/BlogSimple.jsx"))
const BlogSideImPage = lazy(() => import("./Pages/Blogs/BlogSideImg.jsx"))
const BlogMetroPage = lazy(() => import("./Pages/Blogs/BlogMetro.jsx"))
const BlogModernPage = lazy(() => import("./Pages/Blogs/BlogModern.jsx"))
const BlogCleanPage = lazy(() => import("./Pages/Blogs/BlogClean.jsx"))
const BlogWidgetPage = lazy(() => import("./Pages/Blogs/BlogWidget.jsx"))
const BlogOverlayImgPage = lazy(() => import("./Pages/Blogs/BlogOverlayImg.jsx"))
const BlogStandardPage = lazy(() => import("./Pages/Blogs/BlogStandard.jsx"))
const CategoryPage = lazy(() => import("./Pages/Blogs/CategoryPage.jsx"))
const AuthorPage = lazy(() => import("./Pages/Blogs/AuthorPage.jsx"))

const BlogPostLayout01 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout01.jsx"))
const BlogPostLayout02 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout02.jsx"))
const BlogPostLayout03 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout03.jsx"))
const BlogPostLayout04 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout04.jsx"))
const BlogPostLayout05 = lazy(() => import("./Pages/Blogs/LayoutPage/BlogPostLayout05.jsx"))

// Blogs Types
const BlogGalleryPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogGalleryPostPage.jsx"))
const BlogStandardPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogStandardPostPage.jsx"))
const BlogSliderPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogSliderPostPage.jsx"))
const BlogHtml5VideoPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogHtml5VideoPostPage.jsx"))
const BlogYoutubeVideoPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogYoutubeVideoPostPage.jsx"))
const BlogVimeoVideoPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogVimeoVideoPostPage.jsx"))
const BlogAudioPostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogAudioPostPage.jsx"))
const BlogBlockquotePostPage = lazy(() => import("./Pages/Blogs/PostTypes/BlogBlockquotePostPage.jsx"))
const BlogFullWidthPost = lazy(() => import("./Pages/Blogs/PostTypes/BlogFullWidthPost.jsx"))


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();
  
  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer);


 
  const { i18n } = useTranslation();
  const currentLang = Languages.find((lang) => lang.value === customizer.isLanguage) || Languages[0];

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [currentLang]);

  // RetinaJS
  useEffect(() => {
    const languageAdjustment = () => {
      if (customizer.isLanguage === 'en') {
        dispatch(setDir('ltr'))
      } else if (customizer.isLanguage === 'ar'){
        dispatch(setDir('rtl'))
      }
    } 
  
    languageAdjustment()
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities.js").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
    >
      <div dir={customizer.activeDir} className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />

                  {/* Headers */}
                  <Route path="headers">
                    <Route path="transparent-header" element={<TransparentHeaderPage style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="white-header" element={<WhiteHeaderPage />} />
                    <Route path="dark-header" element={<DarkHeaderPage />} />
                    <Route path="header-with-top-bar" element={<HeaderwithTopbarPage style={{ "--base-color": "#828282" }} />} />
                    <Route path="header-with-push" element={<HeaderWithPushPage style={{ "--base-color": "#828282" }} />} />
                    <Route path="center-navigation" element={<CenterNavigationPage />} /> <Route path="center-logo" element={<CenterLogoPage />} />
                    <Route path="top-logo" element={<TopLogoPage />} />
                    <Route path="one-page-navigation" element={<OnePageNavigationPage style={{ "--base-color": "#f4d956" }} />} />
                    <Route path="header-always-fixed" element={<HeaderAlwaysFixedPage />} /> <Route path="header-disable-fixed" element={<HeaderDisableFixed />} />
                    <Route path="header-reverse-scroll" element={<HeaderReverseScroll />} /> <Route path="header-responsive-sticky" element={<HeaderResponsiveSticky
                      style={{ "--base-color": "#fff" }} />} />
                    <Route path="left-menu-classic" element={<LeftMenuClassicPage />} /> <Route path="left-menu-modern" element={<LeftMenuModernPage
                      style={{ "--base-color": "#c7da26" }} />} />
                    <Route path="mobile-menu-classic" element={<MobileMenuClassicPage />} /> <Route path="mobile-menu-modern" element={<MobileMenuModernPage />} />
                    <Route path="mobile-menu-full-screen" element={<MobileMenuFullScreen />} /> <Route path="hamburger-menu" element={<HamburgerMenuPage />} />
                    <Route path="hamburger-menu-modern" element={<HamburgerMenuModernPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="hamburger-menu-half" element={<HamburgerMenuHalfPage style={{ "--base-color": "#fff" }} />} />
                  </Route>

                  {/* Footers */}
                  <Route path="footers" element={<Footer style={{ "--base-color": "#0038e3" }} />} >
                    <Route path="footer-style-01" element={<FooterStyle01Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-02" element={<FooterStyle02Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-03" element={<FooterStyle03Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-04" element={<FooterStyle04Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-05" element={<FooterStyle05Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-06" element={<FooterStyle06Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-07" element={<FooterStyle07Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-08" element={<FooterStyle08Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-09" element={<FooterStyle09Page style={{ "--base-color": "#fff" }} />} />
                    <Route path="footer-style-10" element={<FooterStyle10Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-10" element={<FooterStyle10Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-11" element={<FooterStyle11Page style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="footer-style-12" element={<FooterStyle12Page style={{ "--base-color": "#0038e3" }} />} />
                  </Route>

                  {/* Home Corporate*/}
                  <Route path="/home-startup" element={<HomeStartupPage style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/home-business" element={<HomeBusinessPage style={{ "--base-color": "#3452ff" }} />} />
                  <Route path="/home-corporate" element={<CorporatePage style={{ "--base-color": "#2ed47c" }} />} />
                  <Route path="/home-finance" element={<FinancePage style={{ "--base-color": "#8bb867" }} />} />
                  <Route path="/home-application" element={<ApplicationPage style={{ "--base-color": "#502e95" }} />} />
                  <Route path="/hadaf" element={<ConsultingPage style={{ "--base-color": "#bf8c4c" }} />} />
                  <Route path="/home-consulting" element={<ConsultingPage style={{ "--base-color": "#bf8c4c" }} />} />
                  <Route path="/home-digital-agency" element={<DigitalagencyPage style={{ "--base-color": "#e6994e" }} />} />
                  <Route path="/home-seo-agency" element={<SeoAgencyPage style={{ "--base-color": "#374162" }} />} />
                  <Route path="/home-events-conference" element={<EventsConferencePage style={{ "--base-color": "#ff7a56" }} />} />
                  <Route path="/home-marketing-agency" element={<MarketingAgencyPage style={{ "--base-color": "#f4d956" }} />} />

                  {/* Home Specialized */}
                  <Route path="/home-restaurant" element={<RestaurantPage />} />
                  <Route path="/hirat" element={<ArchitecturePage style={{ "--base-color": "#cee002" }} />} />
                  <Route path="/home-architecture" element={<ArchitecturePage style={{ "--base-color": "#cee002" }} />} />
                  <Route path="/home-hotel-resort" element={<HotelResortPage style={{ "--base-color": "#c89965" }} />} />
                  <Route path="/home-travel-agency" element={<TravelAgencyPage style={{ "--base-color": "#ff7a56" }} />} />
                  <Route path="/home-yoga-meditation" element={<YogaMeditationPage style={{ "--base-color": "#EA9D8D" }} />} />
                  <Route path="/home-gym-fitness" element={<GymFitnessPage style={{ "--base-color": "#ff7a56" }} />} />
                  <Route path="/home-spa-salon" element={<SpaSalonPage style={{ "--base-color": "#ec606c" }} />} />
                  <Route path="/home-cafe" element={<CafePage style={{ "--base-color": "#cd9452" }} />} />
                  <Route path="/home-decor" element={<HomeDecorPage style={{ "--base-color": "#bf8c4c" }} />} />
                  <Route path="/home-dentist" element={<DentistPage style={{ "--base-color": "#00b8b8" }} />} />
                  <Route path="/home-interior-design" element={<InteriorDesignPage style={{ "--base-color": "#c3964e" }} />} />

                  {/* Home Specialized */}
                  <Route path="/home-design-agency" element={<DesignagencyPage style={{ "--base-color": "#ffcc2e" }} />} />
                  <Route path="/home-web-agency" element={<WebagencyPage style={{ "--base-color": "#ffcc2e" }} />} />
                  <Route path="/home-creative-agency" element={<CreativeAgencyPage style={{ "--base-color": "#cc754c" }} />} />
                  <Route path="/home-branding-agency" element={<BrandingagencyPage style={{ "--base-color": "#cc754c" }} />} />
                  <Route path="/home-photography" element={<PhotographyPage style={{ "--base-color": "#c7da26" }} />} />
                  <Route path="/home-personal-portfolio" element={<PersonalportfolioPage style={{ "--base-color": "#ffeb04" }} />} />
                  <Route path="/home-interactive-portfolio" element={<InteractiveportfolioPage style={{ "--base-color": "#ffeb04" }} />} />
                  <Route path="/home-creative-portfolio" element={<CreativeportfolioPage />} />
                  <Route path="/home-vertical-portfolio" element={<VerticalportfolioPage />} />
                  <Route path="/home-split-portfolio" element={<SplitPortfolioPage />} />
                  <Route path="/home-freelancer" element={<FreelancerPage />} />

                  {/* Home Other */}
                  <Route path="/home-furniture-shop" element={<FurnitureShopPage style={{ "--base-color": "#ff6437" }} />} />
                  <Route path="/home-fashion-shop" element={<FashionShopPage style={{ "--base-color": "#000" }} />} />
                  <Route path="/home-magazine" element={<MagazinePage style={{ "--base-color": "#c89965" }} />} />
                  <Route path="/home-lifestyle-blog" element={<LifestyleBlogPage style={{ "--base-color": "#FE7A56" }} />} />
                  <Route path="/home-classic-blog" element={<ClassicBlogPage />} />
                  <Route path="/home-blog-metro" element={<HomeBlogMetroPage style={{ "--base-color": "#0038e3" }} />} />

                  {/* Elements */}
                  <Route path="elements" element={<ElementPage style={{ "--base-color": "#0038e3" }} />} >
                    <Route path="accordions" element={<AccordionPage />} />
                    <Route path="buttons" element={<ButtonPage />} />
                    <Route path="teams" element={<TeamPage />} />
                    <Route path="team-carousel" element={<TeamCarouselPage />} />
                    <Route path="clients" element={<ClientPage />} />
                    <Route path="client-carousel" element={<ClientCarouselPage />} /> <Route path="subscribe" element={<SubscribePage />} />
                    <Route path="call-to-action" element={<CallToActionPage />} />
                    <Route path="tab" element={<TabPage />} />
                    <Route path="google-map" element={<GoogleMapPage />} />
                    <Route path="contact-form" element={<ContactFormPage />} />
                    <Route path="image-gallery" element={<ImageGalleryPage />} />
                    <Route path="progress-bar" element={<ProgressBarPage />} />
                    <Route path="icon-with-text" element={<IconWithTextPage />} />
                    <Route path="overline-icon-box" element={<OverLineIconBoxPage />} /> <Route path="custom-icon-with-text" element={<CustomIconWithTextPage />} />
                    <Route path="counters" element={<CountersPage />} />
                    <Route path="countdown" element={<CountDownPage />} />
                    <Route path="pie-chart" element={<PieChartPage />} />
                    <Route path="fancy-text-box" element={<FancyTextBoxPage />} />
                    <Route path="text-box" element={<TextBoxPage />} />
                    <Route path="team" element={<TeamPage />} />
                    <Route path="fancy-text" element={<FancyTextPage />} />
                    <Route path="testimonials" element={<TestimonialsPage />} />
                    <Route path="testimonials-carousel" element={<TestimonialsCarouselPage />} /> <Route path="video" element={<VideoPage />} />
                    <Route path="interactive-banners" element={<InteractiveBannersPage />} /> <Route path="services" element={<ServicesPage />} />
                    <Route path="info-banner" element={<InfoBannerPage />} />
                    <Route path="rotate-box" element={<RotateBoxPage />} />
                    <Route path="process-step" element={<ProcessStepPage />} />
                    <Route path="instagram" element={<InstagramPage />} />
                    <Route path="parallax-scrolling" element={<ParallaxScrollingPage />} /> <Route path="text-slider" element={<TextSliderPage />} />
                    <Route path="heading" element={<HeadingPage />} />
                    <Route path="dropcaps" element={<DropCapsPage />} />
                    <Route path="columns" element={<ColumnsPage />} />
                    <Route path="blockquote" element={<BlockquotePage />} />
                    <Route path="highlights" element={<HighlightsPage />} />
                    <Route path="message-box" element={<MessageBoxPage />} />
                    <Route path="social-icons" element={<SocialIconsPage />} />
                    <Route path="lists" element={<ListsPage />} />
                    <Route path="separators" element={<SeparatorsPage />} />
                    <Route path="pricing-table" element={<PricingTablePage />} />
                  </Route>

                  {/* Portfolios */}
                  <Route path="portfolio" element={<PortfolioPage style={{ "--base-color": "#0038e3" }} />}>
                    <Route path="portfolio-classic-two-column" element={<PortfolioClassicTwoColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-classic-three-column" element={<PortfolioClassicThreeColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-classic-four-column" element={<PortfolioClassicFourColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-classic-masonry" element={<PortfolioClassicMasonryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-classic-metro" element={<PortfolioClassicMetroPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-boxed-two-column" element={<PortfolioBoxedTwoColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-boxed-three-column" element={<PortfolioBoxedThreeColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-boxed-four-column" element={<PortfolioBoxedFourColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-boxed-masonry" element={<PortfolioBoxedMasonryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-boxed-metro" element={<PortfolioBoxedMetroPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-colorful-two-column" element={<PortfolioColorfulTwoColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-colorful-three-column" element={<PortfolioColorfulThreeColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-colorful-four-column" element={<PortfolioColorfulFourColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-colorful-masonry" element={<PortfolioColorfulMasonryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-colorful-metro" element={<PortfolioColorfulMetroPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-bordered-two-column" element={<PortfolioBorderedTwoColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-bordered-three-column" element={<PortfolioBorderedThreeColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-bordered-four-column" element={<PortfolioBorderedFourColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-bordered-masonry" element={<PortfolioBorderedMasonryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-bordered-metro" element={<PortfolioBorderedMetroPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-overlay-two-column" element={<PortfolioOverlayTwoColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-overlay-three-column" element={<PortfolioOverlayThreeColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-overlay-four-column" element={<PortfolioOverlayFourColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-overlay-masonry" element={<PortfolioOverlayMasonryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-overlay-metro" element={<PortfolioOverlayMetroPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-switch-image-two-column" element={<PortfolioSwitchImgTwoColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-switch-image-three-column" element={<PortfolioSwitchImgThreeColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-switch-image-four-column" element={<PortfolioSwitchImgFourColPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-switch-image-masonry" element={<PortfolioSwitchImgMasonryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-switch-image-metro" element={<PortfolioSwitchImgMetroPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-scattered" element={<PortfolioScatteredPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-justified-gallery" element={<PortfolioJustifiedGalleryPage style={{ "--base-color": "#fff" }} />} />
                    <Route path="portfolio-slider" element={<PortfolioSliderPage style={{ "--base-color": "#fff" }} />} />
                  </Route>

                  {/* SingleProjectPage*/}
                  <Route path="/portfolio/single-project-page-01" element={<SingleProjectPage01 style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/portfolio/single-project-page-02" element={<SingleProjectPage02 style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/portfolio/single-project-page-03" element={<SingleProjectPage03 style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/portfolio/single-project-page-04" element={<SingleProjectPage04 style={{ "--base-color": "#fd961e" }} />} />
                  <Route path="/portfolio/single-project-page-05" element={<SingleProjectPage05 style={{ "--base-color": "#0038e3" }} />} />

                  {/* Blogs */}
                  <Route path="blogs" element={<BlogPage style={{ "--base-color": "#0038e3" }} />}>
                    <Route path="blog-grid" element={<BlogGridPage style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="blog-masonry" element={<BlogMasonryPage style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="blog-classic" element={<BlogClassicPage />} />
                    <Route path="blog-simple" element={<BlogSimplePage />} />
                    <Route path="blog-side-image" element={<BlogSideImPage />} />
                    <Route path="blog-metro" element={<BlogMetroPage />} />
                    <Route path="blog-overlay-image" element={<BlogOverlayImgPage />} /> <Route path="blog-modern" element={<BlogModernPage style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="blog-clean" element={<BlogCleanPage />} />
                    <Route path="blog-widget" element={<BlogWidgetPage />} />
                    <Route path="blog-standard" element={<BlogStandardPage />} />
                    <Route path="category">
                      <Route path=":category" element={<CategoryPage />} />
                    </Route>
                    <Route path="author">
                      <Route path=":author" element={<AuthorPage />} />
                    </Route>
                  </Route>

                  {/* Blogs Types */}
                  <Route path="blog-types">
                    <Route path="blog-standard-post">
                      <Route path=":id" element={<BlogStandardPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-gallery-post">
                      <Route path=":id" element={<BlogGalleryPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-slider-post">
                      <Route path=":id" element={<BlogSliderPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-html5-video-post">
                      <Route path=":id" element={<BlogHtml5VideoPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-youtube-video-post">
                      <Route path=":id" element={<BlogYoutubeVideoPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-vimeo-video-post">
                      <Route path=":id" element={<BlogVimeoVideoPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-audio-post">
                      <Route path=":id" element={<BlogAudioPostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-blockquote-post">
                      <Route path=":id" element={<BlogBlockquotePostPage style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                    <Route path="blog-full-width-post">
                      <Route path=":id" element={<BlogFullWidthPost style={{ "--base-color": "#0038e3" }} />} />
                    </Route>
                  </Route>

                  {/* Model-Popup */}
                  <Route path="model-popup" element={<ModalPopupPage />}>
                    <Route path="simple-modal" element={<SimpleModel />} />
                    <Route path="subscription" element={<SubscriptionModal />} />
                    <Route path="contact-form" element={<ContactFormModal />} />
                    <Route path="youtube-video" element={<YouTubeVideoModal />} />
                    <Route path="vimeo-video" element={<VimeoVideoModal />} />
                    <Route path="Google-map" element={<GoogleMapModal />} />
                  </Route>

                  {/* Icon Packs */}
                  <Route path="iconsmindline" element={<IconsMindLinePage />} />
                  <Route path="iconsmindsolid" element={<IconsMindSolidPage />} />
                  <Route path="ETlineicon" element={<EtLineIconPage />} />
                  <Route path="fontawesome" element={<FontAwesomeIconPage />} />
                  <Route path="feather" element={<FeatherIconPage />} />
                  <Route path="simple-line" element={<SimplelineIconPage />} />
                  <Route path="themify" element={<ThemifyIconPage />} />
                  <Route path="animation" element={<AnimationPage />} />

                  {/* Page-Title */}
                  <Route path="page-title" element={<PageTitle />}>
                    <Route path="left-alignment" element={<LeftAlignmentPage />} /> <Route path="right-alignment" element={<RightAlignmentPage />} />
                    <Route path="center-alignment" element={<CenterAlignmentPage />} /> <Route path="colorful-style" element={<ColorfulStylePage />} />
                    <Route path="big-typography" element={<BigTypographyPage />} /> <Route path="parallax-background" element={<ParallaxBackground />} />
                    <Route path="separate-breadcrumbs" element={<SeparateBreadcrumbsPage />} /> <Route path="gallery-background" element={<GalleryBackgroundPage />} />
                    <Route path="background-video" element={<BackgroundVideoPage />} /> <Route path="mini-version" element={<MiniVersionPage />} />
                  </Route>

                  {/* PostLayout */}
                  <Route path="/blogs/blog-post-layout-01" element={<BlogPostLayout01 style={{ "--base-color": "#ca7741" }} />} />
                  <Route path="/blogs/blog-post-layout-02" element={<BlogPostLayout02 style={{ "--base-color": "#c3964e" }} />} />
                  <Route path="/blogs/blog-post-layout-03" element={<BlogPostLayout03 />} />
                  <Route path="/blogs/blog-post-layout-04" element={<BlogPostLayout04 />} />
                  <Route path="/blogs/blog-post-layout-05" element={<BlogPostLayout05 />} />

                  {/*About Pages */}
                  <Route path="/page/about-me" element={<AboutMePage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/about-us" element={<AboutUsPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/our-story" element={<OurStoryPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/who-we-are" element={<WhoWeArePage style={{ "--base-color": "#0038e3" }} />} />

                  {/* Services Pages */}
                  <Route path="/page/our-services" element={<OurServicesPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/what-we-offer" element={<WhatWeOfferPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/our-process" element={<OurProcessPage style={{ "--base-color": "#0038e3" }} />} />

                  {/* Contact Pages */}
                  <Route path="/page/contact-simple" element={<ContactUsSimplePage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/contact-classic" element={<ContactUsClassicPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/contact-modern" element={<ContactUsModernPage style={{ "--base-color": "#0038e3" }} />} />

                  {/* Additional Pages */}
                  <Route path="/page/our-team" element={<OurTeamPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/latest-news" element={<LatestNewsPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/pricing-packages" element={<PricingPackagesPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/error-404" element={<NotFoundPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/maintenance" element={<MaintenancePage />} />
                  <Route path="/page/kgp" element={<ComingSoonPage />} />
                  <Route path="/page/coming-soon" element={<ComingSoonPage />} />
                  <Route path="/page/coming-soon-V2" element={<ComingSoonV2Page />} />
                  <Route path="/page/faq-s" element={<FaqSPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="/page/search-result" element={<SearchResultPage style={{ "--base-color": "#0038e3" }} />} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/privacy" element={<Privacy style={{ "--base-color": "#0038e3" }} />} />

                  {/* Shop Pages */}
                  <Route path="shop">
                    <Route path="shop-wide" element={<ShopWidePage />} />
                    <Route path="left-sidebar" element={<LeftSidebar />} />
                    <Route path="right-sidebar" element={<RightSidebar />} />
                    <Route path="only-categories" element={<OnlyCategoriesPage />} /> <Route path="single-product" element={<SingleProduct />} />
                    <Route path="shopping-cart" element={<ShoppingCart style={{ "--base-color": "#0038e3" }} />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="login-register" element={<LoginRegister />} />
                  </Route>
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
    </GlobalContext.Provider>
  )
}

export default App;