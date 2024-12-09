import React, { useState } from "react";
import "@/components/modules/MainPage/Header/WindowTop/WindowTop.scss";

function WindowTop() {
  const [isVisible, setIsVisible] = useState(true);

  const handleIconClick = () => {
    setIsVisible(false); 
  };

  return (
    <div className="parentContainer">
      {isVisible && (
        <div
          className="windowTop"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/windowtop.png)`,
          }}
        >
          <div className="windowTop--description">
            <div className="windowTop--description--text">
              <p className="windowTop--description--line">
                ✨Discover Your Dream Property with Estatein
              </p>
              <a
                href="#"
                className="windowTop--description--lik"
                onClick={(e) => e.preventDefault()}
              >
                Learn More
              </a>
            </div>
            <div
              className="windowTop--description--icon"
              onClick={handleIconClick}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/windowTopClose2.png`}
                alt="Close Icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WindowTop;

