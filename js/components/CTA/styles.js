import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  cta: {
    width: Dimensions.get('window').width / 1.6,
    height: 50,
    margin: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  ctaText: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    backgroundColor: 'transparent'
  }
});
