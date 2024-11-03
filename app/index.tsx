import { Text, View, StyleSheet, Button, Alert, Pressable, GestureResponderEvent } from "react-native";
import { Link, useRouter } from 'expo-router';
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Username from "@/components/username";
import Password from "@/components/Password";
import CustomButton from "@/components/CustomSmallButton";

export default function Index() {
  const[text, setText] = useState("")
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Login Screen</Text>
      <Link href={{ pathname: './map' }}style={styles.button}>
        Forgot Password?
      </Link>
      <Link href={{ pathname: './map' }}style={styles.button}>
        Not a member? Sign up now
      </Link>
      <Username/>
      <Password/>
      <CustomButton title="Log In" onPress={()=>router.push('./map')}></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
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
