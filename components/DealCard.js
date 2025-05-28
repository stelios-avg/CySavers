import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DealCard({ deal, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{deal.title}</Text>
      <Text style={styles.description}>{deal.description}</Text>
      <Text style={styles.meta}>{deal.location} • {deal.category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: '#555',
    fontSize: 14,
  },
  meta: {
    marginTop: 6,
    color: '#888',
    fontSize: 12,
  },
});
