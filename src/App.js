import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/App.css";
import NavigationMenu from "@/components/modules/MainPage/Header/Navigation/NavigationMenu";
import WindowTop from "@/components/modules/MainPage/Header/WindowTop/WindowTop";
import HeaderTitle from "@/components/modules/MainPage/Header/HeaderTitle/HeaderTitle";
import Advantage from "@/components/modules/MainPage/Header/Advantage/Advantage";
import Testimonials from "@/components/modules/MainPage/Main/Testimonials/Testimonials";
import Advertisement from "@/components/modules/MainPage/Main/Advertisement/Advertisement";
import Asked from "@/components/modules/MainPage/Main/Asked/Asked";
import Article from "@/components/modules/MainPage/Footer/Article/Article";
import FooterNavigator from "@/components/modules/MainPage/Footer/FooterNavigator/FooterNavigator";
import FooterBottom from "@/components/modules/MainPage/Footer/FooterBottom/FooterBottom";
import AboutUs from "@/components/modules/Pages/AboutUs/AboutUs";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainHomePage--wrapper">
              <div className="mainHomePage">
                <WindowTop />
                <NavigationMenu />
                <HeaderTitle />
                <Advantage />
                <Advertisement />
                <Testimonials />
                <Asked />
                <Article />
                <FooterNavigator />
                <FooterBottom />
              </div>
            </div>
          }
        />
         <Route
          path="/about"
          element={
            <>
              <AboutUs />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
