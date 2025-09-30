// Efficient list rendering for long data (better than ScrollView).

import { FlatList, Text } from 'react-native';

const data = [{ id: '1', name: 'Apple' }, { id: '2', name: 'Mango' }];

export default function FlatListControle() {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item.name}</Text>}
    />
  );
}
