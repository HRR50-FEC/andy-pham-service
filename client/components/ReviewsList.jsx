import React from 'react';
import Reviews from './Reviews.jsx';
import styled, { css } from 'styled-components';
import Pagination from './Pagination.jsx';

const Container = styled.div`
  display: grid;
  width: 810px;
  grid: auto auto auto auto;
  grid-gap: 30px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
`
const Sorting = styled.div`
  width: 810px;
  height: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const DropdownMenu = styled.div`
  font-size: 13px;
  display: flex;
  height: auto;
  min-width: 32px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
  position: relative;
  transition: background-color 0.1s;
  cursor: pointer;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 4px;
  transform: scaleX(1) scaleY(1) perspective(1px);
  transition: background-color 0.1s, padding 0.15s, margin 0.15s;
  cubic-bezier(0.175, 0.885, 0.4, 1.1);


  &:hover {
    background-color: #eeeeee;
  }

`

const ActiveMenu = styled.div`
  font-size: 13px;
  display: flex;
  height: auto;
  min-width: 36px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
  position: relative;
  flex-direction: column;
  background: #FFF;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px rgba(34, 34, 34, 0.15) solid;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  max-width: 300px;
  z-index: 1;

`

const Sorts = styled.div`
text-align: left;
  flex-direction: column;
  border-radius: 12px;
  min-width: 36px;
  position: absolute;
  z-index: 1;
`
const SortingMethod = styled.a`
  font-size: 13px;
  text-align: left;
  float: left;
  min-width: auto;
  padding-up: 12px;
  padding-down: 12px;
  z-index: 1;
  &:hover {
    background: #eeeeee;
  }
`
const Header = styled.div`
  font-size: 26px;
  position: absolute;
  align-self: flex-start;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 15px;
  padding-right: 15px;
`
const Body = styled.div`
  position: relative;
`

var ReviewsList = (props) => {
  var sortingMenu = null;
  if (props.sort !== 'default') {
    var sort = props.sort;
  }
  var dropDownMenu = <DropdownMenu onClick={props.openSort}><b>Sort By: {sort}</b></DropdownMenu>;

  if (props.showSort) {

    dropDownMenu = <ActiveMenu><b>Sort By: {sort}</b>
    <SortingMethod onClick={props.sortByNew}>New</SortingMethod>
    <SortingMethod onClick={props.sortByBest}>Best</SortingMethod></ActiveMenu>
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
  <Container id="reviewsSection">
    <Header>{props.reviewCount} item reviews {stars}</Header>
    <br/>
    <Sorting>
      {dropDownMenu}
    </Sorting>
    <Body>
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
    </Body>
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