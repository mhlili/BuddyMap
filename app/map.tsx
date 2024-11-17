import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
// import { SearchBar } from '@rneui/themed';

// import MapView from '@/components/Map/Map'; 


export default function MapScreen() {  
  return (
    <View style={styles.container}>
      {/* <MapView /> */}
      <SearchBar />
      <Image source={require('@/assets/images/Map.png')} style={styles.logo}/>
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
  logo: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
});
