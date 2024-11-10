import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function MapScreen() {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map screen</Text>
      
      <Link href={{pathname: "./friends"}}style= {styles.button}>See friends</Link>
      <Link href={{pathname: "./profile"}}style= {styles.button}>Edit profile</Link>
    </View>
  );
}

//console.log(getNameTest);
const MapApp = () => (
  <APIProvider apiKey={'AIzaSyCucj_W_JnPNuhOGtDQQv_SAxd3IUWsz-c'}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
