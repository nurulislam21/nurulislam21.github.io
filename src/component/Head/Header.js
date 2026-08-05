// import React, { useState, useEffect, useCallback } from "react";
// import "./header.css";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;

//     // 1. Determine if scrolled past top (for glassmorphism effect)
//     setIsScrolled(currentScrollY > 50);

//     // 2. Smart Header Logic: Hide on scroll down, show on scroll up
//     if (currentScrollY > lastScrollY && currentScrollY > 100) {
//       setIsHidden(true);  // User is scrolling down
//     } else {
//       setIsHidden(false); // User is scrolling up
//     }

//     setLastScrollY(currentScrollY);
//   }, [lastScrollY]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   // Lock background scroll when mobile menu is open
//   useEffect(() => {
//     if (isMobile) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => { document.body.style.overflow = "unset"; };
//   }, [isMobile]);

//   const closeMenu = () => setIsMobile(false);

//   return (
//     <>
//       <header className={`header ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
//         <div className="container header-container">
          
//           <div className="logo">
//             <a href="#Home" aria-label="Navigate to Home" onClick={closeMenu}>
//               <h1 className="sub-title">
//                 NOMAN<span className="cursor-blink">_</span>
//               </h1>
//             </a>
//           </div>

//           <div className="navlink">
//             <nav aria-label="Main Navigation">
//               <ul className={`link ${isMobile ? "active" : ""}`}>
//                 <li><a href="#Home" onClick={closeMenu}><span className="nav-num">00.</span> Home</a></li>
//                 <li><a href="#Expertise" onClick={closeMenu}><span className="nav-num">01.</span> Expertise</a></li>
//                 <li><a href="#Projects" onClick={closeMenu}><span className="nav-num">02.</span> Projects</a></li>
//                 <li><a href="#Resume" onClick={closeMenu}><span className="nav-num">03.</span> Resume</a></li>
//                 <li><a href="#Milestones" onClick={closeMenu}><span className="nav-num">04.</span> Milestones</a></li>
//                 <li><a href="#Contact" onClick={closeMenu}><span className="nav-num">05.</span> Contact</a></li>

//                 <li className="hire-btn-container">
//                   <a
//                     href="https://www.linkedin.com/in/nurulislam21/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={closeMenu}
//                     className="pro-btn"
//                     aria-label="Connect on LinkedIn"
//                   >
//                     <i className="fab fa-linkedin-in icon-spacing"aria-hidden="true"></i>
//                     CONNECT //
//                   </a>
//                 </li>
//               </ul>
//             </nav>

//             <button
//               className="toggle"
//               onClick={() => setIsMobile(!isMobile)}
//               aria-expanded={isMobile}
//               aria-controls="mobile-navigation"
//               aria-label={isMobile ? "Close menu" : "Open menu"}
//             >
//               <i className={`fas ${isMobile ? "fa-times close" : "fa-bars open"}`} aria-hidden="true"></i>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Overlay */}
//       <div
//         className={`mobile-overlay ${isMobile ? "active" : ""}`}
//         onClick={closeMenu}
//         aria-hidden="true"
//       ></div>
//     </>
//   );
// };

// export default Header;
import React, { useState, useEffect, useCallback } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // 1. Determine if scrolled past top (for glassmorphism effect)
    setIsScrolled(currentScrollY > 50);

    // 2. Smart Header Logic: Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHidden(true);  // User is scrolling down
    } else {
      setIsHidden(false); // User is scrolling up
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobile]);

  const closeMenu = () => setIsMobile(false);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
        <div className="container header-container">
          
          {/* Logo with Live Status */}
          <div className="logo">
            <a href="#Home" aria-label="Navigate to Home" onClick={closeMenu}>
              <h1 className="sub-title">
                Noman<span className="logo-dot">.</span>
              </h1>
            </a>
            <span className="header-status-badge d-none-mobile">
              <span className="status-dot"></span> Open to Collabs
            </span>
          </div>

          <div className="navlink">
            <nav aria-label="Main Navigation">
              <ul className={`link ${isMobile ? "active" : ""}`}>
                <li><a href="#Home" onClick={closeMenu}>Home</a></li>
                <li><a href="#Expertise" onClick={closeMenu}>What I Do</a></li>
                <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
                {/* <li><a href="#Resume" onClick={closeMenu}>Resume</a></li>
                <li><a href="#Milestones" onClick={closeMenu}>Milestones</a></li> */}
                <li><a href="#Contact" onClick={closeMenu}>Get in Touch</a></li>

                <li className="hire-btn-container">
                  <a
                    href="https://www.linkedin.com/in/nurulislam21/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="pro-btn"
                    aria-label="Connect on LinkedIn"
                  >
                    <i className="far fa-paper-plane icon-spacing" aria-hidden="true"></i>
                    Let's Talk
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="toggle"
              onClick={() => setIsMobile(!isMobile)}
              aria-expanded={isMobile}
              aria-controls="mobile-navigation"
              aria-label={isMobile ? "Close menu" : "Open menu"}
            >
              <i className={`fas ${isMobile ? "fa-times close" : "fa-bars open"}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${isMobile ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Header;