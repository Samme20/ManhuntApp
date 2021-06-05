//Import React
import React, { Component } from 'react';
import { View, Text, Button, Permission, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
//Import Files
import stylesd from "../assets/stylesheets/Styles-darkold";
import stylesl from "../assets/stylesheets/Styles-lightold";

class GeoLocator extends Component { //Varför har denna samma som GeoLocator när den hete MapAPI=???
    render() {
        return (
            <View style={stylesd.contentmap}>
                <MapView style={stylesd.map} />
            </View>
        );
    }
}

export default GeoLocator;


