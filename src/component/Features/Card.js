import React from "react";

const Card = ({ iconClass, title, desc, specs, index, tags }) => {
  return (
    <div className="feature-card">
      <div className="card-content">
        
        {/* Simple Icon Header */}
        <div className="card-header d_flex">
          <div className="card-icon">
            <i className={iconClass}></i>
          </div>
          <span className="card-number">0{index + 1}</span>
        </div>
        
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
        
        {/* Feature Highlights */}
        {specs && (
          <ul className="tech-specs-list">
            {specs.map((spec, i) => (
              <li key={i}>
                <span className="spec-bullet">•</span> {spec}
              </li>
            ))}
          </ul>
        )}
        
        {/* Tech Stack Tags */}
        <div className="card-tags">
          {tags && tags.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Card;