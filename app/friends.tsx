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
  rectangle: {
    width: '100%',
    height: '18%',
    backgroundColor: '#00487C',
    position: 'absolute',
    top: 0,
    left: 0
  },
  text: {
    color: '#fff',
  },
});