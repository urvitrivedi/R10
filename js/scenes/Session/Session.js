import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { goToSpeaker, goBack } from '../../lib/navigationHelpers';
import Moment from 'moment';
import Separator from '../../components/Separator/';
// import CTA from '../../components/CTA/';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { createFave, deleteFave } from '../../config/models.js';

import { styles } from './styles.js';

const Session = ({ sessionData, speakerData, navigatorUID }) => {
  // const { session_id } = sessionData;
  const faveId = sessionData.session_id;
  console.log(sessionData);
  console.log(speakerData);
  console.log(navigatorUID);

  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.subHeader}>{sessionData.location}</Text>
        {sessionData.faveToggle ? (
          <Icon
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            size={17}
            style={styles.heart}
          />
        ) : (
          <Text />
        )}
      </View>
      <View>
        <Text style={styles.header}>{sessionData.title}</Text>
      </View>
      <View>
        <Text style={styles.time}>
          {Moment.unix(sessionData.start_time).format('h:mm A')}
        </Text>
      </View>
      <View>
        <Text style={styles.fonts}>{sessionData.description}</Text>
      </View>
      {speakerData ? (
        <View>
          <Text style={styles.subHeader}>Presented by:</Text>
          <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
            <View style={styles.speaker}>
              <Image style={styles.image} source={{ uri: speakerData.image }} />
              <Text style={styles.speakerFont}>{speakerData.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
      <Separator />
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={styles.button}
      >
        {sessionData.faveToggle ? (
          <Text
            onPress={() => {
              deleteFave(faveId);
              goBack(navigatorUID);
            }}
            style={styles.buttonText}
          >
            Remove from Faves
          </Text>
        ) : (
          <Text
            onPress={() => {
              createFave(faveId);
              goBack(navigatorUID);
            }}
            style={styles.buttonText}
          >
            Add to Faves
          </Text>
        )}
      </LinearGradient>
    </View>
  );
};

export default Session;
