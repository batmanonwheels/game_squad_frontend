import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, MenuItem } from "semantic-ui-react"

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
          <Menu fluid widths={4} size='massive'>
              <MenuItem as={NavLink} to='/'>Home</MenuItem>
               <MenuItem as={NavLink} to='/games'>Games</MenuItem>

               <MenuItem as={NavLink} to='/reviews'>Reviews</MenuItem>

              <MenuItem as={NavLink} to='/myaccount'>My Account</MenuItem>

              <button onClick={handleLogoutClick}>
                <Link to="/login">
                Logout
                </Link>
                </button>
          </Menu>
        ) : (
          <>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
