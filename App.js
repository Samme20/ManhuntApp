import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Linking, TextInput } from 'react-native';
import styles from "./Styles";
import React, { useState } from 'react';


export default function App() {



  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
 
      <View style={styles.content1}>
        <Text style={styles.title}>WorldScape</Text>
        <Text style={styles.text}></Text>
      </View>

      <View style={styles.huntedButtons}>
        <Button style={styles.hButton} title={'Hunted'}></Button>
        <Button style={styles.hButton} title={'Hunter'}></Button>
      </View>
      
    </View>
  );
}