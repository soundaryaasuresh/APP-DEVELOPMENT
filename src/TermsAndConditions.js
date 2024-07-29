import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>Terms and Conditions</h1>
      </header>
      <main className="terms-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to our insurance portal. By accessing or using our portal, you agree to be bound by these terms and conditions.
          </p>
        </section>
        <section>
          <h2>Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using our portal, you represent and warrant that you meet this requirement.
          </p>
        </section>
        <section>
          <h2>Usage of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms.
          </p>
        </section>
        <section>
          <h2>Privacy Policy</h2>
          <p>
            Our privacy policy explains how we collect, use, and protect your personal information. By using our portal, you consent to our privacy policy.
          </p>
        </section>
        <section>
          <h2>Changes to Terms</h2>
          <p>
            We may update these terms from time to time. We will notify you of any changes by posting the new terms on our portal.
          </p>
        </section>
      </main>
      <footer className="terms-footer">
        <p>&copy; {new Date().getFullYear()} Insurance Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
