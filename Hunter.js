import { Text, View, Button, Linking, TextInput, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import React, { useState } from 'react';

export const HunterButton = function (props){
    console.log(props);
    return (
        <TouchableOpacity style={styles.hunterButton}>
            <Text style={styles.hunterButtonText}>Hunter</Text>
        </TouchableOpacity>
    )
}