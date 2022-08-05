import React from 'react';
import UserReviewList from './UserReviewList';

function AccountPage({ user, handleDelete }) {
  return (
    <>
      <h1>Welcome, {user.first_name}!</h1>
      <h2>View your reviews here!</h2>
      <UserReviewList user={user} onDelete={handleDelete} />
    </>
  );
}

export default AccountPage;
