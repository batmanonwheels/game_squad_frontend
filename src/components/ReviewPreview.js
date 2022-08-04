import React from 'react';
import { useParams } from 'react-router-dom';

function ReviewPreview({
  id,
  title,
  description,
  upvotes,
  downvotes,
  rating,
  review_user_id,
  game,
  userid,
  handleDelete,
  handleUpdate,
}) {
  const onVote = (e) => {
    let changes = {};
    if (e.target.name === 'up') {
      changes.upvotes = upvotes + 1;
    } else if (e.target.name === 'down') {
      changes.downvotes = downvotes + 1;
    }
    handleUpdate(changes, id);
  };

  function onDelete() {
    handleDelete(id);
  }

  return (
    <div className='review'>
      <img
        src={game.image}
        alt={game.title}
        className='review-image'
        align='left'
      />
      {/* <h2>{game.title}</h2> */}
      {/* <img
        src='https://www.landfx.com/images/docs/kb/installation-errors/4019/blank%20welcome.PNG'
        alt='Game Title'
        className='review-image'
        align='left'
      /> */}
      <div className='review-text'>
        <h2 className='review-title-rating'>
          {title} - {rating}
        </h2>
        <h3 className='review-game-title'>{game.title}</h3>
        <p className='review-description'>{description}</p>
        {userid === review_user_id ? (
          <div className='voting-buttons'>
            <p className='review-upvotes'>{upvotes} upvotes</p>
            <p className='review-downvotes'>{downvotes} downvotes</p>
            <button onClick={() => onDelete()}>Delete Review</button>
          </div>
        ) : (
          <div className='voting-buttons'>
            <p className='review-upvotes'>{upvotes} upvotes</p>
            <button className='review-upvote-button' name='up' onClick={onVote}>
              +1
            </button>
            <p className='review-downvotes'>{downvotes} downvotes</p>
            <button
              className='review-downvote-button'
              name='down'
              onClick={onVote}
            >
              -1
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewPreview;
