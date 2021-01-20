import React from 'react';
import requests from './requests.js';
import ReviewsList from './reviewslist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'default',
      product: 1,
      reviews: [],
      newReviews: [],
      bestReviews: [],
      currentReviews: [],
      currentGroup: 0
    }
  }

  componentDidMount() {

    var makeGroups = (reviews) => {
      var reviewGroups = [];
      var reviewGroup = [];
      var count = 0;
      while (count < reviews.length) {
        reviewGroup.push(reviews[count]);

        if (reviewGroup.length < 4) {
          count++;
        } else if (reviewGroup.length === 4 || count === reviews.length - 1) {
          reviewGroups.push(reviewGroup);
          reviewGroup = [];
          count++;
        }
      }
      return reviewGroups;
    }

    requests.get(this.state.sort, this.state.product, (data) => {
      var reviewData = [...data];
      reviewData = makeGroups(reviewData);
      this.setState({
        reviews: reviewData,
        currentReviews: [...data.splice(0, 4)]
      })
    })
  };

  getNext() {
    if (this.state.currentGroup + 1 === this.state.reviews.length) {
      this.setState({
        currentReviews: this.state.reviews[0],
        currentGroup: 0
      })
    } else {
      this.setState({
        currentReviews: this.state.reviews[this.state.currentGroup + 1],
        currentGroup: this.state.currentGroup + 1
      })
    }
  }

  getPrevious() {
    if (this.state.currentGroup === 0) {
      this.setState({
        currentReviews: this.state.reviews[this.state.reviews.length - 1],
        currentGroup: this.state.reviews.length - 1
      })
    } else {
      this.setState({
        currentReviews: this.state.reviews[this.state.currentGroup - 1],
        currentGroup: this.state.currentGroup - 1
      })
    }
  }

  sortByNew() {
    //placeholder
  }

  sortByBest() {
    //placeholder
  }

  render() {
    return(
      <div>
        <ReviewsList reviews={this.state.currentReviews} getNext={this.getNext.bind(this)}
        getPrevious={this.getPrevious.bind(this)}
        />
      </div>
    )
  }
};

export default App;