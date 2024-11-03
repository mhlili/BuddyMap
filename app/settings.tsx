import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomSmallButton';

export default function SettingsScreen() {
    const router = useRouter();
    // TODO: Make log out go to the sign in page once created by FE Team
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings screen</Text>
      <CustomButton title="Log Out" onPress={()=>router.push('/map')}></CustomButton> 
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
});