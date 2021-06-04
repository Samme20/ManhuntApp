//Ipmort React
import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Switch } from "react-native";
import BackButton from "../assets/buttons/BackButton";
//Import Files
import Gradient from "../assets/images/backgroundGradient.png";
import styles from "../assets/stylesheets/Styles-dark";

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.backgroundGradient}
            imageStyle={styles.backgroundGradient_imageStyle}
            source={Gradient}
          >
            <View style={styles.headerColumn}>
              <View style={styles.header}>
                <View style={styles.titleHelper}>
                  <Text style={styles.text}>Settings</Text>
                </View>
                <BackButton />
              </View>
              <View style={styles.form1Stack}>
                <View style={styles.form1}></View>
                <View style={styles.settingForm}>
                  <Text style={styles.darkMode}>Dark mode</Text>
                </View>
                <View style={styles.valueForm}>
                  <Switch
                    value={true}
                    disabled={false}
                    trackColor={{
                      true: "rgba(0,48,73,1)",
                      false: "rgba(234,226,183,1)"
                    }}
                    thumbColor="rgba(247,127,0,1)"
                    style={styles.switch}
                  ></Switch>
                </View>
              </View>
            </View>
            <View style={styles.headerColumnFiller}></View>
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

export default Settings;
