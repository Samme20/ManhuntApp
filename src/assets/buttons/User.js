//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//Import Files
import styles from "../stylesheets/Styles-dark";

const Settingsbtn = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon
                name="user-circle"
                style={styles.user}
            ></FontAwesomeIcon>
        </TouchableOpacity>
    )
}

export default Settingsbtn;