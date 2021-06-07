//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//Import Files

const HuntedButton = function () {
  

  return (
    <TouchableOpacity
      style={styles.huntedButton}
      onPress={() => navigation.navigate("MapTest")}
    >
      <Text style={styles.hunted}>Hunted</Text>
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
