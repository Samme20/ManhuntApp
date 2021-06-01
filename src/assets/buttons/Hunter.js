import { Text, View, Button, Linking, TextInput, TouchableOpacity } from 'react-native';
import styles from "../stylesheets/Styles";
import React, { useState } from 'react';

export const HunterButton = function () {
    return (
        <TouchableOpacity style={styles.hunterButton}>
            <Text style={styles.hunterButtonText}>Hunter</Text>
        </TouchableOpacity>
    )
}