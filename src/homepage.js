import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        navigate('/');
    }

    return (
        <div className="homepage">
            <header className="header">
                <div className="logo">Insurance Portal</div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">AboutUs</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <button className='homelog' onClick={logout}>Logout</button>
                </nav>
            </header>
            <main className="main-content">
                <section className="hero">
                    <h1>INSURING YOUR TRUST</h1>
                    <p>Secure the Future, Protect What's Important.</p>
                    <Link to="/GetQuote" className="cta-button">Get a Quote</Link>
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
                    <Link to="/TermsAndConditions">Terms and Conditions</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/Faq">FAQ</Link>
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

export default Homepage;
