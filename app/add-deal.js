import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddDeal() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !description) {
      Alert.alert('Σφάλμα', 'Συμπλήρωσε όλα τα πεδία.');
      return;
    }

    Alert.alert('Επιτυχία', 'Η προσφορά καταχωρήθηκε!');
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Τίτλος" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Περιγραφή" value={description} onChangeText={setDescription} style={styles.input} />
      <Button title="Καταχώριση" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, fontSize: 16 },
});
