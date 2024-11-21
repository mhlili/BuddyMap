import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 22.54992,
          longitude: 0,
          latitudeDelta: 40,
          longitudeDelta: 40,
        }}
        showsUserLocation={true}
        zoomEnabled={true}
        scrollEnabled={true}
        pitchEnabled={true}
      >
        {/* Example marker */}
        <Marker coordinate={{ latitude: 22.54992, longitude: 0 }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default App;