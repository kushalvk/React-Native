// Moves UI up when keyboard is open.

import { KeyboardAvoidingView, TextInput, Button } from 'react-native';

export default function KeyboardAvoidingViewControle() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput placeholder="Type here" style={{ borderWidth: 1, margin: 10 }} />
      <Button title="Submit" onPress={() => {}} />
    </KeyboardAvoidingView>
  );
}
