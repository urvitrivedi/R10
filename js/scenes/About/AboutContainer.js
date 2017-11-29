import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchConduct } from '../../redux/modules/conduct';

import { About } from './About';

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About'
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchConduct());
    // fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // console.log('Hi there');
  }

  render() {
    return (
      <About
        conductData={this.props.conductData}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = ({ conduct }) => ({
  conductData: conduct.conductData,
  isLoading: conduct.isLoading
});

export default connect(mapStateToProps)(AboutContainer);
