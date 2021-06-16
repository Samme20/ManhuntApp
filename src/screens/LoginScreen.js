import React, { Component, useState,useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { auth } from "../../firebase";
import CreateAccount from "../assets/buttons/CreateAccount";
import LoginButton from "../assets/buttons/LoginButton";
import Gradient from "../assets/images/backgroundGradient.png";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user){
      if(user){
        navigation.navigate("Main");
      } else {
        // No user is signed in.
      }
    });
    return unsubscribe
  })
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground
          style={styles.backgroundGradient}
          imageStyle={styles.backgroundGradient_imageStyle}
          source={Gradient}
        >
          <Image
            source={require("../assets/images/fugologo-dark.png")}
            resizeMode="contain"
            style={styles.fugoLogo}
          ></Image>
          <View style={styles.form}>
            <View style={styles.email}>
              <TextInput
                placeholder="Email"
                style={styles.emailInput}
                onChangeText={text => setEmail(text)}
              ></TextInput>
            </View>
            <View style={styles.password}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.passwordInput}
                onChangeText={text => setPassword(text)}
              ></TextInput>
            </View>
            <LoginButton email={email} password={password}/>
            <CreateAccount />
          </View>
          <View style={styles.footer}>
            <Text style={styles.fugo2021}>© Fugo 2021</Text>
            <TouchableOpacity style={styles.button4}>
              <Text style={styles.help}>Need Help?</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

// STYLE FOR SCREEN

//If dark
const ColorStyle = require('../assets/Json/darkStyle.json');

//if light
//const ColorStyle = require('../assets/Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];
var darkBlue = ColorStyle["darkBlue"];
var lightBlue = ColorStyle["lightBlue"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: prusblue,
  },
  background: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
  },
  backgroundGradient_imageStyle: {},
  fugoLogo: {
    height: 279,
    marginTop: 80,
    marginHorizontal: -30,
  },
  form: {
    height: 229,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 99,
    marginLeft: 61,
    marginRight: 61,
  },
  email: {
    height: 47,
    borderRadius: 6,
    backgroundColor: darkBlue,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emailInput: {
    color: lemon,
    fontSize: 18,
  },
  password: {
    height: 47,
    borderRadius: 6,
    backgroundColor: darkBlue,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  passwordInput: {
    color: lemon,
    fontSize: 18,
    flex: 1,
  },
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
    height: 24,
    width: 45,
  },
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
    height: 24,
    width: 151,
  },
  footer: {
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 169,
    marginLeft: 37,
    marginRight: 37,
  },
  fugo2021: {
    color: black,
    alignSelf: "center",
  },
  button4: {
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

export default Login;
