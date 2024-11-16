import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from '@/components/NavBar';
import MapView from '@/components/Map/Map'; 


export default function MapScreen() {  
  return (
    <View style={styles.container}>
      <MapView />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'flex-start',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
