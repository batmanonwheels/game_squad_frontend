import React, { useEffect, useState } from 'react';
import ReviewPreview from './ReviewPreview';

function ReviewList({ user }) {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  console.log(reviews);

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: 'Delete',
    }).then((r) => r.json());
    setReview(reviews.filter((review) => review.id !== id));
  }

  const handleUpdate = (changes, id) => {
    console.log(changes);
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    }).then((response) => response.json());
  };

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
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default ReviewList;
