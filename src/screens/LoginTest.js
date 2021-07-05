import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { ResizeMode } from "expo-av";

function LoginTest(props) {
  let [fontsLoaded] = useFonts({
    "roboto-100": require("../assets/fonts/roboto-100.ttf"),
    "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
    return (
      <View style={styles.root}>
        <StatusBar hidden backgroundColor="rgba(248,0,0,0)" />
        <View style={styles.background1}>
          <ImageBackground
            style={styles.rect1}
            imageStyle={styles.rect1_imageStyle}
            source={require("../assets/images/Gradient_FkQUUZD.png")}
          >
            <View style={styles.logo1}>
              <View style={styles.w1Row}>
                <Text style={styles.w1}>W</Text>
                <Text style={styles.orld1}>orld</Text>
                <Text style={styles.s1}>S</Text>
                <Text style={styles.cape1}>cape</Text>
              </View>
            </View>
            <View style={styles.form1Stack}>
              <View style={styles.form1}>
                <View style={styles.loginTextColumn}>
                  <Text style={styles.loginText}>Login</Text>
                  <View style={styles.name1}>
                    <EvilIconsIcon
                      name="user"
                      style={styles.icon1}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.nameInput1}
                    ></TextInput>
                  </View>
                  <View style={styles.password1}>
                    <EvilIconsIcon
                      name="lock"
                      style={styles.icon3}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={true}
                      style={styles.passwordInput1}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.loginTextColumnFiller}></View>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Main")}
                  style={styles.button1}
                >
                  <Text style={styles.register1}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footerTexts1}>
                <Text style={styles.registerIntro1}>
                  Already have an account?
                </Text>
                <View style={styles.registerIntro1Filler}></View>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("RegisterTest")}
                  style={styles.button2}
                >
                  <View style={styles.loginHere1Filler}></View>
                  <Text style={styles.loginHere1}>Login here!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background1: {
    flex: 1
  },
  rect1: {
    flex: 1
  },
  rect1_imageStyle: {},
  logo1: {
    width: 276,
    height: 56,
    flexDirection: "row",
    marginTop: 120,
    marginLeft: 39
  },
  w1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 52,
    height: 62,
    width: 46
  },
  orld1: {
    fontFamily: "roboto-100",
    color: "rgba(255,255,255,1)",
    fontSize: 48,
    height: 58,
    width: 85,
    marginTop: 4
  },
  s1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 52,
    height: 62,
    width: 31,
    marginLeft: 7
  },
  cape1: {
    fontFamily: "roboto-100",
    color: "rgba(255,255,255,1)",
    fontSize: 48,
    height: 58,
    width: 111,
    marginTop: 4
  },
  w1Row: {
    height: 62,
    flexDirection: "row",
    flex: 1,
    marginRight: -4
  },
  form1: {
    top: 0,
    left: 0,
    height: 319,
    position: "absolute",
    right: 9
  },
  loginText: {
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  name1: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 7
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  nameInput1: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  password1: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 16
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput1: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  loginTextColumn: {
    marginTop: 11
  },
  loginTextColumnFiller: {
    flex: 1
  },
  button1: {
    height: 55,
    backgroundColor: "rgba(126,211,33,1)",
    borderRadius: 5,
    shadowColor: "rgba(65,117,5,1)",
    shadowOffset: {
      width: -3,
      height: -3
    },
    elevation: 60,
    shadowOpacity: 0.55,
    shadowRadius: 20,
    marginBottom: 46
  },
  register1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    marginLeft: 113
  },
  footerTexts1: {
    left: 0,
    height: 58,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  registerIntro1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 9,
    marginLeft: -3
  },
  registerIntro1Filler: {
    flex: 1
  },
  button2: {
    width: 174,
    height: 25
  },
  loginHere1Filler: {
    flex: 1
  },
  loginHere1: {
    color: "rgba(255,255,255,0.5)",
    marginBottom: 9
  },
  form1Stack: {
    height: 376,
    marginTop: 23,
    marginLeft: 39,
    marginRight: 34
  }
});

export default LoginTest;
