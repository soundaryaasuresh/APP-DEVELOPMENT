import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the message
    setShowPopup(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us">
      <div className="content">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <h2>AI Features</h2>
        <p>We utilize advanced AI algorithms to enhance our customer service and provide personalized recommendations.</p>
        <div className="ai-section">
          {/* Placeholder for AI features */}
          <p>AI Feature Coming Soon...</p>
        </div>
        {showPopup && (
          <div className="popup">
            <p>Message Sent!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
