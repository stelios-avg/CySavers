import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import DealCard from '../components/DealCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import RNPickerSelect from 'react-native-picker-select';

export default function HomeScreen({ navigation }) {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'deals'));
        const fetchedDeals = [];
        querySnapshot.forEach((doc) => {
          fetchedDeals.push({ id: doc.id, ...doc.data() });
        });
        setDeals(fetchedDeals);
      } catch (error) {
        console.error('Error fetching deals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  const filteredDeals = deals.filter(deal => {
    const categoryMatch = categoryFilter ? deal.category === categoryFilter : true;
    const locationMatch = locationFilter ? deal.location === locationFilter : true;
    return categoryMatch && locationMatch;
  });

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Προσφορές κοντά σου</Text>
      <Button
        title="Καταχώρησε Προσφορά"
        onPress={() => navigation.navigate('AddDeal')}
      />

      <Text style={styles.label}>Φίλτρο Κατηγορίας</Text>
      <RNPickerSelect
        onValueChange={setCategoryFilter}
        value={categoryFilter}
        placeholder={{ label: 'Όλες οι κατηγορίες', value: null }}
        items={[
          { label: 'Σούπερ Μάρκετ', value: 'Supermarket' },
          { label: 'Καφετέριες', value: 'Cafes' },
          { label: 'Delivery', value: 'Delivery' },
          { label: 'Φούρνοι', value: 'Bakery' },
          { label: 'Ρούχα', value: 'Clothing' },
        ]}
      />

      <Text style={styles.label}>Φίλτρο Περιοχής</Text>
      <RNPickerSelect
        onValueChange={setLocationFilter}
        value={locationFilter}
        placeholder={{ label: 'Όλες οι περιοχές', value: null }}
        items={[
          { label: 'Λευκωσία', value: 'Λευκωσία' },
          { label: 'Λεμεσός', value: 'Λεμεσός' },
          { label: 'Λάρνακα', value: 'Λάρνακα' },
          { label: 'Πάφος', value: 'Πάφος' },
          { label: 'Αμμόχωστος', value: 'Αμμόχωστος' },
        ]}
      />

      <FlatList
        data={filteredDeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DealCard
            deal={item}
            onPress={() => navigation.navigate('DealDetail', { deal: item })}
          />
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 20, textAlign: 'center' }}>Δεν υπάρχουν προσφορές με αυτά τα φίλτρα.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  label: { fontWeight: 'bold', marginTop: 12, fontSize: 16, color: '#333' },
});
