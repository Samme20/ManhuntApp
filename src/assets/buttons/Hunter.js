//Import React
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  TouchableOpacity,
} from "react-native";
//Import Expo
import { Audio } from "expo-av";
//Import Files

const HunterButton = function () {
  const navigation = useNavigation();
  const [sound, setSound] = React.useState();

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
      onPress={() => navigation.navigate("Lobby")}
    >
      <Text style={styles.hunter}>Hunter</Text>
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
