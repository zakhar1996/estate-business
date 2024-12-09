import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/App.css';
import NavigationMenu from '@/components/modules/MainPage/Header/Navigation/NavigationMenu';
import WindowTop from '@/components/modules/MainPage/Header/WindowTop/WindowTop';
import HeaderTitle from '@/components/modules/MainPage/Header/HeaderTitle/HeaderTitle';
import Advantage from '@/components/modules/MainPage/Header/Advantage/Advantage'; 
import Testimonials from '@/components/modules/MainPage/Main/Testimonials/Testimonials';
import Advertisement from "@/components/modules/MainPage/Main/Advertisement/Advertisement";
import Asked from '@/components/modules/MainPage/Main/Asked/Asked';
import Article from '@/components/modules/MainPage/Footer/Article/Article';
import FooterNavigator from '@/components/modules/MainPage/Footer/FooterNavigator/FooterNavigator';
import FooterBottom from '@/components/modules/MainPage/Footer/FooterBottom/FooterBottom'

const HomePage = () => (
  <>
   <Advertisement />
    <Testimonials />
      <Asked/>
  </>
);

function App() {
  return (
    <Router>
      <div className="mainHomePage--wrapper">
        <div className="mainHomePage">
          <WindowTop />
          <NavigationMenu />
          <HeaderTitle />
          <Advantage />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Article />
          <FooterNavigator />
          <FooterBottom />  
        </div>
      </div>
    </Router>
  );
}

export default App;



