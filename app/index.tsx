import { Text, View, StyleSheet, Image } from "react-native";
import { Link, useRouter } from 'expo-router';
import Memail from "@/components/Memail";
import Mpassword from "@/components/Mpassword";
import CustomButton from "@/components/CustomSmallButton";
import { useState } from "react";
import { loginUser } from "@/firebaseAuth";

export default function Index() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errormessage, setErrorMessage] = useState<string>('');
  const router = useRouter();
  const handleLogIn = async () => {
    try {
      await loginUser(email,password);
      router.push('./map');
      setErrorMessage("");
    } catch (error) {
      console.error('Error logging in:', error);
      if (error instanceof Error){
        setErrorMessage(error.message);
      }
      
    }
}

  return (
    <View style={styles.container}>

        <Image source={require('@/assets/images/BuddyMappingV2.jpg')} style={styles.logo}/>
        <Memail value={email} onChangeText={setEmail}></Memail>
        <Mpassword value={password} onChangeText={setPassword}></Mpassword>
        <Link href={{ pathname: './forgotpassword' }}style={styles.smallTextRightAlign}>
          Forgot Password?
        </Link>
      <CustomButton title="Log In" onPress={handleLogIn} width={250} height={35}></CustomButton>
      <Text style={styles.error}>{errormessage}</Text>
      <Link href={{ pathname: './signup' }}style={styles.smallText}>
        Not a member? Sign up now
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  logo: {
    width: 217,
    height: 205,
    marginBottom: 20,
  },
  text: {
    color: '#000000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000',
  },
  smallText: {
    color: '#000000',
    fontSize: 10,
  },
  smallTextRightAlign: {
    color: '#000000',
    fontSize: 10,
    
  },
  error: {
    color:'red',
  },
})
