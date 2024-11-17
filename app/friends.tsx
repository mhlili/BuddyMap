import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friends screen</Text>
      <Rectangle/>
      <Link href={{ pathname: './friendrequests' }}style={styles.smallText}>
          Friend Requests
      </Link>
      <Link href={{ pathname: './addfriends' }}style={styles.smallText}>
          Add Friends
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: '100%',
    height: '18%',
    backgroundColor: '#00487C',
    position: 'absolute',
    top: 0,
    left: 0
  },
  text: {
    color: '#00487C',
    fontSize: 50
  },
  smallText: {
    color: '#000000',
    fontSize: 20,
  },
});