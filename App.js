import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(1)

  const onClickHandler = () => {
    setNumber(2)
  }

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
      <Text style={styles.title}>WorldScape</Text>
      </View>
      <View style={styles.view2}>
      <Text style={styles.text}>Hello</Text>
      </View>
      <View style={styles.view3}>
      <Text style={styles.text}>3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EAE2B7',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#EAE2B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#EAE2B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#D62828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#D62828',
    fontSize: 42,
    textTransform: 'uppercase',
  },
  text: {
    color: '#003049',
    fontSize: 30,
    margin: 10,
  },
  socialButton: {
    width: 100,
    height: 100,
  }
});
