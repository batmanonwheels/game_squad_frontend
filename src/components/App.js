import React, { useEffect, useState } from "react";
import { Switch, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import AccountPage from "./AccountPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/myaccount").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user}/>
            </Route>
            <Route path="/myaccount">
              <AccountPage user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser}  />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
