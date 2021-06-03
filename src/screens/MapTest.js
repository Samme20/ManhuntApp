//Import React
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
//Import Files
import stylesd from "../assets/stylesheets/Styles-dark";
import stylesl from "../assets/stylesheets/Styles-light";
import GeoLocator from "../scripts/GeoLocator";
import MapAPI from "../scripts/MapAPI";


// MAIN //
class MapTest extends Component {

	render() {
    return(
      <View style = { stylesd.body } >
        <StatusBar style="auto" />

        <View style={stylesd.content1}>
          <Text style={stylesd.title}>Google Map API test</Text>
        </View>

        <View style={stylesd.content1}>
          <GeoLocator />
        </View>

      </View>
    ); 
  }
}

export default MapTest;