import React from 'react';
import { Link } from 'react-router-dom';

function GamePreview({
  id,
  title,
  genre,
  platform,
  image,
  isClicked,
  setIsClicked,
}) {
  const handleGamePreviewClick = () => {};

  return (
    <Link
      to={`/games/${id}`}
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <div className='game-preview' onClick={handleGamePreviewClick}>
        <img src={image} alt={title} className='game-preview-image' />
        <h3 className='game-preview-title'>{title}</h3>
      </div>
    </Link>
  );
}

export default GamePreview;
