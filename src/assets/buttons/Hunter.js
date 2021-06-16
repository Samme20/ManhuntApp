//Import React
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
//Import Expo
import { Audio } from "expo-av";
import { auth } from "../../../firebase";
//Import Files

const HunterButton = function () {
  const navigation = useNavigation();
  const [sound, setSound] = React.useState();
  const signOut = () => {
    auth.signOut().then(() =>{
      navigation.navigate("Login");
    })
  }

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../sounds/forever.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      style={styles.hunterButton}
      onPress={signOut}
    >
      <Text style={styles.hunter}>Hunter</Text>
    </TouchableOpacity>
  );
};

// STYLE FORM BUTTON

const ColorStyle = require('../Json/lightStyle.json');

var lemon = ColorStyle["lemon"];
var maxred = ColorStyle["maxred"];
var prusblue = ColorStyle["prusblue"];
var orange = ColorStyle["orange"];
var black = ColorStyle["theme"];

const styles = StyleSheet.create({
  hunterButton: {
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    backgroundColor: orange,
    borderRadius: 6,
  },
  hunter: {
    color: lemon,
    fontSize: 24,
  },
});

export default HunterButton;
