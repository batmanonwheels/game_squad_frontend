import React from 'react';

function UserReviewList({ user, onDelete }) {
  // const userReviews = user.reviews
  //   ? reviews.map((review) => (review.user.id === user.id ? review : null))
  //   : null;

  // console.log(userReviews);
  return (
    <div className='review-container'>
      <div className='review-info'>
        {user.reviews ? (
          user.reviews.map((review) => (
            <div className='review'>
              <div className='review-text'>
                <h2 className='review-title-rating'>
                  {review.title} - {review.rating}
                </h2>
                <p className='review-description'>{review.description}</p>
                <div className='voting-buttons'>
                  <p className='review-upvotes'>{review.updoot} upvotes</p>
                  <p className='review-downvotes'>
                    {review.downdoot} downvotes
                  </p>
                  <button onClick={() => onDelete(review.id)}>
                    Delete Review
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='review-info'>
            <div className='review-text'>
              <h3>No Reviews Yet!</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserReviewList;
