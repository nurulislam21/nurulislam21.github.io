import React, { useState, useEffect, useCallback } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 40);

    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      setIsHidden(true);  
    } else {
      setIsHidden(false); 
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobile ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobile]);

  const closeMenu = () => setIsMobile(false);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
        <div className="container header-container">
          
          <div className="logo">
            <a href="#Home" aria-label="Navigate to Home" onClick={closeMenu}>
              <h1 className="sub-title">
                Noman<span className="logo-dot">.</span>
              </h1>
            </a>
            <span className="header-status-badge d-none-mobile">
              <span className="status-dot"></span> Open to Roles
            </span>
          </div>

          <div className="navlink">
            <nav aria-label="Main Navigation">
              <ul className={`link ${isMobile ? "active" : ""}`}>
                <li><a href="#Home" onClick={closeMenu}>Home</a></li>
                <li><a href="#Expertise" onClick={closeMenu}>Expertise</a></li>
                <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>

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
                    Connect
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
              <i className={`fas ${isMobile ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-overlay ${isMobile ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Header;