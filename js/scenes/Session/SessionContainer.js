import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpeaker } from '../../redux/modules/speaker';
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import realm from '../../config/models.js';
import { fetchFaves } from '../../redux/modules/faves';
import { fetchSessions } from '../../redux/modules/sessions';
import Session from './Session';

class SessionContainer extends Component {
  constructor(props) {
    super(props);

    realm.addListener('change', () => {
      this.props.dispatch(fetchSessions());
      this.props.dispatch(fetchFaves());
    });
  }

  static route = {
    navigationBar: {
      title: 'Session'
    }
  };

  componentWillMount() {
    // console.log(this.props.sessionData.speaker);
    this.props.dispatch(fetchSpeaker(this.props.sessionData.speaker));
    this.props.dispatch(fetchSessions());
  }

  render() {
    StatusBar.setBarStyle('light-content');

    const { sessionData, speakerData } = this.props;
    const navigatorUID = this.props.navigator.navigatorUID;

    if (this.props.isLoading) {
      return <ActivityIndicator animating={true} size="small" color="black" />;
    } else {
      return (
        <Session
          sessionData={sessionData}
          speakerData={speakerData}
          navigatorUID={navigatorUID}
        />
      );
    }
  }
}

const mapStateToProps = ({ speaker }) => ({
  isLoading: speaker.isLoading,
  speakerData: speaker.speakerData
  // faveIds: speaker.faveIds
});

export default connect(mapStateToProps)(SessionContainer);
