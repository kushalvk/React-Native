// Open URLs or other apps.

import { Linking, Button } from 'react-native';

export default function LinkingControle() {
  return <Button title="Open Google" onPress={() => Linking.openURL('https://google.com')} />;
}
