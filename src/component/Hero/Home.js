// import React from "react";
// import "./Home.css";
// // Make sure these paths match your actual project structure
// import noman1 from "../pic/isnoman.jpg";
// // import skill1 from "../pic/skill1.png"; // e.g. TensorFlow / C++
// import skill2 from "../pic/skill2.png"; // SolidWorks
// import skill3 from "../pic/skill3.png"; // Altium
// import skill4 from "../pic/skill4.png"; // STM32 / Arduino
// import skill5 from "../pic/skill5.png"; // MATLAB
// import skill6 from "../pic/skill6.png"; // Python
// import mypdf from '../pic/Nurul-Islam-Resume-12-2025.pdf';
// import { Typewriter } from "react-simple-typewriter";

// const Home = () => {
//   return (
//     <section className="hero" id="Home">
//       <div className="grid-background"></div>

//       {/* Premium Ambient Background Glows */}
//       <div className="ambient-glow glow-1"></div>

//       <div className="container f_flex hero-layout">
//         <div className="left">
//           <div className="hero-main-header">

//             <div className="system-status premium-glass" data-aos="fade-down">
//               <span className="pulse-dot"></span>
//               <span className="status-text">SYS_ONLINE // SN21 VTOL R&D</span>
//             </div>

//             <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
//               Nurul Islam <span className="premium-gradient-text">Noman</span>
//             </h1>

//             {/* Upgraded IDE-Style Terminal */}
//             <div className="hero-typing premium-glass" data-aos="fade-up" data-aos-delay="200">
//               <div className="ide-header">
//                 <div className="mac-btns">
//                   <span className="mac-btn close"></span>
//                   <span className="mac-btn minimize"></span>
//                   <span className="mac-btn expand"></span>
//                 </div>
//                 <span className="ide-title">kernel_init.sh</span>
//               </div>
//               <div className="ide-body">
//                 <span className="terminal-prefix">admin@noman-sys:~$</span>
//                 <span className="static-text">./deploy --module</span>
//                 <span className="typing-text">
//                   <Typewriter
//                     words={[
//                       " STM32 Bare-Metal Firmware",
//                       " Transwing VTOL Dynamics",
//                       " High-Speed Altium PCB Routing",
//                       " SOLIDWORKS Kinematic Simulation",
//                       " Line Follower Robotics (LFR)",
//                       " Engineering Team Leadership"
//                     ]}
//                     loop={0}
//                     cursor
//                     cursorStyle="|"
//                     typeSpeed={50}
//                     deleteSpeed={30}
//                     delaySpeed={2000}
//                   />
//                 </span>
//               </div>
//             </div>
//           </div>

//           <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
//             As an Electrical and Electronics Engineering student specializing in robotics and aviation, I architect advanced autonomous systems, including VTOL drones and high-performance ground vehicles. I drive the complete hardware R&D lifecycle—integrating high-density PCB design in Altium Designer, 3D kinematic modeling in SOLIDWORKS, and deterministic, bare-metal firmware for STM32 microcontrollers. My core focus lies in bridging complex theoretical control algorithms with robust, competition-tested physical hardware.
//           </p>

//           <div className="hero_btn_main" data-aos="fade-up" data-aos-delay="400">
//             <a href={mypdf} className="download-btn premium-btn" target="_blank" rel="noopener noreferrer">
//               <span className="btn-content">
//                 <i className="fas fa-terminal"></i> GET_FIRMWARE // Resume.pdf
//               </span>
//             </a>
//           </div>

//           <div className="hero_bottom d_flex" data-aos="fade-up" data-aos-delay="500">
//             <div className="col_1">
//               <h4>CONNECT //</h4>
//               <div className="social-grid">
//                 <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
//                   <i className="fa-brands fa-github"></i>
//                 </a>
//                 <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Facebook">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>

//             <div className="col_1">
//               <h4>TECH_STACK //</h4>
//               <div className="tools-grid">
//                 <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer" title="Altium Designer" className="tool-btn">
//                   <img src={skill3} alt="Altium" />
//                 </a>
//                 <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer" title="SOLIDWORKS" className="tool-btn">
//                   <img src={skill2} alt="SolidWorks" />
//                 </a>
//                 <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html" target="_blank" rel="noopener noreferrer" title="STM32 Microcontrollers" className="tool-btn">
//                   <img src={skill4} alt="STM32" />
//                 </a>
//                 <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python" className="tool-btn">
//                   <img src={skill6} alt="Python" />
//                 </a>
//                 <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer" title="MATLAB" className="tool-btn">
//                   <img src={skill5} alt="MATLAB" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="right" data-aos="zoom-in-left" data-aos-delay="300">
//           <div className="right_img_wrapper floating-anim">
//             <div className="premium-holographic-glow"></div>

