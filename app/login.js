import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Κωδικός" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Σύνδεση" onPress={() => router.push('/')} />
      <Text onPress={() => router.push('/register')} style={styles.link}>Δεν έχεις λογαριασμό; Εγγραφή</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, fontSize: 16 },
  link: { marginTop: 20, color: 'blue', textAlign: 'center' },
});
