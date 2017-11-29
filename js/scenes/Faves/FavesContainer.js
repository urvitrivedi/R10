import React, { Component } from 'react';
import { connect } from 'react-redux';
import realm from '../../config/models.js';
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
import Faves from './Faves';

import { styles } from './styles.js';

class FavesContainer extends Component {
  constructor(props) {
    super(props);

    realm.addListener('change', () => {
      this.props.dispatch(fetchSessions());
      this.props.dispatch(fetchFaves());
    });
  }

  static route = {
    navigationBar: {
      title: 'Faves',
      backgroundColor: '#9963ea',
      tintColor: '#ffffff'
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchSessions());
    this.props.dispatch(fetchFaves());
  }

  render() {
    //console.log(this.props.sessionData);
    // console.log('isloading', this.props.conductData);
    StatusBar.setBarStyle('light-content');

    if (this.props.isLoading) {
      console.log('faves', this.props.sessionData);
      return (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} size="small" color="black" />
        </View>
      );
    } else {
      return (
        <Faves
          sessionData={this.props.sessionData}
          faveIds={this.props.faveIds}
        />
      );
    }
  }
}

const mapStateToProps = ({ faves }) => ({
  sessionData: faves.sessionData,
  faveIds: faves.faveIds,
  isLoading: faves.isLoading
});

export default connect(mapStateToProps)(FavesContainer);
