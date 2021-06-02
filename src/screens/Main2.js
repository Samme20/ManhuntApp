//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
<<<<<<< HEAD
import stylesd from "../assets/stylesheets/Styles-dark";
import stylesl from "../assets/stylesheets/Styles-light";
import GeoLocator from "../scripts/GeoLocator";
import { HunterButton } from '../assets/buttons/Hunter';
import { HuntedButton } from '../assets/buttons/Hunted';
import { Settingsbtn } from '../assets/buttons/Settingsbtn';
=======
import styles from '../assets/stylesheets/Styles';
import MapAPI from "../scripts/MapAPI";

>>>>>>> main

// MAIN //
class Main2 extends Component {

	render() {
    return(
<<<<<<< HEAD
      
      <View style = { stylesd.body } >
        <StatusBar style="auto" />
        <View style={stylesd.content1}>
          <Settingsbtn/>
          </View>
        <View style={stylesd.content1}>
          <Text style={stylesd.title}>WUBALAUB</Text>
        </View>

        <View style={stylesd.content1}>
          <GeoLocator />
        </View>

        <View style={stylesd.mainButtons}>
          <HunterButton />
          <HuntedButton />
        </View>
=======
      <View style = { styles.body } >

        <View style={styles.content1}>
          <Text style={styles.title}>Google Map API test</Text>
        </View>

        <View style={styles.content1}>
          <MapAPI />
        </View>

>>>>>>> main
      </View>
    ); 
  }
}

export default Main2;