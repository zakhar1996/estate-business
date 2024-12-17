import React, { useState } from "react";
import "@/components/modules/MainPage/Header/Navigation/NavigationMenu.css";
import Button from "@/components/Elements/Button/Button";
import { NavLink } from "react-router-dom";

function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="parentContainer--gray">
      <div className="container">
        <div className="navigationMenyWrapper">
          <div className="navigationMenyWrapper--logo">
            <div className="navigationMenyWrapper--logo--images">
              <img src="/images/Symbol.png" alt="Logo" />
            </div>
            <div className="navigationMenyWrapper--logo--text">Estatein</div>
          </div>

          <div className="burger-menu" onClick={toggleMenu}>
            <img src="/images/burgerIcon.png" alt="Burger Icon" />
          </div>

          <div
            className={`navigationMenyWrapper--pages ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Properties
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Services
            </NavLink>
          </div>
          <div className="buttonWrapperNavigationMenu">
            <Button type="primary">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
