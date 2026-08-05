import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./component/Head/Header";
import Home from "./component/Hero/Home"; 
import Features from "./component/Features/Features";
import Portfolio from "./component/Portfolio/Portfolio";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import Chatbot from "./component/Chatbot/Chatbot";

import "./index.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    AOS.refresh(); 
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="main-content">
        <Home />
        <Features />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;