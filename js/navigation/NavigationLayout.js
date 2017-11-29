import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from '@expo/ex-navigation';

import Router from './router.js';

import { colors, typography, linearGradient } from '../config/styles';
import LinearGradient from 'react-native-linear-gradient';

// const defaultRouteConfig = {
//   navigationBar: {
//     tintColor: '#ffffff',
//     backgroundColor: '#ffffff'
//   }
// };

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: 'Montserrat-Regular'
    },
    renderBackground: () => {
      return (
        <LinearGradient
          style={linearGradient}
          colors={['#9963ea', '#cf392a']}
          start={{ x: 0.5, y: 0.25 }}
          end={{ x: 0.0, y: 1.0 }}
        />
      );
    }
  }
};

export default class NavigationLayout extends Component {
  renderIcon(iconName, isSelected) {
    let color = isSelected ? '#ffffff' : '#999999'; // white and medium grey
    return <Icon name={iconName} size={24} color={color} />;
  }

  renderTitle(isSelected, title) {
    let color = isSelected ? '#ffffff' : '#999999'; // white and medium grey
    let titleStyle = {
      color: color,
      fontFamily: 'Montserrat-Regular',
      fontSize: 10
    };

    return <Text style={titleStyle}>{title}</Text>;
  }

  render() {
    return (
      <TabNavigation tabBarColor="#000000" initialTab="schedule">
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
        >
          <StackNavigation
            navigatorUID="schedule"
            style={styles.headerStyle}
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon('ios-information-circle', isSelected)
          }
        >
          <StackNavigation
            navigatorUID="about"
            style={styles.headerStyle}
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="map"
          title="Map"
          renderIcon={isSelected => this.renderIcon('ios-map', isSelected)}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export const styles = StyleSheet.create({
  headerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3
  }
});
