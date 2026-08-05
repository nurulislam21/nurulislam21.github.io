import React, { useState } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 6;

  // Reverse data so recent entries appear first
  const reversedData = [...Portfolio_data].reverse();

  return (
    <section className="Portfolio top" id="Projects">
      <div className="container">
        
        <div className="heading" data-aos="fade-up">
          <span className="section-subtitle">MY WORK</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="content grid">
          {reversedData.slice(0, showAll ? reversedData.length : initialItems).map(
            (item, index) => (
              <Card 
                key={index}
                image={item.image}
                category={item.category}
                totalLike={item.totalLike}
                title={item.title}
                description={item.description}
                techStack={item.techStack}
                aosDelay={(index % 3) * 100}
              />
            )
          )}
        </div>

        <div className="text-center mtop" data-aos="fade-up">
          <button
            className="load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less Projects" : "View All Projects"}
            <i className={`fas ${showAll ? "fa-chevron-up" : "fa-chevron-down"}`} style={{ marginLeft: "8px" }}></i>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;