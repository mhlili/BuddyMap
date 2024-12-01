import { Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore';
import db  from '@/firebaseConfig'; 
import CustomButton from '@/components/CustomSmallButton';
import Musername from '@/components/Musername';
import Memail from '@/components/Memail';
import Mpassword from '@/components/Mpassword';
import NavBar from '@/components/NavBar';

export default function ProfileScreen() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'users'), {
        username: username,
        email: email,
        password: password
      });
      // Clear input fields or navigate to another screen
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar/>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />
      <Text style={styles.text}>Full Name</Text>
      <Text style={styles.text}>City, State</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title='Friends' onPress={()=>router.push('/friends')} width={200} height={35}></CustomButton>
        <CustomButton title='Settings' onPress={()=>router.push('/settings')} width={200} height={35}></CustomButton>
      </View>
      <View style={styles.textFields}>
        <Musername value={username} onChangeText={setUsername}></Musername>
        <Memail value={email} onChangeText={setEmail}></Memail>
        <Mpassword value={password} onChangeText={setPassword}></Mpassword>
      </View>
      <View style={styles.submitButton}>
        <CustomButton title='Submit' onPress={handleSubmit} width={250} height={35}></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontFamily: 'Helvetica'
  },
  image: {
    width: 250,
    height: 250,
    paddingBottom: 20,
    borderRadius: 200
  },
  textFields: {
    width: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  submitButton: {
    alignItems: 'stretch'
  }
});
