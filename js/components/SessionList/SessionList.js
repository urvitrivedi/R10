import React from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  ItemSeparatorComponent,
  Platform
} from 'react-native';
import Moment from 'react-moment';
import 'moment-timezone';
import Separator from '../Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import { goToSession } from '../../lib/navigationHelpers';
import { styles } from './styles';

const SessionList = ({ currentNavigatorUID, sessionData }) => {
  //console.log(sessionData);
  return (
    <SectionList
      sections={sessionData}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => goToSession(currentNavigatorUID, item)}
          >
            <View style={styles.container}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.subHeader}>{item.location}</Text>
              <View>
                {item.faveToggle ? (
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
                    size={17}
                    style={styles.heart}
                  />
                ) : (
                  <Text />
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({ section }) => {
        return (
          <View>
            <Moment
              style={styles.time}
              format="h:mm A"
              element={Text}
              unix
              tz="America/Los_Angeles"
            >
              {section.title}
            </Moment>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item.session_id}
      stickySectionHeadersEnabled
    />
  );
};

export default SessionList;
