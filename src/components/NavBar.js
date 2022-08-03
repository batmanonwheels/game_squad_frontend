import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className='header'>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/games'>Games</Link>
      </div>
      <div>
        <Link to='/reviews'>Reviews</Link>
      </div>
      <div>
        {user ? (
          <>
            <div>
              <Link to='/myaccount'>My Account</Link>
            </div>
            <button onClick={handleLogoutClick}>Logout</button>
          </>
        ) : (
          <>
            <div>
              <Link to='/login'>Login</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
