import React from "react";
import "@/components/modules/Pages/AboutUs/Achievements/Achievements.scss";

const Achievements = () => {
  return (
    <div className="achievements-wrapper">
      <div className="achievements-header">
        <div className="our-values-content--logo">
          <img src="/images/testimonialsLogo.png" alt="" />
        </div>
        <h2>Our Achievements</h2>
        <p>
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>

      <div className="achievements-cards">
        <div className="achievement-card">
          <h3>3+ Years of Excellence</h3>
          <p>
            With over 3 years in the industry, we've amassed a wealth of
            knowledge and experience.
          </p>
        </div>

        <div className="achievement-card">
          <h3>Happy Clients</h3>
          <p>
            Our greatest achievement is the satisfaction of our clients. Their
            success stories fuel our passion for what we do.
          </p>
        </div>

        <div className="achievement-card">
          <h3>Industry Recognition</h3>
          <p>
            We've earned the respect of our peers and industry leaders, with
            accolades and awards that reflect our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
