import React from 'react';

var Reviews = (props) => (
  <div>
    {props.username}
    {props.stars}
    <image src={props.imageUrl}></image>
    {props.body}
    {props.date}
    {props.color}
  </div>
)

export default Reviews;