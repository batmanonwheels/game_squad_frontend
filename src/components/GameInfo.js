import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/GameInfo.css';

function GameInfo() {
  const { id } = useParams();
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    fetch(`/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGameData(data));
  }, []);

  console.log(gameData);

  return (
    <div className='game-info'>
      <img
        className='game-info-image'
        src={gameData.image}
        alt={gameData.title}
      />
      <h1 className='game-info-title'>{gameData.title}</h1>
      <h3 className='game-info-genre'>Genre: {gameData.genre}</h3>
      <h3 className='game-info-platform'>Platform: {gameData.platform}</h3>
      {/* <ul className='game-info-reviews'>
        {gameData.reviews.map(review) => {
          <li></li>
        }};
      </ul> */}
    </div>
  );
}

export default GameInfo;
