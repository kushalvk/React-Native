// Ensures content doesn’t overlap with notches/status bars.

import { SafeAreaView, Text } from 'react-native';

export default function SafeAreaViewControle() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Inside SafeAreaView</Text>
    </SafeAreaView>
  );
}
