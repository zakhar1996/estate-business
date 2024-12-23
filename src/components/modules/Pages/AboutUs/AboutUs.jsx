import React from "react";
import "@/components/modules/Pages/AboutUs/AboutUs.scss";
import WindowTop from "@/components/modules/MainPage/Header/WindowTop/WindowTop";
import NavigationMenu from "@/components/modules/MainPage/Header/Navigation/NavigationMenu";
import Journey from "@/components/modules/Pages/AboutUs/Journey/Journey";
import Values from "@/components/modules/Pages/AboutUs/Values/Values";
import Achievements from "@/components/modules/Pages/AboutUs/Achievements/Achievements";
import Steps from "@/components/modules/Pages/AboutUs/Steps/Steps";
import TeamSection from "@/components/modules/Pages/AboutUs/TeamSection/TeamSection";
import ClientsSection from "@/components/modules/Pages/AboutUs/ClientsSection/ClientsSection";
import Article from "@/components/modules/MainPage/Footer/Article/Article";
import FooterNavigator from "@/components/modules/MainPage/Footer/FooterNavigator/FooterNavigator";
import FooterBottom from "@/components/modules/MainPage/Footer/FooterBottom/FooterBottom";

const AboutUs = () => {
  return (
    <>
      <WindowTop />
      <NavigationMenu />
      <div className="mainHomePage--wrapper">
        <div className="parentContainer">
          <div className="container">
            <Journey />
            <Values />
            <Achievements />
            <Steps />
            <TeamSection />
            <ClientsSection />
          </div>
        </div>

        <Article />
        <FooterNavigator />
        <FooterBottom />
      </div>
    </>
  );
};

export default AboutUs;
