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
      New: [],
      Best: [],
      currentReviews: [],
      currentGroup: 0,
      groups: 0,
      showSort: false,
      average: 0,
      reviews: 0
    }
    this.openSort = this.openSort.bind(this);
    this.closeSort = this.closeSort.bind(this);
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
      this.getAverage(reviewData);
      var defaultData = makeGroups(reviewData);
      this.setState({
        default: defaultData,
        currentReviews: [...data.splice(0, 4)],
        groups: defaultData.length,
        reviews: reviewData.length
      })
    })

    requests.get('new', this.state.product, (data) => {
      var reviewData = [...data];
      var NewData = makeGroups(reviewData);
      this.setState({
        New: NewData
      })
    })

    requests.get('best', this.state.product, (data) => {
      var reviewData = [...data];
      var BestData = makeGroups(reviewData);
      this.setState({
        Best: BestData
      })
    })
  };

  getNext() {
    var sort = this.state.sort;
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

  getPrevious() {
    var sort = this.state.sort;
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
      sort: 'New',
      currentReviews: this.state.New[0],
      currentGroup: 0
    })
  }

  sortByBest() {
    this.setState({
      sort: 'Best',
      currentReviews: this.state.Best[0],
      currentGroup: 0
    })
  }

  getAverage(reviews) {
    var result = 0;
    for (var i = 0; i < reviews.length; i++) {
      result += reviews[i].stars;
    }
    result = result / reviews.length;
    this.setState({
      average: result
    })
  }

  getPage(page) {
    var sort = this.state.sort;
    this.setState({
      currentReviews: this.state[sort][page - 1],
      currentGroup: page - 1
    })
  }

  parseNewLine(text) {
    return text.split('\n    ').join('\n');
  }

  openSort(e) {
    e.preventDefault();
    this.setState({
      showSort: true
    });
  }

  closeSort() {
    if (this.state.showSort === true) {
      this.setState({
        showSort: false
      });
    };
  }

  render() {
    return(
      <div onClick={this.closeSort}>
        <ReviewsList reviews={this.state.currentReviews} getNext={this.getNext.bind(this)}
        getPrevious={this.getPrevious.bind(this)}
        sort={this.state.sort}
        sortByNew={this.sortByNew.bind(this)}
        sortByBest={this.sortByBest.bind(this)}
        getPage={this.getPage.bind(this)}
        groups={this.state.groups}
        currentGroup={this.state.currentGroup}
        showSort={this.state.showSort}
        openSort={this.openSort}
        closeSort={this.closeSort}
        averageStars={this.state.average}
        reviewCount={this.state.reviews}
        />
      </div>
    )
  }
};

export default App;