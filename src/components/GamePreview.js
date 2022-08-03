import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';

function GamePreview({ id, game }) {
  return (
    <Link
      to={`/games/${id}`}
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <div className='game-preview'>
        <img src={game.image} alt={game.title} className='game-preview-image' />
        <h3 className='game-preview-title'>{game.title}</h3>
      </div>
    </Link>
  );
}

export default GamePreview;
