import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

const FlexHeader = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const FlexBody = styled.div`
  display: flex;
  padding-left: 48px;
  height: 244.5px;
  width: 762px;
`

const Image = styled.img`
  width: 178.5px;
  height: 178.5px;
  object-fit: fill;
  align-self: flex-end;
  margin-left: 48px;
`
const DP = styled.img`
  width: 36px;
  height: 36px;
  object-fit: fill;
  border-radius: 50%;
  margin-right: 12px;
`


var Reviews = (props) => {
  if (props.imageUrl !== null && props.userDP !== null) {
    return (
      <div>
    <FlexHeader>
      <div><DP src={props.userDP}></DP></div>
      <div><p>{props.username}    {moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</p></div>
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
  }
}

export default Reviews;