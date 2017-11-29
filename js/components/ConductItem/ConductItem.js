import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class ConductItem extends Component {
  constructor() {
    super();

    this.state = {
      display: false
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.titleContainer}>
            {this.state.display}
            <Text style={[styles.subheading, styles.title]}>
              {this.props.conductData.title}
            </Text>
          </View>
          <View>
            <Text style={styles.content}>
              {this.props.conductData.description}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ConductItem;
