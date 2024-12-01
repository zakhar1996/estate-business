import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/App.css';
import NavigationMenu from '@/Header/Navigation/NavigationMenu';
import HeaderTitle from './Header/HeaderTitle/HeaderTitle';
import Advantage from './Header/Advantage/Advantage'; 
import Testimonials from './Main/Testimonials/Testimonials';
import Advertisement from "./Main/Advertisement/Advertisement";
import Asked from './Main/Asked/Asked';
import Article from './Footer/Article/Article';
import FooterNavigator from './Footer/FooterNavigator/FooterNavigator';
import FooterBottom from './Footer/FooterBottom/FooterBottom'

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



