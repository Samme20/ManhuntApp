//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { auth } from "../../../firebase";
//Import Files

const LoginButton = function ({email, password}) {
  const navigation = useNavigation();
  const signIn = ()=>{
    auth.signInWithEmailAndPassword(email,password).catch((error)=>{
      var errormessage = error.message;
      alert(errormessage);
    });
  }

  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={signIn}
    >
      <Text style={styles.loginText}>Login</Text>
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
var darkBlue = ColorStyle["darkBlue"];
var lightBlue = ColorStyle["lightBlue"];

const styles = StyleSheet.create({
  loginButton: {
    height: 47,
    alignSelf: "stretch",
    backgroundColor: lightBlue,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: lemon,
    fontSize: 18,
  },
});

export default LoginButton;
