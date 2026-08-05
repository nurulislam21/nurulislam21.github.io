import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
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
        data-aos-delay={props.aosDelay}
      >
        <div className="img">
          <img src={props.image} alt={props.title} loading="lazy" />
          <div className="img-overlay">
            <span>View Project</span>
          </div>
        </div>
        
        <div className="category">
          <span className="cat-badge">{props.category}</span>
          <span className="likes"><i className="far fa-heart"></i> {props.totalLike}</span>
        </div>
        
        <h2>{props.title}</h2>

        {props.techStack && (
          <div className="card-tech-stack">
            {props.techStack.map((tech, idx) => (
              <span key={idx} className="stack-tag">{tech}</span>
            ))}
          </div>
        )}
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
                <img src={props.image} alt={props.title} />
              </div>

              <div className="modal-text">
                <span className="cat-badge">{props.category}</span>
                <h1>{props.title}</h1>
                <p>{props.description}</p>

                {props.techStack && (
                  <div className="modal-tech-list">
                    {props.techStack.map((tech, idx) => (
                      <span key={idx} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
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