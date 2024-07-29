import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
      </header>
      <main className="privacy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to our insurance portal. We are committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal information.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>
            We collect various types of information, including information that can identify you such as your name, email address, and phone number.
          </p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
          </p>
        </section>
        <section>
          <h2>Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except as necessary to provide our services or comply with the law.
          </p>
        </section>
        <section>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can contact us to exercise these rights.
          </p>
        </section>
        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our portal.
          </p>
        </section>
      </main>
      <footer className="privacy-footer">
        <p>&copy; 2024 Insurance Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
