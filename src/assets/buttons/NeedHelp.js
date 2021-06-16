//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//Import Files

const NeedHelp = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.helpButton}>
      <Text style={styles.help}>Need Help?</Text>
    </TouchableOpacity>
  );
};

// STYLE FORM BUTTON

const ColorStyle = require('../Json/darkStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];

const styles = StyleSheet.create({
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

export default NeedHelp;
