import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import NavBar from '@/components/NavBar';

export default function MapScreen() {  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map screen</Text>
      
      <Link href={{pathname: "./friends"}}style= {styles.button}>See friends</Link>
      <Link href={{pathname: "./profile"}}style= {styles.button}>Edit profile</Link>
      <NavBar/>
    </View>
  );
}


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
