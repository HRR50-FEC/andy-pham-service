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
  height: 72px;
  width: 535px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Ellipsis = styled.button`
  image: url('data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22 aria-hidden%3D%22true%22 focusable%3D%22false%22 style%3D%22display%3A inline-block%3B height%3A 24px%3B vertical-align%3A middle%3B%22%3E%3Ccircle cx%3D%2212.0%22 cy%3D%2212.001%22 r%3D%222.71%22%2F%3E%3Ccircle cy%3D%2212.001%22 cx%3D%224.0%22 r%3D%222.71%22%2F%3E%3Ccircle cx%3D%2220.0%22 cy%3D%2212.001%22 r%3D%222.71%22%2F%3E%3C%2Fsvg%3E');
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