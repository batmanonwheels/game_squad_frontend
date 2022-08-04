import React from 'react';
import ReviewPreview from './ReviewPreview';

function GameReviewList({ gameData, user }) {
  return (
    <div className='review-container'>
      {gameData.reviews
        ? gameData.reviews.map((review) => (
            <div id='review-info'>
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
                game={gameData}
                userid={user.id}
                // handleDelete={handleDelete}
                // handleUpdate={handleUpdate}
              />
            </div>
          ))
        : null}
    </div>
  );
}

export default GameReviewList;
