import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";


export default function Username() {
    const[text, setText] = useState("")
    return (
      <View style={styles.container}>
        <TextInput 
        placeholder="Password"
        onChangeText={newText=>setText(newText)}
        defaultValue={text}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      
    },
    text: {
      color: '#fff',
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  })