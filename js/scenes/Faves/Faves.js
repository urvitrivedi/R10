import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SessionList from '../../components/SessionList';

const Faves = ({ sessionData, faveIds }) => {
  return (
    <View>
      <SessionList currentNavigatorUID={'faves'} sessionData={sessionData} />
    </View>
  );
};

export default Faves;
