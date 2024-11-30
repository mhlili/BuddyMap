import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="map" options={{ title: 'Map' }} />
      <Stack.Screen name="friends" options={{ title: 'Friends' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      <Stack.Screen name="signup2" options={{title: 'Sign Up'}} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      <Stack.Screen name="forgotpassword" options={{ title: 'Forgot Password' }} />
    </Stack>
  );
}

