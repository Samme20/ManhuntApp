//Import React
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
//Import Files
import stylesd from "../stylesheets/Styles-dark";
import stylesl from "../stylesheets/Styles-light";

export const HuntedButton = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.7} style={stylesd.huntedButton} onPress={() => navigation.navigate('MapTest')}>
            <Text style={stylesd.huntedButtonText}>MapTest</Text>
        </TouchableOpacity>

    )
}