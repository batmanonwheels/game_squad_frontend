import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/GameInfo.css';
import ReviewPreview from './ReviewPreview';

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
    e.preventDefault();
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

  const renderReviews = gameData.reviews
    ? gameData.reviews.map((review) => (
        <div id='review-info'>
          <ReviewPreview
            key={review.id}
            id={review.id}
            title={review.title}
            description={review.description}
            upvotes={review.upvotes}
            downvotes={review.downvotes}
            rating={review.rating}
            game_id={review.game_id}
            user_id={review.user_id}
            game={gameData}
            userid={user.id}
          />
        </div>
      ))
    : null;

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
        {renderReviews}
      </div>
      <form
        onSubmit={(e) => {
          handleSubmitReview(e);
        }}
      >
        <label>title</label>
        <input
          placeholder='Give Your Review A Title'
          type='text'
          name='title'
          onChange={handleChange}
          value={formData.title}
        ></input>
        <label>review text</label>
        <textarea
          placeholder='Write Your Review'
          type='text'
          name='description'
          onChange={handleChange}
          value={formData.description}
        ></textarea>
        <label>rate</label>
        <select
          id='rating'
          name='rating'
          onChange={handleChange}
          value={formData.rating}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button>Submit Review</button>
      </form>
    </>
  );
}

export default GameInfo;
