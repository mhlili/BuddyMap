import { Text, View, StyleSheet, Image } from "react-native";
import { Link, useRouter } from 'expo-router';
import Username from "@/components/Username";
import Password from "@/components/Password";
import CustomButton from "@/components/CustomSmallButton";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>

        <Image source={require('@/assets/images/BuddyMappingV2.jpg')} style={styles.logo}/>
        <Username/>
        <Password/>
        <Link href={{ pathname: './forgotpassword' }}style={styles.smallTextRightAlign}>
          Forgot Password?
        </Link>
      <CustomButton title="Log In" onPress={()=>router.push('./map')} width={250} height={35}></CustomButton>
      <Link href={{ pathname: './signup2' }}style={styles.smallText}>
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
})
