//Import React
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import * as ImagePicker from 'expo-image-picker';
import { auth } from "../../../firebase";
//Import Files

const ChangeImagebtn = function () {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const imageChange = function() {
    alert("test")
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
      if (selectedImage !== null) {
        auth.currentUser?.updateProfile({photoURL: selectedImage.localUri})
      }

    }
    };

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.pictureButton}
      onPress={imageChange}
    >
    </TouchableOpacity>
  );
};

// STYLE FORM BUTTON

var lemon = "#EAE2B7";
var maxred = "#D62828";
var prusblue = "#003049";
var orange = "#F77F00";
var black = "#121212";

const styles = StyleSheet.create({
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
  pictureButton: {
    height: 36,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ChangeImagebtn;
