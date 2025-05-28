import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Αρχική' }} />
      <Tabs.Screen name="add" options={{ title: 'Καταχώριση' }} />
      <Tabs.Screen name="profile" options={{ title: 'Προφίλ' }} />
    </Tabs>
  );
}
