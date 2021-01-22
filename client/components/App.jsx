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
      currentGroup: 0,
      groups: 0
    }
  }

  componentDidMount() {

    var makeGroups = (reviews) => {
      var reviewGroups = [];
      var reviewGroup = [];
      var count = 0;
      while (count < reviews.length) {
        reviews[count].body = this.parseNewLine(reviews[count].body);
        reviewGroup.push(reviews[count]);


        if (reviewGroup.length === 4 || count === reviews.length - 1) {
          reviewGroups.push(reviewGroup);
          reviewGroup = [];
          count++
        } else {
          count++;
        }
      }
      return reviewGroups;
    }

    requests.get('default', this.state.product, (data) => {
      var reviewData = [...data];
      var defaultData = makeGroups(reviewData);
      this.setState({
        default: defaultData,
        currentReviews: [...data.splice(0, 4)],
        groups: defaultData.length
      })
    })

    requests.get('new', this.state.product, (data) => {
      var reviewData = [...data];
      var newData = makeGroups(reviewData);
      this.setState({
        new: newData
      })
    })

    requests.get('best', this.state.product, (data) => {
      var reviewData = [...data];
      var bestData = makeGroups(reviewData);
      this.setState({
        best: bestData
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

  sortByNew() {
    this.setState({
      sort: 'new',
      currentReviews: this.state.new[0],
      currentGroup: 0
    })
  }

  sortByBest() {
    this.setState({
      sort: 'best',
      currentReviews: this.state.best[0],
      currentGroup: 0
    })
  }

  getPage(page) {
    var sort = this.state.sort;
    this.setState({
      currentReviews: this.state[sort][page],
      currentGroup: page
    })
  }

  parseNewLine(text) {
    return text.split('\n    ').join('\n');
  }

  render() {
    return(
      <div>
        <ReviewsList reviews={this.state.currentReviews} getNext={this.getNext.bind(this)}
        getPrevious={this.getPrevious.bind(this)}
        sort={this.state.sort}
        sortByNew={this.sortByNew.bind(this)}
        sortByBest={this.sortByNew.bind(this)}
        getPage={this.getPage.bind(this)}
        groups={this.state.groups}
        currentGroup={this.state.currentGroup}
        />
      </div>
    )
  }
};

export default App;