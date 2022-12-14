import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor='first-name'>First Name</label>
        <input
          type='text'
          id='first-name'
          autoComplete='off'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor='last-name'>Last Name</label>
        <input
          type='text'
          id='last-name'
          autoComplete='off'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          autoComplete='off'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <label htmlFor='password'>Password Confirmation</label>
        <input
          type='password'
          id='password_confirmation'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
        <button type='submit'>Sign Up</button>
        <p>
        Already a user? <Link to='/login'>Sign In</Link>
      </p>
      </form>
    </div>
  );
}

export default SignUp;
