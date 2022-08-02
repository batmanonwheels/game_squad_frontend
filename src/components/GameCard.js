import React from 'react';

function GameCard({ id, title, genre, platform, image }) {
  const handleGameCardClick = () => {};
  return (
    <div className='game-card' onClick={handleGameCardClick}>
      <img src={image} alt={title} className='game-card-image' />
      <h3 className='game-card-title'>{title}</h3>
    </div>
  );
}

export default GameCard;
