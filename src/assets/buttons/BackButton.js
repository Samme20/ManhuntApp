//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
//Import Files

const BackButton = function () {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate("Main")}
    >
      <Icon name="chevron-thin-left" style={styles.backIcon}></Icon>
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
});

export default BackButton;
