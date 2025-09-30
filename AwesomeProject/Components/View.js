// Works like a <div> in HTML.
// Used as a container for other components.

import { View, Text } from 'react-native';

export default function ViewControle() {
  return (
    <View style={{ padding: 20, backgroundColor: 'lightblue' }}>
      <Text>This is inside a View</Text>
    </View>
  );
}
