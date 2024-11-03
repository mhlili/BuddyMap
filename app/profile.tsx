import { Text, View, StyleSheet, Image, Button } from 'react-native';
import TextField from '@/components/TextInput';
import CustomButton from '@/components/CustomSmallButton'
import { useState } from 'react';
import { useRouter } from 'expo-router'

export default function ProfileScreen() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />
      <Text style={styles.text}>Full Name</Text>
      <Text style={styles.text}>City, State</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title='Friends' onPress={()=>router.push('/friends')}></CustomButton>
        <CustomButton title='Settings' onPress={()=>router.push('/settings')}></CustomButton>
      </View>
      <TextField label="Username" value={username} onChangeText={(text) => setUsername(text)} placeholder='Username'></TextField>
      <TextField label="Email" value={email} onChangeText={(text) => setEmail(text)} placeholder='Email'></TextField>
      <TextField label="Password" value={password} onChangeText={(text) => setPassword(text)} placeholder='Password' secureTextEntry={true}></TextField>
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop:5
  }
});