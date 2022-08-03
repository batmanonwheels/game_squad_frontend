import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';

function GamePreview({ id, game, renderInfo }) {
  return (
    <Link
      to={`/games/${id}`}
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <div className='game-preview' onClick={() => renderInfo(game)}>
        <img src={game.image} alt={game.title} className='game-preview-image' />
        <h3 className='game-preview-title'>{game.title}</h3>
      </div>
    </Link>
  );
}

export default GamePreview;
