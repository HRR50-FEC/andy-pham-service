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
      var newData = this.sortByNew(reviewData);
      this.setState({
        default: defaultData,
        currentReviews: [...data.splice(0, 4)],
        new: newData
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
      var middleDate = Moment(middle.date, 'YYYY-MM-D').format('YYYYMMD');
      for (var i = 0; i < array.length; i++) {
        if (Moment(array[i].date, 'YYYY-MM-D').format('YYYYMMD') < middleDate) {
          left.push(array[i]);
        }
        if (Moment(array[i].date, 'YYYY-MM-D').format('YYYYMMD') > middleDate) {
          right.push(array[i]);
        }

      }
      var result = sortNew(left).concat(middle, sortNew(right));
      return result;
    }

    newSorted = sortNew(newSorted);
    return newSorted;
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
        sortByNew={this.sortByNew.bind(this)}
        />
      </div>
    )
  }
};

export default App;