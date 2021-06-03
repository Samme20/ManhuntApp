//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, TouchableOpacity } from 'react-native';
//Import Files
import stylesd from "../stylesheets/Styles-dark";
import stylesl from "../stylesheets/Styles-light";
import settingsimage from "../images/settingsicon-dark.png";
import Icon from "react-native-vector-icons/Entypo";
export const Settingsbackbtn = function () {
       
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Home')}>
             <Icon name="chevron-left" style={stylesd.backicon}></Icon>
        </TouchableOpacity>
    )
}