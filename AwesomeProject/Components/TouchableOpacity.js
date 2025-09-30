// More customizable button, supports styling + animations.

import { TouchableOpacity, Text } from 'react-native';

export default function TouchableOpacityControle() {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
      onPress={() => alert('TouchableOpacity Pressed')}
    >
      <Text style={{ color: 'white' }}>Press Me</Text>
    </TouchableOpacity>
  );
}
