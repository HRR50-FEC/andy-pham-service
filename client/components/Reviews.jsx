import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: fill;
`



var Reviews = (props) => {
  if (props.imageUrl !== null) {
    return (
    <Flex>
      {props.username}
      {props.stars}
      <Image src={props.imageUrl}></Image>
      {props.body}
      {moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}
      {props.color}
    </Flex>
    )
  } else {
    return (
      <Flex>
        {props.username}
        {props.stars}
        {props.body}
        {moment(props.date, 'YYYY-MM-D').format("MMM Do YYYY")}
        {props.color}
      </Flex>
      )
  }
}

export default Reviews;