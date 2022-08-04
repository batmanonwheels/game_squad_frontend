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
  const [info, setInfo] = useState({});

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

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path='/login'>
              <Home user={user} />
            </Route>
            <Route path='/myaccount'>
              <AccountPage user={user} />
            </Route>
            <Route exact path='/games'>
              <GameList games={games} />
            </Route>
            <Route path='/games/:id'>
              <GameInfo user={user}/>
            </Route>
            <Route path='/reviews'>
              <ReviewList />
            </Route>
            <Route path='/'>
              <Home user={user} />
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
            <Route path='/'>
              <Home user={user} />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
