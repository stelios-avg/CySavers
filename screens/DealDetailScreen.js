import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DealDetailScreen({ route }) {
  const { deal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deal.title}</Text>
      <Text style={styles.description}>{deal.description}</Text>
      <Text style={styles.meta}>Κατηγορία: {deal.category}</Text>
      <Text style={styles.meta}>Περιοχή: {deal.location}</Text>
      <Text style={styles.discount}>Έκπτωση: {deal.discount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, marginBottom: 8 },
  meta: { color: '#777', fontSize: 14 },
  discount: { marginTop: 12, fontSize: 18, color: 'green', fontWeight: 'bold' },
});
