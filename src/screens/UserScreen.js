import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import styles from "../assets/stylesheets/Styles-dark";
import Gradient from "../assets/images/backgroundGradient.png";
import BackButton from "../assets/buttons/BackButton";

class UserScreen extends Component {
  render(){
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
                  <Text style={styles.username}>{"{"}Username}</Text>
                </View>
                <BackButton />
              </View>
              <View style={styles.pictureForm}>
                <Svg viewBox="0 0 160.33 160.33" style={styles.userPicture}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(230, 230, 230,1)"
                    cx={80}
                    cy={80}
                    rx={80}
                    ry={80}
                  ></Ellipse>
                </Svg>
                <TouchableOpacity style={styles.pictureButton}>
                  <Text style={styles.changePicture}>Change Picture</Text>
                  <EntypoIcon
                    name="camera"
                    style={styles.cameraIcon}
                  ></EntypoIcon>
                </TouchableOpacity>
              </View>
              <View style={styles.userForm}>
                <TouchableOpacity style={styles.privacyButton}>
                  <Text style={styles.privacySettings}>Privacy settings</Text>
                  <EntypoIcon
                    name="chevron-thin-right"
                    style={styles.rightArrow}
                  ></EntypoIcon>
                </TouchableOpacity>
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

export default UserScreen;

