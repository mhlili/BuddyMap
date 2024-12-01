import { useRouter } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import CustomButton from "@/components/CustomSmallButton";

import Username from "@/components/Username";
import Password from "@/components/Password";
import Email from "@/components/Email";

export default function SignUpScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/BuddyMappingV2.jpg')} style={styles.logo}/>
            <Username/>
            <Email/>
            <Password/>
            <CustomButton title="Sign Up" onPress={()=>router.push('./')} width={250} height={35}></CustomButton>
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
    }
  })