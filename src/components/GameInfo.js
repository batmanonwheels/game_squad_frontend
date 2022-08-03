import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/GameInfo.css';

function GameInfo({user}) {
  const { id } = useParams();
  const [gameData, setGameData] = useState({});
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)


  useEffect(() => {
    fetch(`/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGameData(data));
  }, []);


    function handleSubmitReview(e){
        e.preventDefault()
        const reviewObj = {
            title: title,
            description: description,
            upvotes:0,
            downvotes:0,
            rating: rating,
            game_id: id,
            user_id: user.id
        }
        fetch('/reviews', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewObj)
        }).then((r) => r.json())
        .then((review)=> console.log(review))
    }
    console.log(gameData)

    const renderReviews = gameData.reviews ?  gameData.reviews.map((review) => (
        <div id="review-info">
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            <p>Rating: {review.rating}</p>
            <p>Upvotes: {review.upvotes} </p>
            <p>Downvotes: {review.downvotes}</p>
        </div>
    )) : null
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
    <form onSubmit={(e)=>{handleSubmitReview(e)}}>
        <label>title</label>
        <input
            placeholder="Give Your Review A Title"
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
        ></input>
        <label>review text</label>
        <textarea 
            placeholder="Write Your Review"
            type="text"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
        ></textarea>
        <label>rate</label>
        <select id="rating" name="rating" onChange={(e)=>setRating(e.target.value)} value={rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button>Submit Review</button>
    </form>
    </>
  );
}

export default GameInfo;
