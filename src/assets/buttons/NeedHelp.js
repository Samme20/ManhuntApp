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

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

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
