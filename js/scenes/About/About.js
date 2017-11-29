import React, { Component } from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import { styles } from './styles';
import ConductItem from '../../components/ConductItem/index';

const About = ({ conductData, isLoading }) => {
  console.log('ConductData', conductData);
  return (
    <ScrollView style={{ flex: 1, padding: 12 }}>
      <View style={styles.aboutHolder}>
        <View style={styles.border}>
          <Text style={styles.title}>
            {'<'} R10 {'>'}
          </Text>
        </View>
        <Text style={styles.aboutParagraph}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.secondTitle}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.secondTitle}>Code of Conduct</Text>

        {/* {conductData.map((code, i) => (
          <View>
            <Text>{code.title}</Text>
          </View>
        ))} */}
        <View>
          {conductData.map(item => {
            return <ConductItem conductData={item} key={item.title} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export { About };