//             {/* Targeting Crosshairs */}
//             <div className="tech-corner top-left"></div>
//             <div className="tech-corner top-right"></div>
//             <div className="tech-corner bottom-left"></div>
//             <div className="tech-corner bottom-right"></div>

//             <div className="right_img premium-glass-panel">
//               <img src={noman1} alt="Nurul Islam Noman - Systems Engineer" className="pro-hero-img" />
//               <div className="premium-scanline"></div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Home;
import React from "react";
import "./Home.css";
// Make sure these paths match your actual project structure
import noman1 from "../pic/isnoman.jpg";
import skill2 from "../pic/skill2.png"; // SolidWorks
import skill3 from "../pic/skill3.png"; // Altium
import skill4 from "../pic/skill4.png"; // STM32 / Arduino
import skill5 from "../pic/skill5.png"; // MATLAB
import skill6 from "../pic/skill6.png"; // Python
import mypdf from "../pic/Nurul-Islam-Resume-12-2025.pdf";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="hero" id="Home">
      <div className="grid-background"></div>
      <div className="ambient-glow glow-1"></div>

      <div className="container f_flex hero-layout">
        <div className="left">
          <div className="hero-main-header">
            {/* Friendly Status Badge */}
            <div className="system-status premium-glass" data-aos="fade-down">
              <span className="pulse-dot"></span>
              <span className="status-text">Currently R&D-ing Autonomous VTOL Drones</span>
            </div>

            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Hi, I'm Nurul Islam <span className="premium-gradient-text">Noman</span>
            </h1>

            {/* Interactive IDE Terminal */}
            <div className="hero-typing premium-glass" data-aos="fade-up" data-aos-delay="200">
              <div className="ide-header">
                <div className="mac-btns">
                  <span className="mac-btn close"></span>
                  <span className="mac-btn minimize"></span>
                  <span className="mac-btn expand"></span>
                </div>
                <span className="ide-title">whoami.sh</span>
              </div>
              <div className="ide-body">
                <span className="terminal-prefix">noman@workspace:~$</span>
                <span className="static-text">cat focus.txt</span>
                <span className="typing-text">
                  <Typewriter
                    words={[
                      " STM32 Bare-Metal Firmware",
                      " Autonomous VTOL Flight Dynamics",
                      " High-Speed Altium PCB Design",
                      " SOLIDWORKS Kinematic Simulation",
                      " Hardware R&D & Team Leadership"
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Warm, First-Person Bio */}
          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            I’m an Electrical and Electronic Engineering student passionate about making physical hardware come alive. Whether it’s routing high-density PCBs in Altium, modeling flight dynamics in SOLIDWORKS, or writing bare-metal STM32 code, I love taking ideas off the whiteboard and testing them out in the real world.
          </p>

          {/* Friendly CTA Button */}
          <div className="hero_btn_main" data-aos="fade-up" data-aos-delay="400">
            <a href={mypdf} className="download-btn premium-btn" target="_blank" rel="noopener noreferrer">
              <span className="btn-content">
                <i className="fas fa-file-arrow-down"></i> Grab My Resume (PDF)
              </span>
            </a>
          </div>

          {/* Connect & Skills */}
          <div className="hero_bottom d_flex" data-aos="fade-up" data-aos-delay="500">
            <div className="col_1">
              <h4>LET'S CONNECT</h4>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/nurul_islam.noman/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col_1">
              <h4>TOOLS I WORK WITH</h4>
              <div className="tools-grid">
                <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer" title="Altium Designer" className="tool-btn">
                  <img src={skill3} alt="Altium Designer" />
                </a>
                <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer" title="SOLIDWORKS" className="tool-btn">
                  <img src={skill2} alt="SOLIDWORKS" />
                </a>
                <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html" target="_blank" rel="noopener noreferrer" title="STM32 Microcontrollers" className="tool-btn">
                  <img src={skill4} alt="STM32 Microcontrollers" />
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python" className="tool-btn">
                  <img src={skill6} alt="Python" />
                </a>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer" title="MATLAB" className="tool-btn">
                  <img src={skill5} alt="MATLAB" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="right" data-aos="zoom-in-left" data-aos-delay="300">
          <div className="right_img_wrapper floating-anim">
            <div className="premium-holographic-glow"></div>

            <div className="right_img premium-glass-panel">
              <img src={noman1} alt="Nurul Islam Noman - Embedded & Autonomous Systems Engineer" className="pro-hero-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;