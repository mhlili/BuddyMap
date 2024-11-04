import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function CustomButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00487C', // Customize background color
    width: 250,
    height: 35,
    borderRadius: 8,
    margin:5
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
})