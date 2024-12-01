import { router } from "expo-router";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";

export default function FriendBar() {

    return (
      <View style={styles.container}>
        <Image source={require('@/assets/images/imageicon.jpg')} style={styles.friendIcon}/>
        <Text style = {styles.text}>Friend Haha</Text>
        <Pressable onPress={() => router.push('./map')}>
            <Image source={require('@/assets/images/mapicon.png')} style={styles.rightIcon}/>
        </Pressable>
        <Pressable onPress={() => router.push('./map')}>
            <Image source={require('@/assets/images/messageicon.png')} style={styles.rightIcon}/>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5
    },
    friendIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    text: {
        flex: 1,
        marginLeft: 10,
        color: '#00487C',
        fontSize: 20,
        fontFamily: 'Helvetica'
    },
    rightIcon: {
        width: 40,
        height: 40
    }
    
  })