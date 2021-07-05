import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";


import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

function RegisterTest(props) {
  let [fontsLoaded] = useFonts({
    "roboto-100": require("../assets/fonts/roboto-100.ttf"),
    "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.root}>
        <StatusBar
          hidden
          barStyle="light-content"
          backgroundColor="rgba(0,0,0,0)"
        />
        <View style={styles.background1}>
          <ImageBackground
            style={styles.rect3}
            imageStyle={styles.rect3_imageStyle}
            source={require("../assets/images/Gradient_FkQUUZD.png")}
          >
            <View style={styles.logo1Column}>
              <View style={styles.logo1}>
                <View style={styles.w1Row}>
                  <Text style={styles.w1}>W</Text>
                  <Text style={styles.orld1}>orld</Text>
                  <Text style={styles.s1}>S</Text>
                  <Text style={styles.cape1}>cape</Text>
                </View>
              </View>
              <View style={styles.form}>
                <View style={styles.text3Column}>
                  <Text style={styles.text3}>Registration</Text>
                  <View style={styles.name}>
                    <EvilIconsIcon
                      name="user"
                      style={styles.icon5}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.nameInput}
                    ></TextInput>
                  </View>
                  <View style={styles.email}>
                    <EvilIconsIcon
                      name="envelope"
                      style={styles.icon6}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.emailInput}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.text3ColumnFiller}></View>
                <View style={styles.passwordColumn}>
                  <View style={styles.password}>
                    <EvilIconsIcon
                      name="lock"
                      style={styles.icon7}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={true}
                      style={styles.passwordInput}
                    ></TextInput>
                  </View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Main")}
                    style={styles.button}
                  >
                    <Text style={styles.register}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.logo1ColumnFiller}></View>
            <View style={styles.footerTexts1}>
              <Text style={styles.registerIntro1}>Already have an account?</Text>
              <View style={styles.registerIntro1Filler}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("LoginTest")}
                style={styles.button1}
              >
                <View style={styles.loginHereFiller}></View>
                <Text style={styles.loginHere}>Login here!</Text>
              </TouchableOpacity>
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
  rect3: {
    flex: 1
  },
  rect3_imageStyle: {},
  logo1: {
    width: 276,
    height: 56,
    flexDirection: "row"
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
  form: {
    height: 355,
    marginTop: 23
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 7
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  nameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 16
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  text3Column: {
    marginTop: 11
  },
  text3ColumnFiller: {
    flex: 1
  },
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 34,
    marginRight: 2
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  button: {
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
    marginLeft: 2
  },
  register: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    marginLeft: 113
  },
  passwordColumn: {
    marginBottom: 8,
    marginRight: -2
  },
  logo1Column: {
    marginTop: 120,
    marginLeft: 39,
    marginRight: 43
  },
  logo1ColumnFiller: {
    flex: 1
  },
  footerTexts1: {
    height: 58,
    marginBottom: 87,
    marginLeft: 39,
    marginRight: 34
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
  button1: {
    width: 174,
    height: 25
  },
  loginHereFiller: {
    flex: 1
  },
  loginHere: {
    color: "rgba(255,255,255,0.5)",
    marginBottom: 9
  }
});

export default RegisterTest;
