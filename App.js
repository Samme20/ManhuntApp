import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to</Text>
      <Text style={styles.title}>WorldScape</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE2B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#D62828',
    fontSize: 42,
  }
});
