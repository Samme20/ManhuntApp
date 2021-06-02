import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity } from 'react-native';
import styles from "../stylesheets/Styles";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export const HuntedButton = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.huntedButton}onPress={() => navigation.navigate('Test')}>
            <Text style={styles.huntedButtonText}>Hunted</Text>
        </TouchableOpacity>

    )
}