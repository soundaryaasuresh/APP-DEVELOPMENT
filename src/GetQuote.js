import React, { useState, useEffect } from 'react';
import './GetQuote.css';
import { useNavigate } from 'react-router-dom';

const GetQuote = () => {
    const [formData, setFormData] = useState({
        name: 'soundaryaa',
        email: 'soundaryaasuresh@gmail.com',
        phone: '8248025500',
        insuranceType: 'car',
        details: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!formData.name || !formData.email || !formData.phone || !formData.details) {
            return;
        }

        
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                navigate('/home');
            }, 3000); 

            return () => clearTimeout(timer); 
        }
    }, [submitted, navigate]);

    if (submitted) {
        return (
            <div className="get-quote">
                <h1>Thank You!</h1>
                <p>Your quote request has been submitted. We will get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="get-quote">
            <h1>Get a Quote</h1>
            <p>Fill out the form below to get a personalized insurance quote.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="insuranceType">Type of Insurance:</label>
                    <select
                        id="insuranceType"
                        name="insuranceType"
                        value={formData.insuranceType}
                        onChange={handleChange}
                    >
                        <option value="car">Car</option>
                        <option value="home">Home</option>
                        <option value="life">Life</option>
                        <option value="health">Health</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="details">Details:</label>
                    <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GetQuote;
