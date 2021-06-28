import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { Center } from "@builderx/utils";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";


function LoginTest(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_JZV2kSY.png")}
        ></ImageBackground>
      </View>
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Main")}
        >
          <Center>
            <Text style={styles.text2}>Start Hunting!</Text>
          </Center>
        </TouchableOpacity>
        <View style={styles.password}>
          <Center vertical>
            <EvilIconsIcon name="lock" style={styles.icon2}></EvilIconsIcon>
          </Center>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,1)"
            secureTextEntry={false}
            style={styles.passwordInput}
          ></TextInput>
        </View>
        <View style={styles.username}>
          <Center vertical>
            <EvilIconsIcon name="user" style={styles.icon22}></EvilIconsIcon>
          </Center>
          <TextInput
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,1)"
            secureTextEntry={false}
            style={styles.usernameInput}
          ></TextInput>
        </View>
      </View>
      <View style={styles.footerTexts}>
        <TouchableOpacity
          style={styles.button2}
        >
          <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.needHelp}>About</Text>
      </View>
      <Center horizontal>
        <View style={styles.logo}>
          <Text style={styles.text3}>WorldScape</Text>
          <View style={styles.rect7}></View>
        </View>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect_imageStyle: {
    opacity: 0.69
  },
  form: {
    top: "40.54%",
    left: 41,
    height: 230,
    position: "absolute",
    right: 41
  },
  button: {
    left: 0,
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 5
  },
  text2: {
    color: "rgba(255,255,255,1)",
    position: "absolute"
  },
  password: {
    top: "37.18%",
    left: 0,
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5
  },
  icon2: {
    left: 20,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 33
  },
  passwordInput: {
    top: "23.75%",
    left: 61,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 17
  },
  username: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5
  },
  icon22: {
    left: 20,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  usernameInput: {
    top: "23.63%",
    left: 61,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 11
  },
  footerTexts: {
    left: 37,
    height: 14,
    position: "absolute",
    right: 37,
    bottom: 36
  },
  button2: {
    left: 0,
    width: 104,
    height: 14,
    position: "absolute",
    bottom: 0
  },
  createAccount: {
    left: 0,
    color: "rgba(255,255,255,0.5)",
    position: "absolute",
    bottom: 0
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    position: "absolute",
    right: -1,
    bottom: 0
  },
  logo: {
    top: 130,
    width: 302,
    height: 111,
    position: "absolute"
  },
  text3: {
    left: 2,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    bottom: 18,
    fontSize: 56,
  },
  rect7: {
    left: 2,
    height: 8,
    backgroundColor: "#25cdec",
    position: "absolute",
    right: 3,
    bottom: 6
  }
});

export default LoginTest;
