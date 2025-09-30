// Popup dialog (overlay).

import { Modal, View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function ModalControle() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is a Modal!</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
