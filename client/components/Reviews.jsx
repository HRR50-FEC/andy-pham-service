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
  width: 535.5px;
  height: 175.5px;
  margin-right: 48px;
`

const TextContainer = styled.div`
  width: 535.5px;
  padding-right: 30px;
`

const HiddenText = styled.div`
  font-size: 16px;
  height: 72px;
  width: 505.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Text = styled.div`
  font-size: 16px;
  height: 72px;
  width: 505.5px;
  margin-right: 48px;
  white-space: normal;
  position: absolute;
`

const Ellipsis = styled.img`
  object-size: fill;
  margin-left: 505.5px;
  position: relative;
  align-self: center;
  right: -20px;
  float: right;
  width: 36px;
  height: 21px;
  z-index: 1;
  background-color: white;
  border: none;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
    border-radius: 50%;
  }
`

const Username = styled.a`
  &:link :visited :active{
    color: rgb(89, 89, 89);
  }
  cursor: pointer;
`

const Header = styled.div`
  text-align: left;
`

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    if (this.props.body.length < 100) {
      this.showText();
    }
  }

  showText() {
    this.setState({
      hidden: false
    })
  }

  render() {
    var image = null;
    var color = null;
    var ellipsis = null;
    var stars = '★'.repeat(this.props.stars);
    if (stars.length < 5) {
      stars += '☆'.repeat(5 - this.props.stars);
    }
    if (this.props.imageUrl !== null) {
      image = <Image src={this.props.imageUrl}/>
    }
    if (this.props.color !== null) {
      color = `Color: ${this.props.color}`;
    }
    if (this.props.body.length > 100) {
      ellipsis = <Ellipsis src='https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Props/41104-200.png' onClick={this.showText.bind(this)}></Ellipsis>
    }
    if (this.state.hidden) {
      return (
        <div>
        <FlexHeader>
          <div><DP src={this.props.userDP}></DP></div>
          <Header><p><Username href={this.props.userDP}>{this.props.username}</Username>    {moment(this.props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</p></Header>
        </FlexHeader>
        <FlexBody>
          <Body>
          <div>{stars}</div>
          <div>{color}</div>
            <TextContainer>
              <HiddenText>
                {this.props.body}
              </HiddenText>
              {ellipsis}
            </TextContainer>

          </Body>
          <div>{image}</div>
        </FlexBody>
      </div>
      )
    } else {
      return (
        <div>
        <FlexHeader>
          <div><DP src={this.props.userDP}></DP></div>
          <Header><p><Username href={this.props.userDP}>{this.props.username}</Username>    {moment(this.props.date, 'YYYY-MM-D').format("MMM Do YYYY")}</p></Header>
        </FlexHeader>
        <FlexBody>
          <Body>
          <div>{stars}</div>
          <div>{color}</div>
          <TextContainer>
            <Text>{this.props.body}</Text>
            </TextContainer>
          </Body>
          <div>{image}</div>
        </FlexBody>
      </div>
      )
    }
  }
}

export default Reviews;