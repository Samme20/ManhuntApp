//Import React
import React, { Component } from 'react';
import { View, Text, Button, Switch, slider, StyleSheet } from 'react-native';
//Import Expo
import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/Entypo";
//Import Files
import stylesd from "../assets/stylesheets/Styles-dark";
import stylesl from "../assets/stylesheets/Styles-light";
import { Settingsbackbtn } from '../assets/buttons/Settingsbackbtn';

// MAIN //
class Settings extends Component {

	render() {
    return(
      <View style={styles.container}>
      <View style={styles.darkLightModeRow}>
        <Text style={styles.darkLightMode}>Dark/Light Mode</Text>
        <View style={styles.darkLightModeFiller}></View>
        <Switch style={styles.cupertinoSwitch}></Switch>
      </View>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}></View>
        <Text style={styles.settings}>Settings</Text>
        <Settingsbackbtn name="chevron-left" style={styles.icon}></Settingsbackbtn>
      </View>
    </View>
    ); 
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,48,73,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  darkLightMode: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 19,
    width: 162,
    fontSize: 20,
    marginTop: 2
  },
  darkLightModeFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cupertinoSwitch: {
    width: 45,
    height: 23
  },
  darkLightModeRow: {
    height: 23,
    flexDirection: "row",
    marginTop: 115,
    marginLeft: 11,
    marginRight: 31
  },
  rect1: {
    top: 41,
    height: 20,
    position: "absolute",
    backgroundColor: "rgba(0,48,73,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderTopWidth: 0,
    left: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    width: 413
  },
  settings: {
    top: 12,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 30,
    left: 2,
    right: 0,
    textAlign: "center"
  },
  icon: {
    top: 0,
    left: 13,
    position: "absolute",
    color: "rgba(247,127,0,1)",
    fontSize: 61
  },
  rect1Stack: {
    height: 66,
    marginTop: -105,
    marginLeft: -2,
    marginRight: 2
  }
});

export default Settings;