import React from 'react';
import Reviews from './reviews.jsx';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 1151.69px;
  width: 810px;
  grid: auto auto auto auto;
  grid-template-rows: 300px 300px 300px 300px;
  grid-gap: 30px;
`

const Button = styled.button`
  height: 100px;
  width: 100px;
`

var ReviewsList = (props) => (
  <Container>
    <Button onClick={() => {props.sortToNew()}}>New</Button>
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
    <Button onClick={() => {props.getPrevious(props.sort)}}>Previous</Button>
    <Button onClick={() => {props.getNext(props.sort)}}>Next</Button>
  </Container>
)

export default ReviewsList;