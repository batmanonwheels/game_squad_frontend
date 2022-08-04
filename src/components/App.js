import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import GameList from './GameList';
import ReviewList from './ReviewList';
import AccountPage from './AccountPage';
import GameInfo from './GameInfo';
import '../assets/css/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [updateState, setUpdateState] = useState([]);

  useEffect(() => {
    // auto-login
    fetch('/myaccount').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/reviews/${id}`, {
      method: 'Delete',
    }).then((r) => r.json());
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleUpdate = (changes, id) => {
    // console.log(changes, id);
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(changes),
    })
      .then((response) => response.json())
      .then((data) => setUpdateState(data));
  };

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path='/login'>
              <Home user={user} games={games} />
            </Route>
            <Route path='/myaccount'>
              <AccountPage user={user} />
            </Route>
            <Route exact path='/games'>
              <GameList games={games} />
            </Route>
            <Route path='/games/:id'>
              <GameInfo user={user} />
            </Route>
            <Route path='/reviews'>
              <ReviewList
                user={user}
                reviews={reviews}
                games={games}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </Route>
            <Route exact path='/'>
              <Home user={user} games={games} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path='/signup'>
              <SignUp setUser={setUser} />
            </Route>
            <Route path='/login'>
              <Login setUser={setUser} />
            </Route>
            <Route exact path='/'>
              <Home user={user} games={games} />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
