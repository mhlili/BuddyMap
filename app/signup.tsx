import { useRouter } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomSmallButton";
import Username from "@/components/username";
import Password from "@/components/Password";
import Email from "@/components/Email";

export default function SignUpScreen() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const [errormessage, setErrorMessage] = useState<string>('');
    const handleSignUp = async () => {
      try {
        await registerUser(email,password);
        router.push('./map');
      } catch (error) {
        console.error('Error signing up:', error);
        if (error instanceof Error){
          setErrorMessage(error.message);
        }
        
      }
  }

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/BuddyMappingV2.jpg')} style={styles.logo}/>
            <Musername value={username} onChangeText={setUsername}></Musername>
            <Memail value={email} onChangeText={setEmail}></Memail>
            <Mpassword value={password} onChangeText={setPassword}></Mpassword>
            <CustomButton title='Sign Up' onPress={handleSignUp} width={250} height={35}></CustomButton>
            <Text style={styles.error}>{errormessage}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'left',
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