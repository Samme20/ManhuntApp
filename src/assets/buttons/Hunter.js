//Import React
import React, { useState } from 'react';
import { Text, View, Button, Linking, TextInput, TouchableOpacity } from 'react-native';
//Import Expo
import { Audio } from 'expo-av';
//Import Files
import styles from "../stylesheets/Styles-dark";

const HunterButton = function () {

    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../sounds/forever.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <TouchableOpacity style={styles.hunterButton} onPress={playSound}>
            <Text style={styles.hunter}>Hunter</Text>
        </TouchableOpacity>
    )
}

export default HunterButton;