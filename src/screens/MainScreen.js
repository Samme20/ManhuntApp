import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { useFonts } from "expo-font";

function Main(props) {
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
            style={styles.rect1}
            imageStyle={styles.rect1_imageStyle}
            source={require("../assets/images/Gradient_FkQUUZD.png")}
          >
            <View style={styles.headerColumn}>
              <View style={styles.header}>
                <View style={styles.rect2}>
                  <View style={styles.profileRow}>
                    <View style={styles.profile}>
                      <View style={styles.profileIconStack}>
                        <EvilIconsIcon
                          name="user"
                          style={styles.profileIcon}
                        ></EvilIconsIcon>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("User")}
                          style={styles.profileButton}
                        ></TouchableOpacity>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/WSLogo.png")}
                      resizeMode="contain"
                      style={styles.logo}
                    ></Image>
                  </View>
                  <View style={styles.profileRowFiller}></View>
                  <View style={styles.settings}>
                    <View style={styles.settingsIconStack}>
                      <EvilIconsIcon
                        name="gear"
                        style={styles.settingsIcon}
                      ></EvilIconsIcon>
                      <TouchableOpacity
                        onPress={() => props.navigation.navigate("Settings")}
                        style={styles.settingsButton}
                      ></TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.newsBody}>
                <View style={styles.rect3}>
                  <Text style={styles.news}>News</Text>
                  <Text style={styles.alpha001}>Alpha 0.01</Text>
                  <Text style={styles.textBody}>
                    In this version of the app we&#39;ve added{"\n"}better UI and
                    more functionality. In the{"\n"}upcoming updates we will keep
                    our{"\n"}focus on gameplay and usability.
                  </Text>
                  <Text style={styles.alpha002}>Alpha 0.02</Text>
                  <Text style={styles.text}>
                    The team is currently on holiday break{"\n"}but we keep making
                    small updates as{"\n"}we go. Thanks for staying tuned on this
                    {"\n"}project!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.headerColumnFiller}></View>
            <View style={styles.button1Column}>
              <TouchableOpacity
                //Navigate
                style={styles.button1}
              >
                <Text style={styles.createLobby}>Create Lobby</Text>
              </TouchableOpacity>
              <TouchableOpacity
                //navigate
                style={styles.button2}
              >
                <Text style={styles.joinLobby}>Join lobby</Text>
              </TouchableOpacity>
              <View style={styles.footerTexts1}>
                <Text style={styles.termsOfCondition}>Terms of condition</Text>
                <View style={styles.termsOfConditionFiller}></View>
                <TouchableOpacity
                  //navigate
                  style={styles.button3}
                >
                  <View style={styles.clickHereFiller}></View>
                  <Text style={styles.clickHere}>Click here</Text>
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
  header: {
    height: 67,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.17,
    shadowRadius: 10
  },
  rect2: {
    height: 67,
    backgroundColor: "rgba(74,144,226,1)",
    flexDirection: "row"
  },
  profile: {
    width: 40,
    height: 44,
    alignSelf: "flex-end",
    marginBottom: 12
  },
  profileIcon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  profileButton: {
    top: 0,
    left: 2,
    width: 37,
    height: 41,
    position: "absolute"
  },
  profileIconStack: {
    width: 40,
    height: 44
  },
  logo: {
    height: 67,
    width: 80,
    marginLeft: 94 + 20
  },
  profileRow: {
    flexDirection: "row",
    marginLeft: 6
  },
  profileRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  settings: {
    width: 40,
    height: 45,
    alignSelf: "flex-end",
    marginRight: 5,
    marginBottom: 12
  },
  settingsIcon: {
    top: 1,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  settingsButton: {
    top: 0,
    left: 0,
    width: 39,
    height: 45,
    position: "absolute"
  },
  settingsIconStack: {
    width: 40,
    height: 45
  },
  newsBody: {
    height: 263,
    marginTop: 30
  },
  rect3: {
    height: 251,
    backgroundColor: "rgba(230,230,230,0.35)",
    marginLeft: 49,
    marginRight: 51
  },
  news: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 9,
    marginLeft: 107 + 20,
    marginRight: 105
  },
  alpha001: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 26
  },
  textBody: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 26
  },
  alpha002: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 26
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 26
  },
  headerColumn: {},
  headerColumnFiller: {
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
    marginBottom: 40,
    marginLeft: 16,
    marginRight: 17
  },
  createLobby: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    alignSelf: "center"
  },
  button2: {
    height: 55,
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 5,
    shadowColor: "rgba(46,140,119,1)",
    shadowOffset: {
      width: -3,
      height: -3
    },
    elevation: 60,
    shadowOpacity: 0.55,
    shadowRadius: 20,
    justifyContent: "center",
    marginBottom: 61,
    marginLeft: 16,
    marginRight: 17
  },
  joinLobby: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  footerTexts1: {
    height: 58
  },
  termsOfCondition: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.8,
    fontSize: 16,
    marginTop: 8
  },
  termsOfConditionFiller: {
    flex: 1
  },
  button3: {
    width: 174,
    height: 25
  },
  clickHereFiller: {
    flex: 1
  },
  clickHere: {
    color: "rgba(255,255,255,0.5)",
    marginBottom: 9
  },
  button1Column: {
    marginBottom: 56,
    marginLeft: 37,
    marginTop: 20,
    marginRight: 36
  }
});

export default Main;
