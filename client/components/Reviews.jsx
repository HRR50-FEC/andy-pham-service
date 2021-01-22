import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

const FlexHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-text: left;
`
const FlexBody = styled.div`
  display: flex;
  padding-left: 48px;
  height: 178.5px;
  width: 762px;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: space-between;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Image = styled.img`
  width: 178.5px;
  height: 178.5px;
  object-fit: fill;
  align-self: flex-end;
  margin-left: 48px;
  float: right;
  border: none;
`
const DP = styled.img`
  width: 36px;
  height: 36px;
  object-fit: fill;
  border-radius: 50%;
  margin-right: 12px;
`

const Body = styled.div`
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Header = styled.div`
  text-align: left;
`

var Reviews = (props) => {
    var image = null;
    var color = null;
    var stars = '★'.repeat(props.stars);
    if (stars.length < 5) {
      stars += '☆'.repeat(5 - props.stars);
    }
    if (props.imageUrl !== null) {
      image = <Image src={props.imageUrl}/>
    }
    if (props.color !== null) {
      color = `Color: ${props.color}`;
    }

    return (
      <div>
      <FlexHeader>
        <div><DP src={props.userDP}></DP></div>
        <Header><p><u>{props.username}</u>    {moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</p></Header>
      </FlexHeader>
      <FlexBody>
        <div>{stars}</div>

        <div>{color}</div>
        <Body>{props.body}</Body>
        <div>{image}</div>
      </FlexBody>
    </div>
    )
}

export default Reviews;