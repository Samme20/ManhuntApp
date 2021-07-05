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
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_FkQUUZD.png")}
          >
            <View style={styles.logoColumn}>
              <View style={styles.logo}>
                <View style={styles.w3Row}>
                  <Text style={styles.w3}>W</Text>
                  <Text style={styles.orld}>orld</Text>
                  <Text style={styles.s2}>S</Text>
                  <Text style={styles.cape2}>cape</Text>
                </View>
              </View>
              <View style={styles.formContainer}>
                <View style={styles.text3Column}>
                  <Text style={styles.text3}>Login</Text>
                  <View style={styles.username}>
                    <EvilIconsIcon
                      name="user"
                      style={styles.icon22}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Username"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.usernameInput}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.text3ColumnFiller}>
                  <View style={styles.password}>
                    <EvilIconsIcon
                      name="lock"
                      style={styles.icon2}
                    ></EvilIconsIcon>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.passwordInput}
                    ></TextInput>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Main")}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.logoColumnFiller}></View>
            <View style={styles.footerTexts}>
              <Text style={styles.registerIntro}>Dont have an account?</Text>
              <View style={styles.registerIntroFiller}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("RegisterTest")}
                style={styles.button2}
              >
                <View style={styles.createAccountFiller}></View>
                <Text style={styles.createAccount}>
                  Create a free account here!
                </Text>
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
    backgroundColor: "rgb(255,255,255)",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 100,
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    width: 278,
    height: 60,
    flexDirection: "row"
  },
  w3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 52,
    height: 62,
    width: 46
  },
  orld: {
    fontFamily: "roboto-100",
    color: "rgba(255,255,255,1)",
    fontSize: 48,
    height: 58,
    width: 85,
    marginTop: 4
  },
  s2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 52,
    height: 62,
    width: 30,
    marginLeft: 9
  },
  cape2: {
    fontFamily: "roboto-100",
    color: "rgba(255,255,255,1)",
    fontSize: 48,
    height: 58,
    width: 106,
    marginLeft: 2,
    marginTop: 4
  },
  w3Row: {
    height: 62,
    flexDirection: "row",
    flex: 1
  },
  formContainer: {
    height: 270,
    width: 278,
    marginTop: 34
  },
  text3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 8
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  text3Column: {
    marginTop: -7
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  text3ColumnFiller: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    height: 59,
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
    justifyContent: "center",
    marginBottom: 14
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    width: 278,
    marginTop: 121,
    marginLeft: 41
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 62,
    width: 287,
    marginBottom: 147,
    marginLeft: 41
  },
  registerIntro: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 10
  },
  registerIntroFiller: {
    flex: 1
  },
  button2: {
    width: 174,
    height: 25
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)",
    marginBottom: 9
  }
});

export default LoginTest;
