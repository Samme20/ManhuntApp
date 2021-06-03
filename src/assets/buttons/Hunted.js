//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
//Import Files
import styles from "../stylesheets/Styles-dark";

const HuntedButton = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.huntedButton} onPress={() => navigation.navigate('MapTest')}>
            <Text style={styles.hunted}>Hunted</Text>
        </TouchableOpacity>
    )
}

export default HuntedButton;
