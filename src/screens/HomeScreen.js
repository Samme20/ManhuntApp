//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
import stylesd from "../assets/stylesheets/Styles-dark";
import stylesl from "../assets/stylesheets/Styles-light";
import GeoLocator from "../scripts/GeoLocator";
import { HunterButton } from '../assets/buttons/Hunter';
import { HuntedButton } from '../assets/buttons/Hunted';
import { Settingsbtn } from '../assets/buttons/Settingsbtn';



// MAIN //
class HomeScreen extends Component {

	render() {
    return(
      <View style = { stylesd.body } >
        <StatusBar style="auto" />

        <View style={stylesd.topcontent}>
          <View style={stylesd.content1}>
          </View>
          <View style={stylesd.content2}>
            <Settingsbtn />
          </View>
        </View>

        <View style={stylesd.content1}>
          <Text style={stylesd.title}>Fugo</Text>
        </View>

        <View style={stylesd.mainButtons}>
          <HunterButton />
          <HuntedButton />
        </View>
      </View>
    ); 
  }
}

export default HomeScreen;