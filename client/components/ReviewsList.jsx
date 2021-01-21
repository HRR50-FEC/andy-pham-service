import React from 'react';
import Reviews from './reviews.jsx';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: grid;
  grid: auto auto auto auto;
  grid-template-rows: 300px 300px 300px 300px;
  grid-gap: 30px;
`

var ReviewsList = (props) => (
  <Container>
    <button onClick={props.sortByNew}>New</button>
    {props.reviews.map((review) => (
      <Reviews key={review._id}
      username={review.username}
      userDP={review.userDP}
      stars={review.stars}
      imageUrl={review.imageUrl}
      body={review.body}
      date={review.date}
      color={review.color} />
    ))}
    <button onClick={() => {props.getPrevious(props.sort)}}>Previous</button>
    <button onClick={() => {props.getNext(props.sort)}}>Next</button>
  </Container>
)

export default ReviewsList;