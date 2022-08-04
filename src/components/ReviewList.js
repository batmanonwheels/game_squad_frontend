import React, { useEffect, useState } from 'react';
import ReviewPreview from './ReviewPreview';

function ReviewList({ user }) {
  const [reviews, setReview] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  console.log(user.id);

  function handleDelete(id){
    fetch(`/reviews/${id}`, {
      method: "Delete",
    })
      .then(r => r.json())
    setReview(reviews.filter((review) => review.id !==id))
  }
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
          review_user_id={review.user_id}
          game={review.game}
          userid={user.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ReviewList;
