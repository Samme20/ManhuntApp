//Import React
import React, { Component } from "react";
import { View } from "react-native";

//Import Files
import stylesd from "../assets/stylesheets/Styles-darkold";
import GeoLocator from "../scripts/GeoLocator";

// MAIN //
class MapTest extends Component {
  render() {
    return (
      <View style={stylesd.body}>
        <GeoLocator />
      </View>
    );
  }
}

// STYLES FOR SCREEN

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

export default MapTest;
