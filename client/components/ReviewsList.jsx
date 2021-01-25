import React from 'react';
import Reviews from './reviews.jsx';
import styled, { css } from 'styled-components';
import Pagination from './pagination.jsx';

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
  align-items: center;
`

const DropdownMenu = styled.div`
  height: 42px;
  font-size: 25px;
  text-align: left;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
    border-radius: 50%;
  }

`

const Sorts = styled.div`
  text-align: left;
`
const CurrentSort = styled.div`

`


var ReviewsList = (props) => {
  var sortingMenu = null;
  if (props.showSort) {
    sortingMenu = <Sorts key="New"><div onClick={props.sortByNew}>New</div><div onClick={props.sortByBest}>Best</div></Sorts>
  }
  var sort = null;
  if (props.sort !== 'default') {
    sort = props.sort;
  }

  var stars = '★'.repeat(props.averageStars);
    if (stars.length < 5) {
      stars += '☆'.repeat(5 - props.averageStars);
    }

  return(
  <Container>
    <Sorting>
      <DropdownMenu onClick={props.openSort}>Sort By: {sort}
        {sortingMenu}
      </DropdownMenu>
    </Sorting>
    <div>{props.reviewCount} item reviews {stars}</div>
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
    <Pagination getNext={props.getNext}
    getPrevious={props.getPrevious}
    currentGroup={props.currentGroup}
    groups={props.groups}
    sort={props.sort}
    getPage={props.getPage}
    />
  </Container>
  )
}

export default ReviewsList;