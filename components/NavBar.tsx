import React from 'react';
import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function NavBar() {
    return (
        <View style={styles.container}>

          <Link href={{pathname: "./map"}}style= {styles.button}>
          <Ionicons name="navigate" size={28} color="#fff" />
          </Link>
          <Link href={{pathname: "./friends"}}style= {styles.button}>
          <Ionicons name="people" size={28} color="#fff" />
          </Link>
          <Link href={{pathname: "./profile"}}style= {styles.button}>
          <Ionicons name="person-circle" size={28} color="#fff" />
          </Link>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',      
        bottom: 0,                 
        width: '100%',       
        height: 60,        
        backgroundColor: '#32CD32',
        flexDirection: 'row',      
        justifyContent: 'space-around', 
        alignItems: 'center'
        //paddingVertical: 10,  
    },
    button: {
        alignItems: 'center',  
    },
  });