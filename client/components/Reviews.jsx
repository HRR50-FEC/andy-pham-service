import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

const Flex = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  object-fit: fill;
  justify-content: flex-end;
`
const DP = styled.img`
  width: 75px;
  height: 75px;
  object-fit: fill;
`


var Reviews = (props) => {
  if (props.imageUrl !== null && props.userDP !== null) {
    return (
    <Flex>
      <div>{props.username}</div>

      <div><DP src={props.userDP} /></div>

      <div>{props.stars}</div>
      <div><Image src={props.imageUrl}></Image></div>
      <div>{props.body}</div>

      <div>{moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</div>

      <div>{props.color}</div>

    </Flex>
    )
  }
  if (props.imageUrl === null && props.userDP !== null) {
    return (
      <Flex>
        <div>{props.username}</div>

        <div><DP src={props.userDP} /></div>

        <div>{props.stars}</div>

        <div>{props.body}</div>

        <div>{moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</div>

        <div>{props.color}</div>

      </Flex>
      )
  } else {
    return (
      <Flex>
        <div>{props.username}</div>

        <div>{props.stars}</div>

        <div>{props.body}</div>

        <div>{moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</div>

        <div>{props.color}</div>

      </Flex>
      )
  }
}

export default Reviews;