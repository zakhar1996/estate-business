import React from "react";
import "@/components/modules/MainPage/Footer/FooterNavigator/FooterNavigator.scss";

const FooterNavigator = () => {
  return (
    <div className="parentContainer">
      <div className="container">
        <footer className="footerNavigator">
          <div className="footerNavigator--header">
            <div className="footerNavigator-logo">
              <div className="footerNavigator-logo--images">
                <img src="/images/SymbolFooter.png" alt="Company Logo" />
              </div>
              <p className="footerNavigator-logoText">Estatein</p>
            </div>
            <div className="footerNavigator-email">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="footerNavigator-emailInput"
                style={{
                  backgroundImage: "url('/images/mail.png')",
                }}
              />
              <button className="footerNavigator-emailButton">
                <img
                  src="/images/Send.png"
                  alt="Send"
                  className="footerNavigator-emailIcon"
                />
              </button>
            </div>
          </div>

          <div className="footerNavigator-links">
            <div className="footerNavigator-linksColumn">
              <h4>Home</h4>
              <ul>
                <li>Hero Section</li>
                <li>Features</li>
                <li>Properties</li>
                <li>Testimonials</li>
                <li>FAQ's</li>
              </ul>
            </div>
            <div className="footerNavigator-linksColumn">
              <h4>About Us</h4>
              <ul>
                <li>Our Story</li>
                <li>Our Works</li>
                <li>How It Works</li>
                <li>Our Team</li>
                <li>Our Clients</li>
              </ul>
            </div>
            <div className="footerNavigator-linksColumn">
              <h4>Properties</h4>
              <ul>
                <li>Portfolio</li>
                <li>Categories</li>
              </ul>
            </div>
            <div className="footerNavigator-linksColumn">
              <h4>Services</h4>
              <ul>
                <li>Valuation Mastery</li>
                <li>Strategic Marketing</li>
                <li>Negotiation Wizardry</li>
                <li>Closing Success</li>
                <li>Property Management</li>
              </ul>
            </div>
            <div className="footerNavigator-linksColumn">
              <h4>Contact Us</h4>
              <ul>
                <li>Contact Form</li>
                <li>Our Offices</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterNavigator;
