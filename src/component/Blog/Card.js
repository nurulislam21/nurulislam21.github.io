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
        className="achievement-card" 
        onClick={toggleModal}
        data-aos="fade-up"
        data-aos-delay={props.aosDelay}
      >
        <div className="img">
          <img src={props.image} alt={props.title_one} loading="lazy" />
          <div className="img-overlay gold-overlay">
            <span>View Certificate</span>
          </div>
        </div>
        
        <div className="category d_flex">
          <span className="date-badge"><i className="far fa-calendar-alt"></i> {props.date}</span>
        </div>
        
        <div className="title">
          <h2>{props.title_one}</h2>
        </div>
      </div>

      {modal && ReactDOM.createPortal(
        <div className="modal-wrapper">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content achievement-modal">
            
            <button className="close-modal gold-close" onClick={toggleModal} aria-label="Close Modal">
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-body text-center">
              <span className="date-badge badge-large">{props.date}</span>
              <h1 className="modal-title">{props.title_one}</h1>
              
              <div className="modal-img-full">
                <img src={props.ppimage} alt={props.title_one} />
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