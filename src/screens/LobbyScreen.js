import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import Gradient from "../assets/images/backgroundGradient.png";
import User from "../assets/buttons/User";
import Settings from "../assets/buttons/Settings";

class LobbyScreen extends Component {
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
              <View style={styles.nameGroup}>
                <View style={styles.password}>
                  <TextInput
                    placeholder="Lobby Name"
                    style={styles.textInput}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.group}>
                <TouchableOpacity style={styles.createButton}>
                  <Text style={styles.create}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.joinButton}>
                  <Text style={styles.join}>Join</Text>
                </TouchableOpacity>
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

// STYLE FOR SCREEN

//If dark
const ColorStyle = require('../assets/Json/darkStyle.json');

//if light
//const ColorStyle = require('../assets/Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];
var darkBlue = ColorStyle["darkBlue"];
var lightBlue = ColorStyle["lightBlue"];

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
  nameGroup: {
    height: 89,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
    marginLeft: 14,
    marginRight: 13,
  },
  password: {
    height: 47,
    borderRadius: 6,
    backgroundColor: "rgba(230, 230, 230,0.12)",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 292,
  },
  textInput: {
    color: lemon,
    fontSize: 18,
    width: 107,
    height: 47,
  },
  group: {
    height: 89,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 14,
    marginRight: 13,
  },
  createButton: {
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 128,
    backgroundColor: orange,
    borderRadius: 6,
  },
  create: {
    color: lemon,
    fontSize: 24,
  },
  joinButton: {
    width: 128,
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: orange,
  },
  join: {
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
});

export default LobbyScreen;
