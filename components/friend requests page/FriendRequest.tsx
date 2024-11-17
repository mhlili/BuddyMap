import { Image, View, StyleSheet, Text } from "react-native";

export default function FriendRequest() {

    return (
      <View style={styles.container}>
        <Image source={require('@/assets/images/imageicon.jpg')} style={styles.friendIcon}/>
        <Image source={require('@/assets/images/check-square.png')} style={styles.checkSquare}/>
        <Text style = {styles.text}>New Friend</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "10%",
      color: "#FFFFFF"
    },
    friendIcon: {
      width: 50, 
      height: 50,
    },
    checkSquare: {
      top: -60,
      left: "80%"
    },
    text: {
      color: '#00487C',
      fontSize: 25,
      position: 'absolute',
      top: 0,
      left: "20%"
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
    
  })