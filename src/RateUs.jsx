import React, { useState } from 'react';
import './RateUs.css';

const RateUs = () => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className="rate-us-container">
            {submitted ? (
                <div className="thank-you-message">
                    Thank you for your feedback!
                </div>
            ) : (
                <div className="rate-us-card">
                    <h2>Rate Us!</h2>
                    <p>Tell us about your experience</p>
                    <div className="emojis">
                        <button onClick={() => handleRating('Terrible')} className={rating === 'Terrible' ? 'selected' : ''}>
                            <span role="img" aria-label="Terrible">😡</span>
                            <p>Terrible</p>
                        </button>
                        <button onClick={() => handleRating('Bad')} className={rating === 'Bad' ? 'selected' : ''}>
                            <span role="img" aria-label="Bad">😟</span>
                            <p>Bad</p>
                        </button>
                        <button onClick={() => handleRating('Okay')} className={rating === 'Okay' ? 'selected' : ''}>
                            <span role="img" aria-label="Okay">😊</span>
                            <p>Okay</p>
                        </button>
                        <button onClick={() => handleRating('Good')} className={rating === 'Good' ? 'selected' : ''}>
                            <span role="img" aria-label="Good">🙂</span>
                            <p>Good</p>
                        </button>
                        <button onClick={() => handleRating('Great')} className={rating === 'Great' ? 'selected' : ''}>
                            <span role="img" aria-label="Great">😃</span>
                            <p>Great</p>
                        </button>
                    </div>
                    <button onClick={handleSubmit} className="submit-button">Submit</button>
                    <button className="skip-button">Skip</button>
                </div>
            )}
        </div>
    );
};

export default RateUs;
