import { Text, View, Button, Linking, TextInput, TouchableOpacity } from 'react-native';
import styles from "../stylesheets/Styles";
import ScreenChanger from "../../scripts/ScreenChanger";
import React, { useState } from 'react';
import { Audio } from 'expo-av';



export const HunterButton = function () {

    const [sound, setSound] = React.useState();

async function playSound() {
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync(
     require('./forever.mp3')
  );
  setSound(sound);

  console.log('Playing Sound');
  await sound.playAsync(); }

React.useEffect(() => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync(); }
    : undefined;
}, [sound]);

    return (
        <TouchableOpacity style={styles.hunterButton} onPress={playSound}>
            <Text style={styles.hunterButtonText}>Hunter</Text>
        </TouchableOpacity>
    )
}