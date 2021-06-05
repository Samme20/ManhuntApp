//Import React
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";

//Import Files
import Gradient from "../assets/images/backgroundGradient.png";
import NeedHelp from "../assets/buttons/NeedHelp";
import HuntedButton from "../assets/buttons/Hunted";
import HunterButton from "../assets/buttons/Hunter";
import Settings from "../assets/buttons/Settings";
import User from "../assets/buttons/User";

class MainScreen extends Component {
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
                <User />
                <Settings />
              </View>
              <View style={styles.group}>
                <HunterButton />
                <HuntedButton />
              </View>
            </View>
            <View style={styles.headerColumnFiller}></View>
            <View style={styles.footer}>
              <Text style={styles.fugo2021}>© Fugo 2021</Text>
              <NeedHelp />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

// STYLE FOR SCREEN

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: prusblue,
  },
  background: {
    flex: 1,
    marginRight: 1,
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
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  user: {
    color: lemon,
    fontSize: 40,
    alignSelf: "center",
  },
  button2: {
    width: 41,
    height: 44,
    justifyContent: "center",
  },
  settings: {
    color: lemon,
    fontSize: 45,
    marginLeft: -2,
    marginRight: -2,
  },
  group: {
    height: 232,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 346,
    marginLeft: 21,
    marginRight: 20,
  },
  hunterButton: {
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    backgroundColor: orange,
    borderRadius: 6,
  },
  hunter: {
    color: lemon,
    fontSize: 24,
  },
  huntedButton: {
    width: 200,
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: orange,
  },
  hunted: {
    color: lemon,
    fontSize: 24,
  },
  headerColumn: {
    marginTop: 62,
    marginLeft: 16,
    marginRight: 17,
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
});

export default MainScreen;
