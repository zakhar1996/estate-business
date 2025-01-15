import React from "react";
import "@/components/modules/MainPage/Header/HeaderTitle/HeaderTitle.scss";
import Button from "@/components/Elements/Button/Button";

const HeaderTitle = () => {
  return (
    <div className="parentContainer">
      <div className="header-title">
        <div className="header-title--info">
          <h1>
            Discover Your Dream <br /> Property with Estatein
          </h1>
          <p>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="header-title--buttons">
            <Button type="primary" fullWidth={false}>
              Learn More
            </Button>
            <Button type="secondary">Browse Properties</Button>
          </div>
          <div className="header-title--experience">
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
        <div className="header-title--logo">
          <img src="/images/headerTitleLogo.png" alt="Company Logo" />
        </div>
        <div className="header-title--images">
          <img src="/images/headerTitleImages.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
