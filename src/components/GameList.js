import React, { useEffect, useState } from 'react';
import GamePreview from './GamePreview';

function GameList() {
  const [games, setGames] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className='game-container'>
      {games.map((game) => (
        <GamePreview
          key={game.id}
          id={game.id}
          title={game.title}
          genre={game.genre}
          platform={game.platform}
          image={game.image}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      ))}
    </div>
  );
}

export default GameList;
