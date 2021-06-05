//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
//Import Files

const LoginButton = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Main")}>
      <Text style={styles.loginText}>Login</Text>
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
  loginButton: {
    height: 47,
    alignSelf: "stretch",
    backgroundColor: "rgba(230, 230, 230,0.25)",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: lemon,
    fontSize: 18,
    height: 24,
    width: 45,
  },
});

export default LoginButton;
