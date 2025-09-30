// A toggle switch (ON/OFF).

import { Switch, View } from 'react-native';
import { useState } from 'react';

export default function SwitchControl() {
  const [isOn, setIsOn] = useState(false);
  return (
    <View>
      <Switch value={isOn} onValueChange={setIsOn} />
    </View>
  );
}
