import React from 'react';
import Reviews from './reviews.jsx';

var ReviewsList = ({reviews}) => (
  <div>
    {reviews.map((review) => (
      <Reviews key={review._id}
      username={review.username}
      userDP={review.userDP}
      stars={review.stars}
      imageUrl={review.imageUrl}
      body={review.body}
      date={review.date}
      color={review.color} />
    ))}
  </div>
)

export default ReviewsList;