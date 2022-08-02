import React, { useEffect, useState } from 'react';
import ReviewPreview from './ReviewPreview';

function ReviewList() {
  const [reviews, setReview] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className='review-container'>
      {reviews.map((review) => (
        <ReviewPreview
          key={review.id}
          id={review.id}
          title={review.title}
          description={review.description}
          upvotes={review.upvotes}
          downvotes={review.downvotes}
          rating={review.rating}
          game_id={review.game_id}
          user_id={review.user_id}
        />
      ))}
    </div>
  );
}

export default ReviewList;