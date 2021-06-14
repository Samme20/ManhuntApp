import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Gradient from "../assets/images/backgroundGradient.png";

class RegisterScreen extends Component {
  render() {
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
              <View style={styles.username}>
                <TextInput
                  placeholder="Username"
                  style={styles.usernameInput}
                ></TextInput>
              </View>
              <View style={styles.email}>
                <TextInput
                  placeholder="Email"
                  style={styles.emailInput}
                ></TextInput>
              </View>
              <View style={styles.password}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.passwordInput}
                ></TextInput>
              </View>
              <TouchableOpacity style={styles.signUp}>
                <Text style={styles.createAccount}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.termsConditions}>
                  Terms &amp; Conditions
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text style={styles.fugo2021}>© Fugo 2021</Text>
              <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.help}>Need Help?</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

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
    height: 258,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 99,
    marginLeft: 61,
    marginRight: 61,
  },
  username: {
    height: 47,
    backgroundColor: "rgba(230, 230, 230,0.12)",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 292,
  },
  usernameInput: {
    color: lemon,
    fontSize: 18,
    height: 24,
    width: 80,
  },
  email: {
    height: 47,
    borderRadius: 6,
    backgroundColor: "rgba(230, 230, 230,0.12)",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 292,
  },
  emailInput: {
    color: lemon,
    fontSize: 18,
    width: 43,
    height: 24,
  },
  password: {
    height: 47,
    borderRadius: 6,
    backgroundColor: "rgba(230, 230, 230,0.12)",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 292,
  },
  passwordInput: {
    color: lemon,
    fontSize: 18,
    flex: 1,
    width: 74,
    height: 24,
  },
  signUp: {
    height: 47,
    backgroundColor: "rgba(230, 230, 230,0.25)",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 292,
  },
  createAccount: {
    color: lemon,
    fontSize: 18,
    height: 24,
    width: 63,
  },
  button: {
    height: 17,
  },
  termsConditions: {
    color: black,
    alignSelf: "center",
  },
  footer: {
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 140,
    marginLeft: 37,
    marginRight: 37,
  },
  fugo2021: {
    color: black,
    alignSelf: "center",
  },
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

export default RegisterScreen;
