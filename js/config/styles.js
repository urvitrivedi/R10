/**
 * Global Styles
 */

import { Platform } from 'react-native';

export const colors = {
  black: '#000000',
  nearBlack: '#111111',
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  offWhite: '#f1f1f1',
  white: '#ffffff',
  transluscentGrey: 'rgba(0,0,0,0.4)',
  transluscentWhite: 'rgba(255,255,255,0.8)'
};

export const typography = {
  baseSize: 16,
  fontMainLight: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat'
    },
    android: {
      fontMain: 'Montserrat-Regular' // for some reason, Android needs this
    }
  })
};

export const linearGradient = {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  alignSelf: 'stretch',
  height: '100%'
};
