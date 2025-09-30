// Input field for user text.

import { TextInput } from 'react-native';

export default function TextInputControle() {
  return (
    <TextInput
      style={{ borderWidth: 1, padding: 10, margin: 10 }}
      placeholder="Enter your name"
    />
  );
}
