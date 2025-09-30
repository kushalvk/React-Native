// Controls the status bar appearance.

import { StatusBar, View, Text } from 'react-native';

export default function StatusBarControle() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="dark-content" backgroundColor="lightblue" />
      <Text>StatusBar Example</Text>
    </View>
  );
}
