import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

const FlexHeader = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: flex-start;
`
const FlexBody = styled.div`
  display: flex;
  padding-left: 48px;
  align-items: flex-start;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: fill;
  align-self: flex-end;
  margin-left: 48px;
`
const DP = styled.img`
  width: 75px;
  height: 75px;
  object-fit: fill;
`


var Reviews = (props) => {
  if (props.imageUrl !== null && props.userDP !== null) {
    return (
      <div>
    <FlexHeader>
      <div><DP src={props.userDP}></DP></div>
      <div>{props.username}</div>
      <div>{moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</div>
    </FlexHeader>
    <FlexBody>
      <div>{props.stars}</div>

      <div>{props.color}</div>
      <div>{props.body}</div>
      <div><Image src={props.imageUrl}/></div>
    </FlexBody>
    </div>
    )
  }
  if (props.imageUrl === null && props.userDP !== null) {
    return (
      <div>
      <FlexHeader>
      <div><DP src={props.userDP} /></div>
      <div>{props.username}</div>
      <div>{moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</div>
    </FlexHeader>
    <FlexBody>
      <div>{props.stars}</div>

      <div>{props.color}</div>
      <div>{props.body}</div>
    </FlexBody>
    </div>
      )
  } else {
    return (
      <div>
      <FlexHeader>
      <div>{props.username}</div>
      <div>{moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</div>
    </FlexHeader>
    <FlexBody>
      <div>{props.stars}</div>

      <div>{props.color}</div>
      <div>{props.body}</div>
    </FlexBody>
    </div>
      )
  }
}

export default Reviews;