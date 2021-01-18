import React from 'react';
import requests from './requests.js';
import ReviewsList from './reviewslist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'default',
      product: 1,
      reviews: []
    }
  }

  componentDidMount() {
    requests.get(this.state.sort, this.state.product, (data) => {
      this.setState({
        reviews: [...data]
      })
    })
  };

  render() {
    return(
      <div>
        <ReviewsList reviews={this.state.reviews} />
      </div>
    )
  }
};

export default App;