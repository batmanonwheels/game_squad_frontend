import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

function Home({ user, games }) {
  const handleDragStart = (e) => e.preventDefault();

  const routeToGame = () => {};

  const items = games.map((game) => {
    return (
      <Link
        to={`/games/${game.id}`}
        style={{ textDecoration: 'none', outline: 'none' }}
      >
        <img
          src={game.image}
          alt={game.name}
          onDragStart={handleDragStart}
          role='presentation'
          width='90%'
          height='600px'
          onClick={routeToGame}
        />
      </Link>
    );
  });

  console.log(items);
  if (user) {
    return (
      <>
        <h1>Welcome to GameSquad, {user.username}!</h1>
        <AliceCarousel mouseTracking items={items} />
      </>
    );
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }

}


export default Home;
