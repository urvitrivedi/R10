import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '../../config/styles';

const CTA = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={['#9963ea', '#8797D6']}
        style={styles.cta}
      >
        <Text style={styles.ctaText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

CTA.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default CTA;
