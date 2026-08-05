import React from "react";
import logo1 from "./pic/logo.jpg";
import "./Footer.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-area">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Column 1: Personal Brand & Intro */}
          <div className="footer-brand" data-aos="fade-right">
            <div className="footer-logo-wrapper">
              <div className="footer-logo">
                <img src={logo1} alt="Nurul Islam Noman - Embedded & Robotics Engineer" />
              </div>
              <div className="brand-text">
                <h2>Nurul Islam Noman<span className="logo-dot">.</span></h2>
                <p>Embedded Systems & Robotics Engineer</p>
              </div>
            </div>
            
            <p className="footer-bio-text">
              Building autonomous VTOLs, custom hardware, and firmware. Always open to novel engineering challenges and collaboration.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h3 className="footer-heading">Navigation</h3>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Expertise">What I Do</a></li>
              <li><a href="#Projects">Projects</a></li>
              {/* <li><a href="#Resume">Resume</a></li>
              <li><a href="#Milestones">Milestones</a></li> */}
              <li><a href="#Contact">Get in Touch</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
            <h3 className="footer-heading">Contact</h3>
            <p><i className="far fa-envelope"></i> noman1272003@gmail.com</p>
            <p><i className="fas fa-phone-alt"></i> +880 1823-395901</p>
            <p><i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</p>
          </div>

          {/* Column 4: Social Links & Back to Top */}
          <div className="footer-social" data-aos="fade-left" data-aos-delay="300">
            <h3 className="footer-heading">Socials</h3>
            <div className="social-flex">
              <a href="https://www.linkedin.com/in/nurulislam21/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/nurulislam21" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/nurulislamnoman.21/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <i className="fas fa-arrow-up"></i> Back to Top
            </button>
          </div>
          
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom d_flex">
          <p className="footer-text">
            © {currentYear} Nurul Islam Noman. All rights reserved.
          </p>
          <p className="footer-text terminal-status">
            <span className="status-dot"></span> Available for projects
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;