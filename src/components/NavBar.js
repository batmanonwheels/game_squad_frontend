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
        {user ? (
          <>
            <span>
              <Link to='/'>Home</Link>
            </span>
            <span>
               <Link to='/games'>Games</Link>
            </span>
            <span>
               <Link to='/reviews'>Reviews</Link>
            </span>
            <span>
              <Link to='/myaccount'>My Account</Link>
              <button onClick={handleLogoutClick}>
                <Link to="/login">
                Logout
                </Link>
                </button>
            </span>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
