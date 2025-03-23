import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import ReviewList from '../components/ReviewList';

const Feedback = () => {
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Feedback & Reviews</h1>
        <p className="text-gray-600 mt-2">Share your experience with us!</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <FeedbackForm onSubmit={handleSubmit} />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default Feedback;