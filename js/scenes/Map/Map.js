import React from 'react';
import MapView from 'react-native-maps';
import { styles } from './styles';

const Map = () => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 43.643843,
        longitude: -79.397797,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221
      }}
    >
      <MapView.Marker
        coordinate={{ latitude: 43.643843, longitude: -79.397797 }}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  );
};

export default Map;
