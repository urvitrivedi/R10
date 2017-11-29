import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SessionList from '../../components/SessionList';

const Schedule = ({ sessionData }) => {
  return (
    <View>
      <SessionList currentNavigatorUID={'schedule'} sessionData={sessionData} />
    </View>
  );
};

export default Schedule;
