import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "What types of insurance do you offer?",
            answer: "We offer a variety of insurance types including car, home, life, and health insurance."
        },
        {
            question: "How can I get a quote?",
            answer: "You can get a quote by filling out the form on our Get a Quote page. We will get back to you with a personalized quote."
        },
        {
            question: "What should I do if I need to file a claim?",
            answer: "If you need to file a claim, please contact our customer service team. They will guide you through the process and help you with your claim."
        },
        {
            question: "How can I update my policy information?",
            answer: "You can update your policy information by logging into your account on our portal or by contacting our customer service team."
        },
        {
            question: "What is your cancellation policy?",
            answer: "Our cancellation policy varies by policy type. Please refer to your policy documents or contact our customer service team for more information."
        }
    ];

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-content">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleQuestion(index)}>
                            {faq.question}
                        </div>
                        {selectedQuestion === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
