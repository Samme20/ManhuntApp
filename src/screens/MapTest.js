//Import React
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

//Import Files
import GeoLocator from "../scripts/GeoLocator";

// MAIN //
class MapTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GeoLocator />
      </View>
    );
  }
}

// STYLES FOR SCREEN

//If dark
const ColorStyle = require('../assets/Json/darkStyle.json');

//if light
//const ColorStyle = require('../assets/Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: prusblue,
},
});

export default MapTest;
