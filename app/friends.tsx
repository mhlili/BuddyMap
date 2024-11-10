import { Text, View, StyleSheet } from 'react-native';
import NavBar from '@/components/NavBar';

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Friends screen</Text>
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
});