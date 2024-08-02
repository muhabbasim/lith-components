import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Libraries
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, domMax } from "framer-motion";
import { Provider } from 'react-redux';
import store from './store/Store.tsx';

// css
import "./Assets/css/icons.css"
import "./Assets/css/global.css"
import "./Assets/css/pages.css"
import "./index.scss"
import "./utils/i18n.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LazyMotion features={domMax}>
    <Provider store={store}>
      <ParallaxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ParallaxProvider>
    </Provider>
  </LazyMotion>
);