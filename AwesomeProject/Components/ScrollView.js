// Scrollable container for multiple child components.

import { ScrollView, StyleSheet, Text } from 'react-native';

export default function ScrollViewControle() {
  return (
    <ScrollView style={styles.view} nestedScrollEnabled={true}>
      {[...Array(20).keys()].map(i => (
        <Text key={i} style={{ fontSize: 20, margin: 5 }}>
          Item {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 200,
  },
});