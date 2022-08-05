import React from 'react';
import UserReviewList from './UserReviewList';

function AccountPage({ user, games, handleDelete }) {
  return (
    <>
      <h1>Welcome to your account, {user.username.toUpperCase()}!</h1>
      <h2>View your reviews here!</h2>
      <UserReviewList user={user} games={games} handleDelete={handleDelete} />
    </>
  );
}

export default AccountPage;
