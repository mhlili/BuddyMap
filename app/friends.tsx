import FriendBar from '@/components/friends page/FriendBar';
import { Link, useRouter } from 'expo-router';
import { Text, View, StyleSheet, Image, Pressable, Dimensions,  } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

import NavBar from '@/components/NavBar';

export default function FriendsScreen() {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <Rectangle/>
      <Pressable onPress={()=>router.push('./friendrequests')}>
        <Image 
        source={require('@/assets/images/friend-requests-icon.png')} 
        style={styles.friendrequests}/>
      </Pressable>
      <Pressable onPress={()=>router.push('./addfriends')}>
        <Image 
        source={require('@/assets/images/plus.png')} 
        style={styles.plus}
        />
      </Pressable>
      <Text style={styles.friendslabel}>Friends</Text>
      <View style={styles.friendBarContainer}>
        <FriendBar />
        <FriendBar />
        <FriendBar />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  friendslabel: {
    position: 'absolute',
    top: "11%",
    left: "5%",
    color: 'white',
    fontSize: 25,
    fontFamily: 'Helvetica'
  },
  friendrequests: {
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.03,
    width: width * 0.08,
    height: width * 0.08,
    zIndex: 2,
  },
  plus: {
    position: 'absolute',
    top: height * 0.03,
    right: width * 0.03,
    width: width * 0.08,
    height: width * 0.08,
    zIndex: 2,
  },
  rectangle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00487C',
    zIndex: 0,
    height: "16%"
  },
  text: {
    color: '#00487C',
    fontSize: 50,
    marginTop: '20%',
    alignSelf: 'center'
  },
  smallText: {
    color: '#000000',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center'
  },
  friendBarContainer: {
    marginTop: height * 0.15,
  }
});