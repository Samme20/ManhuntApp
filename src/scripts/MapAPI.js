//Import React
import React, { Component } from 'react';
import { View, Text, Button, Permission, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
//Import Files
import stylesd from "../assets/stylesheets/Styles-dark";
import stylesl from "../assets/stylesheets/Styles-light";

class GeoLocator extends Component {
    render() {
        return (
            <View style={stylesd.contentmap}>
                <MapView style={stylesd.map} />
            </View>
        );
    }
}

export default GeoLocator;


