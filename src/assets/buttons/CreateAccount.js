//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
//Import Files

const CreateAccount = function () {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.signUp}>
      <Text style={styles.createAnAccount}>Create An Account</Text>
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
  signUp: {
    height: 47,
    alignSelf: "stretch",
    backgroundColor: "rgba(230, 230, 230,0.25)",
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
