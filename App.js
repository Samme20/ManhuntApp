import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Linking } from 'react-native';
import styles from "./Styles";
import React, { useState } from 'react';


export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.title}>WorldScape</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



