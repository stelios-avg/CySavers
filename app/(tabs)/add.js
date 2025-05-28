import { View, Text, Button, StyleSheet } from 'react-native';

export default function AddTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Καταχώριση νέας προσφοράς</Text>
      <Button title="Καταχώρισε τώρα" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22 },
});
