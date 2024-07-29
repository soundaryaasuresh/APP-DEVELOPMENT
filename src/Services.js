// src/components/Services.js

import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-card">
        <h2>AI-Powered Policy Recommendations</h2>
        <p>
          Our advanced AI algorithms analyze your personal data to recommend the best
          life insurance policies tailored to your needs. Get the most suitable coverage
          without the hassle.
        </p>
      </div>
      <div className="service-card">
        <h2>Personalized Risk Assessment</h2>
        <p>
          Using AI-driven risk assessment, we provide a detailed analysis of your life
          insurance needs. Our system evaluates various factors to ensure you get the
          best possible advice.
        </p>
      </div>
      <div className="service-card">
        <h2>24/7 Virtual Assistance</h2>
        <p>
          Our AI-powered virtual assistant is available 24/7 to answer your questions,
          provide information, and guide you through the life insurance process.
        </p>
      </div>
      <div className="service-card">
        <h2>Predictive Analytics</h2>
        <p>
          We use predictive analytics to forecast future trends and help you stay ahead.
          Our insights help you make informed decisions about your life insurance coverage.
        </p>
      </div>
    </div>
  );
};

export default Services;
