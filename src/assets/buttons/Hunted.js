import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity } from 'react-native';
import styles from "../stylesheets/Styles";
import ScreenChanger from "../../scripts/ScreenChanger";
import React, { useState } from 'react';

export const HuntedButton = function () {
    
    /* ChangeScreen = () => {
        ScreenChanger.ChangeingScreen;
    } */
    
    return (
        <TouchableOpacity /* onPress={this.ChangeScreen} */ style={styles.huntedButton}>
            <Text style={styles.huntedButtonText}>Hunted</Text>
        </TouchableOpacity>
    )
}