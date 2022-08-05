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
              <span><MenuItem as={NavLink} to='/' className="link">Home</MenuItem></span>
              <span><MenuItem as={NavLink} to='/games' className="link">Games</MenuItem></span>

              <span><MenuItem as={NavLink} to='/reviews' className="link">Reviews</MenuItem></span>

              <span><MenuItem as={NavLink} to='/myaccount' className="link">My Account</MenuItem></span>

              <span onClick={handleLogoutClick}>
                <Link to="/login" className="link">
                Logout
                </Link>
                </span>
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
