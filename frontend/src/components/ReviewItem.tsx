import React from 'react';

const ReviewItem = ({ rating, review }) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`h-5 w-5 ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="mt-2 text-gray-700">{review}</p>
    </div>
  );
};

export default ReviewItem;