import React from 'react';
import Reviews from './reviews.jsx';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: grid;
`

var ReviewsList = ({reviews}) => (
  <Container>
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
  </Container>
)

export default ReviewsList;