// A simple button with title and press action.

import { Button } from 'react-native';

export default function ButtonControle() {
  return <Button title="Click Me" onPress={() => alert('Button Pressed')} />;
}
