import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import HomePage from './homepage';
import GetQuote from './GetQuote';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Faq from './Faq';
import DittoInfo from './DittiInfo';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/GetQuote" element={<GetQuote/>} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/DittoInfo" element={<DittoInfo/>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;