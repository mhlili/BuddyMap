import { StyleSheet } from 'react-native';
import React from 'react';
import {Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View>
    <Text style={styles.title}>This is the home page</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom: 40,
    },
});
