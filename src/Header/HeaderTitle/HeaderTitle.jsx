import React from "react";
import Button from "../../ReusableComponents/ReusableComponents";
import "./HeaderTitle.css";

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
            <Button text="Learn More" onClick={() => alert("Small")} />
            <Button text="Browse Properties" onClick={() => alert("Big")} />
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
        <div className="header-title--images"></div>
      </div>
    </div>
  );
};

export default HeaderTitle;
