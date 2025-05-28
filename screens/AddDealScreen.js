import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import RNPickerSelect from 'react-native-picker-select';
import { auth } from '../services/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigation.replace('Login');
    }
  });
  return unsubscribe;
}, []); 



export default function AddDealScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [discount, setDiscount] = useState('');

  const handleSubmit = async () => {
    if (!title || !description || !category || !location || !discount) {
      Alert.alert('Σφάλμα', 'Συμπλήρωσε όλα τα πεδία.');
      return;
    }

    try {
      await addDoc(collection(db, 'deals'), {
        title,
        description,
        category,
        location,
        discount,
      });
      Alert.alert('Επιτυχία', 'Η προσφορά καταχωρήθηκε!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Σφάλμα', 'Κάτι πήγε λάθος.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Τίτλος Προσφοράς</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Περιγραφή</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Κατηγορία</Text>
      <RNPickerSelect
     onValueChange={setCategory}
     value={category}
     placeholder={{ label: 'Επέλεξε κατηγορία', value: null }}
     items={[
    { label: 'Σούπερ Μάρκετ', value: 'Supermarket' },
    { label: 'Καφετέριες', value: 'Cafes' },
    { label: 'Delivery', value: 'Delivery' },
    { label: 'Φούρνοι', value: 'Bakery' },
    { label: 'Ρούχα', value: 'Clothing' },
  ]}
/>

      <Text style={styles.label}>Περιοχή</Text>
<RNPickerSelect
  onValueChange={setLocation}
  value={location}
  placeholder={{ label: 'Επέλεξε περιοχή', value: null }}
  items={[
    { label: 'Λευκωσία', value: 'Λευκωσία' },
    { label: 'Λεμεσός', value: 'Λεμεσός' },
    { label: 'Λάρνακα', value: 'Λάρνακα' },
    { label: 'Πάφος', value: 'Πάφος' },
    { label: 'Αμμόχωστος', value: 'Αμμόχωστος' },
  ]}
/>


      <Text style={styles.label}>Έκπτωση</Text>
      <TextInput style={styles.input} value={discount} onChangeText={setDiscount} />

      <Button title="Υποβολή Προσφοράς" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  label: { marginTop: 12, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginTop: 4,
  },
});
