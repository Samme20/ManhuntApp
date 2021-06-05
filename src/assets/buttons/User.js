//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//Import Files

const Settingsbtn = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("User")}
    >
      <FontAwesomeIcon name="user-circle" style={styles.user}></FontAwesomeIcon>
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
  user: {
    color: lemon,
    fontSize: 40,
    alignSelf: "center",
  },
});

export default Settingsbtn;
