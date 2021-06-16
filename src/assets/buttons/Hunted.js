//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//Import Files

const HuntedButton = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.huntedButton}
      onPress={() => navigation.navigate("MapTest")}
    >
      <Text style={styles.hunted}>Map Test</Text>
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
});

export default HuntedButton;
