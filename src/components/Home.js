import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import Login from './Login';

function Home({ user, games }) {
  const handleDragStart = (e) => e.preventDefault();

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
          width='auto'
          height='600px'
        />
      </Link>
    );
  });

  // console.log(items);
  if (user) {
    return (
      <>
        <h1>Welcome to GameSquad, {user.username}!</h1>
        <AliceCarousel
          autoPlay={true}
          autoPlayInterval='2000'
          autoPlayStrategy='default'
          animationType='fadeout'
          disableButtonsControls='true'
          disableDotsControls='true'
          items={items}
        />
      </>
    );
  } else {
    return <Login/>
  }
}

export default Home;
