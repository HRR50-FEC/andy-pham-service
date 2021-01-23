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
`

const ActivePage = styled.button`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  width: 36px;
  height: 42px;
  background:
`

const Ellipsis = styled.div`
  font-size: 14px;
  line-height: 1.4;
  margin-right: 6px;
  width: 36px;
  height: 42px;
`

const LeftArrow = styled.button`
  background-image: url(https://cdn.iconscout.com/icon/free/png-256/left-arrow-1965039-1660432.png);
  background-size: contain;
  margin-right: 6px;
  width: 36px;
  height: 42px;
`

const RightArrow = styled.button`
  background-image: url(https://www.clipartmax.com/png/middle/52-527143_arrow-clipart-transparent-background-right-arrow-icon.png);
  background-size: contain;
  margin-right: 6px;
  width: 36px;
  height: 42px;
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
    console.log(number);
    if (number === 1) {
      if (props.currentGroup === 0) {
        return (<Page key={number}>{number}</Page>)
      } else {
        return (<Page key={number} onClick={() => {props.getPage(number)}} >{number}</Page>)
      }
    }
    if (number === 2) {
      if (props.groups > 2) {
        if (props.currentGroup === 1) {
          return (<Page key={number}>{number}</Page>)
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
          return (<Page key={number}>{number}</Page>)
        }
        if (number !== props.currentGroup + 1) {
          return (<Page key={number} onClick={() => {
            props.getPage(number)}} >{number}</Page>)
        }
      }

      if (number === props.groups - 1) {
        if (number === props.currentGroup + 1) {
          return (<Page key={number}>{number}</Page>)
        }
        if (props.groups === props.currentGroup + 1) {
          return (<Page key={number} onClick={() => {
            props.getPage(number)}} >{number}</Page>)
          }
        }

      if (props.currentGroup + 1 < props.groups - 1) {
        if (number === props.currentGroup + 1) {
          return (<Page key={number}>{number}</Page>)
        }
        if (props.currentGroup === 0 && number === 3) {
          return (<Ellipsis>...</Ellipsis>)
        }
        if (number === props.currentGroup || number === props.currentGroup + 2) {
          return (<Ellipsis>...</Ellipsis>)
        }
      }
      if (props.currentGroup + 1 === props.groups || props.currentGroup + 1 === props.groups - 1) {
        if (number === props.groups - 2) {
          return (<Ellipsis>...</Ellipsis>)
        }
      }
    }
  })

  return (
    <Nav>
        <LeftArrow onClick={() => {props.getPrevious()}} />
        {pages}
        <RightArrow onClick={props.getNext} />
    </Nav>
  )
}

export default Pagination;