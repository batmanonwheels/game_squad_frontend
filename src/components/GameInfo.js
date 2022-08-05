import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/GameInfo.css';
import GameReviewList from './GameReviewList';

function GameInfo({ user }) {
  const { id } = useParams();
  const [gameData, setGameData] = useState({});
  const defaultFormData = {
    title: '',
    description: '',
    upvotes: 0,
    downvotes: 0,
    rating: 0,
    game_id: id,
    user_id: user.id,
  };
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    fetch(`/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGameData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmitReview(e) {
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((review) => console.log(review))
      .then(setFormData(defaultFormData));
  }

  return (
    <>
      <div className='game-info'>
        <img
          className='game-info-image'
          src={gameData.image}
          alt={gameData.title}
        />
        <h1 className='game-info-title'>{gameData.title}</h1>
        <h3 className='game-info-genre'>Genre: {gameData.genre}</h3>
        <h3 className='game-info-platform'>Platform: {gameData.platform}</h3>
        <GameReviewList user={user} gameData={gameData} />
      </div>
      <div className="game-info">Played this Game? Leave a review!</div><br></br>
      <form
        onSubmit={(e) => {
          handleSubmitReview(e);
        }}
      >
        <label>Title: </label><br></br>
        <input
          placeholder='Give Your Review A Title'
          type='text'
          name='title'
          onChange={handleChange}
          value={formData.title}
          className="form-input"
        ></input><br></br>
        <label>Your Review: </label><br></br>
        <textarea
          placeholder='Write Your Review Here'
          type='text'
          name='description'
          onChange={handleChange}
          value={formData.description}
          className="form-input"
        ></textarea><br></br>
        <label>Rating: </label>
        <select
          id='rating'
          name='rating'
          onChange={handleChange}
          value={formData.rating}
          className="form-input"
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select><br></br>
        <button className="form-input">Submit Review</button>
      </form>
    </>
  );
}

export default GameInfo;
