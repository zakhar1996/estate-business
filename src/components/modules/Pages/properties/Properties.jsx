import React from "react";
import SeasideSerenityVilla from "@/components/modules/Pages/properties/SeasideSerenityVilla/SeasideSerenityVilla";
import WindowTop from "@/components/modules/MainPage/Header/WindowTop/WindowTop";
import NavigationMenu from "@/components/modules/MainPage/Header/Navigation/NavigationMenu";
import PropertyCard from "@/components/modules/Pages/properties/PropertyCard/PropertyCard";
import Form from "@/components/modules/Pages/properties/Form/Form";
import CostsOverview from "@/components/modules/Pages/properties/CostsOverview/CostsOverview";
import Asked from "@/components/modules/MainPage/Main/Asked/Asked";
import Article from "@/components/modules/MainPage/Footer/Article/Article";
import FooterNavigator from "@/components/modules/MainPage/Footer/FooterNavigator/FooterNavigator";
import FooterBottom from "@/components/modules/MainPage/Footer/FooterBottom/FooterBottom";

const Properties = () => {
  return (
    <>
      <WindowTop />
      <NavigationMenu />
      <div className="mainHomePage--wrapper">
        <div className="parentContainer">
          <div className="container">
            <SeasideSerenityVilla />
            <PropertyCard />
            <Form />
            <CostsOverview />
          </div>
        </div>
        <Asked />
        {/* тут інший маржін чим в home page */}
        <Article />
        <FooterNavigator />
        <FooterBottom />
      </div>
    </>
  );
};

export default Properties;
