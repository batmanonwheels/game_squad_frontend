import React from 'react';
import GamePreview from './GamePreview';

function GameList({games, setClickedGameId}) {
  
  return (
    <div className='game-container'>
      {games.map((game) => (
        <GamePreview
          key={game.id}
          id={game.id}
          game={game}
          setClickedGameId={setClickedGameId}
        />
      ))}
    </div>
  );
}

export default GameList;
