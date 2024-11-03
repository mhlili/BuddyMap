import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import db from '@/firebaseConfig';


export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map screen</Text>
      <Link href={{pathname: "./friends"}}style= {styles.button}>See friends</Link>
      <Link href={{pathname: "./profile"}}style= {styles.button}>Edit profile</Link>
    </View>
  );
}

//console.log(db);
console.log("hi");

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
