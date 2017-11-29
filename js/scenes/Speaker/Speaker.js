import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CTA from '../../components/CTA/';
import { goBack } from '../../lib/navigationHelpers';
import { styles } from './styles.js';

const Speaker = ({ speakerData, navigatorUID }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => goBack(navigatorUID)}>
          <Icon
            name="ios-close"
            size={36}
            color="white"
            style={styles.backbutton}
          />
        </TouchableOpacity>
        <Text style={styles.aboutSpeaker}>About the Speaker</Text>
      </View>
      <View style={styles.speakerContainer}>
        <Image style={styles.speakerImg} source={{ uri: speakerData.image }} />
        <Text style={styles.name}>{speakerData.name}</Text>
        <Text style={styles.bio}>{speakerData.bio}</Text>
      </View>
      <View>
        <CTA
          text="Read More on Wikipedia"
          onPress={() =>
            Linking.openURL(speakerData.url).catch(
              err => ('An error occurred', err)
            )
          }
        />
      </View>
    </ScrollView>
  );
};

export default Speaker;
