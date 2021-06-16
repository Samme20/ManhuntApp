//Ipmort React
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import BackButton from "../assets/buttons/BackButton";
import Modeswitch from "../assets/buttons/Modeswitch";
//Import Files
import Gradient from "../assets/images/backgroundGradient.png";
class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.backgroundGradient}
            imageStyle={styles.backgroundGradient_imageStyle}
            source={Gradient}
          >
            <View style={styles.headerColumn}>
              <View style={styles.header}>
                <View style={styles.titleHelper}>
                  <Text style={styles.text}>Settings</Text>
                </View>
                <BackButton />
              </View>
              <View style={styles.settingForm}>
                <View style={styles.darkModeSetting}>
                  <Text style={styles.darkMode}>Dark mode</Text>
                  <Modeswitch />
                </View>
              </View>
            </View>
            <View style={styles.headerColumnFiller}></View>
            <View style={styles.footer}>
              <Text style={styles.fugo2021}>© Fugo 2021</Text>
              <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.help}>Need Help?</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
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
    backgroundColor: prusblue,
  },
  background: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
  },
  backgroundGradient_imageStyle: {},
  header: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleHelper: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: lemon,
    fontSize: 24,
    alignSelf: "flex-start",
  },
  backButton: {
    flexDirection: "row",
    width: 40,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: lemon,
    fontSize: 40,
  },
  settingForm: {
    height: 647,
    justifyContent: "space-around",
    marginTop: 39,
    marginLeft: 44,
    marginRight: 45,
  },
  darkModeSetting: {
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  darkMode: {
    color: lemon,
    fontSize: 18,
    height: 22,
    width: 87,
  },
  switch: {},
  headerColumn: {
    marginTop: 62,
    marginLeft: 17,
    marginRight: 16,
  },
  headerColumnFiller: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginLeft: 37,
    marginRight: 37,
  },
  fugo2021: {
    color: black,
    alignSelf: "center",
  },
  helpButton: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  help: {
    color: black,
    alignSelf: "flex-start",
  },
});

export default Settings;
