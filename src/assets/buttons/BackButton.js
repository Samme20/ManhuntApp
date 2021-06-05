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

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

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
