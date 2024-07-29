import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content">
        <h1>About Us</h1>
        <p>Welcome to our Life Insurance company. We are dedicated to providing the best insurance plans to secure your future.</p>
        <h2>Our Mission</h2>
        <p>Our mission is to offer reliable and affordable life insurance policies to ensure peace of mind for you and your loved ones.</p>
        <h2>AI Features</h2>
        <p>We utilize advanced AI algorithms to tailor our insurance plans to your specific needs.</p>
        <div className="ai-section">
          {/* Placeholder for AI features */}
          <p>AI Feature Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
