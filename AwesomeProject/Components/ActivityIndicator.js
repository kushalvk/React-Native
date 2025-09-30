// Loading spinner.

import { ActivityIndicator, View } from 'react-native';

export default function ActivityIndicatorControle() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}
