import React from "react";
import "@/components/modules/Pages/AboutUs/Journey/Journey.scss";

const Journey = () => {
  return (
    <div className="OurJourneyWrapper">
      <div className="OurJourneyWrapper--description">
        <div className="OurJourneyWrapper--content">
          <div className="OurJourneyWrapper--content--logo">
            <img src="/images/testimonialsLogo.png" alt="" />
          </div>
          <h2 className="OurJourneyWrapper--content--title">Our Journey</h2>
          <p className="OurJourneyWrapper--content--description">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
        </div>
        <div className="header-title--experience journey-title--experience">
          <div className="header-title--experience--case">
            <h2>200+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="header-title--experience--case">
            <h2>10k+</h2>
            <p>Properties For Clients</p>
          </div>
          <div className="header-title--experience--case">
            <h2>16+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url('/images/1.png')",
        }}
        className="OurJourneyWrapper--backgroundImage"
      >
        <img
          className="OurJourneyWrapper--images--buil"
          src="/images/3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Journey;
