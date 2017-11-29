import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },

  header: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-start',
    margin: 5,
    fontFamily: 'Montserrat-Regular',
    color: 'black'
  },

  subHeader: {
    fontFamily: 'Montserrat-Regular',
    color: '#999999',
    margin: 5
  },

  time: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    backgroundColor: '#e6e6e6',
    padding: 10,
    paddingLeft: 15
  },

  heart: {
    position: 'absolute',
    right: 10,
    bottom: 4,
    color: '#cf392a'
  }
});
