import React from 'react';
import Reviews from './reviews.jsx';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 1151.69px;
  width: 810px;
  grid: auto auto auto auto;
  grid-gap: 30px;
`
const Sorting = styled.div`
  width: 810px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const DropdownMenu = styled.div`
  width: 200.797px;
  height: 42px;
  text-align: center;

`

const Sorts = styled.div`
  position: absolute;
`

const Button = styled.button`
  height: 100px;
  width: 100px;
`

const Pages = styled.div`

`

var ReviewsList = (props) => {
  var sortingMenu = null;
  if (props.showSort) {
    sortingMenu = <Sorts><div onClick={props.sortByNew}>New</div><div onClick={props.sortByBest}>Best</div></Sorts>
  }

  return(
  <Container>
    <Sorting>
      <DropdownMenu onClick={props.openSort}>Sort By:
        {sortingMenu}
      </DropdownMenu>
    </Sorting>
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
    <nav>
    <Button onClick={() => {props.getPrevious(props.sort)}}>Previous</Button>
    <Button onClick={() => {props.getNext(props.sort)}}>Next</Button>
    </nav>
  </Container>
  )
}

export default ReviewsList;