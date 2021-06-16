import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Gradient from "../assets/images/backgroundGradient.png";
import BackButton from "../assets/buttons/BackButton";
import ChangeImagebtn from "../assets/buttons/ChangeImagebtn";
import * as ImagePicker from 'expo-image-picker';
import { auth } from "../../firebase";

const UserScreen = () =>  {
  const [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
      if (pickerResult.cancelled === true) {
        return;
      }
      
      setSelectedImage({ localUri: pickerResult.uri });
      if (pickerResult.uri !== null) {
        auth.currentUser.updateProfile({
          photoURL: pickerResult.uri,
    
    
        }).then(function (){
          alert("Image changed!")
          //Reload the page here, maybe just set the screen navigation again?
          
        }).catch(function(error){
    
        });
        
      }

    }
    
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
                  <Text style={styles.username}>{auth?.currentUser?.displayName}</Text>
                </View>
                <BackButton />
              </View>
              <View style={styles.pictureForm}>
                <Image source={{uri: auth?.currentUser?.photoURL}} style={{width: 200, height:200, borderRadius:200}}/>
                <TouchableOpacity style={styles.pictureButton} onPress={() => openImagePickerAsync()}>
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

// STYLES FOR SCREEN

//If dark
const ColorStyle = require('../assets/Json/darkStyle.json');

//if light
//const ColorStyle = require('../assets/Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];
var darkBlue = ColorStyle["darkBlue"];
var lightBlue = ColorStyle["lightBlue"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: prusblue,
  },
  background: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    height: 896,
    width: 414,
  },
  backgroundGradient_imageStyle: {},
  header: {
    top: 62,
    height: 40,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    left: 17,
    right: 16,
    flex: 0.14,
  },
  titleHelper: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  username: {
    color: lemon,
    fontSize: 24,
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
  },
  backButton: {
    flexDirection: "row",
    width: 40,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: lemon,
    fontSize: 40,
  },
  pictureForm: {
    top: 162,
    left: 61,
    height: 286,
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flex: 0.14,
    right: 61,
  },
  userPicture: {
    width: 160,
    height: 160,
    alignSelf: "center",
  },
  pictureButton: {
    height: 36,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  changePicture: {
    color: lemon,
    fontSize: 18,
    height: 22,
    width: 127,
  },
  cameraIcon: {
    color: lemon,
    fontSize: 25,
  },
  userForm: {
    left: 61,
    position: "absolute",
    justifyContent: "flex-start",
    flex: 0.14,
    height: 362,
    right: 61,
    top: 448,
  },
  privacyButton: {
    height: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  privacySettings: {
    color: lemon,
    fontSize: 18,
    height: 22,
    width: 127,
  },
  rightArrow: {
    color: lemon,
    fontSize: 20,
  },
  footer: {
    left: 37,
    position: "absolute",
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "space-between",
    right: 37,
    bottom: 30,
    flex: 0.14,
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

export default UserScreen;
