import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import NavBar from '@/components/NavBar';
// import SearchBar from '@/components/SearchBar';
import MapView from 'react-native-maps';


export default function MapScreen() {  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
        {/* showing the search bar */}
        <View style={{ position: 'absolute', top: 10, width: '100%' }}>
          <TextInput
            style={{
              borderRadius: 10,
              margin: 10,
              color: '#000',
              borderColor: '#666',
              backgroundColor: '#FFF',
              borderWidth: 1,
              height: 45,
              paddingHorizontal: 10,
              fontSize: 18,
            }}
            placeholder={'Search'}
            placeholderTextColor={'#666'}
          />
        </View>
      {/* <SearchBar /> */}
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
