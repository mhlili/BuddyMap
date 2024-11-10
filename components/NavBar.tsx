import React, { useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { View, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function NavBar() {
    const [activeIcon, setActiveIcon] = useState("");
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        const path = segments[0];
        if (path === 'map') {
            setActiveIcon('map');
        } else if (path === 'friends') {
            setActiveIcon('friends');
        } else if (path === 'profile') {
            setActiveIcon('profile');
        } else {
            setActiveIcon("");
        }
    }, [segments]);

    return (
        <View style={styles.container}>
            <Pressable 
                onPress={() => {
                    router.push('/map');
                }} 
                style={styles.button}
            >
                <Ionicons
                    name={activeIcon === "map" ? "navigate" : "navigate-outline"}
                    size={28}
                    color={activeIcon === 'map' ? "#fff" : "#4BB3FD"}
                />
            </Pressable>

            <Pressable 
                onPress={() => {
                    router.push('/friends');
                }} 
                style={styles.button}
            >
                <Ionicons
                    name={activeIcon === 'friends' ? "people" : "people-outline"}
                    size={28}
                    color={activeIcon === 'friends' ? "#fff" : "#4BB3FD"}
                />
            </Pressable>
          
            <Pressable 
                onPress={() => {
                    router.push('/profile');
                }} 
                style={styles.button}
            >
                <Ionicons
                    name={activeIcon === 'profile' ? "person-circle" : "person-circle-outline"}
                    size={28}
                    color={activeIcon === 'profile' ? "#fff" : "#4BB3FD"}
                />
            </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',      
        bottom: 0,                 
        width: '100%',       
        height: 60,        
        backgroundColor: '#00487C',
        flexDirection: 'row',      
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',  
    },
  });