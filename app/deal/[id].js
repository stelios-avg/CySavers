import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DealDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Λεπτομέρειες προσφοράς με ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
