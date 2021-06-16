//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
//Import Files

const Settingsbtn = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Settings")}
    >
      <IoniconsIcon name="md-settings" style={styles.settings}></IoniconsIcon>
    </TouchableOpacity>
  );
};

// STYLE FORM BUTTON

const ColorStyle = require('../Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  settings: {
    color: lemon,
    fontSize: 45,
    marginLeft: -2,
    marginRight: -2,
  },
});

export default Settingsbtn;
