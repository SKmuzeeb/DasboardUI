import React from 'react';
import './CustomerFeedback.css';

// Sample data for customer reviews
const reviews = [
    { id: 1, name: 'Jenny Wilson', rating: '⭐⭐⭐⭐⭐', feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.', avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'John Doe', rating: '⭐⭐⭐⭐', feedback: 'Great experience! The steak was perfectly cooked.', avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Jane Smith', rating: '⭐⭐⭐⭐⭐', feedback: 'Amazing atmosphere and fantastic food. Will definitely come back.', avatar: 'https://via.placeholder.com/40' },
    // Add more reviews as needed
    // You can add up to 50 or more reviews here
];

const CustomerFeedback = () => {
    return (
        <div className="customer-feedback">
            <h2>Customer's Feedback</h2>
            {reviews.map(review => (
                <div key={review.id} className="feedback">
                    <div className="feedback-header">
                        <div className="avatar">
                            <img src={review.avatar} alt={review.name} />
                        </div>
                        <div className="name">{review.name}</div>
                        <div className="rating">{review.rating}</div>
                    </div>
                    <div className="feedback-body">
                        {review.feedback}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomerFeedback;
