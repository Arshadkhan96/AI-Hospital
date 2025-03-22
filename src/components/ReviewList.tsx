import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((review, index) => (
          <ReviewItem key={index} rating={review.rating} review={review.review} />
        ))
      )}
    </div>
  );
};

export default ReviewList;