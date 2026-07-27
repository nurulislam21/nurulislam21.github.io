import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./component/Head/Header";
import Home from "./component/Hero/Home"; 
import Features from "./component/Features/Features";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Skill from './component/Skill/Skill';
import Blog from "./component/Blog/Blog";
// import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import CustomCursor from "./component/CustomCursor"; 

import "./index.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,          // Slightly longer for elegance
      easing: "ease-out-cubic", // Smooth deceleration
      once: true,              // Only animate once to avoid distraction
      offset: 80,              // Trigger slightly earlier
      delay: 50,               // Micro-delay for staggered feel
    });
    AOS.refresh(); 
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Header />
      
      <main className="main-content">
        <Home />
        <Features />
        <Portfolio />
        <Resume />
        <Skill />
        <Blog />
        {/* <Testimonial/> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;