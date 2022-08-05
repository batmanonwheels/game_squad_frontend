import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReviewPreview({
  id,
  title,
  description,
  upvotes,
  downvotes,
  rating,
  review_user_id,
  userid,
  user,
  game,
  handleDelete,
  handleUpdate,
}) {
  const [updoot, setUpdoots] = useState(upvotes);
  const [downdoot, setDowndoots] = useState(downvotes);

  function handleUpdoot() {
    setUpdoots(updoot + 1);
    let changes = {
      upvotes: updoot + 1,
    };
    handleUpdate(changes, id);
  }

  function handleDowndoot() {
    setDowndoots(downdoot - 1);
    let changes = {
      downvotes: downdoot - 1,
    };
    handleUpdate(changes, id);
  }

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
          {title}: {rating}
        </h2>
        <h3 className='review-game-title'>{game.title}</h3>
        <p className='review-description'>{description}</p>
        {userid === review_user_id ? (
          <div className='voting-buttons'>
            <p className='review-upvotes'>{updoot} upvotes</p>
            <p className='review-downvotes'>{downdoot} downvotes</p>
            <button onClick={() => onDelete()}>Delete Review</button>
          </div>
        ) : (
          <div className='voting-buttons'>
            <p className='review-upvotes'>{updoot} upvotes</p>
            <button
              className='review-upvote-button'
              name='up'
              onClick={() => handleUpdoot()}
            >
              ▲
            </button>
            <p className='review-downvotes'>{downdoot} downvotes</p>
            <button
              className='review-downvote-button'
              name='down'
              onClick={() => handleDowndoot()}
            >
              ▼
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewPreview;
