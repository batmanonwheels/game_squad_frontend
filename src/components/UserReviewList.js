import React from 'react';

function UserReviewList({ user, onDelete }) {
  const {games, reviews} = user
  
  // function combinedData(games,reviews){
  //   let data = {};
    
  //   games.forEach((game)=>{
  //     let data = {
  //       gameTitle: game.title,
  //       gameImage: game.image
  //     }
  //   })
  //   reviews.forEach((review)=>{
  //     let data = {
  //       reviewTitle: review.title
  //     }
  //   })
  //     return data

  // }

  // console.log(combinedData())

  return (
    <div className='review-container'>
      <div className='review-info'>
      {games ? (
          games.map((game)=>(
            <>
            <p>{game.title}</p>
            <img src={game.image}/>
            </>
          ))
        ) : <h3>No Games</h3>}
        {reviews ? (
          reviews.map((review) => (
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
