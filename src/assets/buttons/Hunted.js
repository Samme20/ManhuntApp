import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, View, Button, Linking, TextInput, Touchable, TouchableOpacity } from 'react-native';
import stylesd from "../stylesheets/Styles-dark";
import stylesl from "../stylesheets/Styles-light";



export const HuntedButton = function () {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={stylesd.huntedButton}onPress={() => navigation.navigate('Test')}>
            <Text style={stylesd.huntedButtonText}>Hunted</Text>
        </TouchableOpacity>

    )
}