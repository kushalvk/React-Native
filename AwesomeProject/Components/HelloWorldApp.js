import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default function HelloWorldApp({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
}