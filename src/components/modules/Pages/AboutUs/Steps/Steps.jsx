import React, { useEffect, useState } from "react";
import "@/components/modules/Pages/AboutUs/Steps/Steps.scss";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/steps.json")
      .then((response) => response.json())
      .then((data) => setSteps(data));
  }, []);

  return (
    <div className="steps-wrapper">
      <div className="OurJourneyWrapper--content--logo">
        <img src="/images/testimonialsLogo.png" alt="" />
      </div>
      <div className="steps-header">
        <h2>Navigating the Estatein Experience</h2>
        <p>
          At Estatein, we've designed a straightforward process to help you find
          and purchase your dream property with ease. Here's a step-by-step
          guide to how it all works.
        </p>
      </div>
      <div className="steps-cards">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-card-header">
              <span className="step-number">{step.step}</span>
            </div>
            <div className="step--card--description">
            <h3 className="step--card--description--title">{step.title}</h3>
            <p className="step--card--description--text">{step.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
