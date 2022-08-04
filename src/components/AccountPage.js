import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import ReviewPreview from './ReviewPreview';

function AccountPage({ user }) {
  return (
    <>
      <h1>Welcome to your account, {user.username.toUpperCase()}!</h1>
      <h2>View your reviews here!</h2>
      <ReviewList userid={user.id} />
    </>
  );
}

export default AccountPage;

// const [reviews, setReview] = useState([]);
// // const [isClicked, setIsClicked] = useState(false);

// useEffect(() => {
//   fetch('/reviews')
//     .then((res) => res.json())
//     .then((data) => setReview(data));
// }, []);

// return (
