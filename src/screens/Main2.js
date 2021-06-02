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
import { Settingsbtn } from '../assets/buttons/Settingsbtn';

// MAIN //
class Main2 extends Component {

	render() {
    return(
      
      <View style = { styles.body } >
        <StatusBar style="auto" />
        <View style={styles.content1}>
          <Settingsbtn/>
          </View>
        <View style={styles.content1}>
          <Text style={styles.title}>WUBALAUB</Text>
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

export default Main2;