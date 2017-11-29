import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'flex-start',
    margin: 5,
    marginLeft: 20,
    marginRight: 15,
    marginTop: 15,
    fontFamily: 'Montserrat-Regular',
    color: 'black'
  },

  subHeader: {
    fontFamily: 'Montserrat-Regular',
    color: '#999999',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 15
  },

  time: {
    fontFamily: 'Montserrat-Regular',
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },

  fonts: {
    fontFamily: 'Montserrat-Light',
    color: 'black',
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 25
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    margin: 10
  },

  speaker: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  speakerFont: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    paddingLeft: 5,
    fontSize: 15
  },

  headerWrapper: {
    flexDirection: 'row'
  },

  heart: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#cf392a'
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10
  }
});
