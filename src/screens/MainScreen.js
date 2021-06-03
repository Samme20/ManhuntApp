//Import React
import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from "react-native";

//Import Files
import Gradient from "../assets/images/backgroundGradient.png";
import NeedHelp from "../assets/buttons/NeedHelp";
import HuntedButton from "../assets/buttons/Hunted";
import HunterButton from "../assets/buttons/Hunter";
import Settings from "../assets/buttons/Settings";
import User from "../assets/buttons/User";
import styles from "../assets/stylesheets/Styles-dark";

class MainScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.backgroundGradient}
            imageStyle={styles.backgroundGradient_imageStyle}
            source={Gradient}>
            <View style={styles.headerColumn}>
              <View style={styles.header}>
                <User />
                <Settings />
              </View>
              <View style={styles.group}>
                <HunterButton />
                <HuntedButton />
              </View>
            </View>
            <View style={styles.headerColumnFiller}></View>
            <View style={styles.footer}>
              <Text style={styles.fugo2021}>© Fugo 2021</Text>
              <NeedHelp />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default MainScreen;