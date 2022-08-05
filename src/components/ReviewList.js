import React,{ useState } from 'react';
import ReviewPreview from './ReviewPreview';

function ReviewList({ user, userid, reviews, handleDelete, handleUpdate }) {
  console.log(reviews)
  return (
    <div className='review-container'>
      {reviews
        ? reviews.map((review) => (
            <ReviewPreview
              key={review.id}
              id={review.id}
              title={review.title}
              description={review.description}
              upvotes={review.upvotes}
              downvotes={review.downvotes}
              rating={review.rating}
              game_id={review.game_id}
              review_user_id={review.user.id}
              game={review.game}
              userid={user.id}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))
        : null}
    </div>
  );
}

export default ReviewList;
