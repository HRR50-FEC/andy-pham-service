import React from 'react';
import requests from './requests.js';
import ReviewsList from './reviewslist.jsx';
import Moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'default',
      product: 1,
      default: [],
      new: [],
      best: [],
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
      var defaultData = makeGroups(reviewData);
      this.setState({
        default: defaultData,
        currentReviews: [...data.splice(0, 4)],
      })
    })
    requests.get('new', this.state.product, (data) => {
      var reviewData = [...data];
      reviewData = makeGroups(reviewData);
      this.setState({
        new: reviewData
      })
    })
  };

  getNext(sort) {
    if (this.state.currentGroup + 1 === this.state[sort].length) {
      this.setState({
        currentReviews: this.state[sort][0],
        currentGroup: 0
      })
    } else {
      this.setState({
        currentReviews: this.state[sort][this.state.currentGroup + 1],
        currentGroup: this.state.currentGroup + 1
      })
    }
  }

  getPrevious(sort) {
    if (this.state.currentGroup === 0) {
      this.setState({
        currentReviews: this.state[sort][this.state[sort].length - 1],
        currentGroup: this.state[sort].length - 1
      })
    } else {
      this.setState({
        currentReviews: this.state[sort][this.state.currentGroup - 1],
        currentGroup: this.state.currentGroup - 1
      })
    }
  }

  sortByNew(reviews) {
    //placeholder
    var newSorted = reviews;
    var sortNew = (array) => {
      if (array.length <= 1) {
        return array || [];
      }
      var left = [];
      var right = [];
      var middle = array[Math.floor(array.length / 2)];
      var middleDate = middle.date;
      // console.log(middleDate);
      // middleDate = middleDate.split('-');
      // console.log(middleDate);
      // middleDate = Number(middleDate.join(''));
      // console.log(middleDate);
      for (var i = 0; i < array.length; i++) {
        if (Number(array[i].date.split('-').join('')) <= middleDate) {
          left.push(array[i]);
        }
        if (Number(array[i].date.split('-').join('')) > middleDate) {
          right.push(array[i]);
        }

      }
      var result = sortNew(right).concat(middle, sortNew(left));
      return result;
    }

    newSorted = sortNew(newSorted);
    console.log(newSorted);
    return newSorted;
  }

  sortToNew() {
    console.log(this.state.new);
    this.setState({
      sort: 'new',
      currentReviews: this.state.new[0],
      currentGroup: 0
    })
  }

  sortByBest() {
    //placeholder
  }

  render() {
    return(
      <div>
        <ReviewsList reviews={this.state.currentReviews} getNext={this.getNext.bind(this)}
        getPrevious={this.getPrevious.bind(this)}
        sort={this.state.sort}
        sortToNew={this.sortToNew.bind(this)}
        />
      </div>
    )
  }
};

export default App;