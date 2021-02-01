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
  min-width: 36px;
  height: 36px;
  color: rgb(34, 34, 34);
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background: rgba(34, 34, 34, 0.15);
    border-radius: 50%;
  }
`

const ActivePage = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  border-color: rgb(34, 34, 34);
  background: gray;
  min-width: 36px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 24px;
  cursor: default;
`

const Ellipsis = styled.div`
  font-size: 28px;
  line-height: 1.4;
  margin-right: 6px;
  width: 15;
  height: 36px;
  text-align: center;
  border-radius: 50%;
`

const LeftArrow = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  min-width: 36px;
  height: 36px;
  color: rgb(34, 34, 34);
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background: rgba(34, 34, 34, 0.15);
    border-radius: 50%;
  }
`

const RightArrow = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  min-width: 36px;
  height: 36px;
  color: rgb(34, 34, 34);
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background: rgba(34, 34, 34, 0.15);
    border-radius: 50%;
  }
`

const BlockedLeftArrow = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  min-width: 36px;
  height: 36px;
  color: gray;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: not-allowed;

  &:hover {
    background: rgba(34, 34, 34, 0.15);
    border-radius: 50%;
  }
`

const BlockedRightArrow= styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  min-width: 36px;
  height: 36px;
  color: gray;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.1s;
  cursor: not-allowed;

  &:hover {
    background: rgba(34, 34, 34, 0.15);
    border-radius: 50%;
  }
`

const Image = styled.img`
  min-width: 36px;
  min-height: 36px;
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
      if (props.groups === 2) {
        if (props.currentGroup === 1) {
          return (<ActivePage key={number}>{number}</ActivePage>)
        } else {
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
  var left = <LeftArrow onClick={() => {props.getPrevious()}} >←</LeftArrow>;
  var right = <RightArrow onClick={props.getNext}>→</RightArrow>;

  if (props.currentGroup === 0) {
    left = <BlockedLeftArrow>←</BlockedLeftArrow>
  }
  if (props.currentGroup + 1 === props.groups) {
    right = <BlockedRightArrow>→</BlockedRightArrow>
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