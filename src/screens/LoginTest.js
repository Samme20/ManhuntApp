import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function LoginTest(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_JZV2kSY.png")}
        >
          <View style={styles.logoColumn}>
            <View style={styles.logo}>
              <View style={styles.endWrapperFiller}></View>
              <View style={styles.text3Column}>
                <Text style={styles.text3}>WorldScape</Text>
                <View style={styles.rect7}></View>
              </View>
            </View>
            <View style={styles.form}>
              <View style={styles.usernameColumn}>

                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Hunta Name!"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                  ></TextInput>
                </View>

                <View style={styles.email}>
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.emailInput}
                  ></TextInput>
                </View>

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
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Main")}
                style={styles.button}
              >
                <Text style={styles.text2}>Start Huntin!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.logoColumnFiller}></View>
          <View style={styles.footerTexts}>
            <TouchableOpacity
              style={styles.button2}
            >
              <View style={styles.createAccountFiller}></View>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.button2Filler}></View>
            <Text style={styles.needHelp}>Need Help?</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    width: Dimensions.get('window').width - (Dimensions.get('window').width / 4),
    height: 111,
    alignSelf: "center"
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    marginBottom: 4,
    textAlign: "center"
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginRight: 4
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: -1
  },
  form: {
    height: 230,
    marginTop: 38
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  email: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
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
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27,
    marginBottom: 67
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
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 80,
    marginLeft: 41,
    marginRight: 41
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  }
});

export default LoginTest;
