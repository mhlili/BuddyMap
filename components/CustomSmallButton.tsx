import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function CustomButton({ title, onPress, width, height }: { title: string; onPress: () => void; width: number; height: number}) {
  return (
    <TouchableOpacity style={{
      backgroundColor: '#00487C', // Customize background color
      width: width || 250,
      height: height || 35,
      borderRadius: 8,
      margin:5}}
      onPress={onPress}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{
          color: '#FFFFFF', // Text color
          fontSize: (width + height) / 25,
          fontWeight: 'bold',
          textAlign: 'center',
          margin: 10
        }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // button: {
  //   backgroundColor: '#00487C', // Customize background color
  //   width: 250,
  //   height: 35,
  //   borderRadius: 8,
  //   margin:5
  // },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
})