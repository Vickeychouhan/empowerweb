import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';

import ContactForm from './components/ContactForm';
import WhatWeDo from './components/WhatWeDo';
import Solutions from './components/Solutions';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';
import Experience from './components/Experience';
import ContactHome from './components/Contact-home';
import Whatwedo1 from './components/what_we_do1';

import './App.css';
import Services from './components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Solutions />
      <SuccessStories />
      <Experience />
      {/* <ContactForm/> */}
      <ContactHome />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactform" element={<ContactForm/>} />
          <Route path="/WhatWeDo1" element={<Whatwedo1/>} />
          <Route path="/services" element={<Services/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
