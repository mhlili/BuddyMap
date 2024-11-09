import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";


export default function Username() {
    const[text, setText] = useState("")
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>Enter email</Text>
        <TextInput 
        style = {styles.input}
        placeholder="Email address"
        onChangeText={newText=>setText(newText)}
        defaultValue={text}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
    },
    input: {
      borderWidth: 2,
      borderColor: '#111',
      borderStyle: 'solid',
      width: 250,
      height: 40,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
    },
    text: {
      color: '#111',
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  })