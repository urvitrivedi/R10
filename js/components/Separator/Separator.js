import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1.5,
    borderColor: '#e6e6e6'
  }
});

export default Separator;
