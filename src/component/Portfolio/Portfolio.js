import React from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  // Reverse data so recent entries appear first
  const reversedData = [...Portfolio_data].reverse();

  return (
    <section className="Portfolio top" id="Projects">
      <div className="container">
        
        <div className="heading" data-aos="fade-up">
          <span className="section-subtitle">MY WORK</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Displays all projects at once without sliced limits or load-more buttons */}
        <div className="content grid">
          {reversedData.map((item, index) => (
            <Card 
              key={index}
              image={item.image}
              category={item.category}
              totalLike={item.totalLike}
              title={item.title}
              description={item.description}
              techStack={item.techStack}
              aosDelay={(index % 3) * 80}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;