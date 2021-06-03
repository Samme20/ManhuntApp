//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
//Import Files
import styles from "../stylesheets/Styles-dark";

const BackButton = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Main')}>
            <Icon name="chevron-thin-left" style={styles.backIcon}></Icon>
        </TouchableOpacity>
    )
}

export default BackButton;
