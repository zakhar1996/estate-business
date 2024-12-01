import React from "react";
import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="footerNavigator-bottom">
          <div className="footerNavigator-bottomText">
          <p> @2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
          </div>
          <div className="footerNavigator-socialIcons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
