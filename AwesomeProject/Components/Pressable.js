// Modern alternative to TouchableOpacity for handling multiple press states.

import { Pressable, Text } from 'react-native';

export default function PressableControl() {
  return (
    <Pressable
      onPress={() => alert('Pressed!')}
      style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'blue' }, { padding: 10 }]}
    >
      <Text style={{ color: 'white' }}>Pressable Button</Text>
    </Pressable>
  );
}
