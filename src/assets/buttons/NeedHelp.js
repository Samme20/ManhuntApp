//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
//Import Files
import styles from "../stylesheets/Styles-dark";

const NeedHelp = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.help}>Need Help?</Text>
        </TouchableOpacity>
    )
}

export default NeedHelp;