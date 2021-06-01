//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
import styles from "./Styles";
import GeoLocator from "./GeoLocator";
import { HunterButton } from './Hunter';
import { HuntedButton } from './Hunted';



// MAIN //
export default class App extends Component {

	render() {
    return(
      <View style = { styles.body } >
        <StatusBar style="auto" />

        <View style={styles.content1}>
          <Text style={styles.title}>WorldScape</Text>
        </View>

        <View style={styles.content1}>
          <GeoLocator />
        </View>

        <View style={styles.mainButtons}>
          <HunterButton/>
          <HuntedButton/>
        </View>
      </View>
    ); 
  }
}