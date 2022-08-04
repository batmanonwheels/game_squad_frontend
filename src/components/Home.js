import React from "react";
import Login from './Login';

function Home({ user }) {

    return (
      <div>
      {user ? 
        (
        <h1>Welcome to GameSquad, {user.first_name}!</h1> 
        )
      :
        (
        <Login />
        )
      }
      </div>
  )
}


export default Home;
