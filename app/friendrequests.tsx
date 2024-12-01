import FriendRequest from '@/components/friend requests page/FriendRequest';
import { Image, Text, View, StyleSheet } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

export default function FriendRequests() {

  const friendRequests = [
     { id: 1, name: 'Alice Johnson' },
     { id: 2, name: 'Bob Smith' },
     { id: 3, name: 'Charlie Brown' },
     { id: 4, name: 'Dana White' },
  ];

  return (
  <View style={styles.container}>
    <Rectangle/>
    <FriendRequest/>
    <FriendRequest/>
    <FriendRequest/>
    <FriendRequest/>
    <FriendRequest/>
    <FriendRequest/>
    <Text style={styles.friendslabel}>Friend Requests</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    color: "blue"
  },
  rectangle: {
    width: '100%',
    height: '16%',
    backgroundColor: '#00487C',
    position: 'absolute',
    top: 0,
    left: 0
  },
  text: {
    color: '#fff',
  },
  smallText: {
    color: '#000000',
    fontSize: 10,
  },
  friendslabel: {
    position: 'absolute',
    top: "11%",
    left: "5%",
    color: 'white',
    fontSize: 25,
    fontFamily: 'Helvetica'
  },
  request: {

  }
});