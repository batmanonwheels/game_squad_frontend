import React from 'react';
import GamePreview from './GamePreview';

function GameList({games, renderInfo}) {
  
  return (
    <div className='game-container'>
      {games.map((game) => (
        <GamePreview
          key={game.id}
          id={game.id}
          game={game}
          renderInfo={renderInfo}
        />
      ))}
    </div>
  );
}

export default GameList;
