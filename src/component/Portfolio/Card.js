import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Card = ({ image, category, totalLike, title, description, techStack, aosDelay }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [modal]);

  return (
    <>
      <div
        className="portfolio-card"
        onClick={toggleModal}
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <div className="img">
          <img src={image} alt={title} loading="lazy" />
          <div className="img-overlay">
            <span>View Technical Details</span>
          </div>
        </div>
        
        <div className="category">
          <span className="cat-badge">{category}</span>
          <label className="likes">
            <i className="far fa-heart"></i> {totalLike}
          </label>
        </div>
        
        <div className="title">
          <h2>{title}</h2>
        </div>

        <div className="card-tech-stack">
          {techStack && techStack.map((tech, index) => (
            <span key={index} className="stack-tag">{tech}</span>
          ))}
        </div>
      </div>

      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <button className="close-modal" onClick={toggleModal} aria-label="Close Modal">
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body">
              <div className="modal-img">
                <img src={image} alt={title} />
              </div>
              
              <div className="modal-text">
                <span className="cat-badge system-badge">{category}</span>
                <h1>{title}</h1>
                <p>{description || "Technical documentation currently being indexed."}</p>

                {techStack && (
                  <div className="modal-tech-list">
                    {techStack.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                )}

                <div className="modal-actions">
                  <a
                    href="https://github.com/nurulislam21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-btn outline-btn"
                  >
                    <i className="fab fa-github"></i> Source Repository
                  </a>
                  <button className="pro-btn active-btn" onClick={toggleModal}>
                    Close Overview
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Card;