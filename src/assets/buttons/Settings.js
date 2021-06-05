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

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

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
