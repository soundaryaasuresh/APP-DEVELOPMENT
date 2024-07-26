import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; // Create this CSS file for custom styles

const homepage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <div className="logo">Insurance Portal</div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
            <main className="main-content">
                <section className="hero">
                    <h1>Protect What Matters Most</h1>
                    <p>Get the best insurance coverage for your needs.</p>
                    <Link to="/get-quote" className="cta-button">Get a Quote</Link>
                </section>
                <section className="features">
                    <h2>Our Services</h2>
                    <div className="feature">
                        <h3>Auto Insurance</h3>
                        <p>Comprehensive coverage for your vehicle.</p>
                    </div>
                    <div className="feature">
                        <h3>Home Insurance</h3>
                        <p>Protect your home and belongings.</p>
                    </div>
                    <div className="feature">
                        <h3>Health Insurance</h3>
                        <p>Coverage for your health needs.</p>
                    </div>
                </section>
                <section className="testimonial">
                    <h2>What Our Clients Say</h2>
                    <blockquote>
                        <p>"The best insurance company I've ever worked with! Excellent service and support."</p>
                        <footer>- Jane Doe</footer>
                    </blockquote>
                </section>
            </main>
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/terms">Terms and Conditions</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Insurance Portal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default homepage;
