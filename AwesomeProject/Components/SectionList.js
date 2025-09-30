// Like FlatList but supports grouped sections.

import { SectionList, Text } from 'react-native';

const DATA = [
  { title: 'Fruits', data: ['Apple', 'Banana'] },
  { title: 'Veggies', data: ['Carrot', 'Tomato'] },
];

export default function SectionListControle() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
      )}
    />
  );
}
