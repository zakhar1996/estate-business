import React from "react";
import "@/components/modules/Pages/AboutUs/Values/Values.scss";

const Values = () => {
  return (
    <div className="our-values-wrapper">
      <div className="our-values-content">
        <div className="our-values-content--logo">
          <img src="/images/testimonialsLogo.png" alt="" />
        </div>
        <h2 className="our-values-title">Our Values</h2>
        <p className="our-values-description">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>

      <div className="our-values-cards">
        <div className="value-card">
          <div className="value-icon">
            <img src="/images/AboutUsValues--logo1.svg" alt="Trust" />
            <h3>Trust</h3>
          </div>

          <p>
            Trust is the cornerstone of every successful real estate
            transaction.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="/images/AboutUsValues--logo2.svg" alt="Excellence" />
            <h3>Excellence</h3>
          </div>
          <p>
            We set the bar high for ourselves. From the properties we list to
            the services we provide.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="/images/AboutUsValues--logo3.svg" alt="Client-Centric" />
            <h3>Client-Centric</h3>
          </div>
          <p>
            Your dreams and needs are at the center of our universe. We listen,
            understand.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <img src="/images/AboutUsValues--logo1.svg" alt="Our Commitment" />
            <h3>Our Commitment</h3>
          </div>
          <p>
            We are dedicated to providing you with the highest level of service,
            professionalism, and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
