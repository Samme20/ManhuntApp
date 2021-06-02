//Import React
import React, { Component } from 'react';
import { View, Text, Button, Permission, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
//Import Files
import styles from "../assets/stylesheets/Styles";

class GeoLocator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map} />
            </View>
        );
    }
}


export default GeoLocator;


