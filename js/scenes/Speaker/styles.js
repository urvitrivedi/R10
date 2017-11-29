import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    width: '70%'
  },
  aboutSpeaker: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Montserrat-Regular',
    color: 'white'
  },
  backbutton: {
    marginLeft: 15
  },
  speakerImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  speakerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    padding: 20
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    marginBottom: 20
  },
  bio: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    lineHeight: 30
  }
});
