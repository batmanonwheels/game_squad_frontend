import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className='game-container'>
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          genre={game.genre}
          platform={game.platform}
          image={game.image}
        />
      ))}
    </div>
  );
}

export default GameList;
