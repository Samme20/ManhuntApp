import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import React, { useState } from 'react';

export const HuntedButton = function () {
    return (
        <TouchableOpacity style={styles.huntedButton}>
            <Text style={styles.huntedButtonText}>Hunted</Text>
        </TouchableOpacity>
    )
}