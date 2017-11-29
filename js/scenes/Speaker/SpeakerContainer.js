import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Speaker from './Speaker';

export default class SpeakerContainer extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    StatusBar.setBarStyle('light-content');
    const navigatorUID = this.props.navigator.navigatorUID;
    return (
      <Speaker
        speakerData={this.props.speakerData}
        navigatorUID={navigatorUID}
      />
    );
  }
}

// const mapStateToProps = ({ speaker }) => ({
//   isLoading: speaker.isLoading,
//   speakerData: speaker.speakerData
// });

// export default connect(mapStateToProps)(SpeakerContainer);
