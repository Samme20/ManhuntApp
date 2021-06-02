//Import React
import React, { useState } from 'react';
import { Text, View, Button, Linking, TextInput, TouchableOpacity } from 'react-native';
//Import Expo
import { Audio } from 'expo-av';
//Import Files
import stylesd from "../stylesheets/Styles-dark";
import stylesl from "../stylesheets/Styles-light";

export const HunterButton = function () {

    const [sound, setSound] = React.useState();

async function playSound() {
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync(
     require('../sounds/forever.mp3')
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
        <TouchableOpacity activeOpacity={0.7} style={stylesd.hunterButton} onPress={playSound}>
            <Text style={stylesd.hunterButtonText}>Hunter</Text>
        </TouchableOpacity>
    )
}