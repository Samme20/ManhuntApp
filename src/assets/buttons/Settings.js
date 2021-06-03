//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, TouchableOpacity } from 'react-native';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
//Import Files
import styles from "../stylesheets/Styles-dark";

const Settingsbtn = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Settings')}>
            <IoniconsIcon
                name="md-settings"
                style={styles.settings}
            ></IoniconsIcon>
        </TouchableOpacity>
    )
}

export default Settingsbtn;