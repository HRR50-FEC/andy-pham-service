import React from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 810px;
  height: 48px;
  margin-bottom: 36px;
`


const Page = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  width: 36px;
  height: 42px;
  background-color: white;
  outline: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
    border-radius: 50%;
  }
`

const ActivePage = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  background-color: #eeeeee;
  width: 36px;
  height: 42px;
  outline: none;
  border-radius: 50%;
  cursor: default;
`

const Ellipsis = styled.div`
  font-size: 28px;
  line-height: 1.4;
  margin-right: 6px;
  width: 36px;
  height: 42px;
  text-align: center;
  border-radius: 50%;
`

const LeftArrow = styled.button`
  background-image: url(https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Props/left-arrow-1965039-1660432.webp);
  background-size: contain;
  margin-right: 6px;
  width: 36px;
  height: 42px;
  background-color: white;
  outline: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
    border-radius: 50%;
  }
`

const RightArrow = styled.button`
  background-image: url(https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Props/52-527143_arrow-clipart-transparent-background-right-arrow-icon.png);
  background-size: contain;
  margin-right: 6px;
  width: 36px;
  height: 42px;
  outline: none;
  background-color: white;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`

const BlockedLeftArrow = styled.button`
  background-image: url(https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Props/left-arrow-1965039-1660432.webp);
  background-size: contain;
  margin-right: 6px;
  width: 36px;
  background-color: white;
  outline: none;
  border-radius: 50%;
  height: 42px;
  cursor: not-allowed;
`

const BlockedRightArrow= styled.button`
  background-image: url(https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Props/52-527143_arrow-clipart-transparent-background-right-arrow-icon.png);
  background-size: contain;
  margin-right: 6px;
  width: 36px;
  background-color: white;
  height: 42px;
  outline: none;
  border-radius: 50%;
  cursor: not-allowed;
`

const Image = styled.img`
  width: 36px;
  height: 42px;
`

var Pagination = (props) => {
  var pageNumbers = [];
  for (var i = 1; i <= props.groups; i++) {
    pageNumbers.push(i);
  };

  var pages = pageNumbers.map((number) => {
    if (number === 1) {
      if (props.currentGroup === 0) {
        return (<ActivePage key={number}>{number}</ActivePage>)
      } else {
        return (<Page key={number} onClick={() => {props.getPage(number)}} >{number}</Page>)
      }
    }
    if (number === 2) {
      if (props.groups > 2) {
        if (props.currentGroup === 1) {
          return (<ActivePage key={number}>{number}</ActivePage>)
        }
        if (props.currentGroup === 0) {
          return (<Page key={number} onClick={() => {
            props.getPage(number)}} >{number}</Page>
          )}
        }
      }
    if (props.groups > 2) {
      if (number === props.groups) {
        if (number === props.currentGroup + 1) {
          return (<ActivePage key={number}>{number}</ActivePage>)
        }
        if (number !== props.currentGroup + 1) {
          return (<Page key={number} onClick={() => {
            props.getPage(number)}} >{number}</Page>)
        }
      }

      if (number === props.groups - 1) {
        if (number === props.currentGroup + 1) {
          return (<ActivePage key={number}>{number}</ActivePage>)
        }
        if (props.groups === props.currentGroup + 1) {
          return (<Page key={number} onClick={() => {
            props.getPage(number)}} >{number}</Page>)
          }
        }

      if (props.currentGroup + 1 < props.groups - 1) {
        if (number === props.currentGroup + 1) {
          return (<ActivePage key={number}>{number}</ActivePage>)
        }
        if (props.currentGroup === 0 && number === 3) {
          return (<Ellipsis key={number}>...</Ellipsis>)
        }
        if (number === props.currentGroup || number === props.currentGroup + 2) {
          return (<Ellipsis key={number}>...</Ellipsis>)
        }
      }
      if (props.currentGroup + 1 === props.groups || props.currentGroup + 1 === props.groups - 1) {
        if (number === props.groups - 2) {
          return (<Ellipsis key={number}>...</Ellipsis>)
        }
      }
    }
  })
  var left = <LeftArrow onClick={() => {props.getPrevious()}} />;
  var right = <RightArrow onClick={props.getNext} />;

  if (props.currentGroup === 0) {
    left = <BlockedLeftArrow />
  }
  if (props.currentGroup + 1 === props.groups) {
    right = <BlockedRightArrow />
  }
  return (
    <Nav>
        {left}
        {pages}
        {right}
    </Nav>
  )
}

export default Pagination;