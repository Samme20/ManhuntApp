import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity } from 'react-native';
import styles from "../stylesheets/Styles";
import ScreenChanger from "../../scripts/ScreenChanger";
import React, { useState } from 'react';

export const HuntedButton = function () {

    const [click, setClick] = useState(false);

    return (
        <TouchableOpacity style={styles.huntedButton}>
            { !click == true &&
                (<Text style={styles.huntedButtonText}>Hunted</Text>)}
            { click == true &&
                (<ScreenChanger />)
            }
        </TouchableOpacity>

    )
}