import React from "react";
import "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <div className="parentContainer">
      <div className="container">
        <div className="navigationMenyWrapper">
          <div className="navigationMenyWrapper--logo">
            <div className="navigationMenyWrapper--logo--images">
              <img src="/images/Symbol.png" alt="Logo" />
            </div>
            <div className="navigationMenyWrapper--logo--text">Estatein</div>
          </div>
          <div className="navigationMenyWrapper--pages">
            <a href="#link1">Home</a>
            <a href="#link2">About Us</a>
            <a href="#link3">Properties</a>
            <a href="#link4">Services</a>
          </div>
          <button className="contactUsButton">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
