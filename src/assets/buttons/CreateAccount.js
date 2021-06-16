//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//Import Files

const CreateAccount = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.signUp}
      onPress={() => navigation.navigate("Register")}
    >
      <Text style={styles.createAnAccount}>Create An Account</Text>
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
var lightBlue = ColorStyle["lightBlue"];

const styles = StyleSheet.create({
  signUp: {
    height: 47,
    alignSelf: "stretch",
    backgroundColor: lightBlue,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  createAnAccount: {
    color: lemon,
    fontSize: 18,
  },
});

export default CreateAccount;
