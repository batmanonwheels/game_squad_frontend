import React from 'react';
import { Link } from 'react-router-dom';

function ReviewPreview({ id, title, description, upvotes, downvotes, rating }) {
  return (
    <Link
      to={`/reviews/${id}`}
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <div className='review-preview'></div>
    </Link>
  );
}

export default ReviewPreview;
