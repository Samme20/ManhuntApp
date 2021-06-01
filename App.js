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

var lemon = "#EAE2B7";
var red = "#D62828";
var blue = "#003049";
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: lemon,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: lemon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: lemon,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: red,
    fontSize: 42,
    textTransform: 'uppercase',
  },
  text: {
    color: blue,
    fontSize: 30,
    margin: 10,
  },
  socialButton: {
    width: 100,
    height: 100,
  }
});
