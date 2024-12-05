import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomSmallButton';
import { logoutUser } from '@/firebaseAuth';
import { useState } from 'react';

export default function SettingsScreen() {
    const router = useRouter();
    const [errormessage, setErrorMessage] = useState<string>('');
    const handleLogOut = async () => {
      try{
        await logoutUser();
        router.push('./')
      }
      catch (error) {
        console.error("Error signing out", error);
        if (error instanceof Error){
          setErrorMessage(error.message);
        }
      }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings screen</Text>
      <CustomButton title="Log Out" onPress={handleLogOut} width={250} height={35}></CustomButton> 
      <Text style={styles.error}>{errormessage}</Text>
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
  text: {
    color: '#fff',
  },
  error: {
    color:'red',
  },
});