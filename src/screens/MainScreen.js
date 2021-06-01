//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
import styles from '../assets/stylesheets/Styles';
import GeoLocator from "../scripts/GeoLocator";
import { HunterButton } from '../assets/buttons/Hunter';
import { HuntedButton } from '../assets/buttons/Hunted';


// MAIN //
class MainScreen extends Component {

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
          <HunterButton />
          <HuntedButton />
        </View>
      </View>
    ); 
  }
}

export default MainScreen;