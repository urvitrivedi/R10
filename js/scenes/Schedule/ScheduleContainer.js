import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSessions } from '../../redux/modules/sessions';
import { fetchFaves } from '../../redux/modules/faves';
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Schedule from './Schedule';
import realm from '../../config/models';
import { styles } from './styles.js';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);

    realm.addListener('change', () => {
      this.props.dispatch(fetchSessions());
      this.props.dispatch(fetchFaves());
    });
  }

  static route = {
    navigationBar: {
      title: 'Schedule'
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchSessions());
    this.props.dispatch(fetchFaves());
  }

  render() {
    //console.log(this.props.sessionData);
    StatusBar.setBarStyle('light-content');
    if (this.props.isLoading) {
      return <ActivityIndicator animating={true} size="small" color="black" />;
    } else {
      return (
        <Schedule
          sessionData={this.props.sessionData}
          isLoading={this.props.isLoading}
        />
      );
    }
  }
}

const mapStateToProps = ({ sessions }) => ({
  sessionData: sessions.sessionData,
  isLoading: sessions.isLoading
});

export default connect(mapStateToProps)(ScheduleContainer);
